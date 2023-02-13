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

// sticky navbar
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function(entries)
{
    const ent = entries[0];
    if(!ent.isIntersecting)
      document.querySelector(".header").classList.add("stiky");
    if(ent.isIntersecting)
      document.querySelector(".header").classList.remove("stiky");
},
{
    root:null,
    threshold:0,
    rootMargin:"-70px"
});
obs.observe(sectionHeroEl)


// change year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();