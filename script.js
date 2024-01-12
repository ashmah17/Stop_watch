// let isRunning = false;
// let interval ;
// let isEditing = false;

// *******CLOSE CONTAINER*******


function closeContainer(){
    const container = document.getElementById('container');
    const showBtnn = document.getElementById('showBtn');
   
    container.style.visibility ='hidden' ;
    showBtnn.style.display ='block' ;
}

function showContainer(){
    const container = document.getElementById('container');
    const showBtnn = document.getElementById('showBtn');

    container.style.visibility ='visible' ;
    showBtnn.style.display ='none' ;
}



 



//******* */ EDIT ICON UPDATE*******************


function updateWatch(){
    const now = new Date();     // for the currnt date
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('min');
    const seconds = document.getElementById('sec');


    hours.textContent = padZero(hour);
    minutes.textContent = padZero(min);
    seconds.textContent = padZero(sec);
}
function padZero(num){
    return num < 10 ? `0${num}` : num;
}
setInterval(updateWatch, 1000);