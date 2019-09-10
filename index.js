var p = new Promise(function(resolve, reject){
	resolve(1);
}).then(function(result){
	console.log('result',result);
});



var pes6 = new Promise((resolve,reject) => {
	setTimeout(()=>{
		resolve(1);
	},2000);
}).then((result)=>{
	console.log('In ES6');
	console.log('result',result);
	return result;
}).then((result)=>{
	console.log('result',result*2);
})