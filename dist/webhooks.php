<?php
/**
 * Created by PhpStorm.
 * User: 24922
 * Date: 2017/11/21
 * Time: 19:40
 */

ini_set('display_errors',1);            //错误信息
ini_set('display_startup_errors',1);    //php启动错误信息
error_reporting(-1);

$url="http://agw.cdfykj.net/webhooks.php?token=efe48c52cf48c3586b3dcb4dfa26dab1";
$token = isset($_GET['token'])?trim($_GET['token']):'';
if (empty($token) || $token != 'efe48c52cf48c3586b3dcb4dfa26dab1') {
    exit('error request');
}
$json = json_decode(file_get_contents('php://input'), true);

$cmd = 'cd /data/wwwroot/agw.cdfykj.net && git pull';
echo shell_exec($cmd);