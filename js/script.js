// typing animation

var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer","MERN Developer"],
    typeSpeed:80,
    BackSpeed:60,
    loop:true
})

// Aside 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let i=0;i<totalSection;i++){
                allSection[i].classList.remove("back-section")
            }
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
    }
    function showSection(element){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector('#'+target).classList.add("active");
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector('.aside')
    navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }
