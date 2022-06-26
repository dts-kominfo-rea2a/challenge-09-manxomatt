// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./style.css";
const Contact = (props) => {
    return (
		<div className="card">
			<img
				src={props.data.photo}
				alt={props.data.name}
				className="img-size"
			/>

			<div className="content">
				<h3>{props.data.name}</h3>
				<p className="title">{props.data.email}</p>
				<p>{props.data.phone}</p>
			</div>
		</div>
	);
}

export default Contact;