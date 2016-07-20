var http = require('http');
var fs = require('fs');
var data = fs.readFileSync('image.txt','utf-8').toString()
var arry = data.split('\r\n')
var index = 100;
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain

	response.writeHead(200, {'Content-Type': 'html'});
	// 发送响应数据 "Hello World"
	response.end('<html><body><a href="'+arry[index]+'">'+arry[index]+'</a></body></html>');
	index = index+1;
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888')