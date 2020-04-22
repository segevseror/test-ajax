<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
session_start();

if (isset($_SESSION['test'])) {
    echo json_encode(['test' => $_SESSION['test']]);
} else {
    echo json_encode(['test' => 'no have session']);
}
