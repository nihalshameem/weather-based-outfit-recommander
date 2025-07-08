import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App flex items-center justify-center min-h-screen px-5">
      <ThemeToggle />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='search-input-div'
      >
        <SearchBar />
      </motion.div>
    </div>
  );
}

export default App;
