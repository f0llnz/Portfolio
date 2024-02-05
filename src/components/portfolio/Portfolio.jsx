import { useRef } from 'react'
import './portfolio.scss'

import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title: "React Commerce",
        img:"https://pbs.twimg.com/media/Efl8w4rUEAMEPfg.jpg:large",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates corporis dicta delectus. Consequuntur, corporis. Suscipit, esse earum doloribus totam placeat dolor quam ex quis, itaque saepe autem sequi numquam?"
    },
    {
        id:2,
        title: "React 3D Shirt",
        img:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Great-Teacher-Onizuka-featured-image.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates corporis dicta delectus. Consequuntur, corporis. Suscipit, esse earum doloribus totam placeat dolor quam ex quis, itaque saepe autem sequi numquam?"
    },
    {
        id:3,
        title: "React Cloack",
        img:"https://m.media-amazon.com/images/S/pv-target-images/dcc5bcfe6817c9c375553ca2107010d0c2e8426fb76f6c5163a4766a6b7c3328.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates corporis dicta delectus. Consequuntur, corporis. Suscipit, esse earum doloribus totam placeat dolor quam ex quis, itaque saepe autem sequi numquam?"
    },
    {
        id:4,
        title: "React Whatever",
        img:"https://m.media-amazon.com/images/S/pv-target-images/9ad74058af1926bcc537cf1d3ca42a4c81b1985faf5c92d51f6689a7a336e744.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates corporis dicta delectus. Consequuntur, corporis. Suscipit, esse earum doloribus totam placeat dolor quam ex quis, itaque saepe autem sequi numquam?"
    }
]

const Single = ({ item }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

  const ref= useRef()

  const {scrollYProgress} = useScroll({
    target: ref, 
    offset: ["end end", "start start"],
});

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar">

            </motion.div>
        </div>
        {items.map(item =>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio
