<?php
  header("Content-type:text/html;charset=utf-8");
	
	$responseData = array("code"=>0,"msg"=>"");

	$username = $_POST['username'];
	$password = $_POST['password'];
	$createtime = $_POST['createTime'];
	$repassword = $_POST['repassword'];

	if(!$username){
		$responseData['code'] = 1;
		$responseData['msg'] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}

	if(!$password){
		$responseData['code'] = 2;
		$responseData['msg'] = "密码不能为空";
		echo json_encode($responseData);
		exit;
	}

	if($repassword !== $password){
		$responseData['code'] = 3;
		$responseData['msg'] = "两次密码不一致";
		echo json_encode($responseData);
		exit;
	}

	$link = mysql_connect("localhost","root","123456");

	if(!$link){
		$responseData['code'] = 4;
		$responseData['msg'] = '服务器忙';
		echo json_encode($responseData);
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("haier");

	$sql = "SELECT * FROM user WHERE username='{$username}'";
	// echo $sql;

	$res = mysql_query($sql);

	$row = mysql_fetch_assoc($res);
	// echo $row;
	if($row){
		$responseData['code'] = 5;
		$responseData['msg'] = "用户名已存在";
		echo json_encode($responseData);
		exit;
	}

  $password = md5(md5(md5($password)."qianfeng")."qingdao");

	$sql2 = "INSERT INTO user(username,password,createtime) VALUES('{$username}','{$password}','$createtime')";
	// echo $sql2;
	$res = mysql_query($sql2);
	//  var_dump($res);

	if(!$res){
		$responseData['code'] = 6;
		$responseData['msg'] = "注册失败";
		echo json_encode($responseData);
		exit;
	}

	$responseData['msg'] = "注册成功";
	echo json_encode($responseData);

	mysql_close($link);

