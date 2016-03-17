<?php
/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/17
 * Time: 19:51
 */

require "dateBase.php";

try{
    //DB接続
    $db = new DateBase("bookKeeper", "localhost", "root", "");
    $pdo = $db->connect();
    //メソッドによって処理を分岐
    switch($_SERVER["REQUEST_METHOD"]){
        case "GET":
            $statement = $pdo->query("select * from account");
            print(json_encode($statement->fetchAll(PDO::FETCH_ASSOC)));
            break;
        default:
            break;
    }
}catch(PDOException $e){
    die($e->getMessage());
}