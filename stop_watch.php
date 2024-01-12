<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopped Watch</title>
    <link rel="stylesheet" href="./fontawesome-free/css/all.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="box">

     <form action="action.php" method="POST">
        <div class="shadow" id="shadow">
            <div class="modal">
                <h3 class="h3">Input Reminder</h3>
                
                <div class="input1">
                    <input type="text" name="reminder" class="put" required="required"  placeholder="Enter a reminder" maxlength="30">
                </div>

                <div class="input2">
                    <input type="number" class="input" name="hour" placeholder="Hour">
                    <input type="number" class="input" name="minute" placeholder="Minute">
                    <input type="number" class="input" name="second" placeholder="Second">
                </div>
                    <button name="btn" class="submit" onclick="closeModal()">submit
              

               </button>
            </div>
        </div>
     </form>

        <button  onclick="showContainer()" id="showBtn"> Show Stopped Watch</button>
    
        <div class="container" id="container">

        <div class="papa">
            <h2>COUNTDOWN TIMER</h2>
            <i class="fa-solid fa-x" onclick="closeContainer()"></i>
        </div>
        
        <div class="mama" id="mama">
            <div id="editPlace">
                 <input type="number" id="editHour" style="width: 3rem; height:2rem;"> 
            </div>

            <div class="h1">
                <h1 id="hour">00</h1>
                <h5>hour</h5>
            </div>
          
            <div id="editPlace">
                 <input type="number" id="editMin" style="width: 3rem; height:2rem;"> 
            </div>

            <div class="h1">
                <h1 id="min">00</h1>
                <h5>min</h5>
            </div>
          
            <div id="editPlace">
                 <input type="number" id="editSec" style="width: 3rem; height:2rem;"> 
            </div>

            <div class="h1">
                <h1 id="sec">00</h1>
                <h5>sec</h5>
            </div>
          
        </div>

        <div class="child">
            <div id="edit" onclick="toggleEdit()">
                <i id="pen" class="fa-solid fa-pen"></i>
                <i id="check" class="fa-solid fa-check" onclick="saveEdit()"></i>
            </div>
            
            <div id="redo" onclick="toggleRedo()">
                <i class="fa-solid fa-rotate"></i>
            </div>

            <div id="pause_play" onclick="togglePause()">
                <i id="pause" class="fa-solid fa-pause"></i>
                <i id="play" class="fa-solid fa-play"></i>
            </div>

            <div id="setting" onclick="toggleSetting()">
                <i class="fa-solid fa-gear" id="modalBtn" onclick="toggleModal()"></i>
            </div>
        </div>

    </div>
</div>
<script src="./script.js"></script>
</body>
</html>