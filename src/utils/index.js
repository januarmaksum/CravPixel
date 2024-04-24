const scrollToElementById = (elementId, options = { duration: 0.5, easing: (t) => t }) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement && window.lenis) {
    const top = targetElement.offsetTop;
    window.lenis.scrollTo(top, options);
  }
};

export default scrollToElementById;