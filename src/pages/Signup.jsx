// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-1/2 flex flex-col justify-center items-center">
//         <h1 className="text-2xl font-bold mb-4">Sign-Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-3 w-3/4">
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-300 text-white rounded"
//           >
//             Login
//           </button>
//           <div className="flex justify-between">
//             <div className="w-1/2">
//               <p className="text-sm">
//                 Already have an account?
//                 <span
//                   className="font-bold text-blue-800 cursor-pointer px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-200 active:bg-gray-300"
//                   onClick={() => navigate("/")}
//                 >
//                   Login
//                 </span>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="w-1/2">
//         <img
//           src="https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.1803329558.1728823935&semt=ais_hybrid"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div
//       className="flex h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.1803329558.1728823935&semt=ais_hybrid')",
//       }}
//     >
//       <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto bg-white rounded-lg p-8 border border-gray-300 shadow-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign-Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-4 w-full">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-600"
//           >
//             Sign Up
//           </button>
//           <div className="text-center">
//             <p className="text-sm">
//               Already have an account?{" "}
//               <span
//                 className="font-bold text-blue-800 cursor-pointer"
//                 onClick={() => navigate("/")}
//               >
//                 Login
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.1803329558.1728823935&semt=ais_hybrid')",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign-Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-300 text-white rounded transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </button>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <span
                className="font-bold text-blue-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
