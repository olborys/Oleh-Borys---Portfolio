//Carousel Testimonial
let owl =$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    mouseDrag:false,
 
})
let mainBlock = document.querySelector('.testimonial-main-img')
const listItem = document.querySelectorAll('.owl-carousel_li')
const mainText = document.querySelectorAll('.testimonial-tab-content') 

$('.preview-right').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.preview-left').click(function() {
   
    owl.trigger('prev.owl.carousel', [300]);
})
owl.on('changed.owl.carousel', function(event) {
    
    mainBlock.setAttribute('src',listItem[event.item.index].querySelector('img').src)
    mainText.forEach(el=>{
        el.classList.remove('active-tab')
        
    });
    
    let value = (event.item.index-3>=0?event.item.index-3:3)
    mainText[value].classList.add('active-tab')
})

Array.from(listItem).forEach((el,index)=>el.addEventListener('click',
()=>{
    mainBlock.setAttribute('src',el.querySelector('img').src)
    mainText.forEach(el=>{
        el.classList.remove('active-tab')
        
    });
    el.data
    mainText[el.dataset.target].classList.add('active-tab')
    
}))


// Carousel up
const btn = document.querySelectorAll(".btn")

$(document).on('mousedown', '.owl-carousel_li', function() {
    const li = document.querySelectorAll('.owl-carousel_li');
    li.forEach(el=>{
        el.classList.remove('move');
    })
    $(this).addClass('move');
  });

  $(document).on('click', '.btn', function() {
    const li = document.querySelectorAll('.owl-carousel_li');
    li.forEach(el=>{
        el.classList.remove('move');
    })
  });
  





