import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="128" r="120" /> 
    <rect x="0" y="266" rx="0" ry="0" width="250" height="20"  /> 
    <rect x="0" y="320" rx="0" ry="0" width="250" height="76" /> 
    <rect x="0" y="420" rx="0" ry="0" width="250" height="176" /> 
  </ContentLoader>
)

export default MyLoader;