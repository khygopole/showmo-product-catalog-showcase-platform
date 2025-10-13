import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAuthStatus,
  selectRole,
  useGetCurrentUserQuery,
} from "../features/auth/authSlice";
import Loading from "./Loading";

export default function Redirect() {
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

  if (isError) return <Outlet />;

  const accountRole = role || data?.role;

  if (accountRole !== null && accountRole !== undefined) {
    return <Navigate to={`/${accountRole}/dashboard`} replace />;
  }

  return <Outlet />;
}
