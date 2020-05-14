

    
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    let arr =  ["blue", "green", "red", "orange"];
    let path = [[450, 605, 450, 605, 450, 450, 605, 605],[57, 57, 100, 100,100, 57, 100, 57]];
    let j = 0;
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    
    c.width = window.innerWidth;
   // ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.fillText("Richard",475,90);
    
    
    for (var i = 0; i <=8; i += 2) {
       
        console.log(j);
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = arr[j];
        ctx.moveTo(path[0][i],path[1][i]);
        ctx.lineTo(path[0][i + 1],path[1][i + 1]);
        ctx.stroke();
        j++;
    }
    
//    ctx.beginPath();
//    ctx.lineWidth = "5";
//    ctx.strokeStyle = "Blue";
//    ctx.moveTo(450,57);
//    ctx.lineTo(605,57);
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.lineWidth = "5";
//    ctx.strokeStyle = "green";
//    ctx.moveTo(450,100);
//    ctx.lineTo(605,100);
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.lineWidth = "5";
//    ctx.strokeStyle = "red";
//    ctx.moveTo(450,100);
//    ctx.lineTo(450,57);
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.lineWidth = "5";
//    ctx.strokeStyle = "orange";
//    ctx.moveTo(605,100);
//    ctx.lineTo(605,57);;
//    ctx.stroke();
    
    
   //c.height = window.innerHeight;
   

