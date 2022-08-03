import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Browse />} exact />
				<Route path="/search" element={<Search />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
