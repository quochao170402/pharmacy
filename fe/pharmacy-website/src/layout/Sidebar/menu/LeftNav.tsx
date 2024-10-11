// import { FiMenu } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import useGetRouter from "../../../pages/Layout/hooks/useGetRouter";
// import Menu from "../components/Menu";

// interface LeftNavProps {
//   isExpanded: boolean;
//   toggleSidebar: () => void;
// }

// const LeftNav = ({ isExpanded, toggleSidebar }: LeftNavProps) => {

//   return (
//     <>
//       <div className="flex justify-between items-center p-4 ">
//         <Link
//           to="/"
//           className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
//         >
//           <h2
//             className={`${isExpanded ? "block" : "hidden"} text-2xl font-bold`}
//           >
//             Dashboard
//           </h2>
//         </Link>
//         <button onClick={toggleSidebar} className="text-white">
//           <FiMenu size={24} />
//         </button>
//       </div>
//       <div>
//         <Menu isExpanded={isExpanded}/>
//       </div>
//     </>
//   );
// };

// export default LeftNav;
