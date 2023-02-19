const navBtn = document.querySelector('.btn-nav-menu');
const header = document.querySelector(".header");
navBtn.addEventListener('click',function()
{
    header.classList.toggle('nav-open');
})


// scrolling smooth
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        if(href==="#")
        window.scrollTo({top:0,behavior:'smooth'})
        if(href !=="#"&& href.startsWith("#"))
        {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"})
        }

        if(link.classList.contains("nav--link"))
        header.classList.toggle('nav-open');
    })
})

// change navbar bg while scrolling 
// change bg
function changeNavBarBg() {
    if(window.pageYOffset === 0)
        header.classList.remove("stikyBg")
    else 
        header.classList.add("stikyBg")
}


let pause;
const throttle = (cb,delay = 150)=>{
   if(pause) return;
   pause = true;
   setTimeout (()=>{
       cb();
       pause = false;
   },delay)
}

window.addEventListener("scroll",()=>{
    throttle(changeNavBarBg)
})



// change year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

