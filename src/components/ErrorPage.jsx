
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        
        <p className="text-3xl mt-4 text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
 
