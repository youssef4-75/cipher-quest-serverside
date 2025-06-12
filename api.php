<?php

header("Access-Control-Allow-Origin: http://localhost:8080"); // Replace with your frontend URL
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
    'hello' => 'world'
]);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode([
    'error' => 'message'
]);
}
?>