// import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouter
// import HomePage from "./pages/HomePage";
// import NavBar from "./components/NavBar";
// import './i18n/i18n'

// function App() {
//   return (
//         <Router> {/* Cambiado a HashRouter */}
//           {/* <main className="container mx-auto px-3 lg:px-25 pt-20 pb-20"> */}
//           <main className=" mx-auto">
//             <NavBar/>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//             </Routes>
//           </main>
//         </Router>
//   );
// }

// export default App;
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import './i18n/i18n';

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <main className="mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
