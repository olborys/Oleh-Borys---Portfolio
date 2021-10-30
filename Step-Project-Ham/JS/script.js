"use strict"

//Slow Scroll Anchor
const allAnchor = document.querySelectorAll('.anch')
function scrollToAnchor(aid){
    let aTag = $("a[name='"+ aid.id +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},1000);
}
 allAnchor.forEach(el=> el.addEventListener('click',()=>scrollToAnchor(el)));


 // Scroll button up
(function(jq) {
    jq.autoScroll = function(ops) {
      ops = ops || {};
      ops.styleClass = ops.styleClass || 'button-up';
      var t = jq('<div class="'+ops.styleClass+'"></div>'),
     d = jq(ops.target || document);
     jq(ops.container || 'body').append(t);
   
    t.css({
      opacity: 0,
      position: 'absolute',
      top: 40,
      right: -8
   }).on('click', function() {
       jq('html,body').animate({
          scrollTop: 0
     }, ops.scrollDuration || 1000);
   });
   
    d.scroll(function() {
      var sv = d.scrollTop();
      if (sv < 920) {
        t.clearQueue().fadeOut(ops.hideDuration || 200);
       return;
    }
   
    t.css('display', '').clearQueue().animate({
     top: sv,
     opacity: 0.8
     }, ops.showDuration || 500);
    });
    };
  })(jQuery);
   
  $(document).ready(function(){
   $.autoScroll({
   scrollDuration: 600, 
   showDuration: 600, 
   hideDuration: 300
   });
  });   


// Our Services Tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};
tab();


// Our Work Tabs
const filterContainer = document.querySelector(".work-list");

 filterContainer.addEventListener("click", (event) =>{
    const galleryItems = document.querySelectorAll(".work-item");
   if(event.target.classList.contains("work-menu")){
      filterContainer.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      const filterValue = event.target.getAttribute("data-filter");
      galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
         item.classList.remove("work-hide");
          item.classList.add("work-show");
       }
       else{
         item.classList.remove("work-show");
         item.classList.add("work-hide");
       }
      });
   }
 });


//  Load Our work additional
let loadButton = document.getElementById("load");
let ul = document.querySelector(".work-content");
const arrElemst =[
    {src:'./IMG/work-img-13.jpeg',text:'Graphic Design',class:'graphic'},{src:'./IMG/work-img-14.jpeg',text:'Graphic Design',class:'graphic'},
    {src:'./IMG/work-img-15.jpeg',text:'Graphic Design',class:'graphic'},{src:'./IMG/work-img-16.jpeg',class:'web',text:'Web Design'},
    {src:'./IMG/work-img-17.jpeg',text:'Web Design',class:'web'},{src:'./IMG/work-img-18.jpeg',text:'Web Design',class:'web'},
    {src:'./IMG/work-img-19.jpeg',text:'Landing Pages',class:'landing'},{src:'./IMG/work-img-20.jpeg',text:'Landing Pages',class:'landing'},
    {src:'./IMG/work-img-21.jpeg',text:'Landing Pages',class:'landing'},{src:'./IMG/work-img-22.jpeg',text:'Wordpress',class:'wordpress'},
    {src:'./IMG/work-img-23.jpeg',text:'Wordpress',class:'wordpress'},{src:'./IMG/work-img-24.jpeg',text:'Wordpress',class:'wordpress'},

]

const  loadLi =()=>{
    arrElemst.forEach(el=>{
        const li = document.createElement("li");
        li.classList.add("work-item");
        li.classList.add(el.class);
        li.innerHTML= getElement(el)
    ul.appendChild(li);
    loadButton.style.display = "none";
    })
}

const getElement =(el)=>{
    return  (`<div>
        <div class="work-description">
    <img
      class="work-cover-img"
      src="./IMG/work-cover-img.png"
      alt="cover-icon"
    />
    <h3 class="work-title">creative design</h3>
    <p class="work-text">${el.text}</p>
  </div>
  <img
    class="work-image"
    src=${el.src}
    alt="work-image"
  />
  </div>`)

}
loadButton.addEventListener("click", () => setTimeout(loadLi, 2000));


// Button spinner
function removeButton(){  
    loadButton.className = loadButton.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}

loadButton.addEventListener("click", function() {
    loadButton.className = loadButton.className + ' loading';
    setTimeout(removeButton, 2000);
}, false);


// Masonry template
window.onload = () => {
    const grid = document.querySelector('.gallery-grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        gutter: 20,
        originLeft: false,
       
       
    });
};


//Load Gallery additional
let loadBtn = document.getElementById("load-btn");
const moreGallery = document.querySelectorAll('.hide-gallery');

function showImg(){
moreGallery.forEach(item => {
item.classList.remove("hide-gallery");
})
loadBtn.style.display = "none";

const grid = document.querySelector('.gallery-grid');
const masonry = new Masonry(grid, {
itemSelector: '.gallery-item',
gutter: 20,
originLeft: false,        
        });       
}
loadBtn.addEventListener("click", () => setTimeout(showImg, 2000));

function removeButton(){  
    loadBtn.className = loadBtn.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}
loadBtn.addEventListener("click", function() {
    loadBtn.className = loadBtn.className + ' loading';
    setTimeout(removeButton, 2000);
}, false);


// Hover Gallery
$(document).ready(function(){
    jQuery('.gallery-item').hover(
    function(){
     $(this).find(".cover-gallery").fadeIn();
    },
    function(){
        $(this).find(".cover-gallery").fadeOut();
    });
});










