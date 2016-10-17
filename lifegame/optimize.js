//get dom
var container = document.getElementById('container');
var col = Array.prototype.slice.call(container.children);

var live = []; //存放当前存活的
var model = {};

//初始化 M->V
var total = 8000;
model[total] = [];
for (var i = 0; i < total; i++) {
	model[total][i] = 0;
	Object.defineProperty(model, i, {
		set: (function(i) {
			return function(val) {
				model[total][i] = val;
				update(i, val,live);
				col[i].style.backgroundColor = val == 0 ? 'white' : 'black';
			}
		})(i),
		get: (function(i) {
			return function() {
				return model[total][i];
			}
		})(i)
	})

}

function update(index, value,live) {
	var liveindex = live.indexOf(index);
	if (value == 0) {
		liveindex != -1 ? live.splice(liveindex, 1) : null;
	} else {
		liveindex == -1 ? live.push(index) : null;
	}
}
//事件
col.forEach(function(e, index) {
	e.style.backgroundColor = 'white';
	e.setAttribute('data-index', index);
	//V->M
	e.addEventListener('click', function(event) {
		var num = this.getAttribute('data-index');
		model[num] = model[num] == 1 ? 0 : 1;
	})
});

function asyncArr(cache) {
	cache.forEach(function(e) {
		model[e.index] = e.value;
	})
}

var cx = 0;
//loop 修改model
function loop() {
	var cache = [];
	var compute = [];
	cx = cx + 1;
	console.log('第：' + cx + ' 代');
	live.forEach(function(e){
		var tem = [e+1,e-1,e-100,e+100,e+101,e-101,e-99,e+99];
		tem.forEach(function(ee){
			update(ee,1,compute);
		})
	});

	compute.forEach(function(e){
		var count = 0;
		var n = [model[e+ 1], model[e - 1], model[e - 100], model[e + 100],
				 model[e + 101], model[e - 101], model[e - 99], model[e + 99]];
		n.forEach(function(ee) {
			if (ee !== undefined) {
				count = ee == 1 ? count + 1 : count;
			}
		});
		if (count == 2) {

		} else if (count == 3) {
			cache.push({
				index: e,
				value: 1
			});
			update(e,1,live);
		} else {
			cache.push({
				index: e,
				value: 0
			})
			update(e,0,live);
		}
	});

	asyncArr(cache);
	// setTimeout(loop,2000);
}