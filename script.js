// Sliders interaction.
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
 
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; /* All images will be hidden */
    }
    imgs[n].style.display = 'block'; /* When n=0, it will select the 1st image, then n=1, then soo on..*/
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length-1){
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

// Scrolling through mouse 
const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(event)=>{
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    })  
}

