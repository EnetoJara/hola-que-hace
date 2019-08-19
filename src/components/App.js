import React, { Component } from "react";
import Card from "./Card";

const list1 = [
	{ id: 1, text: "3 day course" },
	{ id: 2, text: "Up to 30 people" },
	{ id: 3, text: "2 exams" },
	{ id: 4, text: "I'll give my personal email" },
	{ id: 5, text: "Difficulty: easy" }
];

const list2 = [
	{ id: 1, text: "6 day course" },
	{ id: 2, text: "Up to 15 people" },
	{ id: 3, text: "4 exams" },
	{ id: 4, text: "I'll give my personal phone" },
	{ id: 5, text: "Difficulty: mid" }
];

const list3 = [
	{ id: 1, text: "3 day course" },
	{ id: 2, text: "Up to 30 people" },
	{ id: 3, text: "2 exams" },
	{ id: 4, text: "I'll send some nudes" },
	{ id: 5, text: "Difficulty: Legent" }
];

class App extends Component {
	constructor(props) {
		super(props);
	}
	printList = item => {
		return <li key={item.id}>{item.text}</li>;
	};

	render = () => {
		return (
			<div className="flex-container">
				<div className="flex-item-3">
					<Card
						heading="card__heading-span--1"
						picture="card__picture--1"
						title="react"
						animation="right"
						bck="card__side--back-1"
						list={list1}
						onEventHandler={this.printList}
						price="20,000"
					/>
				</div>
				<div className="flex-item-3">
					<Card
						heading="card__heading-span--2"
						picture="card__picture--2"
						title="js"
						animation="up"
						bck="card__side--back-2"
						price="40,000"
					/>
				</div>
				<div className="flex-item-3">
					<Card
						heading="card__heading-span--3"
						picture="card__picture--3"
						title="node"
						animation="left"
						bck="card__side--back-3"
						price="buy a house"
					/>
				</div>
			</div>
		);
	};
}

export default App;
