import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"

import {motion} from 'framer-motion'

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}} 
                transition={{duration: 2}}>Folln Dev</motion.span>
                <div className="socials">
                    <motion.a href="" whileHover={{scale:1.3}} whileTap={{scale:0.9}}><img src="/facebook.png" alt="" /></motion.a>
                    <motion.a href="" whileHover={{scale:1.3}} whileTap={{scale:0.9}}><img src="/github.png" alt="" /></motion.a>
                    <motion.a href="" whileHover={{scale:1.3}} whileTap={{scale:0.9}}><img src="/linkedin.png" alt="" /></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;