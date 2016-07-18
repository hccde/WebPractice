//by admos

/*主进程解析分页，返回requset pool
  子进程解析requset pool
  这是一个两步爬虫*/


var request = require('request'),
	Promise = require('promise'),
	// child_process = require(child_process),
	cluster = require('cluster'),
	cheerio = require('cheerio');

//request.post({url:'http://service.com/upload', form: {key:'value'}},callback)
//more detail :https://github.com/request/request

// function child_process(pool){

// }


function analyse(html,pool){
	$ = cheerio.load(html);
	var request_pool = ['1'];
	//传url进入request_pool 要过滤

    return pool.pop().send(request_pool)//改为触发子进程事件
}

function childAnalyse(html,options){//子进程的options也需要根据request_pool修改
	//子进程解析html
	$cd = cheerio.load(html);
	console.log('save');
	process.send('hello master')//子进程通知父进程空闲
	return;
}


function sleep(milliSeconds) { 
    var startTime = new Date().getTime(); 
    while (new Date().getTime() < startTime + milliSeconds);
 };


function getReqPool(pool){
	if(pool.length<=0) sleep(2000)//没有可用进程，阻塞

	var options;
	if(cluster.isMaster){
		options = {
			url:"http://www.baidu.com",
			method:"get",
			header:{

			}
		}
	}else{
		options = {
			url:"http://www.bing.com",
			method:"get",
			header:{

			}
		}
	}	

	function readyReq(res){
		//change options

		//pool被readyReq闭包了
 		if(cluster.isMaster){
 				analyse(res.body,pool)
 			}else{
 				console.log(111)
 				childAnalyse(res.body,options);
 				return;
 			}

		// call getReqPool
		console.log('parent again')
		return getReqPool(pool)

	}

	var reqPromise = new Promise(function(resolve, reject){
		request(options,function(err,res,body){
			if(err) reject(err)
			else resolve(res)
		})
	});

	reqPromise.then(readyReq)

}
//准备子进程 get request pool
function main(){
	if(cluster.isMaster){
		var workers = [];
		var noBusy = [];//闲进程

		require('os').cpus().forEach(function(){
    		var worker = cluster.fork();
    		workers.push(worker)
    		noBusy.push(worker)
  		});

		//父进程等待子进程的事件，维护进程
		workers.forEach(function(e){
			e.on('message',function(msg){
				if (msg) {
					noBusy.push(e);
				}
			})
		})

		getReqPool(noBusy)

	}else{
		//子进程初始化为等待master的事件
		process.on('message',function(msg){
			//接受父进程传来的requestpool，处理pool，处理完成之后触发
			msg.forEach(function(e){
				getReqPool([1]);
			})
		})
	}
}

main()
