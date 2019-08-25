<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT id, num, password FROM test";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id']    = $row['id'];
    $policies[$i]['num'] = $row['num'];
    $policies[$i]['password'] = $row['password'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}