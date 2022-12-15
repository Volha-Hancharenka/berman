<?php
  $token          = "5932511387:AAGDS1JojBr3fUwi3mcubhBeFGNtPQ3e6Jw";
  $chat_id        = "-1001722135149";

  $name           = $_POST['user_name'];
  $phone          = $_POST['user_phone'];
  $email          = $_POST['user_email'];
  $problems       = $_POST['problems'];
  $emotions       = $_POST['emotions'];
  $cituations     = $_POST['cituations'];

  $arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone,
    'E-mail:' => $email,
    'Проблема клиента:' => $problems,
    'Эмоции клиента:' => $emotions,
    'Ситуация клиента:' => $cituations,
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if ($sendToTelegram) {
    $message = "Заявка успешно отправлена!";
    $status = 200;
  } else {
    $message = "Error";
    $status = 500;
  }

  header('Content-Type: application/json');
  echo json_encode(["message" => $message, "status" => $status]);
?>