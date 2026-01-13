import React from 'react'
import gsap from 'gsap'
function Door() {
   const menuBox1 = document.querySelector('.menuBox1');
   const menuBox2 = document.querySelector('.menuBox2');
   const menuBox3 = document.querySelector('.menuBox3');

    const animateDoorsOpen = (target1, target2) => {
      gsap.to(target1, {
        left: "-28%",
        rotateY: -90,
        duration: 1,
        ease: "power2.inOut"
      });
      gsap.to(target2, {
        right: "-28%",
        rotateY: 90,
        duration: 1,
        ease: "power2.inOut"
      });
    };

    const animateDoorsClose = (target1, target2) => {
      gsap.to(target1, {
        left: 0,
        rotateY: 0,
        duration: 1,
        ease: "power2.inOut"
      });
      gsap.to(target2, {
        right: "-3%",
        rotateY: 0,
        duration: 1,
        ease: "power2.inOut"
      });
    };

    if (menuBox1) {
      menuBox1.addEventListener('mouseenter', () => animateDoorsOpen(".doorleft1", ".doorright1"));
      menuBox1.addEventListener('mouseleave', () => animateDoorsClose(".doorleft1", ".doorright1"));
    }
    if (menuBox2) {
      menuBox2.addEventListener('mouseenter', () => animateDoorsOpen(".doorleft2", ".doorright2"));
      menuBox2.addEventListener('mouseleave', () => animateDoorsClose(".doorleft2", ".doorright2"));
    }
    if (menuBox3) {
      menuBox3.addEventListener('mouseenter', () => animateDoorsOpen(".doorleft3", ".doorright3"));
      menuBox3.addEventListener('mouseleave', () => animateDoorsClose(".doorleft3", ".doorright3"));
    }
}

export default Door
