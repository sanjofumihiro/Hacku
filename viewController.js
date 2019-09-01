class viewController{
    viewCollection=new Array();
    constructor(){
        const view=document.querySelectorAll(".view");
        for(var i=0;i<view.length;i++){
            this.viewCollection.push(view[i]);    
        }
        for(var i=0;i<this.viewCollection.length;i++){
            this.viewCollection[i].style.display="none";
            this.viewCollection[i].style.margin="0";
            this.viewCollection[i].style.padding="0";
            this.viewCollection[i].style.width="100vw";
            this.viewCollection[i].style.height="100vh";
            this.viewCollection[i].style.overflowY="scroll";
            this.viewCollection[i].style.background="#fff";
            this.viewCollection[i].style.transition="0.3s";
        }
        document.querySelector("#firstV").style.display="block";
    }
    change(target){
        for(var i=0;i<this.viewCollection.length;i++){
            this.viewCollection[i].style.display="none";
        }
        document.getElementById(target).style.display="block";
    }
    
}