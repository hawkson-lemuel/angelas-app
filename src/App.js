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
					id: 1,
					name: "Algorithm",
					teacher: "Angela"
				},
				{
					id: 2,
					name: "Data Structures",
					teacher: "Gloria"
				},
				{
					id: 3,
					name: "Architecture",
					teacher: "Jason"
				},
				{
					id: 4,
					name: "Linear Electronics",
					teacher: "Kofi"
				},
			]
		}
	}

	componentDidMount() {

		// this.getPosts()
		let val = this.addNumbers(2, 10)
		console.log(val)
	}
	addNumbers = (num1, num2) => { return num1 + num2; }

	render() {
		return (
			<div className="App">
				<Header />
				<div className="coursesTitle"> <p>Courses</p></div>

				<div className="main-wrapper">
					{
						this.state.courses.map(courseItem => {
							return <Card key={courseItem.id} course={courseItem} />
						})
					}
				</div>
			</div>
		);
	}
}
export default App;