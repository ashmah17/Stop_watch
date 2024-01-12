let isRunning = false;
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


    if (isRunning){
        clearInterval(interval);
        pauseIcon.style.display = 'inline';
        playIcon.style.display = 'none';


    }else{
        interval = setInterval(updateWatch, 1000);          // for running the clocl
        // for running the clocl

        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';



    }
    isRunning = !isRunning;
}

function padZero(num){
    return num < 10 ? `0${num}` : num;
}

//******* */ EDIT ICON UPDATE*******************


function updateWatch(){
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('min');
    const seconds = document.getElementById('sec');

    const pen = document.getElementById('pen');
    const check = document.getElementById('check');

    // let now;
    if(isEditing){
    //     now = new Date();
    // }else{
    //     // now =new Date(0);
    // }

    // const now ="";     // for the currnt date
    // // const now = new Date();     // for the currnt date
    // const hour = now.getHours();
    // const min = now.getMinutes();
    // const sec = now.getSeconds();

    const newHour = document.getElementById('editHour').value;
    const newMin = document.getElementById('editMin').value;
    const newSec = document.getElementById('editSec').value;
 
    
    now = new Date(0);     // for the currnt date

    // const hour =
     now.setHours(newHour);
    // const min = 
    now.setMinutes(newMin);
    // const sec = 
    now.setSeconds(newSec);

    // hours.textContent = padZero(hour);
    // minutes.textContent = padZero(min);
    // seconds.textContent = padZero(sec);

    // if (isEditing){
    //         // document.getElementById('editPlace');
    //         document.getElementById('editHour').value = hour;
    //         document.getElementById('editMin').value = min;
    //         document.getElementById('editSec').value = sec;

            // pen.style.display = 'inline';
            // check.style.display = 'inline';
      }
      else{
        now = new Date(0);
      }
   }

    
function toggleEdit(){
    isEditing = !isEditing;
      
    const pen = document.getElementById('pen');
    const check = document.getElementById('check');
      
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


        pen.style.display = 'none';
        check.style.display = 'inline';

        
    }



//********S*/ SAVE EDIT********

    function saveEdit(){
        const newHour = document.getElementById('editHour').value;
        const newMin = document.getElementById('editMin').value;
        const newSec = document.getElementById('editSec').value;
     
        const isValidInput =!isNaN(newHour) && !isNaN(newMin) && !isNaN(newSec) &&
        newHour >= 0 && newHour < 24 &&
        newMin >= 0 && newMin < 60 &&
        newSec >= 0 && newSec < 60;

        if(isValidInput){
            document.getElementById('hour').textContent = padZero(parseInt(newHour, 10));
            document.getElementById('min').textContent = padZero(parseInt(newMin, 10));
            document.getElementById('sec').textContent = padZero(parseInt(newSec, 10));
           
            if(isRunning){
                alert("running");
                clearInterval(interval);
                interval = setInterval(updateWatch, 1000);
            }
            // toggleEdit();
            saveEdit();
            
      
    }else{
        alert("invalid input");
    }
    function padZero(num){
        return num < 10 ? `${num}` : num;
    }

    updateWatch();
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