<?php

switch ($_SERVER['REQUEST_METHOD']) {
  case "OPTIONS":
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept");
    exit;

  case "POST":
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: text/plain; charset=utf-8");

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (!$params || !isset($params->email, $params->name, $params->message)) {
      http_response_code(400);
      echo "BAD_REQUEST";
      exit;
    }

    $email = trim($params->email);
    $name = trim($params->name);
    $userMessage = trim($params->message);

    $recipient = 'kontakt@taxedtech.de';
    $subject = "Contact From <{$email}>";

    $body = "From: " . htmlspecialchars($name) . "<br>"
          . "Email: " . htmlspecialchars($email) . "<br><br>"
          . nl2br(htmlspecialchars($userMessage));

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: TaxEdTech <noreply@taxedtech.de>';
    $headers[] = 'Reply-To: ' . $email;

    $ok = mail($recipient, $subject, $body, implode("\r\n", $headers));

    if ($ok) {
      echo "OK";
      exit;
    }

    http_response_code(500);
    echo "MAIL_FAILED";
    exit;

  default:
    header("Allow: POST, OPTIONS", true, 405);
    exit;
}
