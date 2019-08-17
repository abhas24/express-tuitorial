const express = require('express');
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}...`));