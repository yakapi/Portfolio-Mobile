<?php

$contact_val = array("prenom" => "",
                      "nom" => "",
                      "email" => "",
                      "message" => "",
                      "isSuccess" => false);
$result = array("success" => false);

if ($_SERVER["REQUEST_METHOD"] ==  "POST") {
  $contact_val["prenom"] = $_POST["prenom"];
  $contact_val["nom"] = $_POST["nom"];
  $contact_val["email"] = $_POST["email"];
  $contact_val["message"] = $_POST["message"];

  if (!empty($contact_val["prenom"]) && !empty($contact_val["nom"]) && !empty($contact_val["email"]) && !empty($contact_val["message"])) {
    $contact_val["isSuccess"] = true;
  }
  if ($contact_val["isSuccess"] == true) {
    $alaligne = "\n";
    $to = "victor.barlier@outlook.fr";
    $sujet = "vote PortoFolio !";
    $message = $contact_val["prenom"] . "a essayer de vous contactez" . $alaligne;
    $message .= "mail du contact: " . $contact_val["email"] . $alaligne;
    $message .= "message : " . $contact_val["message"] . $alaligne;
    $send = mail($to, $sujet, $message);
    if ($send == true) {
      $result["success"] = true;
    }
  }
  header('Content-type: application/json');
  echo json_encode($result);



}
 ?>
