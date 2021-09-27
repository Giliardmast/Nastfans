import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { ArrowUpCircleFill as Arrow } from '@styled-icons/bootstrap/ArrowUpCircleFill'

export type ItemVideoCommentsProps = {
  id: string
  avatar: string
  name: string
  username: string
  commentario: string
  data: Date
  like: number
  reply: string
}

const VideoComments = ({
  id,
  avatar,
  name,
  username,
  commentario,
  data,
  like,
  reply
}: ItemVideoCommentsProps) => {
  return (
    <>
      <S.CommentContent className="level-1">
        <S.CommentAvatar>
          <Link href={`http://localhost:3000/${username}`} passHref>
            <span className="user-avatar">
              <Image
                src={avatar}
                alt={name}
                width={250}
                height={250}
                className="img__avatar"
              />
            </span>
          </Link>
        </S.CommentAvatar>
        <S.ContentContainer>
          <S.Username>{name}</S.Username>
          <S.CommentText>
            <span>{commentario}</span>
          </S.CommentText>
          <S.BottomContainer>
            <S.Time>{data}</S.Time>
            <S.Reply>Responder</S.Reply>
          </S.BottomContainer>
          <S.LikeContainer>
            <HeartFill />
            <p>{like}</p>
          </S.LikeContainer>
        </S.ContentContainer>
      </S.CommentContent>
      {!!reply && (
        <S.MoreContents>
          ddd
          <S.ViewMore>
            <p>
              Ver respostas (1) <Arrow />
            </p>
          </S.ViewMore>
        </S.MoreContents>
      )}
    </>
  )
}

export default VideoComments
