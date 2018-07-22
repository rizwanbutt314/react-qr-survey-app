<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

$HOST               = 'localhost';
$USERNAME           = 'bendo_dirk';
$PASSWORD           = 'r00tb33r';
$DATABASE           = 'bendo_gateway';

function db_connection(){
    $connection = mysqli_connect('gator4186.hostgator.com', 'bendo_dirk', 'r00tb33r');
    if (!$connection){
        die("Database Connection Failed" . mysqli_error($connection));
    }
    $select_db = mysqli_select_db($connection, $DATABASE);
    if (!$select_db){
        die("Database Selection Failed" . mysqli_error($connection));
    }
    return $connection;
}

function logout(){
    session_start();
    session_destroy();
    $arr = array('success' => true);
    echo json_encode($arr);
}


function login(){
    $connection = db_connection();

    session_start();

    if (isset($_POST['username']) and isset($_POST['password'])){

        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM `beercoaster` WHERE email='$username' and password='$password'";

        $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
        $count = mysqli_num_rows($result);

        if ($count == 1){
            $_SESSION['username'] = $username;
        }else{
            $fmsg = "Invalid Login Credentials.";
        }
    }
    if (isset($_SESSION['username'])){
        $username = $_SESSION['username'];
        $arr = array('success' => true, 'user' => $username);
        echo json_encode($arr);

    }else{
        $arr = array('success' => false, 'user' => '');
        echo json_encode($arr);
    }

}


if($_POST['action'] == 'login')
{
    login();
}
/*else if($_POST['action'] == 'logout')
{
    logout();
}
*/

?>