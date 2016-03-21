<?php

/**
 * Created by PhpStorm.
 * User: takashima
 * Date: 16/03/17
 * Time: 18:52
 */
class DateBase
{
    private $pdo;
    private $dbName;
    private $host;
    private $userName;
    private $password;



    public function __construct($dbName, $host, $userName, $password){
        $this->dbName = $dbName;
        $this->host = $host;
        $this->userName = $userName;
        $this->password = $password;
    }

    public function connect(){
        try{
            $this->pdo = new PDO("mysql:host=".$this->host. ";dbname=".$this->dbName.";charset=utf8", $this->userName, $this->password);
            return $this->pdo;
        }catch(PDOException $e){
            print($e->getMessage());
        }
    }

    public function disConnect(){
        $this->pdo = null;
    }
}