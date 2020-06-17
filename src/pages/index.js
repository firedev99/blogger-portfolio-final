import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
//components 
import Layout from '../components/layout'
import HomePage from '../components/Home/HomePage'
import AboutMe from './about-me'
import Blog from './travel-blogs'
import Travel from './travel-with-me'
import CustomLoader from '../components/CustomLoader'

const routes = [
  { index: "01", path: "/", Component: HomePage },
  { index: "02", path: "/about-me/", Component: AboutMe },
  { index: "03", path: "/travel-blogs/", Component: Blog },
  { index: "04", path: "/travel-with-me/", Component: Travel }
]

const IndexPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)
    return () => clearTimeout(timer)
  })


  if(loading) {
      return <CustomLoader />
  } else {
      return (
        <Layout>
              {routes.map(({ index, path, Component }) => (
                <Router>
                  <Component key={index} path={path} />
                </Router>
              ))}
        </Layout>
    )
  }
}

export default IndexPage
