import * as React from "react"
import styled from "styled-components"

import { gray300 } from "./colors"

export const Text = styled.p`
  margin: 0px;
  text-align: left;
`

export const SubText = styled.p`
  font-size: 17px;
  color: ${gray300};
`


export const Content = styled.div`
  position: relative;
  padding-top: 24px;
  div {
    display: inline-block;
    &:first-of-type {
      max-width: 600px;
    }
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #8F6DCA;

  &:hover {
    text-decoration: line-through;
  }
`
export const LineItem = styled.li`
  list-style: none;

  div, span, p, a {
    margin-right: 8px;
  }
`
export const LineItemText = styled.p`
  position: relative;
  display: inline;
  margin-right: 8px;
`
export const LineItemModifier = styled.span`
  text-decoration: none;
  color: ${gray300};
`
export const Title = styled.h1`
  font-size: 38px;
`
export const Intro = styled.h2`
  font-size: 28px;
  a {
    font-size: 28px;
  }
`
export const SectionHeader = styled.h3`
  font-size: 22px;
  color: ${gray300};
`
export const Section = styled.section`
`
export const SectionText = styled.p`
`
export const List = styled.ul`
  padding: 0;
  margin: 0;
`

export const CarouselWrapper = styled.div`
  vertical-align: center;
  margin-top: 36px;
  margin-bottom: 24px;

  div, span {
    vertical-align: middle;

    @media (max-width: 1080px) {
      display: none;
    }
  }
  span {
    margin-right: 12px;
  }
`

export const AnimationWrapper = styled.div`
  svg {
    margin: auto;

    @media (max-width: 1080px) {
      display: none;
    }
  }
`
