<?php 
class Database{

    private $hostname ="localhost";
    private $database ="Productos_Juajos_market";
    private $username ="root";
    private $password ="1234";
    private $charset ="utf8";

    function conectar()
    {
        try{
        $conexion = "mysql:host=" . $this->hostname . "; dbname=" . $this->database . ";charset=" . $this->charset; 
        $options = [
            pdo::attr_errmode=> pdo::errmode_exception,
            pdo::attr_emulate_prepares=> false 
        ];
     

    $pdo = new PDO($conexion, $this->username, $this->password, $options);

    return $pdo;
    } catch(pdoexception $e){
        echo 'error conexion: ' . $e->getmessage();
        exit;

    }
    }

}