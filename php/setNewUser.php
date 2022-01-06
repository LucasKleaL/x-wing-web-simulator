<?php 

    require "config.php";
    
    $username = $_POST['username'];

    $query = "SELECT * FROM user WHERE nome = '$username';";

    $result = mysqli_query($link, $query) or die(mysqli_error($link));

    if($result->num_rows == 0) { //usuário não encontrado, irá adicioná-lo ao banco de dados

        $query = "INSERT INTO user (nome) VALUES ('$username');";
        $result = mysqli_query($link, $query) or die(mysqli_error($link));

        if ($result) {
            $response_array['status'] = 'success';
        }
        else {
            $response_array['status'] = 'error';
        }

    } else { //usuário encontrado, retornando para o front end
        $response_array['status'] = 'registered';
    }

    echo json_encode($response_array);

?>