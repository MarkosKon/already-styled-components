const withScrollTo = ({ sectionId, e, offset, callback }) => {
  if (document) {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
    if (callback) callback()
  }
}

const withScrollIntoView = ({ sectionId, e, callback }) => {
  e.preventDefault()
  document.querySelector(`#${sectionId}`).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  if (callback) callback()
}

export { withScrollTo, withScrollIntoView }
