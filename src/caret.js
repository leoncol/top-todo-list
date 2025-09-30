import { domElements } from "./dom-update-main";
export default

function caretActivation(){

    let toggler = domElements.toggler
    var i;

    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        console.log('caret working');
    });
}
}

