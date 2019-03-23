import React, { Component } from "react";
import PersonListEntry from "./PersonListEntry";

class PersonList extends Component {
	render() {
		const { people } = this.props;
		return (
			<React.Fragment>
				<ul className="PersonList">
					{people.length ? (
						people.map(person => (
							<PersonListEntry
								key={person.id}
								person={person}
								handlePersonClick={this.props.handlePersonClick}
							/>
						))
					) : (
						<li>Empty Contact List</li>
					)}
				</ul>

				<button onClick={() => this.props.handleViewChange("PersonAdd")}>
					Add Person
				</button>
			</React.Fragment>
		);
	}
}

export default PersonList;
