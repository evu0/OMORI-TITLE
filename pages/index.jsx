import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import char from '../public/char.gif';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion';
import Head from 'next/head';

const OMORI = () => {
  const [play, setPlay] = useState(true);
  const [hover, setHover] = useState(false);

  const handlePlay = () => {
    setPlay(!play); 
  };

  const handleHover = () => {
    setHover(true);
    console.log('hover');
  };

  const afterHover = () => {
    setHover(false);
    console.log('not hovered');
  };
  
  useEffect(() => {
    const selectedList = document.querySelectorAll('.Home_boxtext__uKsxb');
    const selectedArray = [...selectedList];
    selectedArray.forEach(element => {
      element.addEventListener('mouseover', handleHover);
      element.addEventListener('mouseout', afterHover);
    });
     },[]);

  return (
    <>

    <Head>
      <title>
        OMORI
      </title>
    </Head>

    <AnimatePresence>
      
    {play && (
      <motion.div exit={{opacity: 0}} transition={{duration: 2}} className={styles.credits} onClick={handlePlay}>
        <div className={styles.help}>
        <TypeAnimation
          cursor={false}
          sequence={['Click Anywhere...']}
          wrapper="h2"
        />
        </div>
        <div className={styles.name}>
          Done by: Mohammad Alhamoud
        </div>
      </motion.div>
    )} 
    </AnimatePresence> 

    {!play && (
      <audio autoPlay loop> 
        <source src='/ost.mp3' type="audio/mp3" />
      </audio>
    )}

    {hover && (
      <audio autoPlay l id='audio'>
        <source src='/cursor.mp3' type='audio/mp3'/>
      </audio>
    )}

    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} layout='intrinsic' width={400} height={180}/>
      </div>
      <div className={styles.char}>
        <Image src={char} layout='intrinsic' width={850} height={690}/>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.boxtext}>
            NEW GAME
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxtext}>
            CONTINUE
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxtext}>
            OPTIONS
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default OMORI;