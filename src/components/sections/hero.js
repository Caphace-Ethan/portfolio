import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 740px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const dynamicWhatIdo = [
    'I conceptualize & plan application\'s, <br> and data projects',
    'I architect & build scalable applications, <br> and data pipelines',
    'I conduct tests & debug on applications, <br> and data pipelines',
    'I deploy & maintain applications, <br> and data pipelines',
    'I monitor, optimize & scale applications, <br> and data systems',
  ];

  // Add state for the phrase index
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Change phrase every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1 < dynamicWhatIdo.length ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicWhatIdo.length]);

  const whatIdo = dynamicWhatIdo[phraseIndex];

  const one = <h1>Hello 👋🏼, i am</h1>;
  const two = <h2 className="big-heading">Ethani Caphace</h2>;
  // const three = <h3 className='medium-heading'>I architect & build for web-apps <br></br> and data pipelines.</h3>;
  const three = <h3 className="medium-heading" dangerouslySetInnerHTML={{ __html: whatIdo }} />;
  const four = (
    <>
      <p>
        Experienced Application Programmer, specialized in architecting, and building scalable, and
        high-performance Application's backends, APIs, and Data pipelines. Proven ability to deliver
        robust and resilient solutions across diverse domains, adhering to agile methodologies and
        full software development lifecycle, current working at{' '}
        <a href="https://www.ega.go.tz" target="_blank" rel="noreferrer">
          e-Government Authority (Tz)
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://linkedin.com/in/ethani-caphace"
      target="_blank"
      rel="noreferrer">
      Check out my Linkedin Profile!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
