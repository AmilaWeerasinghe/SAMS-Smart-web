<?php
/**
 * Returns the list of teachers.
 */
require 'database.php';

$teachers = [];
$sql = "SELECT teacherId, subjectid, subName ,teacherName FROM teacher";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $teachers[$i]['teacherId']    = $row['teacherId'];
    $teachers[$i]['subjectid'] = $row['subjectid'];
    $teachers[$i]['subName'] = $row['subName'];
	$teachers[$i]['teacherName'] = $row['teacherName'];
    $i++;
  }

  echo json_encode($teachers);
}
else
{
  http_response_code(404);
}