window.onload=function(){
    var bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{element.onclick=function(){
        element.classList.toggle("on");
    }})
}

function reset_bt(){
    var bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{
        element.classList.remove("on");
    })
}

function past(){
    var bt = document.querySelectorAll(".drum_button");
    bt.forEach(element=>{
        element.classList.remove("current");
    })
}

const drums = document.getElementsByClassName('drum');
const rows = document.getElementsByClassName('drum_line');

let index = 0;

var delay = 300;

var int = setInterval(Loop, delay);

function Loop(){
    console.log("step");
    index = index%8;
    past();
    for (let i=0; i < rows.length; i++){
        let beat = drums[i],
        row = rows[i];
        is_on = row.querySelector('button:nth-child(' + (index+1) + ')');
        
        is_on.classList.add("current");
        if (is_on.classList.contains('on')){beat.play();}
    }
    index++;
}

/* var canvas1 = document.getElementById('First_player');
var canvas2 = document.getElementById('Second_player');
var canvas3 = document.getElementById('Third_player');

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');






var beat;
var player = document.createElement('audio');
var playing = false;
player.loop = false;

var playbt = document.getElementById('B_Start');

function reset_canvas(){
    var canvas_list = document.getElementsByClassName('select');
    Array.from(canvas_list).forEach(element => {

        element.getContext('2d').clearRect(0, 0, element.width, element.height);
        
    });
}

canvas1.onclick = function(){
    reset_canvas();
    ctx1.fillStyle = "blue";
    ctx1.fillRect(0, 0, 150, 150);
    beat = '1';
    var string = "public/sound/Beat " + beat + ".wav";
    player.src =  string;
}

canvas2.onclick = function(){
    reset_canvas();
    ctx2.fillStyle = "red";
    ctx2.fillRect(0, 0, 150, 150);
    beat = '2';
    var string = "public/sound/Beat " + beat + ".wav";
    player.src =  string;
}

canvas3.onclick = function(){
    reset_canvas();
    ctx3.fillStyle = "green";
    ctx3.fillRect(0, 0, 150, 150);
    beat = '3';
    var string = "public/sound/Beat " + beat + ".wav";
    player.src =  string;
}

var int;

function play_audio(){
    int = self.setInterval(start(), 3000);
}

function start()
{
    player.play()
    
}

function stop_audio(){
    window.clearInterval(int);
    playing = false;
} */
