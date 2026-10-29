<?php
// Database connection settings for Xenobe Rage.
// Environment variables are supported for container deployments. Local legacy
// installations may continue to edit the values below.
$ADOdbpath = "backends/adodb";
$dbport = getenv('DB_PORT') ?: "";
$ADODB_SESSION_CONNECT = getenv('DB_HOST') ?: "127.0.0.1";
$ADODB_SESSION_USER = getenv('DB_USER') ?: "";
$ADODB_SESSION_PWD = getenv('DB_PASSWORD') ?: "";
$ADODB_SESSION_DB = getenv('DB_NAME') ?: "";
$ADODB_CRYPT_KEY = getenv('ADODB_CRYPT_KEY') ?: "";
$ADODB_SESSION_DRIVER = "mysqlt";
$db_persistent = 0;
$db_prefix = getenv('DB_PREFIX') ?: "";
$website_domain_default = "";
$gamedomain = "";
$gamepath = "/";
?>