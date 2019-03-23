import React, { Component } from "react";

class PersonEdit extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const person = this.props.person;
		person.firstName = this.firstName.value;
		person.lastName = this.lastName.value;
		this.props.handlePersonUpdate(person);
	};

	render() {
		const { firstName, lastName } = this.props.person;
		return (
			<div>
				<section>
					<h3>Selected Person:</h3>
					<h5>
						{firstName}, {lastName}
					</h5>
				</section>
				<form onSubmit={this.handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="firstName">New First Name:&nbsp;</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							ref={input => (this.firstName = input)}
							required
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastName">New Last Name:&nbsp;</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							ref={input => (this.lastName = input)}
							required
						/>
					</div>
					<div className="input-wrapper">
						<button type="submit" value="Save">
							Save
						</button>
						<button type="reset" value="Reset">
							Reset
						</button>
						<button
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

export default PersonEdit;
