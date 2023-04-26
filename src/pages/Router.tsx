// components 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router