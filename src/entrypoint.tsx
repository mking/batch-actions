import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Example from "./components/Example";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <Example />
    </Provider>,
    document.getElementById("content"),
);
