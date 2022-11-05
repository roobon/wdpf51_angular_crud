<?php
include '../database.php';
$users = [];

$sql = "SELECT * FROM users";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$users[$i]['id'] = $row['id'];
		$users[$i]['name'] = $row['name'];
		$users[$i]['email'] = $row['email'];
		$i++;
	}
	echo json_encode($users);
}
else
{
	http_response_code(404);
}