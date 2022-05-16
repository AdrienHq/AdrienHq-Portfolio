
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
})

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
})

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
})

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelectorAll(".pp-slide img").src =
        portfolioItem.querySelectorAll(".slide img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-item-btn")){
        toggleProjectPopup();
        document.querySelector(".project-popup").scrollTo(0,0);
        projectItemDetails(e.target.parentElement);
    }
})
function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-project-close").addEventListener("click", toggleProjectPopup);

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-project-inner")){
        toggleProjectPopup();
    }
})

function projectItemDetails(projectItem){
    document.querySelector(".pp-project-thumbnail img").src =
        projectItem.querySelector(".project-item-thumbnail img").src;

    document.querySelector(".pp-project-header h3").innerHTML =
        projectItem.querySelector(".project-item-title").innerHTML;

    document.querySelector(".pp-project-body").innerHTML =
        projectItem.querySelector(".project-item-details").innerHTML;
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length -1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


