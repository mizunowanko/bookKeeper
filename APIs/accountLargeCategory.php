<?php
/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/17
 * Time: 19:51
 */
error_reporting(E_ALL & ~E_NOTICE);

require "dateBase.php";

try{
    //DB接続
    $db = new DateBase("bookKeeper", "localhost", "root", "");
    $pdo = $db->connect();
    //メソッドによって処理を分岐
    switch($_SERVER["REQUEST_METHOD"]){
        case "GET":
            if(is_null($_SERVER["PATH_INFO"])){
                $statement = $pdo->query("select * from account_large_category");
                print(json_encode($statement->fetchAll(PDO::FETCH_ASSOC)));
            }
            break;
        default:
            break;
    }
}catch(PDOException $e){
    die($e->getMessage());
}