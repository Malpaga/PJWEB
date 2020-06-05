
window.onscroll = function()
        {
            if(document.documentElement.scrollTop > 50){
                document.querySelector('header').className = "menu fixed";
            }else{
                document.querySelector('header').className = "menu";
            }
        }