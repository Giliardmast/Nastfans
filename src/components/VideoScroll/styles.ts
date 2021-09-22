import styled, { css } from 'styled-components'
import { VideoProps } from '.'

type WrapperProps = Pick<VideoProps, 'soundBar'>
const wrapperModifiers = {
  soundBar: () => css`
    opacity: 0;
  `
}
export const Wrappervideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  &.video__player {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`
export const PlayButton = styled.div`
  position: absolute;
  inset: 0px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  svg {
    position: absolute;
    color: white;
    inset: 0px;
    margin: auto;
    width: 5rem;
    height: 5rem;
  }
`
export const PlayBar = styled.div`
  position: absolute;
  bottom: 0.8rem;
  width: 88%;
  > input {
    width: 100%;
  }

  #time {
    -webkit-appearance: none;
    width: 100%;
    height: 9px;
    background: #040404a3;
    outline: none;
    opacity: 0.5;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  #time:hover {
    background: #848484d9;
  }

  #time::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 7px;
    background: #040404d9;
    cursor: pointer;
  }

  #time::-moz-range-thumb {
    width: 10px;
    height: 7px;
    background: #040404d9;
    cursor: pointer;
  }
`

export const VolumeControl = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 0;
`
export const Volume = styled.div`
  display: flex;
  flex-direction: row;
`
export const SoundBar = styled.input<WrapperProps>`
  ${({ soundBar }) => css`
    position: absolute;
    right: 1.5rem;
    bottom: 1.3rem;

    &#volume {
      outline: none;
      -webkit-appearance: slider-vertical; /* WebKit */
      background: #040404a3;
      border: none;
      width: 5px;
      padding: 0 5px;
      height: 120px;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    &#volume::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: #040404d9;
      cursor: pointer;
    }

    &#volume::-moz-range-thumb {
      background: #040404d9;
      cursor: pointer;
    }

    ${!soundBar && wrapperModifiers.soundBar()}
  `}
`
export const SoundWrapper = styled.span`
  margin-bottom: -1rem;
  margin-right: 0.5rem;
  z-index: 20;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #ffffff70;
    cursor: pointer;
  }
  svg:hover {
    color: white;
  }
`
