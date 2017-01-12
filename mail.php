<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Message from user: $name";

$result = mail('dmytrokulyk@yahoo.com', 'Subject of the letter', $message);

echo json_encode(array(
		'status' => $result
	));
?>