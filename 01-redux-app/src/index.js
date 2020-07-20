import React from "react";

import ReactDOM from "react-dom";

import { createStore } from "redux";

import Counter from "./components/Counter";

import counterState from "./reducers";

const store = createStore(counterState)

const rootElement = document.getElementById('root')