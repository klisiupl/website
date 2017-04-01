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
