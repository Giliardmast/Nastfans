import * as S from './styles'
import VideoScroll, { VideoProps } from 'components/VideoScroll'
import SidebarCard, { SocialProps } from 'components/SidebarCard'
export type useCardProps = {
  itemCard: VideoProps
  socialDados: SocialProps
}
const UseCardMobile = ({ itemCard, socialDados }: useCardProps) => {
  return (
    <S.Wrapper>
      <VideoScroll {...itemCard} />
      <SidebarCard {...socialDados} />
    </S.Wrapper>
  )
}

export default UseCardMobile
