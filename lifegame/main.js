//get dom
var container = document.getElementById('container');
var col = Array.prototype.slice.call(container.children);

//鼠绘
// flag = 0;

// container.addEventListener('mousedown',function(){
// 	flag = 1;
// })
// container.addEventListener('mouseup',function(){
// 	flag = 0;
// })
// col.forEach(function(e){
// 	e.style.backgroundColor = 'white';
// 	e.addEventListener('mouseover',function(event){
// 		if(!flag){return;}
// 		e.style.backgroundColor = 'black';
// 	})
// });

//动态绑定
//model
//defineproperty的坑，设置了setter getter 则无法对value进行操作了
var live = [];//存放当前存活的
var model = {};

//初始化 M->V
var total = 8000;
model[total] = [];
for(var i = 0;i<total;i++){
	model[total][i] = 0;
	Object.defineProperty(model,i,{
		set:(function(i){
			return function(val){
			model[total][i] = val;
			update(i,val)
			col[i].style.backgroundColor= val == 0?'white':'black';
		}})(i),
		get:(function(i){
			return function(){
				return model[total][i];
			}
		})(i)
	})

}

function update(index,value){
	var liveindex = live.indexOf(index);
	if(value == 0){
		liveindex != -1 ?live.splice(liveindex,1):null;
	}else{
		liveindex == -1 ?live.push(index):null;
	}
}
//事件
col.forEach(function(e,index){
	e.style.backgroundColor = 'white';
	e.setAttribute('data-index',index);
	//V->M
	e.addEventListener('click',function(event){
		var num = this.getAttribute('data-index');
		model[num] = model[num] == 1? 0 : 1;
	})
});

function asyncArr(cache){
	cache.forEach(function(e){
		model[e.index] = e.value;
	})
}

var cx = 0;
//loop 修改model
function loop(){
	var cache = [];
	cx = cx+1;
	console.log('第：'+cx+' 代');
for(var i = 0;i<total;i++){
	var  count = 0;
	var n = [model[i+1],model[i-1],model[i-100],model[i+100],model[i+101],model[i-101],model[i-99],model[i+99]]
	n.forEach(function(e){
		if(e !== undefined){
			count = e == 1?count+1:count;
		}
	});
	if(count == 2){

	}else if(count == 3){
		cache.push({
			index:i,
			value:1
		});
	}else{
		cache.push({
			index:i,
			value:0
		})
	}
}
	asyncArr(cache);
	// setTimeout(loop,2000);
}

