import * as S from './styles'
import Video, { VideoProps } from 'components/Video'
import { SocialProps } from 'components/SidebarCard'

export type useCardProps = {
  itemCard: VideoProps
  socialDados: SocialProps
}

const UseCard = ({ itemCard }: useCardProps) => {
  return (
    <S.Wrapper>
      <Video {...itemCard} />
    </S.Wrapper>
  )
}

export default UseCard
