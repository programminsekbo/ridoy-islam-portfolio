


import React, { useEffect, useState } from 'react';

import Layout from '../components/layout/Layout';
import GatDataStore from '../store/GatDataStore';
import { motion, AnimatePresence } from 'framer-motion';
import CardModel from '../components/fullFolder/CardModel';

const ProjectsPage = () => {
  const { ProjectsRequst } = GatDataStore();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    (async () => {
      await ProjectsRequst();
    })();

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

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
          {/* Top Red Block */}
          <motion.div
            style={{ ...blockStyle, backgroundColor: '#1B1212' }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, delay: 0 }}
          />
          {/* Left Green Block */}
          <motion.div
            style={{ ...blockStyle, backgroundColor: '#9708CC' }}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          {/* Right Blue Block */}
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
            <CardModel />
          </div>
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default ProjectsPage;
