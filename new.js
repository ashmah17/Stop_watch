// let timer;
// let remainingTime;
// let isTimerRunning = false;
// let isEditing;

let timer;
let remainingTime;
let isTimerRunning = false;
let isEditing = false;

//TOGGLE PAUSE ***********************
// function togglePause(){
//     const pauseIcon = document.getElementById('pause');
//     const playIcon = document.getElementById('play');

//     if (isTimerRunning) {
//         clearInterval(timer);  // Stop the existing timer if running
//          isTimerRunning = false;
//         pauseIcon.style.display = 'none';
//         playIcon.style.display = 'inline';
  
//     }else{
//         interval = setInterval(updateWatch, 1000);          // for running the clocl
//         // for running the clocl
//         isTimerRunning = true;
//         pauseIcon.style.display = 'inline';
//         playIcon.style.display = 'none';



//     }
//     isRunning = !isRunning;
// }


// function padZero(num){
//     return num < 10 ? `0${num}` : num;
// }
//**********/ INPUT EDI/T*********S

function toggleEdit(){
    const pen = document.getElementById('pen');
    const check = document.getElementById('check');
   
    pen.style.display ='none' ;
    check.style.display ='inline' ;

    isEditing = !isEditing;
      
        const editHour = document.getElementById('editHour');
        const editMin = document.getElementById('editMin');
        const editSec = document.getElementById('editSec');
      
        const Hour = document.getElementById('hour');
        const Min = document.getElementById('min');
        const Sec = document.getElementById('sec');
        
     

        editHour.style.visibility = isEditing ? 'visible' : 'hidden';
        editMin.style.visibility = isEditing ? 'visible' : 'hidden';
        editSec.style.visibility = isEditing ? 'visible' : 'hidden';

        Hour.style.visibility = isEditing ? 'hidden' : 'visible';
        Min.style.visibility = isEditing ? 'hidden' : 'visible';
        Sec.style.visibility = isEditing ? 'hidden' : 'visible';


      
      

}

// hide checked icon when its not editing
function toggleEdit() {
    const pen = document.getElementById('pen');
    const check = document.getElementById('check');
   
    pen.style.display = 'none';
    check.style.display = 'inline';

    isEditing = !isEditing;

    const editHour = document.getElementById('editHour');
    const editMin = document.getElementById('editMin');
    const editSec = document.getElementById('editSec');
  
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    editHour.style.visibility = isEditing ? 'visible' : 'hidden';
    editMin.style.visibility = isEditing ? 'visible' : 'hidden';
    editSec.style.visibility = isEditing ? 'visible' : 'hidden';

    hour.style.visibility = isEditing ? 'hidden' : 'visible';
    min.style.visibility = isEditing ? 'hidden' : 'visible';
    sec.style.visibility = isEditing ? 'hidden' : 'visible';
}


function checkedInput() {
    // const pen = document.getElementById('pen');
    // const check = document.getElementById('check');

    // pen.style.display = 'inline';
    // check.style.display = 'none';

    // if (isTimerRunning) {
    //     clearInterval(timer);  // Stop the existing timer if running
    //     isTimerRunning = false;
    // }

    const hourId = isEditing ? 'editHour' : 'hour';
    const minId = isEditing ? 'editMin' : 'min';
    const secId = isEditing ? 'editSec' : 'sec';

    const hour = parseInt(document.getElementById(hourId).value, 10) || 0;
    const min = parseInt(document.getElementById(minId).value, 10) || 0;
    const sec = parseInt(document.getElementById(secId).value, 10) || 0;

    if (hour === 0 && min === 0 && sec === 0) {
        alert("Please enter valid input");
        return;
    }

// **********REMAINNG TIME COUNTDOWN*********
    remainingTime = hour * 3600 + min * 60 + sec;
    updateDisplay();  // Update the display immediately
    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Time Up!!!!");
            isTimerRunning = false;
        } else {
            remainingTime--;
            updateDisplay();  // Update the display every second
        }
    }, 1000);

    isTimerRunning = true;
}

function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}


// HIDE INPUTS WHEN THE TIME IS RUNNING AND HIDE HOUR, MINUTE, SEC WHEN THE INPUT IS BEING EDITING
function updateDisplay() {
    const editH = document.getElementById('editHour');
    const editM = document.getElementById('editMin');
    const editS = document.getElementById('editSec');
  
    const hr = document.getElementById('hour');
    const mn = document.getElementById('min');
    const sc = document.getElementById('sec');

    editH.style.visibility = isEditing ? 'hidden' : 'visible';
    editM.style.visibility = isEditing ? 'hidden' : 'visible';
    editS.style.visibility = isEditing ? 'hidden' : 'visible';

    hr.style.visibility = isEditing ? 'visible' : 'hidden';
    mn.style.visibility = isEditing ? 'visible' : 'hidden';
    sc.style.visibility = isEditing ? 'visible' : 'hidden';
    
    
    

    const h = Math.floor(remainingTime / 3600);
    const m = Math.floor(remainingTime % 3600 / 60);
    const s = Math.floor(remainingTime % 60);

       

// Display remaining time in the same colun as the html hour, minut,second
    const formattedTime =
        `${h.toString().padStart(2, '0')}`;
    hr.textContent = `${formattedTime}`;

    const formattedMinutes =
        `${m.toString().padStart(2, '0')}`;
    mn.textContent = `${formattedMinutes}`;

    const formattedSeconds =
        `${s.toString().padStart(2, '0')}`;
    sc.textContent = `${formattedSeconds}`;

}

// PAUSE TIME WHEN THE COUNTDOWN IS ZERO
    function pauseTimer(){
        clearInterval(timer);
        isTimerRunning = false;
    }