
function activate()
{
    hamburger = document.getElementById('burg');
    if(hamburger.classList.contains('is-active')){
        document.getElementById('nl').style.height = document.getElementById('')
        document.getElementById('nl').style.transform = "translateX(-100%)";
        hamburger.classList.remove('is-active');
    
    }else{
        hamburger.classList.add('is-active');
        document.getElementById('nl').style.transform = "translateX(0)";
    }
}

window.onscroll = function()
        {
            header = document.getElementById('header');
            header.style.backgroundColor = "rgba(48, 51, 107, 0.8)";
        }