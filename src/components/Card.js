import React from "react";
import For from "../hoc/For";
import "./Card.scss";
export default function Card({
	picture,
	price,
	title,
	heading,
	animation,
	bck,
	onEventHandler,
	list
}) {
	return (
		<div className={`card ${animation}`}>
			<div className="card__side card__side--front">
				<div className={`card__picture ${picture}`}>&nbsp;</div>
				<h4 className="card__heading">
					<span className={`card__heading-span ${heading}`}>{title}</span>
				</h4>
				<div className="card__details">
					<ul>
						<For list={list} callback={onEventHandler} />
					</ul>
				</div>
			</div>
			<div className={`card__side card__side--back ${bck}`}>
				<div className="card__cta">
					<div className="card__price-box">
						<p className="card__price-only">Only</p>
						<p className="card__price-value">${price}</p>
					</div>
					<a href="#" className="btn btn--white">
						Book now!
					</a>
				</div>
			</div>
		</div>
	);
}
