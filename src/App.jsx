// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/home-page';
// import { ToastContainer } from 'react-toastify';
// import ServicesPage from './pages/ServicesPage';
// import ResumeTabsPage from './pages/ResumeTabsPage';
// import ProjectsPage from './pages/ProjectsPage';
// import ContactPage from './pages/ContactPage';


// const App = () => {
//     return (
//         <BrowserRouter>
//           <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/Services" element={<ServicesPage/>} />
//           <Route path="/Resume" element={<ResumeTabsPage/>} />
//           <Route path="/Work" element={<ProjectsPage/>} />
//           <Route path="/Contact" element={<ContactPage/>} />

//           </Routes>
//           <ToastContainer />
//         </BrowserRouter>
//     );
// };

// export default App;










import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import { ToastContainer } from 'react-toastify';
import ServicesPage from './pages/ServicesPage';
import ResumeTabsPage from './pages/ResumeTabsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageWithAnimation component={<HomePage />} />} />
          <Route path="/Services" element={<PageWithAnimation component={<ServicesPage />} />} />
          <Route path="/Resume" element={<PageWithAnimation component={<ResumeTabsPage />} />} />
          <Route path="/Work" element={<PageWithAnimation component={<ProjectsPage />} />} />
          <Route path="/Contact" element={<PageWithAnimation component={<ContactPage />} />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </BrowserRouter>
  );
};

// PageWithAnimation: Wrapping each page with animation
const PageWithAnimation = ({ component }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}      
      transition={{ duration: 0.4 }}  
    >
      {component}
    </motion.div>
  );
};

export default App;
