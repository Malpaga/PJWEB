
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