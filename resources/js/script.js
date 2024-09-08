window.onbeforeunload = function () {
  window.scrollTo(0, 0);
    
}   

window.onload = function(){
    
  document.getElementById("header").style.display="block";
  document.getElementById("desc").style.display="block";
  document.getElementById("headnav").style.display="block";
  document.getElementById("header").classList.add("headerClass");
  document.getElementById("desc").classList.add("descClass");
  document.getElementById("headnav").classList.add("headnavClass");
    
}



document.getElementsByClassName("btn")[0].onclick = function(){

    
    form();

}

document.getElementById("hire").onclick = function(){
    
    form();
    
}


function form(){

    document.getElementsByClassName("btn")[0].style.display = 'none';
    
    
    document.getElementById("form").style.maxHeight = "1000px";
   
}
