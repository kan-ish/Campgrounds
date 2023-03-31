import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "./components/partials/NavSticky";
import Footer from "./components/partials/Footer";
import AllCampgrounds from "./components/campgrounds/AllCampgrounds";
import ViewCampground from "./components/campgrounds/ViewCampground";
import NewCampground from "./components/campgrounds/NewCampground";
import EditCampground from "./components/campgrounds/EditCampground";
import Register from "./components/users/Register";
import Login from "./components/users/Login";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container>
				<BrowserRouter>
					<Routes>
						{/* Campgrounds */}
						<Route path="/campgrounds" element={<AllCampgrounds />} />
						<Route path="/campgrounds/:id" element={<ViewCampground />} />
						<Route path="/new" element={<NewCampground />} />
						<Route path="/campgrounds/:id/edit" element={<EditCampground />} />

						{/* Users */}
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
