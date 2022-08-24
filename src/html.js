import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
      <script src="https://kit.fontawesome.com/7f9cd7ed68.js" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css"/>  
      <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000"/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel='stylesheet' href = './styles/Styles.scss'/>
        <meta property="og:url" content="https://premierprocessingservice.com/.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Premier Processing Service"/>
        <meta property="og:description" content="You deserve a specialist in your corner, professional solutions for the Inland Empire and beyond." />
        <meta property="og:image" content="https://storage.googleapis.com/picboi-39298.appspot.com/final/ruzHv6ng_1000x800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="premierprocessingservice.com" />
        <meta property="twitter:url" content="https://premierprocessingservice.com/.com/" />
        <meta name="twitter:title" content="Premier Processing Service" />
        <meta name="twitter:description" content="You deserve a specialist in your corner, professional solutions for the Inland Empire and beyond."/>
        <meta name="twitter:image" content="https://storage.googleapis.com/picboi-39298.appspot.com/final/ruzHv6ng_1000x800" />
        </head>
        
        
        
        
        {props.headComponents}
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
