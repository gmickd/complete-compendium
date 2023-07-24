import * as React from "react"
import { graphql, HeadProps, HeadFC, PageProps, Link } from "gatsby"

import "./home.css";
import "./styles.css"
import "../styles/global.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import RandomMonsterButton from "../components/RandomMonsterButton";
import { Cards } from "../components/Cards";
import { StatisticBlock } from "../components/Statistics";

import { SEO } from "../components/SEO";

// Interweave handling hydration issue
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]


// const IndexPage: React.FC<PageProps> = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>
//         Congratulations
//         <br />
//         <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
//       </h1>
//       <p style={paragraphStyles}>
//         Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
//         update in real-time. 😎
//         New line.
//       </p>
//       <ul style={doclistStyles}>
//         {docLinks.map(doc => (
//           <li key={doc.url} style={docLinkStyle}>
//             <a
//               style={linkStyle}
//               href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
//             >
//               {doc.text}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <ul style={listStyles}>
//         {links.map(link => (
//           <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//             <span>
//               <a
//                 style={linkStyle}
//                 href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
//               >
//                 {link.text}
//               </a>
//               {link.badge && (
//                 <span style={badgeStyle} aria-label="New Badge">
//                   NEW!
//                 </span>
//               )}
//               <p style={descriptionStyle}>{link.description}</p>
//             </span>
//           </li>
//         ))}
//       </ul>
//       <img
//         alt="Gatsby G Logo"
//         src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
//       />
//     </main>
//   )
// }

/////////////////////////
// Gatsby Stuff

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      
      {/* <link rel="stylesheet" href="https://use.typekit.net/som5rdn.css"></link> */}
      <>
          <Navbar/>
            <div className="home">
              {/* Hero */}
              <div className='hero-container'>
                <div className='image-container'>
                  <picture>
                    <img className='hero-img' src="/images/paper.webp" alt="Soft gray paper texture background." />
                    <img className='hero-img-hidden' src="/opengraph_banner.webp" alt="A menagery of monsters from across the lands of Dungeons & Dragons together on a white background." />
                  </picture>
                </div>
                
                <h1 className="adnd" >Advanced Dungeons & Dragons 2nd Edition</h1>
                <h2>Complete Monstrous <br/>Compendium</h2>

                {/* Random Monster Button */}
                <div className="random_monster_button">
                    <RandomMonsterButton />
                </div>

              </div>

              {/* <div className="hero_tsr">
              <img src="images/tsr.png" height="150px" alt="TSR logo"></img>
              </div> */}
              <Cards />

              {/* Needs to be redone */}
              <StatisticBlock />

              <div className="summary">
                <div className="summary_banner_container">
                  <div className="summary_text">
                    <p className="summar_par">
                      Complete* browsable, searchable appendix of EVERY monster, sourcebook, manual, and campaign setting in Advanced Dungeons & Dragons 2nd Edition. An ongoing effort to fully catalog and index every monster from AD&D 2nd edition, there is still much work to be done. With missing images, bad unicode characters, and missing information, I have my work cut out for me. The next phase will involve scanning the source data for errors and displaying this on the <Link to="/about">About</Link> page.
                    </p>
                    <p className="summary_par">
            
                    Welcome to the Complete Compendium! A work in progress, this compendium seeks to archive and catalogue every monster from Advanced Dungeons & Dragons, 2nd Edition. Not just monsters from the core books, not just from monstrous compendiums.  Every. Monster. Across all sources, magazines, and settings. Go to the Index for a full (and redundant) list of monster names and links to their pages, or check out the Catalogue for a more browsable experience. 
                    </p>
                    <p className="summary_par">
                    This website has resurrected the efforts of an another, the creator of lomion.de, archived by the wayback machine. I coded an extractor for harvesting monster data from all these files and putting it into a database. Read more about my process on the About page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <Footer />
        </>
    </main>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
export function Head(props: HeadProps<DataProps>) {
  return (
    <>
    <title>{props.data.site.siteMetadata.title}</title>
    <SEO />
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
