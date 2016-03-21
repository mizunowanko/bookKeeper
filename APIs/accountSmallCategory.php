<?php
/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/17
 * Time: 22:19
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
                $statement = $pdo->query("select * from account_small_category");
                print(json_encode($statement->fetchAll(PDO::FETCH_ASSOC)));
            }else{
                $statement = $pdo->prepare("select * from account_small_category where large_category_id = ?");
                $statement->bindValue(1, explode("/", $_SERVER["PATH_INFO"])[1]);
                $statement->execute();
                print(json_encode($statement->fetchAll(PDO::FETCH_ASSOC)));
            }
            break;
        default:
            break;
    }
}catch(PDOException $e){
    die($e->getMessage());
}
$db->disConnect();