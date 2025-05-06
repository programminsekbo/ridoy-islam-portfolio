// import React from 'react';
// import Layout from '../components/layout/Layout';
// import Contacct from '../components/fullFolder/Contacct';

// const ContactPage = () => {


    
//     return (
//         <Layout>
//             <div className='top-padding' >

//               <Contacct/>

//             </div>



//         </Layout>
//     );
// };

// export default ContactPage;


import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Contacct from '../components/fullFolder/Contacct';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Animation duration

    return () => clearTimeout(timer);
  }, []);

  const blockStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9999,
  };

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
          {/* Top Block */}
          <motion.div
            style={{ ...blockStyle, backgroundColor: '#1B1212' }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, delay: 0 }}
          />
          {/* Left Block */}
          <motion.div
            style={{ ...blockStyle, backgroundColor: '#9708CC' }}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          {/* Right Block */}
          <motion.div
            style={{ ...blockStyle, backgroundColor: '#00FA9A' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
      ) : (
        <Layout>
          <div className="top-padding">
            <Contacct />
          </div>
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default ContactPage;
