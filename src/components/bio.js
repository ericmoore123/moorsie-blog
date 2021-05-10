/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";

const Bio = () => {

  //'site' keyword queries the 'gatsby.config.js' file, following keywords delve further into file hierarchy 
  const data = useStaticQuery(graphql`
    query BioQuery {
      site { 
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const title = data.site.siteMetadata?.title

  return (
    <div className="bio">
      <h2 className="main-heading">
        <Link to="/">{title}</Link>
      </h2>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/eric-img.png"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
        
        <p>
          Created by <strong>{author.name}.</strong> {author?.summary || null}
          {` `}
          </p>

          <div className="social-container">
            <strong>Check out my socials:</strong>
            <ul>
              <li>
                <a className="social-link" href={`https://github.com/${social?.github || ``}`}>
                  <p>GitHub</p>
                  <ImGithub className="icon" size={25}/>
                </a>
              </li>
              <li>
                <a className="social-link" href={`https://linkedin.com/in/${social?.linkedin}`}>
                  <p>LinkedIn</p>
                  <GrLinkedin className="icon" size={25}/>
                </a>
              </li>
              <li>
                <a className="social-link" href={`https://emoore.dev`}>
                  <p>Site</p>
                  <FaGlobe className="icon" size={25}/>
                </a>
              </li>
            </ul>
          </div>

        </>
      )}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Bio;
