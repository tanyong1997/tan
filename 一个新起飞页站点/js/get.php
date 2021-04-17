<?php
	// 设置字符集
	header("content-type:text/html;charset = utf-8;");
	
	// 连接数据库
	$dsn = "mysql:host=localhost;daname=h52016";
	// 创建PDO对象
	$pdo = new PDO($dsn,'root','root');
	// 设置字符集
	$pdo->exec("set names utf-8")
	
	$sql->$dsn->prepare("insert into tablename(username,password)  value($_GET['zhanghao'],$_GET['mima']) ");
	$sql->execute();
	
	
?>