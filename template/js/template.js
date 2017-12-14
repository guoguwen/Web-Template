/**
 * banner组件
 */
Vue.component('banner', {
	props:['src'],
	template: '<div><img :src="src" alt="" width="375" height="176"></div>',
});
