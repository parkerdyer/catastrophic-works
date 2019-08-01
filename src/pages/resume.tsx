import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { css } from '@emotion/core';

import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

export interface AboutProps {
  data: {
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const About: React.FC<AboutProps> = props => {
    return (
      <IndexLayout>
        <Helmet>
          <title>Resume</title>
        </Helmet>
        <Wrapper css={PageTemplate}>
          <header css={[outer, SiteHeader]}>
            <div css={inner}>
              <SiteNav />
            </div>
          </header>
          <main id="site-main" className="site-main" css={[SiteMain, outer]}>
            <section>
              <Img fluid={props.data.image.childImageSharp.fluid} alt="Parker's Resume" />
            </section>
          </main>
          <Footer />
        </Wrapper>
      </IndexLayout>
    );
}

export default About;

export const query = graphql`
         query {
           image: file(relativePath: { eq: "img/parker_dyer_resume_web.png" }) {
             childImageSharp {
               # Specify the image processing specifications right in the query.
               # Makes it trivial to update as your page's design changes.
               fluid(maxWidth: 2000) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       `;
