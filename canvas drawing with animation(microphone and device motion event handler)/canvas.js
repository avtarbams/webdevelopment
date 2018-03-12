let ctx = document.getElementById("myCanvas").getContext("2d");
let curr_width = window.innerWidth, curr_height = window.innerHeight;

window.addEventListener("devicemotion", handleMotionEvent, true);

function handleMotionEvent(){
    var xx = Math.round((event.accelerationIncludingGravity.x)+(event.accelerationIncludingGravity.y)+(event.accelerationIncludingGravity.z))+100;
    var yy = Math.round((event.accelerationIncludingGravity.x)+(event.accelerationIncludingGravity.y)+(event.accelerationIncludingGravity.z))+100;
navigator.getUserMedia = navigator.getUserMedia;
if (navigator.getUserMedia) {
navigator.getUserMedia({
    audio: true
  },
  function (stream) {
    

    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource(stream);
    javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    javascriptNode.onaudioprocess = function() {
        let array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        let values = 0;

        let length = array.length;
        for (let i = 0; i < length; i++) {
          values += (array[i]);
        }

        let average = values / length;
ctx.canvas.width  = curr_width;
ctx.canvas.height = curr_height;
let color,
x, y, r,
colorand = ["Pink","Red","Yellow","Blue","Green","Cyan","Magenta","AliceBlue","BlueViolet","Chartreuse","Crimson","FireBrick","GoldenRod"];

let riley = (x,y,r) => {
    for(var i =1;i<17;i++)
{   
    
    if(i%2==0)
    {
        color ="black";
    }
    else if(i%2!=0 && Math.round(average - 40)<0){
        color="white";
    }
    else if (i%2!=0 && Math.round(average - 40)>0){
        
        color=colorand[Math.floor((average-40)/10)].toString();
        
    }
    else{
        color ="white";
    }
    if (i<9){
        ctx.beginPath();
        ctx.fillStyle=color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        x = x+(0.006*curr_width);
        r = r -(0.006*curr_width);
    }
    else{
        ctx.beginPath();
        ctx.fillStyle=color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        x = x - (0.006*curr_width);
        r = r - (0.006*curr_width);
    }
    
}

};

ctx.fillStyle="red";
ctx.font = '20px serif';
ctx.fillText('Blow air near Mic to see Magic', curr_width/8, 50);
ctx.save();
riley((curr_width*(2/3)+xx),((curr_height/2)+yy),curr_width/10);
ctx.restore();
ctx.scale(0.5,0.5);
riley((curr_width*(2/3)+xx),((curr_height/2)+yy),curr_width/10);
ctx.restore();
ctx.rotate(0.5);
riley((curr_width*(2/3)+xx),((curr_height/2)+yy),curr_width/10);
ctx.restore();
ctx.translate(curr_width,curr_height);
ctx.rotate(-1);
riley((curr_width*(2/3)+xx),((curr_height/2)+yy),curr_width/10);
ctx.restore();
ctx.scale(1,1);
riley((curr_width*(2/3)+xx)-((curr_width/2)+yy),curr_height/2,curr_width/10);
riley((curr_width*(2/3)+xx),((curr_height/2)-(curr_width/2)+yy),curr_width/10);
riley(0+xx,0+yy,curr_width/10);
}

    }

      
  ,
  function(err) {
    console.log("The following error occured: " + err.name)
  });
} else {
console.log("getUserMedia not supported");
}
}