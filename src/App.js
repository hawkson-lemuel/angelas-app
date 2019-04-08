import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Card from './Card'


class App extends Component {
	constructor() {
		super();
		this.state = {
			courses: []
		}
	}

	componentDidMount() {
		console.log(this.state.courses)

		fetch('https://jsonplaceholder.typicode.com/posts').then(result=>result.json()).then(result=>{
			this.setState({courses:result})
			console.log(this.state.courses)
		})
	}

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