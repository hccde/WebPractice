var Vue = require('vue');
var Nav = require('../components/nav.vue');
console.log('nav');
console.log(Nav);
var Parent = Vue.extend({
	template: '<nav><navtem></navtem></nav>',
	components: {
		'navtem': Nav
	}
});

Vue.component('nav-component',Parent)

new Vue({
	el:'body'
})