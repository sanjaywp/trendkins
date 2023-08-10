
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  
  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
document.addEventListener('DOMContentLoaded', function() {
  const barsIcon = document.querySelector(".fa-bars-staggered");
  const cancelButton = document.querySelector(".fa-xmark");
  const tableOfContent = document.querySelector("#tableofcontent");
  const tabletopc = document.querySelector(".table-top-c");

   tabletopc.addEventListener('click', () => {
    cancelButton.style.opacity = 1
    tableOfContent.style.transform = 'translateX(0rem)';
    tabletopc.style.width = '100%';
    barsIcon.style.padding='0'
  })
  cancelButton.addEventListener('click', () => {
    tableOfContent.style.transform = 'translateX(-35rem)';
    cancelButton.style.opacity = 0;
    tabletopc.style.width = 'fit-content';
    barsIcon.style.padding='8px';
  })
});

})()