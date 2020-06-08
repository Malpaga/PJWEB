
function activate()
{
    hamburger = document.getElementById('burg');

    if(hamburger.classList.contains('is-active')){

        hamburger.classList.remove('is-active');
        document.getElementById('nl').className = "nav_left hidden";
    
    }else{

        hamburger.classList.add('is-active');
        document.getElementById('nl').className = "nav_left active";
    }
}

window.onscroll = function()
{
    
    if (document.documentElement.scrollTop > 80) { 
        document.getElementById('h').className = "scrolled";
    } else {
        document.getElementById('h').className = "";
    }
    
}

function expand(){
    document.getElementById('circle').className = "active";
    document.getElementById('ArticlePJ').style.opacity = "1";
    document.getElementById('textCircle').style.opacity = "0";
}

function closing(){
    document.getElementById('circle').className = "";
    document.getElementById('ArticlePJ').style.opacity = "0";
    document.getElementById('textCircle').style.opacity = "1";
}