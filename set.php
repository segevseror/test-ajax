<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
session_start();

$_SESSION['test'] = $_POST['setSession'];

echo true;
