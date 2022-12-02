import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Icons from "../components/Icons/Icons"
import Cookies from "../components/Cookies/Cookies"
import Demo from "../components/Demo/Demo"
import Community from "../components/Community/Community"
import Customers from "../components/Customers/Customers"

const IndexPage = () => (
  <Layout>
    <Cookies/>
    <Hero/>
    <Icons/>
    <Community/>
    <Customers/>
    <Demo/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
