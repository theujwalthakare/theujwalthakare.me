import { FaTools } from "react-icons/fa";
import './App.css'

function App() {
 
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <div className="flex justify-center mb-4 text-yellow-500 text-6xl animate-bounce">
          <FaTools />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Site Under Development
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          We’re working hard to launch something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};
export default App
