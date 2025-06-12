<?php
// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Enable CORS

// Check if this is the initial request
if (!isset($_GET['i'])) {
    // Set the required cookie
    $cookie_value = "1"; // This is a simplified version, you might need the actual decrypted value
    setcookie("__test", $cookie_value, time() + 21600, "/");
    
    // Redirect to the same URL with the i parameter
    header("Location: " . $_SERVER['PHP_SELF'] . "?i=1");
    exit();
}

// If we have the i parameter, return the JSON response
echo json_encode([
    'hello' => 'world'
]);
?> 