<script>
 document.querySelectorAll('#text-block-1 a').forEach(a => {
  const words = a.textContent.trim().split(/\s+/);
  a.textContent = ''; 

  words.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word;
    span.setAttribute('data-label', word);
    a.appendChild(span);
    if (word !== words[words.length - 1]) {
      a.appendChild(document.createTextNode(' '));
    }
  });
	 
});	
	
	
	
function checkHeader(){
	const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', function(){
	checkHeader();
})
	checkHeader();
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<script>
	
gsap.registerPlugin(ScrollTrigger);
const grid = document.querySelector('#animated-pics');
const gridImages = grid.querySelectorAll('.gallery-icon'); 

// Helper function to determine if the element is on the left or right side of the viewport
const isLeftSide = (index) => {
  return index % 2 === 0;
};	
	
	// Function to animate the grid items as they scroll into and out of view
const animateScrollGrid = () => {
  gridImages.forEach((imageWrap, index) => {
    const imgEl = imageWrap.querySelector('img'); // Select the image element inside the grid item
    const leftSide = isLeftSide(index); // Check if the element is on the left side of the viewport

    // Create a GSAP timeline with ScrollTrigger for each grid item
    gsap.timeline({
      scrollTrigger: {
        trigger: imageWrap,               // Trigger the animation when this element enters the viewport
        start: 'top bottom+=10%',         // Start when the top of the element is 10% past the bottom of the viewport
        end: 'bottom top-=25%',           // End when the bottom of the element is 25% past the top of the viewport
        scrub: true,                      // Smooth scrub animation
      }
    })
    .from(imageWrap, {
      // Initial state when the element enters the viewport
      startAt: { filter: 'blur(0px) brightness(100%) contrast(100%)' }, // Ensure no blur or brightness adjustments at the start
      z: 300,                             // Translate the item 300px closer on the Z-axis
      rotateX: 70,                        // Start with a rotation of 70 degrees on the X-axis
      rotateZ: leftSide ? 5 : -5,         // Rotate 5 degrees if on the left, -5 degrees if on the right
      xPercent: leftSide ? -40 : 40,      // Horizontal translation: -40% if on the left, 40% if on the right
      skewX: leftSide ? -20 : 20,         // Skew the element on the X-axis
      yPercent: 100,                      // Start with the element below the viewport
      filter: 'blur(7px) brightness(0%) contrast(400%)', // Start with a blur, low brightness, and high contrast
      ease: 'sine',                       
    })
    .to(imageWrap, {
      // Animation when the element exits the viewport
      z: 300,                             // Move back to original Z-translation (300px)
      rotateX: -50,                       // Rotate -50 degrees on the X-axis
      rotateZ: leftSide ? -1 : 1,         // Slightly rotate on the Z-axis (-1 or 1 depending on side)
      xPercent: leftSide ? -20 : 20,      // Move slightly left (-20%) or right (20%) on exit
      skewX: leftSide ? 10 : -10,         // Skew slightly on exit
      filter: 'blur(4px) brightness(0%) contrast(500%)', // Add blur and reduce brightness on exit
      ease: 'sine.in',                    
    })
    .from(imgEl, {
      // Additional animation on the image itself (scale along the Y-axis)
      scaleY: 1.8,                        // Scale Y-axis by 1.8
      ease: 'sine',                       
    }, 0)
    .to(imgEl, {
      scaleY: 1.8,                        // Return to normal scaling
      ease: 'sine.in'                     
    }, '>');
  });
};
	

window.addEventListener('load', function(){
	animateScrollGrid();
})
	

function showArts(id){
	if ( id !== '#' && document.querySelector(id)){
		document.querySelector(id).classList.add('hovers-block--active');
		/*
		if (document.querySelector(id).querySelector('video')){
			console.log('yes')
			document.querySelector(id).querySelector('video').play();
		}
		*/
	}
}	
function hideArts(id){
	if ( id !== '#' && document.querySelector(id)){
		document.querySelector(id).classList.remove('hovers-block--active');
	}
}	
 document.querySelectorAll('#text-block-1 a').forEach(a => { 
  a.addEventListener('mouseover', event => {
			showArts(a.getAttribute('href'));
	});
	a.addEventListener('mouseout', event => {
			hideArts(a.getAttribute('href'));
	});
});	
	
</script>