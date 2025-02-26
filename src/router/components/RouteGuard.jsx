import { Navigate, Outlet, useLocation } from "react-router-dom";

function RouteGuard() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/") return <Navigate replace to="/login" />;

  if (!token) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      //do noting
    } else {
      return <Navigate to="/" replace />;
    }
  }
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          height: "100vh",
          backgroundColor: "#e6f1f9",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default RouteGuard;
