import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { css } from '@emotion/core';

// import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
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
            <h1>L. Parker Dyer</h1>
        </section>
        {/* <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>L. Parker Dyer</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>Front-end developer.</p>
              <p>Hi, I'm Parker.</p>
              <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
            </div>
          </PostFullContent>
        </article> */}
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "img/parker_dyer_resume_web.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
