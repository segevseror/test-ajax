<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
session_start();

$_SESSION['test'] = $_POST['setSession'];

echo json_encode(['act' => true, 'msg' => 'the sission is saved']);
