


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
 
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});








function page3Animation() {
  let elemt = document.querySelectorAll("#page3_elem");
  let backimage = document.querySelector("#page3_right");

  // console.log(elemt);
  elemt.forEach(function (e) {
    e.addEventListener("click", function () {
      let image = e.getAttribute("data-picture");
      backimage.style.backgroundImage = `url(${image})`;

      let heading = e.querySelector("h1");
      console.log(heading);

      heading.style.color = "#ffff";
      e.style.borderLeft = "0.35vw solid  #FE330A";
    });
  });
}

function page4Animation() {
  let elemC = document.querySelector("#elem_container");
  let fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

   function loader()
   {
    let loader = document.querySelector("#loader");
 setTimeout(function(){
    loader.style.top="-100%"
 },4000)
   }
 



page4Animation();
page3Animation();
loader();

