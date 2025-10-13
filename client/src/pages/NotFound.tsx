import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function NotFound() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 2000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
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
