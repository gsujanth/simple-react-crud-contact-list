import React, { Component } from "react";
import PersonListEntry from "./PersonListEntry";

class PersonList extends Component {
	render() {
		return (
			<ul className="PersonList">
				{this.props.people.map(person => (
					<PersonListEntry
						key={person.id}
						person={person}
						handlePersonClick={this.props.handlePersonClick}
					/>
				))}
			</ul>
		);
	}
}

export default PersonList;
