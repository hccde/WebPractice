//by admos

/*主进程解析分页，返回requset pool
  子进程解析requset pool
  这是一个两步爬虫*/


var request = require('request'),
	Promise = require('promise'),
	fs = require('fs'),
	iconv = require('iconv-lite'),
	cluster = require('cluster'),
	cheerio = require('cheerio');

//request.post({url:'http://service.com/upload', form: {key:'value'}},callback)
//more detail :https://github.com/request/request

// function child_process(pool){

// }

var pool = []

function childAnalyse(html){//子进程的options也需要根据request_pool修改
	//子进程解析html
	$ = cheerio.load(html);
	var obj = $('td input').find('input').prevObject;
	for(var i in obj){
		var src = obj[i].attribs.src;
		if(src){
			console.log(src)
			fs.appendFileSync('image.txt',src+'\r\n')
		}
	}
	return;
}


function sleep(milliSeconds) { 
    var startTime = new Date().getTime(); 
    while (new Date().getTime() < startTime + milliSeconds);
 };


function getReqPool(e){
	var options;
	if(cluster.isMaster){
		options = {
			url:"http://www.baidu.com",
			headers:{
				"Host":'',
				"Pragma":'no-cache',
				"DNT":1,
				"Cache-Control":"no-cache",
				"Upgrade-Insecure-Requests":1,
				"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
				"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
				"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4",
				"Accept-Encoding":"utf-8,deflate, sdch",
				"Cookie":"__cfduid=dc59765d7d61ea4f43b6f3c98c50484891468852859; __utmt=1; CNZZDATA950900=cnzz_eid%3D645286048-1468852005-%26ntime%3D1468852005; __utma=25213423.1538083676.1468852862.1468852862.1468852862.1; __utmb=25213423.9.10.1468852862; __utmc=25213423; __utmz=25213423.1468852862.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)"
			}
		}
	}else{
		options = {
			url:'http://baidu.com/'+e,
			headers:{
				"Host":'cl.cgsuu.com',
				"Pragma":'no-cache',
				"DNT":1,
				"Cache-Control":"no-cache",
				"Upgrade-Insecure-Requests":1,
				"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
				"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
				"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4",
				"Accept-Encoding":"utf-8,deflate, sdch",
				"Cookie":"__cfduid=dc59765d7d61ea4f43b6f3c98c50484891468852859; __utmt=1; CNZZDATA950900=cnzz_eid%3D645286048-1468852005-%26ntime%3D1468852005; __utma=25213423.1538083676.1468852862.1468852862.1468852862.1; __utmb=25213423.9.10.1468852862; __utmc=25213423; __utmz=25213423.1468852862.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)"
			}
		}
	}	

	function analyse(html){
	$ = cheerio.load(html);
	var request_pool = [];
	var obj = $('table h3 a').find('a').prevObject;

	for(var i=0;i<obj.length;i++){
		if(obj[i].attribs.href.indexOf('html')){
			request_pool.push(obj[i].attribs.href)
		}
	}
	//传url进入request_pool 要过滤
     pool.pop().send(request_pool)//改为触发子进程事件
     return console.log(pool.length)
}
	function readyReq(res){
 		if(cluster.isMaster){
 				var number = parseInt(options.url.split('=').pop())+1;
				var arry = options.url.split('=')
				arry.pop()
				arry.push(number)
				options.url = arry.join('=')
				console.log(options.url)
 				analyse(res.body)
 			}else{
 				childAnalyse(res.body);
 				return;
 			}

		// call getReqPool
		console.log('parent number:\n'+number)
		return netWork()

	}
	function netWork(){
	if(pool.length<=0&&cluster.isMaster) sleep(2000)//没有可用进程， 父进程阻塞
	var reqPromise = new Promise(function(resolve, reject){
			request(options,function(err,res,body){
				if(err) reject(err)
				else resolve(res)
			})
		});

		reqPromise.then(readyReq)
	}
	netWork()
}
//准备子进程 get request pool
function main(){
	if(cluster.isMaster){
		var workers = [];
		var noBusy = [];//闲进程

		require('os').cpus().forEach(function(){
    		var worker = cluster.fork();
    		workers.push(worker)
    		pool.push(worker)
  		});

		//父进程等待子进程的事件，维护进程
		workers.forEach(function(e){
			e.on('message',function(msg){
				if (msg) {
					console.log(msg)
					pool.push(e);
				}
			})
		})

		getReqPool()

	}else{
		//子进程初始化为等待master的事件
		process.on('message',function(msg){
			//接受父进程传来的requestpool，处理pool，处理完成之后触发
			msg.forEach(function(e,index){
				getReqPool(e);
				if(index>=msg.length-1){
					console.log('done')
					process.send('hello master')//子进程通知父进程空闲
				}
			})
		})
	}
}

main()
