let isTimerRunning = false;
let timer;
let remainingTime;
let interval ;
let isEditing = false;

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



// *******PLAY AND PAUSE*******

function togglePause(){
    const pauseIcon = document.getElementById('pause');
    const playIcon = document.getElementById('play');


    if (!isTimerRunning){
        clearInterval(interval);
        pauseIcon.style.display = 'inline';
        playIcon.style.display = 'none';


    }else{
        interval = setInterval(updateWatch, 1000);          // for running the clocl
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';



    }
    isTimerRunning = !isTimerRunning;
}

function padZero(num){
    return num < 10 ? `0${num}` : num;
}

//******* */ EDIT ICON UPDATE*******************
function toggleEdit(){
    if(isTimerRunning){
      
    const pen = document.getElementById('pen');
    const check = document.getElementById('check');
      
        const editHour =parseInt( document.getElementById('editHour'). value, 10) || 0;
        const editMin =parseInt( document.getElementById('editMin'). value, 10) || 0;
        const editSec =parseInt( document.getElementById('editSec'). value, 10) || 0;
  
        editHour.style.visibility = isEditing ? 'visible' : 'hidden';
        editMin.style.visibility = isEditing ? 'visible' : 'hidden';
        editSec.style.visibility = isEditing ? 'visible' : 'hidden';

        const Hour = document.getElementById('hour');
        const Min = document.getElementById('min');
        const Sec = document.getElementById('sec');

        Hour.style.visibility = isEditing ? 'hidden' : 'visible';
        Min.style.visibility = isEditing ? 'hidden' : 'visible';
        Sec.style.visibility = isEditing ? 'hidden' : 'visible';


        pen.style.display = 'none';
        check.style.display = 'inline';


        remainingTime =  editHour *3600 + editMin * 60 + editSec;

        if(remainingTime > 0){
            timer = setInterval(() => {
                if(remainingTime <= 0){
                    clearInterval(timer);
                    document.getElementById('diplay').innerText = "timeuo";
                }else{
                    const h = Math.floor(remainingTime / 3600);
                    const m = Math.floor(remainingTime % 3600);
                    const s = Math.floor(remainingTime % 60);
                    const formattedTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

                 const hw = document.getElementById('hour').innerText = `Time remaining: ${formattedTime}`;
                 const mn = document.getElementById('min').innerText = `Time remaining: ${formattedTime}`;
                 const sc = document.getElementById('sec').innerText = `Time remaining: ${formattedTime}`;
                    
                }
            }, 1000);
        }
      
       

    }
    }

// ******************MODAL SECTION*********

// function toggleModal(){
//     var modaly = document.getElementById('shadow');
//     var isVisible = modaly.style.visibility === 'visible' ;

//     if(isVisible){
//         modaly.style.visibility ='hidden' ;
//         modaly.style.transform = 'scale(0.8)';
//     }else{
//         modaly.style.visibility ='visible' ;
//         modaly.style.transform = 'scale(1)';
//     }

// }
function toggleModal(){
    const modaly = document.getElementById('shadow');
    // const showBtnn = document.getElementById('modalBtn');
    
    modaly.style.visibility ='visible' ;
    modaly.style.transform = 'scale(1)';

}
function closeModal(){
    const closeModal = document.getElementById('shadow');
   
    closeModal.style.visibility ='hidden';
    modaly.style.transform = 'scale(-1)';

}