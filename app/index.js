// @flow
import React from "react";
import { render } from "react-dom";
import "@fortawesome/fontawesome";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import Root from "./containers/Root";
import { configureStore } from "./store";
import { generateTimer } from "./actions/timer";
import type { Store } from "./types/Store";
import "./style";

const store: Store = configureStore();

store.dispatch(generateTimer({ name: "first" }));
store.dispatch(generateTimer({ name: "second" }));
store.dispatch(generateTimer({ name: "third" }));
store.dispatch(generateTimer({ name: "forth" }));
store.dispatch(generateTimer({ name: "fifth" }));

// $FlowFixMe
render(<Root store={store} />, document.getElementById("root"));
