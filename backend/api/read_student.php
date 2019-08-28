<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$students = [];
$sql = "SELECT stdid, age FROM student";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $students[$i]['stdid']    = $row['stdid'];
    $students[$i]['age'] = $row['age'];
    $i++;
  }

  echo json_encode($students);
}
else
{
  http_response_code(404);
}