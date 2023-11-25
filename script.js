var main = document.querySelector("html");
var crs = document.querySelector(".cursor");

main.addEventListener("mousemove",function(e){
    crs.style.left =e.pageX+ "px";
    crs.style.top =e.pageY+ "px";
    // crs.scrollTop.style.top= dets.y+"px"
    // console.log(dets.y)

})


var acc = document.getElementsByClassName("accordion");
var span = document.querySelectorAll(".icon");

function minusicon(){
    for(i=0;i<span.length;i++){
       
        this.span[i].innerHTML = "-"
    
        
    }
    }
    
    function plusicon(){
        for(i=0;i<span.length;i++){
            
            this.span[i].innerHTML = "+"
        
           
        }
        }

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      plusicon()
    } else {
      panel.style.display = "block";
      minusicon()
      

    }
  });
}


