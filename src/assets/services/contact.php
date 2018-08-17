<?php 
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$number = $_REQUEST['number'];
$message = $_REQUEST['message'];
$title = "Public Enquiry";
if(strpos($_SERVER['HTTP_REFERER'], "contact")) {
    $title = "Public Enquiry";
} else {
    $title = "Request for Admission";
}

$to = "info.jbuacademy@gmail.com";
$from = "J.B.U. Academy <info@jbuacademy.dx.am>";

$msg = '<!DOCTYPE html>';
$msg .= '<html>';
$msg .= '   <head>';
$msg .= '       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />';
$msg .= '   </head>';
$msg .= '   <body>';
$msg .= '       <div style="background-color: #00cb54;background-image: -moz-linear-gradient(-60deg, #5fff83 0%, #009925 80%);background-image: -webkit-linear-gradient(-60deg, #5fff83 0%, #009925 80%);background-image: linear-gradient(120deg, #5fff83 0%, #009925 80%);height: 100px; color: #fff;">';
$msg .= '           <h1 align="center">';
$msg .= '               <a href="http://jbuacademy.dx.am"><img src="http://jbuacademy.dx.am/logo-sm.png" style="height: 100px;"/></a>';
$msg .= '               <span style="line-height: 100px;vertical-align: top; height: 100px;">'.$title.'</span>';
$msg .= '           </h1>';
$msg .= '       </div>';
$msg .= '       <div style="color: #fff; background-color: #337ab7;padding: 10px">'.$name.'`s Enquired and Messaged: </div>';
$msg .= '       <div style="background-color: #eee; padding: 10px">';
$msg .= '           <p style="text-indent: 50px;"><b>'.$message.'</b></p>';
$msg .= '       </div>';
$msg .= '       <div style="color: #fff; background-color: #337ab7;padding: 10px">'.$name.'`s Personal Informations: </div>';
$msg .= '       <div style="background-color: #eee; padding: 10px">';
$msg .= '           <table>';
$msg .= '               <tr><td>Name: </td><td><b>'.$name.'</b></td></tr>';
$msg .= '               <tr><td>Email: </td><td><b>'.$email.'</b></td></tr>';
$msg .= '               <tr><td>Phone: </td><td><b>'.$number.'</b></td></tr>';
$msg .= '           </table>';
$msg .= '       </div>';
$msg .= '       <div style="color: #eee; background-color: #222;padding: 10px">';
$msg .= '           From: <a href="http://jbuacademy.dx.am" style="color: #fff;">J.B.U. Academy</a> | Designed and Developed by <a href="http://rraza.blogspot.com" style="color: #fff;">Rex Terminous</a>';
$msg .= '       </div>';
$msg .= '   </body>';
$msg .= '</html>';

$headers = "From: ".$from."\r\n";
$headers .= "Reply-To: ".$from."\r\n";
$headers .= "CC: aftabalam1101@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


if(mail($to, "Public Enquiry", $msg, $headers)) {
    header("Location: ".$_SERVER['HTTP_REFERER']."/sent");
} else {
    header("Location: ".$_SERVER['HTTP_REFERER']."/not-sent");
}

?>
