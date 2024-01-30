const circle = document.querySelector(".circle");
const text = document.querySelector(".text");

function circleMove(){
   let xValues;
   let yValues;

    window.addEventListener("mousemove" , (e)=>{
          xValues = e.pageX
          yValues = e.pageY;

          setTimeout(function(){
              circle.style.top = yValues + 'px' ;
              circle.style.left = xValues + 'px';
          }, 1000)
    })
}
circleMove();

// function textAnimate(){
  
//     let typeSplit = new SplitType('.text', {
//       types: 'lines, words, chars',
//       tagName: 'span'
//     })
    
//     gsap.from('typeSplit .line', {
//       y: '100%',
//       opacity: 1,
//       duration: 0.5,
//       ease: 'power1.out',
//       stagger: 0.1,
      
//     })
    
// }
// textAnimate();


gsap.to('.fader', {
    scrollTrigger: {
        trigger: ".image-div",
        markers: true,
        start:'top , 5% ' ,
        toggleActions: 'play pause resume reverse',
    },
    opacity: 0,
    y: -100,
    stagger: .3,
    duration: 2
})