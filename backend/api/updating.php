<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->stdid < 1 || trim($request->age) == '' ) {
    return http_response_code(400);
  }

  // Sanitize.
  $stdid    = mysqli_real_escape_string($con, (int)$request->stdid);
  $age = mysqli_real_escape_string($con, trim($request->age));
  

  // Update.
  $sql = "UPDATE `student` SET `stdid`='$stdid',`age`='$age' WHERE `stdid` = '{$stdid}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}