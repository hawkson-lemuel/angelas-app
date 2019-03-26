import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Card from './Card'


class App extends Component {
	constructor() {
		super();
		this.state = {
			courses: [
				{
					name: "Algorithm",
					teacher: "Angela"
				},
				{
					name: "Data Structures",
					teacher: "Gloria"
				},
				{
					name: "Architecture",
					teacher: "Jason"
				},
				{
					name: "Linear Electronics",
					teacher: "Kofi"
				},
			]
		}
	}

	componentDidMount() {
		// this.getPosts()
	}

	// getPosts=()=>{
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then((response) => {return response.json()})
	// 	.then((result)=>{
	// 		console.log(result)
	// 	})
	// }

	render() {
		return (
			<div className="App">
				<Header />
				<div className="coursesTitle"> <p>Courses</p></div>

				<div className="main-wrapper">
					{
						this.state.courses.map(courseItem => {
							return <Card course={courseItem} />
						})
					}
				</div>
			</div>
		);
	}
}
export default App;