import React from 'react'
import { motion } from 'framer-motion'
import { BlogWrapper, BlogHeading, BlogTitle, ContentBox, YoutubeIntro } from '../../styles/blogStyles'
//custom hooks
import Video from '../Video'

const linksVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delayChildren: 1, 
            staggerChildren: 1,
            duration: 3,
            ease: [0.1,0.6,0.05,0.91]
        }
    },
}

const links = {
    initial: {
        opacity: 0,
        x: -1000,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.1,0.6,0.05,0.91]
        }
    }
}


const BlogPage = () => {
    return (
        <BlogWrapper>
            <img className="texture" src={require(`../../assests/texture.jpg`)} alt="texture" />
            <BlogHeading>
                <h1>TRips/TRips/trips/trips/trips</h1>
                <hr className="line" />
            </BlogHeading>
            <BlogTitle>
                <span>1.73M</span>
                <span>SUBSCRIBERS</span>
            </BlogTitle>
            <ContentBox
                variants={linksVariants}
                initial="initial"
                animate="animate"
            >
                <motion.div variants={links} className="item">
                    <div className="item_1">
                        <Video className="youtube_video" videoSrcURL="https://www.youtube.com/embed/rDYdeq3JW_E" videoTitle="Soothing Website Created by the @FireDev" />
                    </div>
                    <div className="item_2">
                        <h3>
                            <span className="title_1">2M VIEWS</span>
                            <span className="title_2">/ 2 months ago</span>
                        </h3>
                        <p>
                            Noakhali, Bangladesh. A nearly ideal country, big episode.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={links} className="item">
                    <div className="item_1">
                        <Video className="youtube_video" videoSrcURL="https://www.youtube.com/embed/IugcIAAZJ2M" videoTitle="Soothing Website Created by the @FireDev" />
                    </div>
                    <div className="item_2">
                        <h3>
                            <span className="title_1">1.7M VIEWS</span>
                            <span className="title_2">/ 5 months ago</span>
                        </h3>
                        <p>
                            Tokyo, Japan. A nearly ideal country, big episode.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={links} className="item">
                    <div className="item_1">
                        <Video className="youtube_video" videoSrcURL="https://www.youtube.com/embed/m5cZJh2njDA" videoTitle="Soothing Website Created by the @FireDev" />
                    </div>
                    <div className="item_2">
                        <h3>
                            <span className="title_1">13M VIEWS</span>
                            <span className="title_2">/ 5 months ago</span>
                        </h3>
                        <p>
                            Florida, America. A nearly ideal country, big episode.
                        </p>
                    </div>
                </motion.div>
            </ContentBox>
            <YoutubeIntro>
                <div className="youtube_intro">
                    <div className="youtube_intro_content">
                        <h3>Check out my</h3>
                        <h3>youtube channel</h3>
                    </div>
                    <div className="youtube_intro_desc">
                        <span>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tripyy_land/">TRIPYY_LAND</a>
                        </span>
                        <span>
                            <img src={require(`../../assests/youtube.png`)} alt="Youtube Icon"/>
                        </span>
                    </div>
                </div>
            </YoutubeIntro>
        </BlogWrapper>
    )
}

export default BlogPage
