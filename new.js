let timer; 
// let interval ;
let remainingTime;  // THE REMAIINING TIME AFTER THE COUNT DOWN
let isTimerRunning = false; // THIS IS NOT RUNNING BY DEFAULT
let isEditing = false; // IS NOT EDITING


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


function togglePause(){
    const pauseIcon = document.getElementById('pause');
    const playIcon = document.getElementById('play');

    if (isTimerRunning) {
        interval = setInterval(updateDisplay, 1000); 
        // isTimerRunning = true;
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';
    }
    
    isTimerRunning = !isTimerRunning;
}
function togglePlay(){
    const pausIcon = document.getElementById('pause');
    const plaIcon = document.getElementById('play');

    if (isTimerRunning) {
        clearInterval(timer);
        pausIcon.style.display = 'inline';
        // isTimerRunning = false;
        plaIcon.style.display = 'none';

    }
    
    isTimerRunning = !isTimerRunning;
}
// setting side*********
function toggleSetting(){

}

//TOGGLE PAUSE ***********************
// function togglePause(){
//     const pauseIcon = document.getElementById('pause');
//     const playIcon = document.getElementById('play');

//     if (isTimerRunning) {
//         // clearInterval(timer); 
//         interval = setInterval(updateDisplay, 1000); 
//         isTimerRunning = true;
//         pauseIcon.style.display = 'none';
//         playIcon.style.display = 'inline';
//     }
//      else{
//         // interval = setInterval(updateDisplay, 1000); 
//         clearInterval(timer);  // Stop the existing timer if running         isTimerRunning = false;
//          pauseIcon.style.display = 'inline';
//          isTimerRunning = false;
//          playIcon.style.display = 'none';
//     }

//     isTimerRunning = !isTimerRunning;
// }

function padZero(num){
    return num < 10 ? `0${num}` : num;
}
//**********/ INPUT EDI/T*********S

function toggleEdit(){
    const pen = document.getElementById('pen'); // KARBO EDIT ICON DINA
    const check = document.getElementById('check'); // KARBO CHECK ICON DINA
   
    pen.style.display ='none'; //IN INA EDITING PEN ICON DINA YA BACE 
    check.style.display ='inline' ; //IN INA EDITING CHECK ICON DINA YA BAYYANA

    isEditing = !isEditing; //IN INA EDITING YANA NUFIN BAN EDITING
      
        const editHour = document.getElementById('editHour'); // KARBO EDIT HOUR  INPUT DINA
        const editMin = document.getElementById('editMin'); // KARBO EDIT MINTI INPUT DINA
        const editSec = document.getElementById('editSec'); // KARBO EDIT SAKAN  INPUT DINA
      
        const Hour = document.getElementById('hour');// KARBO HOUR COLUMN DINA
        const Min = document.getElementById('min');// KARBO MINTI COLUMN DINA
        const Sec = document.getElementById('sec');// KARBO SECOND COLUMN DINA
        
     

        editHour.style.visibility = isEditing ? 'visible' : 'hidden'; // wannan nayi amfani da ternary operator, na cewa in yana editing ya man input visible, in ba haka ba ya boyeman shi
        editMin.style.visibility = isEditing ? 'visible' : 'hidden';
        editSec.style.visibility = isEditing ? 'visible' : 'hidden';

        Hour.style.visibility = isEditing ? 'hidden' : 'visible'; // wannan nayi amfani da ternary operator, na cewa in yana editing ya man input visible, in ba haka ba ya boyeman shi
        Min.style.visibility = isEditing ? 'hidden' : 'visible';
        Sec.style.visibility = isEditing ? 'hidden' : 'visible';


    //   to na gama da editing input dina daga nan na rufe fankshan dina
      

}


function checkedInput() {

     //Wannan kuma fankshan ne na in na gama cike
    //input dina yayi mani savin dinshi a colun dina nasu hour
// ternary operator yana daukar  operand ukku, condition, operation dinda zai daulka
// in condition is true, da operation din da zai dauka in operation is false
    const pauseIcon = document.getElementById('pause');
    const playIcon = document.getElementById('play');

       
    const penny = document.getElementById('pen'); // KARBO EDIT ICON DINA
    const checky = document.getElementById('check'); // KARBO CHECK ICON DINA

    penny.style.display ='inline'; //IN INA EDITING PEN ICON DINA YA BACE 
    checky.style.display ='none' ; 

    pauseIcon.style.display ='none'; //IN INA EDITING PEN ICON DINA YA BACE 
    playIcon.style.display ='inline' ; 

    const hourId = isEditing ? 'editHour' : 'hour'; // here value din editHour da na hour ternary operator ne ke ji dasu, shi zaiyi daukoman su daha HTML dina, in ya daukosu sai ya bama hourId ta riqe 
    const minId = isEditing ? 'editMin' : 'min';
    const secId = isEditing ? 'editSec' : 'sec';


     // anan kuma hour id dinmu tana riqe da value dinmu na html wanda shine input, 
    //  parseInt kuma yana converting values din input din to interger,
    // using || na nufin in yayi failing ya maida su interger to ayi amfani da zero as default,

    const hour = parseInt(document.getElementById(hourId).value, 10) || 0;
    const min = parseInt(document.getElementById(minId).value, 10) || 0;
    const sec = parseInt(document.getElementById(secId).value, 10) || 0;

    if (hour === 0 && min === 0 && sec === 0) {
        // wannan condition ne na cewa in duka zero na saka to ayi alaerting dina
        clearInterval(timer);
        alert("Please enter valid input");
        return;
    }

// **********REMAINNG TIME COUNTDOWN*********

// yana converting hours to sec, minutes to sec
    remainingTime = hour * 3600 + min * 60 + sec;
    
    updateDisplay();  // wannan shike updating dinsu a webdina yana kiran update function dina
    timer = setInterval(() => {   // setInterval function ne da yake setting wani fuction a specific intervals
        if (remainingTime <= 0) {  // idan lokacn da ya rage qasa da ko kuma daidai da zero ne
            clearInterval(timer);  // ClearInterval yana tsayar da interval daga tafiya, timer shine ke riqe da time dinda setInterval ke ragewa
            alert("Time Up!!!!");  // in time ya cika yayi alerting timeup
            isTimerRunning = false;  // here my count down exceed so i set the isTimerRunning to false that means to stop runnung
        } else {
            remainingTime--;  // idan time dina yana running yake tohm sai ya saka remaining time dina ya dunga decreamenting  
            updateDisplay();  // Update the display every second
        }
    }, 1000); // yana specifying decreament din ya dunga raguwa da 1 sec

    isTimerRunning = true; // timer dina yana running tunda yana decreaming
}

// wannan funnction din yana tsayar da timer din in taje 0
// function pauseTimer() {
//     clearInterval(timer);
//     isTimerRunning = false;
// }


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
    function toggleRedo(){
        // interval = setInterval(updateDisplay, 1000); 

        clearInterval(timer);
        isTimerRunning = false;
    }
// MODAL SIDE*******
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