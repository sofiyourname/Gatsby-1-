import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import {
  FaGulp 
}from "react-icons/fa";
import iconserafin from"../images/iconserafin.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  <FaGulp/>
  <img style={{ width:`39px` }} src={iconserafin }/>
  </Layout>

);

export default IndexPage
