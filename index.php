<?php
include("md.php");
$detect = new Mobile_Detect();
if ($detect->isMobile()) {
	require 'beginning.htm';
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'android')>0) {
    	require 'android.htm';
	} else {
		require 'other.htm';
	}
	require 'end.php';
} else {
	require 'full.php';
}
?>
