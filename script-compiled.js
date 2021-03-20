'use strict'

var scrollTop = function scrollTop() {
  return window.scrollY || window.pageYOffset
}

var showShapes = matchMedia('(min-width: 900px)').matches

var aTl = new TimelineMax()
aTl.repeat(-1)

// aTl.from('#a-animation', 1, {
//   opacity: 0
// })

aTl.fromTo('#a-klistof', 1, { x: -50 }, { x: 100 }, '-=.5')
aTl.fromTo(['#a-klistyna', '#a-cart'], 1, { x: 50 }, { x: -100 }, '-=1')

aTl.to('#a-cart', 0.3, {
  transformOrigin: '180 430',
  rotation: -20,
})
aTl.fromTo(
  '#a-boxes g:nth-of-type(4)',
  0.5,
  {
    x: 50,
    y: 13,
  },
  {
    x: 0,
    y: 3,
  },
  '-=.3'
)
aTl.fromTo(
  '#a-boxes g:nth-of-type(3)',
  0.5,
  {
    x: 12,
    y: 4,
  },
  {
    x: -40,
    y: -6,
  },
  '-=.5'
)
aTl.fromTo(
  '#a-boxes g:nth-of-type(2)',
  0.5,
  {
    x: 30,
    y: 7,
  },
  {
    x: 10,
    y: 3,
  },
  '-=.5'
)

aTl.to(
  '#a-klistyna__arm',
  0.7,
  {
    transformOrigin: 'right top',
    rotation: -25,
  },
  '-=.5'
)
aTl.to(
  '#a-klistyna__forearm',
  0.7,
  {
    transformOrigin: '98 19',
    rotation: -20,
  },
  '-=.5'
)

aTl.fromTo(
  '#a-btn',
  0.8,
  {
    transformOrigin: 'right',
    y: 400,
    x: 70,
    scaleX: 0.3,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    scaleX: 1,
    opacity: 1,
    ease: Back.easeOut,
  }
)

aTl.to(
  '#a-klistof__head',
  0.5,
  {
    transformOrigin: '42 142',
    rotation: -25,
  },
  '-=.5'
)
aTl.to('#a-klistof__head', 0.5, {
  delay: 0.5,
  transformOrigin: '42 142',
  rotation: 12,
})
aTl.to(
  '#a-klistof__arm',
  0.5,
  {
    transformOrigin: '25 12',
    rotation: -18,
  },
  '-=.25'
)
aTl.to(
  '#a-klistof__forearm',
  0.5,
  {
    transformOrigin: '0 4',
    rotation: -40,
  },
  '-=.5'
)

aTl.staggerFrom(
  '#a-tel path',
  0.5,
  {
    transformOrigin: 'center',
    scale: 0.3,
    opacity: 0,
  },
  0.2
)

aTl.to('#a-btn', 0.3, {
  transformOrigin: 'center',
  scale: 1.1,
  ease: Back.easeOut,
})
aTl.to('#a-btn', 0.3, {
  transformOrigin: 'center',
  scale: 1,
  ease: Back.easeOut,
})

aTl.to('#a-cart', 1, {
  opacity: 0,
})

aTl.to('#a-klistof__head', 0.5, {
  rotation: 0,
})
aTl.to(
  '#a-klistof__arm',
  0.5,
  {
    rotation: 0,
  },
  '-=.5'
)
aTl.to(
  '#a-klistof__forearm',
  0.5,
  {
    rotation: 0,
  },
  '-=.5'
)

aTl.to('#a-animation', 1, {
  delay: 1,
  opacity: 0,
})

var bTl = new TimelineMax()
bTl.repeat(-1)

bTl.from('#b-animation', 1, {
  opacity: 0,
})

bTl.from('#b-tel', 1, {
  transformOrigin: 'center top',
  scale: 0.7,
  ease: Back.easeOut,
})

bTl.to('#b-website', 0.8, {
  y: '-=300',
  ease: Power2.easeOut,
})
bTl.to('#b-website', 0.8, {
  y: '-=300',
  ease: Power2.easeOut,
})
bTl.to('#b-website', 0.8, {
  y: '-=300',
  ease: Power2.easeOut,
})

TweenMax.set('#b-star', {
  opacity: 0,
})
bTl.to('#b-star', 0, {
  opacity: 1,
})
bTl.to('#b-star', 2.2, {
  morphSVG: '#b-car-shape',
  ease: Power4.easeInOut,
})
bTl.from('#b-car', 1, {
  opacity: 0,
})
bTl.to('#b-star', 0, {
  opacity: 0,
})
bTl.to('#b-car', 1.2, {
  transformOrigin: 'center bottom',
  x: 800,
  scale: 0.9,
  ease: Power2.easeIn,
})
bTl.to(
  '.b-car__wheel',
  1.2,
  {
    transformOrigin: 'center',
    rotation: 360,
    ease: Power2.easeIn,
  },
  '-=1.2'
)
bTl.to(
  '#b-car',
  0.7,
  {
    opacity: 0,
    ease: Power2.easeIn,
  },
  '-=.7'
)

bTl.to('#b-animation', 1, {
  opacity: 0,
})

var cTl = new TimelineMax()
cTl.repeat(-1)

cTl.from('#c-car', 1, {
  opacity: 0,
})
cTl.from(
  '#c-car',
  4,
  {
    transformOrigin: 'left bottom',
    x: -1600,
    scale: 0.9,
    ease: Back.easeOut,
  },
  '-=1'
)
cTl.from(
  '.c-car__wheel',
  4,
  {
    transformOrigin: 'center',
    rotation: -1000,
    ease: Back.easeOut,
  },
  '-=4'
)

TweenMax.set('#c-cart', {
  transformOrigin: '48 388',
  rotation: -13,
})
cTl.from(
  ['#c-klistof', '#c-cart'],
  1,
  {
    x: -200,
    opacity: 0,
  },
  '-=3'
)

cTl.to('#c-klistof', 1, {
  x: 150,
})
cTl.to(
  '#c-klistof__arm',
  1,
  {
    rotation: -6,
  },
  '-=1'
)
cTl.to(
  '#c-klistof__forearm',
  1,
  {
    transformOrigin: '0 21',
    rotation: -4,
  },
  '-=1'
)
cTl.to(
  '#c-cart',
  1,
  {
    x: 120,
    rotation: 0,
  },
  '-=1'
)

cTl.to(['#c-cart__handle', '#c-boxes'], 1, {
  y: -110,
})
cTl.to(['#c-cart__handle', '#c-boxes'], 1, {
  x: 100,
})
cTl.to(
  '#c-cart__handle',
  1,
  {
    transformOrigin: 'right',
    scaleX: 1.7,
  },
  '-=1'
)

cTl.to(
  ['#c-klistof', '#c-cart'],
  1,
  {
    x: '+=120',
  },
  '-=1'
)

cTl.to('#c-boxes', 0, {
  opacity: 0,
})
cTl.to('#c-cart__handle', 1, {
  transformOrigin: 'right',
  x: 0,
  scaleX: 1,
})
cTl.to(
  ['#c-klistof', '#c-cart'],
  1,
  {
    x: '-=120',
  },
  '-=1'
)
cTl.to('#c-cart__handle', 1, {
  y: 0,
})

cTl.to('#c-car', 0.6, {
  transformOrigin: 'left bottom',
  x: 800,
  scale: 0.9,
  opacity: 0,
  ease: Power2.easeIn,
})
cTl.to(
  '.c-car__wheel',
  0.6,
  {
    rotation: 600,
    ease: Power2.easeIn,
  },
  '-=.6'
)

cTl.to('#c-cart', 0.5, {
  rotation: 11,
})
cTl.to(
  '#c-klistof__arm',
  0.5,
  {
    rotation: 19,
  },
  '-=.5'
)
cTl.to(
  '#c-klistof__forearm',
  0.5,
  {
    transformOrigin: '10 21',
    rotation: 23,
  },
  '-=.5'
)

cTl.to(
  ['#c-klistof', '#c-cart'],
  1,
  {
    opacity: 0,
  },
  '+=1'
)

if (showShapes) {
  // Resize image
  var img = document.querySelector('#img')

  var resizeImg = function resizeImg() {
    var baseW = 1366
    var newW = innerWidth

    var baseX = 377
    img.setAttribute(
      'x',
      baseX - (Math.max(newW, baseW) - Math.min(newW, baseW)) / 2
    )

    if (newW < baseW) return

    var imgW = img.getAttribute('width')
    var imgH = img.getAttribute('height')
    var imgRatio = imgH / imgW
    img.setAttribute('width', newW)
    img.setAttribute('height', newW * imgRatio)
  }

  resizeImg()
  window.addEventListener('resize', resizeImg)

  // Animation

  aTl.pause()

  var red01 = document.querySelectorAll('.red01')
  var red02 = document.querySelector('#red02')
  var contactCard = document.querySelector('.js-contact-card')

  var tl = new TimelineLite({
    paused: true,
  })

  tl.to(red01, 0.05, { fill: '#DA251B' }, 0)

  tl.to(
    red01,
    1.5,
    {
      attr: {
        points: '3389.4,-478 1743,-478 1069.1,77.5 -1074.5,305.9 -1074.5,-478',
      },
    },
    0
  )

  tl.to(img, 0.7, { opacity: 0 }, 0)

  tl.to(
    red02,
    1.5,
    {
      attr: { points: '1743,-478 1536.3,-99.4 -1074.5,465 -1074.5,-478' },
      opacity: 0.86,
      onStart: function onStart() {
        aTl.pause()
        aTl.time(0)
      },
    },
    0
  )

  tl.from(contactCard, 1.5, {
    scale: 0.75,
    opacity: 0,
    onComplete: function onComplete() {
      aTl.play()
    },
  })

  // Handle scroll

  var site = document.querySelector('.js-site')
  // const scrollHandlerAttached = true;
  var handleScroll = function handleScroll() {
    var val = Math.min(scrollTop() / 300, 1)

    tl.progress(val)

    if (val >= 1) {
      site.style.position = 'relative'
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
  var btn = document.querySelector('.js-menu-btn')
  var menu = document.querySelector('.js-menu')

  btn.addEventListener('click', function () {
    this.classList.toggle('is-open')
  })

  document.addEventListener('click', function (e) {
    if (!btn.isEqualNode(e.target) && !btn.contains(e.target)) {
      btn.classList.remove('is-open')
    }
  })
}

var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function parseThumbnailElements(el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item

    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i] // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue
      }

      linkEl = figureEl.children[0] // <a> element

      size = linkEl.getAttribute('data-size').split('x')

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      }

      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src')
      }

      item.el = figureEl // save link to element for getThumbBoundsFn
      items.push(item)
    }

    return items
  }

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn))
  }

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function onThumbnailsClick(e) {
    e = e || window.event
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)

    var eTarget = e.target || e.srcElement

    // find root element of slide
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === 'FIGURE'
    })

    if (!clickedListItem) {
      return
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex
        break
      }
      nodeIndex++
    }

    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery)
    }
    return false
  }

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function photoswipeParseHash() {
    var hash = window.location.hash.substring(1),
      params = {}

    if (hash.length < 5) {
      return params
    }

    var vars = hash.split('&')
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue
      }
      var pair = vars[i].split('=')
      if (pair.length < 2) {
        continue
      }
      params[pair[0]] = pair[1]
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10)
    }

    return params
  }

  var openPhotoSwipe = function openPhotoSwipe(
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
      gallery,
      options,
      items

    items = parseThumbnailElements(galleryElement)

    // define options (if needed)
    options = {
      bgOpacity: 0.95,

      history: false,

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function getThumbBoundsFn(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0],
          // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect()

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
      },
    }

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j
            break
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1
      }
    } else {
      options.index = parseInt(index, 10)
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
    gallery.init()
  }

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector)

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1)
    galleryElements[i].onclick = onThumbnailsClick
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash()
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
  }
}

// execute above function
initPhotoSwipeFromDOM('.js-gallery')

var scrollToSection = function scrollToSection(href) {
  var margin =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
  var dontChangeUrl =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
  var duration =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600

  var scrollToTop = href === '#'
  var shift =
    matchMedia('(min-width: 900px)').matches && scrollTop() < 300 ? 300 : 0
  var position = 0

  if (!dontChangeUrl) {
    var path = scrollToTop
      ? (window.location.pathname || '/') + window.location.search
      : href

    history.pushState(null, null, path)
  }

  if (!scrollToTop) {
    var section = document.querySelector(href)

    if (!section) return

    position =
      section.getBoundingClientRect().top + scrollTop() - margin + shift
  }

  var start = Date.now()
  var scroll = function scroll() {
    var step = Math.min(1, (Date.now() - start) / duration)
    var distance = position - scrollTop()

    window.scrollBy(0, Math.round(step * distance))
    step !== 1 && requestAnimationFrame(scroll)
  }
  requestAnimationFrame(scroll)
}
;[].forEach.call(
  document.querySelectorAll('.js-scroll-to-section, .js-scroll-to-section a'),
  function (link) {
    link.addEventListener('click', function (e) {
      document.querySelectorAll(
        '.js-scroll-to-section, .js-scroll-to-section a'
      )
      e.preventDefault()
      scrollToSection(this.getAttribute('href'), 40, false, 800)
    })
  }
)

// Modal

{
  var modal = document.querySelector('.js-modal')
  ;[].forEach.call(
    document.querySelectorAll('.js-open-modal'),
    function (link) {
      link.addEventListener('click', function (e) {
        modal.classList.add('is-open')
      })
    }
  )
  ;[].forEach.call(
    document.querySelectorAll('.js-close-modal'),
    function (link) {
      link.addEventListener('click', function (e) {
        modal.classList.remove('is-open')
      })
    }
  )
}
