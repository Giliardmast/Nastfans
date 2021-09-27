import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ItemVideoFeedProps } from '.'
type WrapperProps = Pick<ItemVideoFeedProps, 'imagen'>

export const ItemVideoFeed = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const ImageCard = styled.div<WrapperProps>`
  ${({ imagen }) => css`
    background-image: url(${imagen});
    background-size: cover;
    background-position: top center;
    height: 39.5rem;
    ${media.lessThan('medium')`
    height: 28.5rem;
  `}
  `}
`
export const VideoCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.layers.modal};
    overflow-x: hidden;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      overflow-y: hidden;
    }

    ${media.lessThan('small')`
    background: ${theme.colors.black};
    `}
  `}
`
export const ModalContent = styled.div``
export const ContentBox = styled.div``
export const VideoBrowseMode = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
`
export const VideoCardContainer = styled.div`
  background: black;
  flex: 1 1 896px;
  position: relative;
  overflow: hidden;
  padding: 0px 80px;

  .control-icon {
    width: 40px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    color: #ffffff82;
  }

  .arrow-up {
    left: unset;
    right: 20px;
    transform: rotate(0deg);
    margin-top: -48px;
  }
  .arrow-down {
    right: 20px;
    transform: rotate(180deg);
    margin-top: 8px;
  }
`
export const BackgroundImage = styled.div`
  position: absolute;
  width: 10%;
  height: 10%;
  filter: blur(2px);
  left: 50%;
  top: 50%;
  transform: scale(11);
  opacity: 0.3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const VideoCardBrowse = styled.div`
  max-width: 51rem;
  max-height: initial;
  overflow-y: hidden;
  margin: auto;
  position: relative;
  background: center center / contain no-repeat;
`
export const VolumeWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
`
export const SoundWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`
export const ContentContainer = styled.div`
  flex: 0 0 544px;
  width: 544px;
  display: flex;
  flex-direction: column;
`
export const UserInfoContainer = styled.div`
  padding: 32px 32px 0px;
`
export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    opacity: 0.4;
    cursor: pointer;
    color: #000;
    top: 5px;
    right: 7px;
    z-index: ${theme.layers.base};
    width: 4rem;
    height: 4rem;
  `}
`
export const UserInfo = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 22px 0px 15px;
  color: rgb(22, 24, 35);
`
export const VideoInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  overflow: hidden;
  flex-shrink: 0;
`
export const VideoMetaTitle = styled.div`
  h1 {
    line-height: 24px;
    color: rgb(18, 18, 18);
    flex: 0 0 auto;
    font-weight: normal;
    margin-bottom: 0px;
    word-break: break-word;
  }

  span {
    font-weight: normal;
  }
`
export const MusicInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  position: relative;
  margin-bottom: 16px;
  flex: 0 0 auto;
  margin-top: 10px;
`
export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px 0px;
  position: relative;
  flex: 0 0 auto;
`
export const ActionIcons = styled.div`
  display: flex;
  flex: 0 0 auto;
  font-weight: 600;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
`
export const ActionShare = styled.div`
  display: flex;
`
export const CommentContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  background-color: rgb(248, 248, 248);
  padding: 0px 32px;
  border-top: 0.5px solid rgba(18, 18, 18, 0.12);
  border-bottom: 0.5px solid rgba(18, 18, 18, 0.12);
  box-sizing: border-box;
`
export const Comments = styled.div`
  padding-top: 16px;
  width: 100%;
`
export const CommentItem = styled.div`
  margin-bottom: 16px;
  width: 100%;
`

export const CommentPost = styled.div`
  margin: 0px 32px;
  padding: 21px 0px;
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  margin-bottom: -5px;
`
export const CommentInput = styled.div``
export const PostComment = styled.div`
  font-weight: 600;
  margin: 0px 4px 12px 16px;
  font-size: 14px;
  color: rgba(22, 24, 35, 0.34);
  line-height: 14px;
  cursor: default;
`
