import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Register from "./pages/Register";
function App() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					{isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
				</Route>
				<Route path="/login">
					{isLoggedIn ? <Redirect to="/" /> : <Login />}
				</Route>
				{/* <Route path="/register">
					{isLoggedIn ? <Redirect to="/" /> : <Register />}
				</Route> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
