import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const sliders = [
    {
      id:0,
      About: [
       'Perform routine website maintenance tasks such as bug fixes and security patches',
       'Update website content, including text, images, and multimedia elements.',
       'Conduct website performance audits and implement optimization strategies.',
       'Ensure website compatibility with the latest web standards and browser updates.',
      ],
      name: 'Website Maintenance and Updates',
    },
    {
      id:1,
      About: [
       'Convert existing websites into responsive designs to ensure compatibility across devices.',
       'Utilize CSS media queries and flexible layouts to create seamless user experiences.',
       'Test websites across various devices and screen sizes to ensure consistent functionality.',
       'Optimize images and other media assets for faster loading times on mobile devices.',
    ],
      name: 'Responsive Design Implementation',
    },
    {
      id:2,
      About: [
       'Perform routine website maintenance tasks such as bug fixes and security patches',
       'Implement performance optimization techniques such as code minification and lazy loading.',
       'Optimize server response times and reduce unnecessary HTTP requests.',
       'Leverage browser caching and content delivery networks (CDNs) to improve loading speeds.',
    ],
      name: 'Website Performance Optimization',
    },
    {
      id:3,
      About: [
       'Conduct keyword research and integrate relevant keywords into website content.',
       'Optimize meta tags, headings, and image alt attributes for better search engine visibility.',
       'Improve website crawlability and indexability through proper site structure and sitemap creation.',
       'Monitor website analytics and track key performance indicators (KPIs) to measure SEO effectiveness.',
      ],
      name: 'Basic SEO Implementation',
    },
]

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [mobileVisible, setMobileVisible] = useState(true); 

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const handleBulletClick = (index) => {
    setCurrentSlider(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setMobileVisible(false);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setMobileVisible(true);

    if (touchStartX - touchEndX > 50) {
      if (currentSlider < sliders.length - 1) {
        setCurrentSlider(currentSlider + 1);
        setSlideDirection("left");
      }
    } else if (touchEndX - touchStartX > 50) {
      if (currentSlider > 0) {
        setCurrentSlider(currentSlider - 1);
        setSlideDirection("right");
      }
    }
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
          </h1>
          <button>WHAT DO I OFFER ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Maintenance and Updates</h2>
         <ul>
            <li>Perform routine website maintenance tasks such as bug fixes and security patches.</li>
            <li>Update website content, including text, images, and multimedia elements.</li>
            <li>Conduct website performance audits and implement optimization strategies.</li>
            <li>Ensure website compatibility with the latest web standards and browser updates.</li>
         </ul>
         <a href="#Contact">
            <button>Go</button>
         </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Design Implementation</h2>
         <ul>
            <li>Convert existing websites into responsive designs to ensure compatibility across devices.</li>
            <li>Utilize CSS media queries and flexible layouts to create seamless user experiences.</li>
            <li>Test websites across various devices and screen sizes to ensure consistent functionality.</li>
            <li>Optimize images and other media assets for faster loading times on mobile devices.</li>
         </ul>
         <a href="#Contact">
            <button>Go</button>
         </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Performance Optimization</h2>
         <ul>
            <li>Analyze website performance using tools like Lighthouse and Google PageSpeed Insights.</li>
            <li>Implement performance optimization techniques such as code minification and lazy loading.</li>
            <li>Optimize server response times and reduce unnecessary HTTP requests.</li>
            <li>Leverage browser caching and content delivery networks (CDNs) to improve loading speeds.</li>
         </ul>
         <a href="#Contact">
            <button>Go</button>
         </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Basic SEO Implementation</h2>
         <ul>
            <li>Conduct keyword research and integrate relevant keywords into website content.</li>
            <li>Optimize meta tags, headings, and image alt attributes for better search engine visibility.</li>
            <li>Improve website crawlability and indexability through proper site structure and sitemap creation.</li>
            <li>Monitor website analytics and track key performance indicators (KPIs) to measure SEO effectiveness.</li>
         </ul>
         <a href="#Contact">
            <button>Go</button>
         </a>
        </motion.div>
      </motion.div>
      <motion.div className="mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: mobileVisible ? 1 : 0, y: mobileVisible ? 0 : -20 }}
              transition={{ duration: 0.5 }}
      >
          <div className="GrayB">
                <h2>{sliders[currentSlider].name}</h2>
                <ul>
                  {sliders[currentSlider].About.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
            </div>
            <div className="bullets Mobile">
                {sliders.map((_, index) => (
                <span
                    key={index}
                    className={index === currentSlider ? 'active' : ''}
                    onClick={() => handleBulletClick(index)}
                ></span>
              ))}
          </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
