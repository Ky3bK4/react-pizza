import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#e3e3e3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="142" r="140" /> 
    <rect x="0" y="306" rx="6" ry="6" width="270" height="29" /> 
    <rect x="-1" y="345" rx="13" ry="13" width="273" height="59" /> 
    <rect x="137" y="414" rx="6" ry="6" width="132" height="43" /> 
    <rect x="0" y="414" rx="6" ry="6" width="100" height="43" />
  </ContentLoader>
)

export default MyLoader

