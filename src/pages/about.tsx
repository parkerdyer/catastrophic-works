import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import { Link } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
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
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About Me</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>Hello there! My name is Parker. I'm a front-end web developer and I'm currently having a love affair with interactive web experiences. I'd love to make it my life's work to create awesome user journeys. 💻</p>
              <p>I currently reside in Columbus, Ohio with my dog and too many cats. 🐈 🐈 🐈 </p>
              <p>When not squinting at a computer screen, I enjoy reading, writing, travel, and running/cycling.</p>
              <p>Visit my main website <a href='https://parkerdyer.dev' target='_self'>here</a>, or check out my <Link to={`/resume/`}>resume</Link>.</p>
              <h5>About This Site</h5>
              <p>This site is built with Gatsby. I use Netlify to deploy to production.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
