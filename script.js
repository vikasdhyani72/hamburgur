document.addEventListener('DOMContentLoaded', function () {
  // Disable scroll restoration to prevent browser from preserving scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  // Enforce scroll to top after a short delay
  setTimeout(function () {
    window.scrollTo(0, 0)
  }, 50) // 50 milliseconds delay

  // Hamburger menu functionality
  const hamburgerIcon = document.querySelector('.hamburger-menu-container')
  const headerContent = document.querySelector('.header-content')
  const closeIcon = document.querySelector('.close-icon')
  const nav = document.querySelector('nav')

  hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
  })

  nav.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
  })

  window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
  })

  // Go to Top functionality
  const goToTopLink = document.querySelector('.go-to-top a') // Select the anchor tag directly
  goToTopLink.addEventListener('click', function (e) {
    e.preventDefault() // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    })
  })
})
