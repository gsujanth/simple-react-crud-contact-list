import React, { Component } from "react";
const uuid = require("uuid4");

class PersonAdd extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const person = {
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			id: uuid()
		};

		this.props.handlePersonAction(person, "add");
	};

	render() {
		return (
			<div>
				<h3>Add a new contact: &nbsp;</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="firstName">First Name:&nbsp;</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							ref={input => (this.firstName = input)}
							required
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastName">Last Name:&nbsp;</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							ref={input => (this.lastName = input)}
							required
						/>
					</div>
					<div className="input-wrapper">
						<button type="submit" value="Add">
							Add
						</button>
						<button type="reset" value="Reset">
							Reset
						</button>
						<button
							type="button"
							onClick={() => this.props.handleViewChange("PersonList")}
							value="Cancel"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default PersonAdd;
