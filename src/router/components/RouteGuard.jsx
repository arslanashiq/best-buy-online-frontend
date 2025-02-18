import { Navigate, Outlet, useLocation } from "react-router-dom";

function RouteGuard() {
  const location = useLocation();
  if (location.pathname === "/") return <Navigate replace to="/login" />;
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
