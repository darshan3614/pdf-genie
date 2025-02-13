import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Magic UI
        </h1>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:opacity-80">Components</a>
          <a href="#" className="hover:opacity-80">Templates</a>
          <a href="#" className="hover:opacity-80">Showcase</a>
        </div>
        { <Button className="bg-white text-black px-4 py-2 rounded-lg">Star on GitHub</Button> }
      </nav>
      
      {/* Hero Section */}
      <div className="text-center flex flex-col items-center mt-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UI library for <span className="text-purple-500">Design Engineers</span>
        </motion.h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl">
          150+ free and open-source animated components and effects built with React, TypeScript, Tailwind CSS, and Motion.
        </p>
        
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          { <Button className="bg-amber-600 text-black px-6 py-3 rounded-lg">Browse Components</Button> }
          { <Button className="bg-gray-800 border border-gray-600 px-6 py-3 rounded-lg">Browse Templates</Button> }
        </div>
      </div>
    </div>
  );
}
