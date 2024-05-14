var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "React.JS Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

setTimeout(autoRefresh=()=>{
    location.reload();
},20000);

let menuBtn=document.querySelector(".bx-menu");
let nav=document.querySelector(".nav");
let header=document.querySelector("header");
let cancel=document.querySelector(".bx-x");

menuBtn.addEventListener("click",function(){
    nav.style.display="block"
    header.style.backgroundColor="transparent"
    menuBtn.style.display="none"
    cancel.style.display="block"
    cancel.style.opacity=1
})
cancel.addEventListener("click",function(){
    nav.style.display="none"
    cancel.style.display="none"
    menuBtn.style.display="block"
})

/*function refreshPage() {
    // Check if the current page is not the contact page
    if (window.location.href.indexOf('contact.html') === -1) {
        // Reload the page
        window.location.reload();
    }
}
setInterval(refreshPage, 5000);*/