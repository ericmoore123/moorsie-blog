/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  //'site' keyword queries the 'gatsby.config.js' file, following keywords delve further into file hierarchy 
  const data = useStaticQuery(graphql`
    query BioQuery {
      site { 
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={150}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Created by <strong>{author.name}.</strong> {author?.summary || null}
          {` `}
          <br></br>
          <br></br>
          <a href={`https://github.com/${social?.github || ``}`}>
            Check out my GitHub!
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
