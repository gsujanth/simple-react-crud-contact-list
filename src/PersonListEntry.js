import React from "react";

const PersonListEntry = props => {
	const { person, handlePersonClick } = props;
	const { firstName, lastName } = person;
	return (
		<li>
			{firstName} {lastName}
			<button
				className="person-btn"
				onClick={handlePersonClick}
				data-person={JSON.stringify(person)}
			>
				Edit
			</button>
		</li>
	);
};

export default PersonListEntry;
