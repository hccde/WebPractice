require('../scss/utils.scss');
require('../dest/image/spritestotal.png');
var Vue = require('vue'),
	Nav = require('../components/nav.vue');
	Item = require('../components/listItem.vue');


var Parent = Vue.extend({
	template: '<nav><navtem></navtem></nav>',
	components: {
		'navtem': Nav
	}
});

var List = Vue.extend({
	template:'<ul><item></item></ul>',
	components:{
		'item':Item
	}
});

Vue.component('list-component',List);
Vue.component('nav-component',Parent);

new Vue({
	el:'body'
});

