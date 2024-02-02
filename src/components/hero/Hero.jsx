import './hero.scss'

import {motion} from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration:2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-640%",
        transition: {
            duration: 60,
            repeat: Infinity,
            repetType: "mirror"
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants} 
            initial="initial"
            animate="animate"
            >
                <motion.h2 variants={textVariants}>BUBA GURJIDZE</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and tech aficionado</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button className='Contact' variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img animate="scrollButton" variants={textVariants} src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div animate="animate" variants={sliderVariants} initial="initial" className="slidingTextContainer">
            Developer IRexpert Cinephile Gamer 
        </motion.div>
        <motion.div
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}} 
        transition={{duration: 2}}
        className="imageContainer">
            <img src="/Herod.png" alt="CBSpaceShip" />
        </motion.div>
    </div>
  )
}

export default Hero
