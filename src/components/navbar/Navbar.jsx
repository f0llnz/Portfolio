import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"

import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}>
                    <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="Name" src="/folln.png" alt="" />
                </motion.div>
                <div className="socials">
                    <motion.a href="https://www.linkedin.com/in/bgurjidze/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}><img src="/linkedin.png" alt="" /></motion.a>
                    <motion.a href="https://github.com/f0llnz" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}><img src="/github.png" alt="" /></motion.a>
                    <motion.a href="https://www.facebook.com/profile.php?id=100010885146418" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}><img src="/facebook.png" alt="" /></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;