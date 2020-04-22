<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
session_start();

echo json_encode(['test' => $_SESSION['test']]);
