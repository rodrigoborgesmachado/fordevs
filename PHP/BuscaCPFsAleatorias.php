<?php
$url = "http://teste.sunsalesystem.com.br/api/fordev/pessoa/buscarCpf?quantidade=" . htmlspecialchars($_GET["quantidade"]);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);

echo $resp;

?>