<?php
/*include_once 'config.php';
include_once 'app/functions.php';*/
//Database connection.
//require_once 'inc/db/db.php';

//Database connection.
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_ams";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
} 

//
$params = json_decode( file_get_contents('php://input'), true );
$params = is_array($params)? $params : array();
$params = array_merge($params, $_POST);
$action = isset($params['action'])? $params['action'] : '';

switch($action)
{
	case 'assAssociate' :
		// Ass Associate
		$response = $params;
		break;
	default:
		$response = array();
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
die;
