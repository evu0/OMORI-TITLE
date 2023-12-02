import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import char from '../public/char.gif';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion';
import Head from 'next/head';
import Box from '../Components/Box';

const Birthday = () => {
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
        What is this?
      </title>
    </Head>

    <AnimatePresence>
      
    {play && (
      <motion.div exit={{opacity: 0}} transition={{duration: 2}} className={styles.credits} onClick={handlePlay}>
        <div className={styles.help}>
        <TypeAnimation
          cursor={false}
          sequence={['Click anywhere to start a journey that would never end']}
          wrapper="h2"
          typeSpeed={50}
        />
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

    {!play && (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
      className={styles.container}>
        <Box title={"Happy Birthday! 🎉"} text={"I hope you have a wonderful day filled with all your favorite things. I can't believe how lucky I am to have you in my life. You make me feel loved, happy, appreciated, and supported everyday. I love you so much, I'm so grateful for everything we've shared and the ones we have yet to come. I hope you enjoy the little gift I got you. It's nothing fancy, but I thought you might like it mwah"}/>
        <Box title={"How it all started 🍓"} text={"It all started when you decided to share a gigantic, and non-oragnic strawberry before eating it. What a silly start, huh? I've never been so thankful for a strawberry"}/>
        <Box title={"My favorite memory 🎬"} text={"I still remember when we watched Harry Potter and the Prisoner of Azkaban all night, at that night I started to become a harry potter fan just like you, and I have never been happier! I really enjoy watching with you, and I can't wait to finish the series with you 🤍"}/>
        <Box title={"What I like about you"} text={"Everything. But specifically, I like that you communicate very well, supportive, funny, charming, caring, understanding, smart, and gorgeous. Like... how can a person be this perfect? 😤"}/>
        <Box title={"Why black and white?"} text={"I wanted to make this website as simple as possible (AKA I'm bad with colors) 🙈"}/>
        <Box title={"Why a website?"} text={"I wanted to make you a memory that would last forever, and I thought that a website would be a good idea 👉🏻👈🏻"}/>
      </motion.div>
    )}
    
    </>
  );
}
 
export default Birthday;