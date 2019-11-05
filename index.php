<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
    // BASE URL / ROOT PATH
    define("BASEURL", "http://".$_SERVER['HTTP_HOST'].((dirname($_SERVER['PHP_SELF'])=="/") ? "" : dirname($_SERVER['PHP_SELF']))."/");

    $load = "page.php";
    $parameters = explode("/", $_GET['parameters']);
    if ($parameters != "") {
        switch ($parameters[0]) {
            case "":
            $load = "page.php";
                break;
            default:
                $load = "page.php";
        }
        include($load);
    } else {
        include($load);
    }
?>