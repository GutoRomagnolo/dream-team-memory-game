<?php
ini_set("display_errors", "on");
error_reporting(E_ALL);
require("./../database.php");

$user_id = $_COOKIE["userId"] ?? "";

$user_full_name = $_POST['user_full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$user_password = $_POST['user_password'];

if (!$user_id) {
  echo 'you_need_sign_up';
  exit();
}

$sql = "
  UPDATE
    user
  SET
    user_full_name = '$user_full_name',
    email = '$email',
    phone = '$phone',
    user_password = '$user_password'
  WHERE
    id = $user_id
";

if ($dbConnection->query($sql)) {
  echo 'successfully_update';
}

$dbConnection = null;

exit();
?>