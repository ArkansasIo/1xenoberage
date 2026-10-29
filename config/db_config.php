<?php
// Blacknova Traders - A web-based massively multiplayer space combat and trading game
// Copyright (C) 2001-2012 Ron Harwood and the BNT development team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// File: db_config.php
//
// Environment variables are supported for container deployments. Local legacy
// installations may continue to edit the values below when not using Docker.

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