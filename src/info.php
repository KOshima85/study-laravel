<?php
// phpinfo();
error_reporting(E_ALL);
ini_set('display_errors',1);
try{

    $pdo = new PDO('mysql:dbname=todo;host=db;', 'todo-user', 'todo-user');
    var_dump($pdo);
}catch(Exception $e){
    var_dump($e);
}