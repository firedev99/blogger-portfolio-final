import React from 'react'
import {motion} from 'framer-motion'
import { LoaderWrapper, LoadingText } from '../styles/customLoaderStyles'

const CustomLoader = () => {
    return (
        <LoaderWrapper>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 0.3, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto1.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 0.6, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto2.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 1, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto3.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 1.3, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto4.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 1.6, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto5.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 2, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto6.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 2.6, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto7.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 3.1, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto8.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 3.6, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto9.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 4.1, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto10.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 4.6, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto11.jpg`)} alt="Loader"
            />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 5, duration: 0.5, ease: [0.5,0.6,0.05,0.91]}}
                src={require(`../assests/naruto12.jpg`)} alt="Loader"
            />
            <LoadingText>
                Loading...
            </LoadingText>
        </LoaderWrapper>
    )
}

export default CustomLoader
