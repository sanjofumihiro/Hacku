window.onload=function(){
    viewController = new viewController();
    console.log("make viewcontroller instance");
    setTimeout(function(){viewController.change("mainV")},3000);
    console.log("setTimer for change main view");
    const main_nav_a=document.querySelectorAll("*[data-link]");
    for (var i=0;i<main_nav_a.length;i++){
        main_nav_a[i].addEventListener("click",function(e){
            mainNavA(e.target);
        });
    }

}
