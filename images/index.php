<!DOCTYPE html>
<html >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Current Status</title>
    </head>
    <body>
    <ul>
    <?php
    if ($handle = opendir('.')) {
        while (false !== ($file = readdir($handle))) {
            if ($file != "." && $file != "..") {
                echo "<li><a href=\"$file\">$file</a></li>";
            }
        }
        closedir($handle);
    }
    ?>
    </ul>
    </body>
</html>
