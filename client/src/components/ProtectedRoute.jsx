import { Navigate } from "react-router-dom";
import { getValidAdminToken } from "../utils/auth";

function ProtectedRoute({ children }) {
  const token = getValidAdminToken();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
