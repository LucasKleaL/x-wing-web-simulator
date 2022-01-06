<?php 

    require "config.php";

    $username = $_POST['username'];
    $query = "UPDATE user SET total_vidas_perdidas = total_vidas_perdidas + 1 WHERE nome = '$username';";

    $result = mysqli_query($link, $query);

    if ($result) {
        $response_array['status'] = 'successful';
    }
    else {
        $response_array['status'] = 'error';
    }

    echo json_encode($response_array);

?>