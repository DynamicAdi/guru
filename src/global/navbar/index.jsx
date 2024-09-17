import React, { useEffect, useState } from 'react'
import "./styles.scss"
import logo from '/logo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
// import { Link } from 'react-router-dom';

function Navbar() {
  const tabs = [
    {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "#about",
  },
  {
    name: 'Popular items',
    to: "#popular",
  },
  {
    name: "Menu",
    to: "/menu",
  }
]
    // const tabs = ["Home", "About", "Veg", "Non-Veg", "Menu"];
    const [activeTab, setActive] = useState(tabs[0])
    const [isAnimating, setIsAnimating] = useState(false);
    const [open, setOpen] = useState(false);
    const container = {
        hidden: { opacity: 0, y: -50 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delayChildren: 0.2,
            // staggerChildren: 0.2,
            ease: "easeInOut",
          },
        },
      };
      const item = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 },
      };
    

      
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsAnimating(true);
        }
    }, [window.innerWidth])
  return (
    <div className='navbar'>
        <div className="logo">
      <Link to={'/'}>
            <img src={logo} alt="guru catering" />
      </Link>
        </div>


            <div className="links">
          <motion.ul
            variants={container}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}

          >
            {tabs.map((tab, i) => (
              <Link to={tab.to} style={{ color: "black", textDecoration: "none" }}>

              <motion.li
              variants={item}
                initial={{ y: -100 }}
                animate={{ y: 0}}
                exit={{ y: -100 }}
                transition={{ delay: 0.2 * i }}
                key={i}
                className={`${activeTab === tab.name ? 'active' : ''}`}
                onClick={() => setActive(tab.name)}
                >
                {/* <Link to={{ pathname: tab.to, search: new URLSearchParams(tab.query).toString() }} style={{ color: "black" }}> */}
                  {tab.name}
                {/* </Link> */}
              </motion.li>
                  </Link>
            ))}
          </motion.ul>
        </div>
        <Link to="/corporate">
        <button className="btns">Corporate Box</button>
        </Link>
        <AnimatePresence key={tabs.length}>
        {isAnimating && (
            <>
            <div className={`links responsive ${open ? 'visible' : ''}`}>
            <motion.div
        className="nav-menu-icon"
        variants={item}
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose size={35} /> : <BiMenuAltRight size={35} />}
      </motion.div>
          <motion.ul
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{once: false}}
            className={`${open ? 'visible' : 'hidden'}`}
          >
            {tabs.map((tab, i) => (
              <motion.li
              // variants={item}
                initial={{ y: -100 }}
                whileInView={{ y: 0}}
                exit={{ y: -100 }}
                transition={{ delay: 0.2 * i }}
                viewport={{once: false}}
                key={i}
                className={`${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActive(tab)}

                >
                {/* <Link to={{ pathname: tab.to, search: new URLSearchParams(tab.query).toString() }} style={{ color: "black" }}> */}
                  {tab}
                {/* </Link> */}
              </motion.li>
            ))}
        <Link to="/corporate">
        <button className={`btns ${open ? 'visible' : ''}`}>Corporate Box</button>
        </Link>
          </motion.ul>
        </div>
        </>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Navbar