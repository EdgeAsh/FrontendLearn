import './../css/index.css';
import $ from 'jquery'
require(['./common.js'],(common)=>{
	common.initIndex();
	$(function(){
		console.log(`this is jquery`);
	})
});