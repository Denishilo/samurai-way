import React from 'react';
import './index.css';
import {renderTree} from "./render";
import {state} from "./redux/redux";

renderTree(state)