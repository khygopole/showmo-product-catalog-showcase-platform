import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 2000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-yellow-50 px-4">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">401</h1>
      <h2 className="text-2xl font-semibold mb-2">Unauthorized Access</h2>
      <p className="text-gray-700 mb-6">
        You do not have permission to view this page.
      </p>
      <Loading
        color="#003C5D"
        size={100}
        strokeWidth={10}
        message="Redirecting..."
      />
    </div>
  );
}
