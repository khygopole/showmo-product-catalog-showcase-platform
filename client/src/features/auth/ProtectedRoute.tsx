import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAuthStatus,
  selectRole,
  useGetCurrentUserQuery,
} from "./authSlice";
import Loading from "../../components/Loading";

export default function ProtectedRoute({
  allowedRole,
}: {
  allowedRole: string;
}) {
  const authStatus = useSelector(selectAuthStatus);
  const role = useSelector(selectRole);

  const { data, isLoading, isError } = useGetCurrentUserQuery(undefined, {
    skip: authStatus,
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: false,
    refetchOnFocus: false,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading
          color="#003C5D"
          size={100}
          strokeWidth={10}
          message="Loading resources..."
        />
      </div>
    );

  if (isError && !authStatus) {
    return <Navigate to="/login" replace />;
  }

  const accountRole = role || data?.role;
  if (allowedRole && allowedRole !== accountRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (authStatus || data) {
    return <Outlet />;
  }

  // Default: not authenticated
  return <Navigate to="/login" replace />;
}
