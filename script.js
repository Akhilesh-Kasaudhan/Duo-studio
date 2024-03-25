function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init();
 var crsr = document.querySelector(".cursor");
 var main = document.querySelector( ".main" );
 document.addEventListener("mousemove", function(e){
     crsr.style.left =e.x+10+"px";
     crsr.style.top=e.y+10+"px";
 })
var vid = document.querySelector("#hero-video");
vid.addEventListener("mouseover",function()
{
    crsr.style.width="100px";
    crsr.style.height="20px";
    crsr.style.borderRadius ="10px";
    const ele=document.createElement("span");
    ele.innerText="sound on";
    ele.setAttribute("class","sound-on")
    crsr.appendChild(ele)
    // crsr.innerHTML="sound on"
})
vid.addEventListener("mouseleave",function()
{
    crsr.style.width="25px";
    crsr.style.height="25px";
    crsr.style.borderRadius ="50%";
    crsr.innerHTML="";
})

 var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start: "top 27%",
        end:"top 0",
        scrub:5
    }
})
tl.to(".hero h1",{
    x:-80
},"anime")
tl.to(".hero h2",{
    x:80
},"anime")
tl.to(".hero video",{
    width:"85%"
},"anime")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -120%",
        end: "top -135%",
        scrub: 3,
    }
    
})
tl2.to(".page2 ",{
    backgroundColor: "#fff",
        color: "#111",
})
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -270%",
        end:"top -285%",
        scrub:3,
    }
})
tl3.to(".page3 .pg3-left",{
   left:"-5rem",
    duration:2,
    delay:2
})
tl3.to(".page3 .pg3-right",{
    right:"-15rem",
    duration:2,
    delay:1,
})
tl3.to(".main ",{
    backgroundColor: "#0F0D0D",
    color: "#fff",
})

var clients = document.querySelectorAll(".clients");
clients.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
      var att= elem.getAttribute("data-image")
    //   console.log(att);
      crsr.style.width="300px",
      crsr.style.height="300px"
      crsr.style.borderRadius="20px"
      crsr.style.backgroundImage=`url(${att})`
      crsr.style.zIndex="111"
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent"
        crsr.style.width="25px"
        crsr.style.height= "25px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage="none"
    })
})

var prpl=document.querySelector(".purple");
var h4=document.querySelectorAll("#nav .h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseover",function(){
       prpl.style.display="block",
       prpl.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        prpl.style.display="none",
        prpl.style.opacity="0"
     })
})

var marq=document.querySelector(".marquee");
var work=document.querySelector("#work");
var cntct=document.querySelector( "#contact");
var std=document.querySelector( "#studio");

 work.addEventListener("mouseover",function(){
    marq.innerHTML="Work Work  Work Work Work Work  Work Work Work Work  Work Work";

})
cntct.addEventListener("mouseover",function(){
    marq.innerHTML="Contact Contact Contact Contact Contact Contact Contact Contact Contact Contact ";

})
std.addEventListener("mouseover",function(){
    marq.innerHTML="Duo Studio Duo Studio Duo Studio Duo Studio Duo Studio  Duo Studio Duo Studio Duo Studio ";

})
