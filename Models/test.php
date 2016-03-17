<?php
/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/12
 * Time: 12:13
 */
require "dateBase.php";


try{
    $db = new DateBase("bookKeeper", "localhost", "root", "");
    $pdo = $db->connect();
    echo "succeeded";
    $sql = "select * from account";
    foreach($pdo->query($sql) as $row){
        print($row["id"]);
        print($row["name"]);
    }
}catch(PDOException $e){
    print($e->getMessage());
    die();
}


