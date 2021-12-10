function tim(){
    var tk  = document.getElementsByTagName("input");
    
  var name = tk[0].value;
  var pas = tk[1].value;
  
  
  if (name == "" || pas == ""){
      confirm("Lỗi! Cần nhập Email và Password...\n____________________________________");
      
  }else{
      return window.location.href ="trangchu.html";
  }
  
  } 
  
  