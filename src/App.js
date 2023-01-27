import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Landing
} from './containers';
import './App.css';

const App = () => {
	return (
		<div className="App">
			{/* Maybe put a navbar here? */}
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;