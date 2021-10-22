import { useSelector } from "react-redux";
import { selectUser } from "../redux/Auth/userSlice";

const Dashboard = () => {
	const localUser = useSelector(selectUser);
	// console.log(localUser);
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								<img
									src={localUser.imageUrl}
									alt={localUser.name}
									className="rounded-circle"
									width={150}
								/>
								<div className="mt-3">
									<h4>{localUser.name}</h4>
									<p className="text-secondary mb-1">{localUser.email}</p>
									{/* <p className="text-muted font-size-sm">
										Bay Area, San Francisco, CA
									</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="card mb-3">
						<div className="card-body">
							<div className="row">
								<div className="col-sm-3">
									<h6 className="mb-0">Full Name</h6>
								</div>
								<div className="col-sm-9 text-secondary">{localUser.name}</div>
							</div>
							<hr />
							<div className="row">
								<div className="col-sm-3">
									<h6 className="mb-0">Email</h6>
								</div>
								<div className="col-sm-9 text-secondary">{localUser.email}</div>
							</div>
							<hr />
							<div className="row">
								<div className="col-sm-3">
									<h6 className="mb-0">ID</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									{localUser.googleId}
								</div>
							</div>
							<hr />
							{/* <div className="row">
								<div className="col-sm-3">
									<h6 className="mb-0">Mobile</h6>
								</div>
								<div className="col-sm-9 text-secondary">(320) 380-4539</div>
							</div>
							<hr /> */}
							{/* <div className="row">
								<div className="col-sm-3">
									<h6 className="mb-0">Address</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									Bay Area, San Francisco, CA
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
