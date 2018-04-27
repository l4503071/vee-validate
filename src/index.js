import En from '../validator/en.js'
import Cn from '../validator/cn.js'
const dictionary = {
    en:En,
    cn:Cn
};

VeeValidate.Validator.extend('truthy',{
	getMessage:field=>'The ' + field + ' value is not truthy.',
	validate: value => /a/.test(value)
});

VeeValidate.Validator.localize(dictionary);
Vue.use(VeeValidate, {
    locale: 'en'
});
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'test',
        email2:'',
        select:''
    },
    created(){
    	this.$validator.attach({
    		name:'email2',
    		rules:'required|email'
    	});
    },
    methods: {
        changeLan() {
            this.$validator.locale = this.$validator.locale === 'cn' ? 'en' : 'cn';
        }
    },
    watch:{
    	email2:{
    		handler:function(newVal){
	    		this.$validator.validate('email2',newVal);
    		}
    	}
    }
});