
 
 function calc2() {
                 
           // input values          
           var  v2  = parseFloat(document.getElementById("numb").value);
           var r11 = parseFloat(document.getElementById("numb1").value);
           var r22 = parseFloat(document.getElementById("numb2").value);
           // calaulation of values
           var r1 = document.getElementById("result").value = ((r11 / (r11 + r22)) * v2).toFixed(2);
           var r2 = document.getElementById("result1").value = ((r22 / (r11 + r22)) * v2).toFixed(2);
           // storge of values
          
           localStorage.setItem("volt", v2);
           localStorage.setItem("res1", r11);
           localStorage.setItem("res2", r22);
           localStorage.setItem("result", r1);
           localStorage.setItem("result1", r2);
           
        setTimeout(function(){window.open("results.html");},1000);
        setTimeout(function(){window.close("index.html");},1000);
           
     
 }
 
 //calc2();
 

   

