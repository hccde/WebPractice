require('../scss/detail.scss')
var Vue = require('vue'),
	DetailedItem = require('../components/detailedItem.vue'),
	Nav = require('../components/nav.vue');

var detailedItem = Vue.extend({
	template:'<li><item></item></li>',
	components:{
		'item':DetailedItem
	}
})

var Parent = Vue.extend({
	template: '<nav><navtem></navtem></nav>',
	components: {
		'navtem': Nav
	}
});

Vue.component('nav-components',Parent);
Vue.component('detaileditem-components',detailedItem);//详细问题的组件
 new Vue({
 	el:'body'
 })