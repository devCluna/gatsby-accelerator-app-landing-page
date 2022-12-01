/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Cookies from "./Cookies/Cookies"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      <Header title={data.site.siteMetadata.title}/>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
