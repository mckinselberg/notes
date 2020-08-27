import React from 'react';
import ReactDOM from 'react-dom';

import Modes from './components/Modes';

let titleTag = document.getElementsByTagName('title');
titleTag.textContent="Modes / "

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Modes />, wrapper) : false;