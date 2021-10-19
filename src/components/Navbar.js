const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm"
			aria-label="Main navigation"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Logo
				</a>
				<button
					className="navbar-toggler p-0 border-0"
					type="button"
					id="navbarSideCollapse"
					data-bs-toggle="offcanvas"
					data-bs-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="offcanvas offcanvas-end" id="navbarsExampleDefault">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasExampleLabel">
							Offcanvas
						</h5>
						<button
							type="button"
							className="btn-close text-reset"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link btn btn-dark text-white" href="#">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link btn btn-info text-white ms-1" href="#">
									Register
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
