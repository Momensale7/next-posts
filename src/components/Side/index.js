// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faFileAlt, faUsers, faVideo, faMemory, faBookmark, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '@/../@fortawesome/fontawesome-free/css/all.min.css'
const Side = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 fixed text-white p-6 mt-4 mb-72">
      <nav>
        <ul>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-user text-blue-400"></i>
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-file-alt text-blue-400"></i>
            <span>Posts</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-users text-blue-400"></i>
            <span>Groups</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-video text-blue-400"></i>
            <span>Video</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-memory text-blue-400"></i>
            <span>Memory</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-bookmark text-blue-400"></i>
            <span>Saved</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 cursor-pointer">
            <i className="fa-solid fa-user-friends text-blue-400"></i>
            <span>Friend</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};



export default Side;
