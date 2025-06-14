import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    font-size: var(--fz-md);

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-md);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-md);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Java',
    'Spring Boot',
    'Python',
    'Django',
    'PHP',
    'Laravel',
    'Docker',
    'Kubernetes',
    'Git',
    'CI/CD',
    'PostgreSQL',
    'MySQL',
    'API (REST and GraphQL)',
    'Web Application Design',
    'Development',
    'Deployment',
    'Monitoring',
    'AWS',
    'ETL',
    'RabbitMQ',
    'Apache Airflow',
    'Apache Kafka',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Motivated and collaborative Engineer with a Bachelor’s degree of Engineering in
              Electronics and Telecommunication from
              {''}
              <a href="https://www.dit.ac.tz" target="_blank" rel="noreferrer">
                Dar Es Salaam Institute of Technology (DIT)
              </a>
              , driven by a passion for continuous learning and contributing in the IT industry.
            </p>

            <p>
              Flash forward to the present, and I’ve had the privilege of working at{' '}
              <a href="https://www.ega.go.tz/" target="_blank" rel="noreferrer">
                e-Government Authority [2020 - 2021] - as IoT & Software Programmer (Intern),
              </a>{' '}
              <a href="https://10academy.org/" target="_blank" rel="noreferrer">
                10 Academy - as ML and Data Engineering Trainee [2021],
              </a>{' '}
              <a href="https://www.omdena.com/" target="_blank" rel="noreferrer">
                Omdena - as Junior Data, and ML Engineer [2021],
              </a>{' '}
              and{' '}
              <a href="https://www.ega.go.tz/" target="_blank" rel="noreferrer">
                e-Government Authority - as Application Programmer · fulltime [2021 - Present]
              </a>{' '}
            </p>

            <p>
              An Introvert with interests in building accessible and inclusive digital experiences,
              exploring the latest technologies in IT industry — <br></br>
              Also an avid Astrophile/Cosmophile with a deep curiosity about the universe, and the
              Cosmos in general, love driving, and discovering the beauty of nature.
            </p>

            <p style={{ fontWeight: 'bold' }}>
              Here are some expertise and technologies I’ve worked with:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/Ethan2.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
