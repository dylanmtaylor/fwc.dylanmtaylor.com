<?php
include("md.php");
$detect = new Mobile_Detect();
if ($detect->isMobile()) {
	require 'beginning.txt'
	if ($detect->isAndroid()) {
		require 'android.txt';
	} else {
		require 'other.txt';
	}
	require 'end.txt';
} else {
	require 'full.php';
}
?>
