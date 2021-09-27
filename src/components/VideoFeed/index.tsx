import * as S from './styles'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

import Video from 'components/Video'

import { ArrowUpCircleFill as Arrow } from '@styled-icons/bootstrap/ArrowUpCircleFill'
import { Unmute } from '@styled-icons/octicons/Unmute'
import { CloseCircle as CloseIcon } from '@styled-icons/ionicons-sharp/CloseCircle'
import UserAvatar from 'components/UserAvatar'
import VideoComments, { ItemVideoCommentsProps } from 'components/VideoComments'
//https://codesandbox.io/s/Rk360Yxz?file=/index.js

export type ItemVideoStatisticsProps = {
  like: number
  coment: number
  share: number
}

export type ItemVideoFeedProps = {
  imagen: string
  video: string
  sing: string
  desc: string
  comments: ItemVideoCommentsProps[]
  statistics: ItemVideoStatisticsProps
}
const VideoFeed = ({ imagen, video, comments }: ItemVideoFeedProps) => {
  const [isModal, setIsModal] = useState(false)
  return (
    <S.ItemVideoFeed>
      <S.ImageCard imagen={imagen} role="image" aria-label="Cover">
        <S.VideoCard
          onClick={() => {
            setIsModal(true)
          }}
        ></S.VideoCard>
      </S.ImageCard>
      {!!isModal && (
        <S.Modal>
          <S.ModalContent>
            <S.ContentBox>
              <S.VideoBrowseMode>
                <S.VideoCardContainer>
                  <S.BackgroundImage>
                    <img src={imagen} alt="{username}" />
                  </S.BackgroundImage>
                  <S.VideoCardBrowse>
                    <Video url={video} />
                  </S.VideoCardBrowse>
                  <Arrow className="control-icon arrow-up" />
                  <Arrow className="control-icon arrow-down" />
                  <S.VolumeWrapper>
                    <S.SoundWrapper></S.SoundWrapper>
                    <Unmute />
                  </S.VolumeWrapper>
                </S.VideoCardContainer>
                <S.ContentContainer>
                  <S.UserInfoContainer>
                    <S.Close>
                      <CloseIcon
                        onClick={() => {
                          setIsModal(false)
                        }}
                      />
                    </S.Close>
                    <S.UserInfo>
                      <Link href="#" passHref>
                        <UserAvatar
                          username="Giliard"
                          img="/users/rachelstarr/avatar/1ceb05fbfe38b2fbbd21e6ba842765cf_c5_720x720.jpeg"
                          nickname="@Giliard"
                          size="large"
                          color="black"
                        />
                      </Link>
                    </S.UserInfo>
                  </S.UserInfoContainer>
                  <S.VideoInfosContainer>
                    <S.VideoMetaTitle>
                      <h1>Titulo do video</h1>
                      <span>Descrição</span>
                    </S.VideoMetaTitle>
                    <S.MusicInfo>Musica tocando</S.MusicInfo>
                    <S.ActionContainer>
                      <S.ActionIcons>linkes</S.ActionIcons>
                      <S.ActionShare>compartilhar</S.ActionShare>
                    </S.ActionContainer>
                  </S.VideoInfosContainer>
                  <S.CommentContainer>
                    <S.Comments>
                      <S.CommentItem>
                        {comments.map((comment, index) => (
                          <VideoComments key={index} {...comment} />
                        ))}
                      </S.CommentItem>
                    </S.Comments>
                  </S.CommentContainer>
                  <S.CommentPost>
                    <S.CommentInput>DraftEditor</S.CommentInput>
                    <S.PostComment> Publicar </S.PostComment>
                  </S.CommentPost>
                </S.ContentContainer>
              </S.VideoBrowseMode>
            </S.ContentBox>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.ItemVideoFeed>
  )
}

export default VideoFeed
