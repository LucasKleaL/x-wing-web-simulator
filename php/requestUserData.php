<?php 

    include "config.php";

    $username = $_POST['username'];

    $query = "SELECT * FROM user WHERE nome = '$username';";

    $result = mysqli_query($link, $query);

    $data['id'] = "";
    $return['id'] = "";
    if(($result) && ($result -> num_rows) != 0) {
        while($row_data = mysqli_fetch_assoc($result)) {
            $data['id'] = $row_data['id'];
            $data['nome'] = $row_data['nome'];
            $data['total_jogos'] = $row_data['total_jogos'];
            $data['total_jogos_ganhos'] = $row_data['total_jogos_ganhos'];
            $data['total_pontos'] = $row_data['total_pontos'];
            $data['total_vidas_perdidas'] = $row_data['total_vidas_perdidas'];
            $data['total_tiros_disparados'] = $row_data['total_tiros_disparados'];

            array_push($return, $data);
        }
    }
    else {
        echo "Error on user data recovery from database";
    }
    echo json_encode($return);

?>