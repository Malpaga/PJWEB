var canvas = document.getElementById('First_player');
var canvas2 = document.getElementById('Second_player');
var canvas3 = document.getElementById('Third_player');

var ctx1 = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');

ctx1.fillStyle = 'green';
ctx2.fillStyle = 'black';
ctx3.fillStyle = 'red';

ctx1.fillRect(10,10,100,100);
ctx2.fillRect(10,10,100,100);
ctx3.fillRect(10,10,100,100);

var loop1 = document.getElementById("Loop1");
var audio1 = document.getElementById("audio1");

function play_audio()
{
    audio1.play();
}
