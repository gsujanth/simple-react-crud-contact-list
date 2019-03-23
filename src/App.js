import React, { Component } from "react";
import PersonList from "./PersonList";
import "./styles/App.css";
import PersonEdit from "./PersonEdit";

const uuid = require("uuid4");
// id = uuid();
// This will create a unique id for new persons

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [
				{
					firstName: "Margaret",
					lastName: "Hamilton",
					id: "81d6ff6c-10f4-4db0-88f2-1ebf789b7779"
				},
				{
					firstName: "Donald",
					lastName: "Knuth",
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

	handlePersonUpdate = (currPerson, action) => {
		let { people } = this.state;
		let currentView = "PersonList";
		if (action === "delete") {
			people = people.filter(person => person.id !== currPerson.id);
		} else if (action === "update") {
			people = people.map(person => {
				if (person.id === currPerson.id) {
					return currPerson;
				} else {
					return person;
				}
			});
		}
		this.setState({ people, currentView });
	};

	handleViewChange = newView => {
		this.setState({ currentView: newView });
	};

	render() {
		const currentView =
			this.state.currentView === "PersonList" ? (
				<PersonList
					people={this.state.people}
					handlePersonClick={this.handlePersonClick}
				/>
			) : (
				<PersonEdit
					person={this.state.selectedPerson}
					handlePersonUpdate={this.handlePersonUpdate}
					handleViewChange={this.handleViewChange}
				/>
			);

		return (
			<div className="Main">
				<h1>React CRUD Contact List</h1>
				{currentView}
			</div>
		);
	}
}

export default App;
