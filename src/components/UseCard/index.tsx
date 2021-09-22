import * as S from './styles'
import Video, { VideoProps } from 'components/Video'

export type useCardProps = {
  itemCard: VideoProps
}

const UseCard = ({ itemCard }: useCardProps) => {
  return (
    <S.Wrapper>
      <Video {...itemCard} />
    </S.Wrapper>
  )
}

export default UseCard
