function mainNavA(element){
    setTimeout(function(){
        viewController.change(element.getAttribute("data-link"));
    },300);
    console.log("change to " + element.getAttribute("data-link"));
}