import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>BUILDARIUM</h1>
    <p>Buildarium is a creative building experience that connects real life building sets with an infinite virtual universe.</p>
    <p>Say goodbye to expensive wooden trains and pricey brick boxes:</p>
    <p>The sandbox of the future</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
