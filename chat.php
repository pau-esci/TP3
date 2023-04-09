<?php
$chaine = gethostbyname($_SERVER['REMOTE_ADDR']) ;
$chaine .=  " - " . $_GET['phrase'] . "\n";
$fp = fopen("chatlog.txt","a");
if ($fp == false) {
  error("Permission error on chatlog.txt: do 'chmod a+w chatlog.txt'");
} else {
  fwrite($fp, $chaine);
  fclose($fp);
  error("Success");
}
?>