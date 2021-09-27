import styled from 'styled-components'

export const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin-bottom: 16px;
  position: relative;
`
export const CommentAvatar = styled.div`
  span {
    border-width: 0.5px;
    border-color: rgba(22, 24, 35, 0.12);

    margin-right: 12px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
`
export const ContentContainer = styled.div``
export const Username = styled.div`
  font-size: 18px;
  display: block;
  line-height: 25px;
  font-weight: 400;
  color: rgb(22, 24, 35);
  word-break: break-word;
  white-space: pre-line;
  user-select: none;
`
export const CommentText = styled.div`
  font-size: 18px;
  display: block;
  line-height: 25px;
  font-weight: 400;
  color: rgb(22, 24, 35);
  word-break: break-word;
  white-space: pre-line;
  user-select: none;
`
export const BottomContainer = styled.div`
  display: flex;
`
export const Time = styled.div`
  display: block;
  font-size: 14px;
  line-height: 20px;
  margin: 6px 0px 0px;
  color: rgba(18, 18, 18, 0.5);
`
export const Reply = styled.div`
  margin: 6px 0px 0px 24px;
  font-weight: 600;
  color: rgba(22, 24, 35, 0.5);
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`
export const LikeContainer = styled.div`
  top: 24px;
  right: 2px;
  position: absolute;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 20px;
  svg {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  p {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    color: rgba(22, 24, 35, 0.5);
  }
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
export const ViewMore = styled.div`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  &::before {
    width: 36px;
    background: rgba(18, 18, 18, 0.12);
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    top: 50%;
    left: 0px;
    margin-top: -0.5px;
  }

  p {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    color: rgba(18, 18, 18, 0.5);
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 6px;
  }
`
export const MoreContents = styled.div`
  padding-left: 52px;
  user-select: none;
  margin-top: 2rem;
`
