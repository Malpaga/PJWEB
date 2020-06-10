var canvas1 = document.getElementById('First_player');
var canvas2 = document.getElementById('Second_player');
var canvas3 = document.getElementById('Third_player');

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');






var beat;
var player = document.createElement('audio');
var playing = false;

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
    if(beat != null){
        stop_audio();
        beat = '1';
        play_audio();
    }else{
        beat = '1';
    }
    
}

canvas2.onclick = function(){
    reset_canvas();
    ctx2.fillStyle = "red";
    ctx2.fillRect(0, 0, 150, 150);
    beat = '2';
}

canvas3.onclick = function(){
    reset_canvas();
    ctx3.fillStyle = "green";
    ctx3.fillRect(0, 0, 150, 150);
    beat = '3';
}

function play_audio()
{
    if(beat == null){
        alert("select a beat");
    }
    var string = "public/sound/Beat " + beat + ".wav";
    player.src =  string;
    player.loop = true;
    if(playing == true){
        stop_audio();
        player.addEventListener('ended', player.play(), false);
    }else{
        player.play();
    }
    playing = true;
}

function stop_audio(){
    player.loop = false;
    playing = false;
}
