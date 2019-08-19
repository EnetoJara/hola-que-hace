import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import "./styles/index.scss";
import * as worker from "./worker";
function toRender(Component) {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById("eneto-root")
	);
}

toRender(App);

if (module.hot) {
	module.hot.accept("./components/App.js", () => {
		const NewCounter = require("./components/App.js").default;

		toRender(NewCounter);
	});
}

worker.unregister();
