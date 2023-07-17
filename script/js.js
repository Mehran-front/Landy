// ================================= header
const header = document.querySelector(".header")
const btnHeader = document.querySelector("#btnHeader");
const listHeader = document.querySelector("#listHeader");
btnHeader.addEventListener("click", function () {
    if (listHeader.style.left === "0px") {
        listHeader.style.left = "-100%"
    } else {
        listHeader.style.left = "0"
    }
});
window.addEventListener("scroll", function () {
    if (window.scrollY > 15) {
        header.classList.add("header-shadow")
    } else {
        header.classList.remove("header-shadow")
    }
})

// ================================ End header
// ================================ Showcase
const showcaseBtnRight = document.getElementById("Showcase-btn-right")
const showcaseBtnLeft = document.getElementById("Showcase-btn-left")
const showcaseSlider = document.querySelector(".contact-Showcase-slider");
const showcaseSliderItem = document.getElementsByClassName("Showcase-slider-item");
function SliderItemRemoveActive() {
    for (let i = 0; i < showcaseSliderItem.length; i++) {
        showcaseSliderItem[i].classList.remove("active")
    }
}

let slide = 0
showcaseBtnLeft.addEventListener("click", function () {
    slide++
    if (slide > showcaseSliderItem.length - 1) {
        slide = 0
    }
    SliderItemRemoveActive()
    showcaseSliderItem[slide].classList.add("active")
    let win = window.innerWidth;
    console.log(win);
    if (win < 576) {
        if (slide < showcaseSliderItem.length - 1) {
            showcaseSlider.style.transform += "translateX(-215px)"
        } else {
            showcaseSlider.style = null
        }
    } else if (win < 768) {
        if (slide < showcaseSliderItem.length - 1) {

            showcaseSlider.style.transform += "translateX(-265px)"
        } else {
            showcaseSlider.style = null
        }
    } else if (win > 768) {
        if (slide < showcaseSliderItem.length - 1) {
            showcaseSlider.style.transform += "translateX(-225px)"
            console.log("slide");
        } else {
            showcaseSlider.style = null
        }
    }
})
showcaseBtnRight.addEventListener("click", function () {
    slide--
    if (slide < 0) {
        slide = showcaseSliderItem.length - 1
    }
    SliderItemRemoveActive()
    showcaseSliderItem[slide].classList.add("active")
    let win = window.innerWidth;
    console.log(win);
    if (win < 576) {
        if (slide < showcaseSliderItem.length - 1) {
            showcaseSlider.style.transform += "translateX(215px)"
        } else {
            showcaseSlider.style = null
        }
    } else if (win < 768) {
        if (slide < showcaseSliderItem.length - 1) {

            showcaseSlider.style.transform += "translateX(265px)"
        } else {
            showcaseSlider.style = null
        }
    } else if (win > 768) {
        if (slide < showcaseSliderItem.length - 1) {
            showcaseSlider.style.transform += "translateX(225px)"
            console.log("slide");
        } else {
            showcaseSlider.style = null
        }
    }
})

;
// ================================ End Showcase

