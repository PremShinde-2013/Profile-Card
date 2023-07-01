const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", " #ff3700");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#8f17ff");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#ff00e1");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#00fffb");
        }
        else{
            theme.style.setProperty("--theme-color", "#00fd00");
        }
    });
});