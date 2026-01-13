import gsap from "gsap"
function Chocobar(timeLine) {
    timeLine.fromTo(
      ".bar-img1",
      {
        x: -350,
        y : 0,
        duration : 2,
        opacity: 0.5,
        rotate: 0,
      },
      {
        x : 0,
        y: 0,
        duration: 2,
        opacity: 1,
        onComplete : () => {
            gsap.to( ".bar-img1" , {
                x: "73%",
                y : "16%",
                rotate: 20,
                onComplete : () => {
                  gsap.fromTo( ".splash-right", {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                    duration: 1,
                    opacity: 0,
                  },
                  {
                    height: 420,
                    width: 370,
                    x : "55%",
                    y: "-1%",
                    duration : 1,
                    opacity: 1,
                    // onComplete: () => {
                    // }
                  } )
                  gsap.fromTo( ".choco-chip1",{
                    top: "50%",
                    right: "50%",
                    opacity: 0,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 0
                  }, 
                  {
                    top: "20%",
                    right: "20%",
                    opacity: 1,
                    duration: 1,
                    // scale: 0.2,
                    rotate: -90
                  } )
                  gsap.fromTo( ".choco-chip2",
                    {
                    right: "50%",
                    bottom: "50%",
                    opacity: 0,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 0
                  },
                    {
                    right: "9%",
                    bottom: "30%",
                    opacity: 1,
                    duration: 1,
                    // scale: 0.2,
                    rotate: -120
                  } )
                  gsap.fromTo( ".choco-chip3",
                    {
                    bottom: "50%",
                    right: "50%",
                    opacity: 0,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 0
                  },
                    {
                    bottom: "10%",
                    right: "25%",
                    opacity: 1,
                    duration: 1,
                    // scale: 0.2,
                  } )
                }
            } )

        }
        
      }
    );
    gsap.fromTo(
      ".bar-img2",
      {
        x: 350,
        y : 0,
        duration : 2,
        opacity: 0.5,
        rotate: 0,
      },
      {
        x: 0,
        y: 0,
        duration: 2,
        opacity: 1,
        onComplete : () => {
            gsap.to( ".bar-img2" , {
                x: "-73%",
                y : "16%",
                rotate: -20,
                onComplete : () => {
                  gsap.fromTo( ".splash-left", {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                    duration: 1,
                    opacity: 0,
                  },
                  {
                    height: 290,
                    width: 289,
                    x : "-75%",
                    y : "-35%",
                    duration : 1,
                    opacity: 1,
                    // onComplete: () => {
                    // }
                  } )
                  gsap.fromTo( ".choco-chip4", 
                    {
                    left: "50%",
                    top: "50%",
                    opacity: 0,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 0
                  },
                    {
                    left: "10%",
                    top: "33%",
                    opacity: 1,
                    duration: 1,
                    // scale: 0.2,
                  } )
                  gsap.fromTo( ".choco-chip5", 
                    {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 0
                  },
                    {
                    left: "20%",
                    top: "75%",
                    opacity: 1,
                    duration: 1,
                    // scale: 0.2,
                    rotate: 120,
                    onComplete: () => {
                      gsap.fromTo( ".btn", {
                        y: 0,
                        duration: 1,
                        repeat: Infinity,
                      },
                      {
                        y: 7,
                        duration: 1,
                        repeat: Infinity,
                        yoyo: true
                      } )
                    }
                  } )
                }
            } )

        }
      }
    );
    gsap.fromTo(
      ".bar-img3",
      {
        y :  130,
        duration : 2,
        opacity: 0.5,
      },
      {
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );
}

export default Chocobar
