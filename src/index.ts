import mdInputWrapper = require('./md-input-wrapper.vue')

export {mdInputWrapper}

export default {
	install(Vue, options) {
		Vue.component('md-input-wrapper', mdInputWrapper);
	}
};