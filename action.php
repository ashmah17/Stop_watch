<?php

 include "server.php";

 if(isset($_POST['btn'])){
    $reminder = $_POST['reminder'];
    $hour = $_POST['hour'];
    $minute = $_POST['minute'];
    $second = $_POST['second'];


    $sql ="INSERT INTO `info`(`reminder`, `hour`,`minute`,`second`)
    VALUE('$reminder', '$hour', '$minute', '$second')";

    $res = $conn->query($sql);

    if($res){
        echo"<script>
        window.location='index.php';
        </script>";
    }
 }



?>