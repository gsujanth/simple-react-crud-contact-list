import React, { Component } from "react";
import PersonList from "./Components/PersonList";
import "./styles/App.css";
import PersonEdit from "./Components/PersonEdit";
import PersonAdd from "./Components/PersonAdd";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [
				{
					firstName: "Doktor",
					lastName: "Bad",
					id: "81d6ff6c-10f4-4db0-88f2-1ebf789b7779"
				},
				{
					firstName: "Dandy",
					lastName: "Lion",
					id: "f515b8de-5916-47db-9fa8-75efe4a5ebb2"
				}
			],
			selectedPerson: {},
			currentView: "PersonList"
		};
	}

	handlePersonClick = e => {
		this.setState({
			selectedPerson: JSON.parse(e.target.dataset.person),
			currentView: "PersonEdit"
		});
	};

	handlePersonAction = (currPerson, action) => {
		let { people } = this.state;
		let currentView = "PersonList";
		switch (action) {
			case "update":
				people = people.map(person =>
					person.id === currPerson.id ? currPerson : person
				);
				break;
			case "delete":
				people = people.filter(person => person.id !== currPerson.id);
				break;
			default:
				//add
				people.push(currPerson);
		}
		this.setState({ people, currentView });
	};

	handleViewChange = newView => {
		this.setState({ currentView: newView });
	};

	render() {
		let currentView;
		switch (this.state.currentView) {
			case "PersonEdit":
				currentView = (
					<PersonEdit
						person={this.state.selectedPerson}
						handlePersonAction={this.handlePersonAction}
						handleViewChange={this.handleViewChange}
					/>
				);
				break;
			case "PersonAdd":
				currentView = (
					<PersonAdd
						handlePersonAction={this.handlePersonAction}
						handleViewChange={this.handleViewChange}
					/>
				);
				break;
			default:
				currentView = (
					<PersonList
						people={this.state.people}
						handlePersonClick={this.handlePersonClick}
						handleViewChange={this.handleViewChange}
					/>
				);
				break;
		}

		return (
			<div className="Main">
				<h1>React CRUD Contact List</h1>
				{currentView}
			</div>
		);
	}
}

export default App;
