console.log('before');

/*const user = getUser(1,(userDetails)=>{
	console.log('userDetails',userDetails);
	getrepositories(userDetails.githubUsername,(repositories)=>{
		console.log('repositories',repositories);
		// This coding staructure is called as callback hells
	});
});*/

const user = getUser(1,testgetrepositories);
console.log(user);
console.log('after');
//Solving the problem of callback hells
function testgetrepositories(userDetails){
	console.log('userDetails',userDetails);
	getrepositories(userDetails.githubUsername,displayRepositories);
}
function displayRepositories(repositories){
	console.log(repositories[0]);
}
//Example of callback function 
function getUser(id,callback){
	setTimeout(()=>{
		console.log('Reading user from a databse');
		callback({id:id,githubUsername:'Anurag'});
	},2000);
}


function getrepositories(username,callback){
	setTimeout(()=>{
		console.log('Fetching the repositories...');
		callback(['repo1','repo2','repo3']);
	},2000);
}
