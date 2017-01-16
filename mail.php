<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$comments = $_POST['comment'];
$pay = $_POST['pay'];
$call = $_POST['call'];

$message = "Message from user:  $name! phone: $phone. Address: $house $street apt. $apartment, floor: $floor. Comments: $comments. Pay: $pay. Callback: $call";

$result = mail('dmytrokulyk@yahoo.com', "New order", $message);

echo json_encode(array(
	'status' => $result
	));
?>