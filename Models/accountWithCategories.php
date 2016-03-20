<?php
/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/19
 * Time: 9:09
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
                $sql = "select account.id, account.name, account_small_category_id as smallCategoryId, account_small_category.name as smallCategoryName, account_large_category_id as largeCategoryId, account_large_category.name as largeCategoryName from account inner join account_small_category on account_small_category_id = account_small_category.id inner join account_large_category on account_large_category_id = account_large_category.id ";
                $statement = $pdo->query($sql);
                print(json_encode($statement->fetchAll(PDO::FETCH_ASSOC)));
            }
            break;
        default:
            break;
    }
}catch(PDOException $e){
    die($e->getMessage());
}