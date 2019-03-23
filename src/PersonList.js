import React, { Component } from "react";

class PersonList extends Component {
	render() {
		return (
			<ul className="PersonList">
				{this.props.people.map(person => (
					<li key={person.id}>
						<button onClick={this.props.handlePersonClick} data-id={person.id}>
							{person.firstName} {person.lastName}
						</button>
					</li>
				))}
			</ul>
		);
	}
}

export default PersonList;
