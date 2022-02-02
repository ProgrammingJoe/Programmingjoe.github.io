import React, { useEffect, createRef } from "react"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet";

import { background, fontColor, gray300 } from "../components/colors"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  Text,
  SubText,
  Content,
  Title,
  Section,
  SectionHeader,
  SectionText,
  LineItem,
  LineItemModifier,
  LineItemText,
  Link,
  Intro,
  List,
  AnimationWrapper,
  CarouselWrapper
} from "../components/components";
import animation from '../animation.json';
import lottie from "lottie-web";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }
  a, li, p, span, h1, h2, h3 {
    font-family: 'Cabin';
    font-size: 18px;
  }
`

const pageStyles = {
  color: fontColor,
  padding: "0 24px",
  backgroundColor: background,
  minHeight: '100vh'
}

const IndexPage = () => {
  const animRef = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <main style={pageStyles}>
      <GlobalStyle/>

      <Helmet
        title="Joe Czepil"
        meta={[
          {
            name: 'description',
            content: `Joe Czepil builds web apps from scratch. He is currently working on his own ventures
              and doing freelance on the side`
          }
        ]}
      />

      <Content>
        <div>
          <Title>Joe Czepil</Title>
          <Intro>
            I build web apps from scratch. I'm currently building my own ventures
            and doing freelance on the side but if you have a web app you want
            built, <Link href="mailto:joe@czepil.com">let's chat</Link>.
          </Intro>
          <Intro>
            I follow agile processes with a pragmatic approach to ensure that web apps are built quickly,
            satisfy customer needs, and can scale into the future.
          </Intro>

          <Section>
            <SectionHeader>// Credentials</SectionHeader>
            <SectionText>Bachelor of Engineering, Business Minor, EIT, Dog Dad</SectionText>
          </Section>
 
          <Section>
            <SectionHeader>// Now</SectionHeader>
            <List>
              <LineItem>
                <Link href="https://site.spart.xyz/">
                  Spart
                </Link>
                <LineItemModifier>$30 MRR</LineItemModifier>
              </LineItem>
              <LineItem>
                <Link href="https://muriel.io/">
                  Muriel
                </Link>
                <LineItemModifier>In development</LineItemModifier>
              </LineItem>
              <LineItem>
                <LineItemText>Freelance</LineItemText>
                <Link href="mailto:joe@czepil.com">
                  Available for more work
                </Link>
              </LineItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>// Past</SectionHeader>
            <List>
              <LineItem>
                <LineItemText>Certn</LineItemText>
                <LineItemModifier>Full Stack Developer</LineItemModifier>
              </LineItem>
              <LineItem>
                <LineItemText>GetSmart Solutions</LineItemText>
                <LineItemModifier>Lead Product Developer</LineItemModifier>
              </LineItem>
              <LineItem>
                <LineItemText>Global Relay</LineItemText>
                <LineItemModifier>Front-end Developer</LineItemModifier>
              </LineItem>
              <LineItem>
                <LineItemText>ACD Systems</LineItemText>
                <LineItemModifier>Quality Assurance</LineItemModifier>
              </LineItem>
            </List>
          </Section>

          <CarouselWrapper>
            <span>🏆</span>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                axis="vertical"
            >
                <Text color={gray300}>2022·01·04 Completed my first Blender 3D project</Text>
                <Text color={gray300}>2021·11·13 Released embedded video support for Spart</Text>
                <Text color={gray300}>2021·10·29 Left my job to pursue freelance and entrepreneurship</Text>
                <Text color={gray300}>2021·04·05 Got my first paying Spart user</Text>
                <Text color={gray300}>2020·05·23 Started Muriel</Text>
                <Text color={gray300}>2019·01·14 Launched Spart</Text>
            </Carousel>
          </CarouselWrapper>

        </div>
        <AnimationWrapper>
          <div ref={animRef} style={{ position: 'absolute', top: 20, right: 20 }}/>
        </AnimationWrapper>
      </Content>

      <div style={{ maxWidth: '850px' }}>
        <Section>
          <Text>
            I post some thoughts
            on <Link href="https://twitter.com/Programmingjoe" target="_blank" rel="noreferrer">Twitter</Link>, my
            art on <Link href="https://site.spart.xyz/" target="_blank" rel="noreferrer">Spart</Link>, some
            other art on <Link href="https://dribbble.com/Programmingjoe" target="_blank" rel="noreferrer">Dribbble</Link>, and
            the occasional blog post
            on <Link href="https://medium.com/@Programmingjoe" target="_blank" rel="noreferrer">Medium</Link>.
            If you want to see my code, checkout
            my <Link href="https://github.com/ProgrammingJoe" target="_blank" rel="noreferrer">Github</Link> and if
            you reeeally want to see
            my <Link href="https://www.linkedin.com/in/joeczepil/" target="_blank" rel="noreferrer">Linkedin</Link>, then
            you can. Don't forget to plant some trees
            with <Link href="https://ecologi.com/joeczepil?r=5d8c1348aa78380010db30c5" target="_blank" rel="noreferrer">Ecologi.</Link>
          </Text>
        </Section>
        <Section>
          <SubText>
            python, django, django rest framework, javascript, typescript, react, vue, aws, s3, cloudfront,
            iam users, heroku, git, github, gitlab, azure devops, jira, postgres, html, css, scss, golang, scrum,
            project management, agile development, story points, sql, problem solving, unit testing, slack,
            discord, community management, client meetings, demos, expectation management, mvp
          </SubText>
        </Section>
        <div style={{ paddingBottom: 12 }}/>
      </div>
    </main>
  )
}

export default IndexPage
