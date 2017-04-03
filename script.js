const showShapes = matchMedia('(min-width: 900px)').matches

if (showShapes) {
  // Resize image
  const img = document.querySelector('#img')

  const resizeImg = () => {
    const baseW = 1366
    const newW = innerWidth

    const baseX = 377
    img.setAttribute('x', baseX - (Math.max(newW, baseW) - Math.min(newW, baseW)) / 2)

    if (newW < baseW) return

    const imgW = img.getAttribute('width')
    const imgH = img.getAttribute('height')
    const imgRatio = imgH / imgW
    img.setAttribute('width', newW)
    img.setAttribute('height', newW * imgRatio)
  }

  resizeImg()
  window.addEventListener('resize', resizeImg)


  // Animation
  
  const red01 = document.querySelectorAll('.red01')
  const red02 = document.querySelector('#red02')
  const contactItems = document.querySelectorAll('.js-contact-card .c-contact-item')

  const tl = new TimelineLite({ paused: true })

  tl.to(red01, .05, { fill: '#DA251B' }, 0)

  tl.to(red01, 1.5, {
    attr: { points: "3389.4,-478 1743,-478 1069.1,77.5 -1074.5,305.9 -1074.5,-478" }
  }, 0)

  tl.to(img, .7, { opacity: 0 }, 0)

  tl.to(red02, 1.5, {
    attr: { points: "1743,-478 1536.3,-99.4 -1074.5,465 -1074.5,-478" },
    opacity: .86
  }, 0)

  tl.staggerFrom(contactItems, 1.5, {
    y: 100,
    opacity: 0
  }, .5, 0)


  // Handle scroll

  const site = document.querySelector('.js-site')
  // const scrollHandlerAttached = true;
  const handleScroll = () => {
    const val = Math.min(scrollY / 300, 1)

    tl.progress(val)

    if (val >= 1) {
      site.style.position = `relative`
      site.style.top = '300px'
    } else {
      site.style.position = ''
      site.style.top = ''
    }
  }
  window.addEventListener('scroll', handleScroll)

  // window.addEventListener('resize', () => {
  //   if (showShapes) {
  //     !scrollHandlerAttached && window.addEventListener('scroll', handleScroll)
  //   } else {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // })
}


// Hamburger btn

{
  const btn = document.querySelector('.js-menu-btn')
  const menu = document.querySelector('.js-menu')

  btn.addEventListener('click', function () {
      this.classList.toggle('is-open')
  })

  document.addEventListener('click', function (e) {
      if (!btn.isEqualNode(e.target) && !btn.contains(e.target)) {
          btn.classList.remove('is-open')
      }
  })
}

const initPhotoSwipeFromDOM = function (gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            bgOpacity: .95,

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
}

// execute above function
initPhotoSwipeFromDOM('.js-gallery')

const scrollToSection = (
  href,
  margin = 0,
  dontChangeUrl = false,
  duration = 600
) => {
  const scrollToTop = href === '#'
  const shift = scrollY < 300 ? 300 : 0
  let position = 0

  if (!dontChangeUrl) {
    let path = scrollToTop
      ? (window.location.pathname || '/') + window.location.search
      : href

    history.pushState(null, null, path)
  }

  if (!scrollToTop) {
    let section = document.querySelector(href)

    if (!section) return

    position = section.getBoundingClientRect().top + scrollY - margin + shift
  }

  const start = Date.now()
  const scroll = () => {
    let step = Math.min(1, (Date.now() - start) / duration)
    let distance = position - scrollY

    window.scrollBy(0, Math.round(step * distance))

    ;(step !== 1) && requestAnimationFrame(scroll)
  }
  requestAnimationFrame(scroll)
}

;[].forEach.call(
  document.querySelectorAll('.js-scroll-to-section, .js-scroll-to-section a'),
  link => {
    link.addEventListener('click', function (e) {
      document.querySelectorAll('.js-scroll-to-section, .js-scroll-to-section a')
      e.preventDefault()
      scrollToSection(this.getAttribute('href'), 40, false, 800)
    })
  }
)

function initMap() {
  const bp = matchMedia('(min-width: 900px)').matches
  const markerPosition = { lat: 50.66939, lng: 17.9550803 }
  const shiftedPosition = { lat: 50.668404, lng: 17.9534495 }

  const map = new google.maps.Map(document.querySelector('.js-map'), {
    center: bp ? shiftedPosition : markerPosition,
    zoom: 16,
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
  })

  new google.maps.Marker({
    position: markerPosition,
    map
  });
}
