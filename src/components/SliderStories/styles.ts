import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
    .slick-list {
      margin: 0;
      display: block;
      padding: 0;
      overflow: hidden;
      position: relative;
      transition: height 225ms;
      touch-action: pan-y;
    }
    .slick-track {
      width: 9999px !important;
      display: flex;
      min-width: 9999px !important;
      touch-action: pan-y;
      position: relative;
    }
    .slick-slide {
      float: left;
      height: 100%;
      min-height: 1px;
    }
    .slick-track,
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall}!important;
      position: relative;
      flex: 1 0 auto;
      height: 100%;
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.black};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
export const Content = styled.div``
