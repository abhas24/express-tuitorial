const Joi = require('joi');// Will return a class
const express = require('express');
const app = express();

app.use(express.json());
const courses = [
	{id:1, name:'course1'},
	{id:2, name:'course2'},
	{id:3, name:'course3'}
];

app.get('/', (req,res) => {
	res.send('Hello World');
});

// Get all couses
app.get('/api/courses',(req,res) => {
	res.send(courses);
});

// get single course
app.get('/api/course/:id',(req,res) => {
	const course = courses.find(c => {
		if(c.id === parseInt(req.params.id)) return c;
	});

	if(!course) res.status(404).send('The course with the given id was not found.');
	res.send(course);
});

//post methods example with param (name) validation
//Here we are using joi npm package for validating the input
app.post('/api/courses',(req,res)=>{

	const schema = {
		name:Joi.string().min(3).required()
	};

	const result = Joi.validate(req.body,schema);
	//const { error } = Joi.validate(req.body,schema); 
	//const { error } is same as result.error
	// { error } is known as object destructuring. 
	console.log(result);
	if(result.error){
		return res.status(400).send(result.error.details[0].message);
	}
	var course = {
		id:courses.length+1,
		name:req.body.name
	}

	courses.push(course);
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}...`));