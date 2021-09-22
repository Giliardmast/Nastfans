import * as S from './styles'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import UserStories, { UserStoriesProps } from 'components/UserStories'

import Slider, { SliderSettings } from 'components/Slider'
export type BannerSliderProps = {
  items: UserStoriesProps[]
}

const settings: SliderSettings = {
  slidesToShow: 12,
  infinite: false,
  variableWidth: true,
  nextArrow: <ArrowRight aria-label="Next games" />,
  prevArrow: <ArrowLeft aria-label="previus games" />
}
const SliderStories = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <S.Content>
      <Slider settings={settings}>
        {items.map((item) => (
          <UserStories key={item.name} {...item} />
        ))}
      </Slider>
    </S.Content>
  </S.Wrapper>
)

export default SliderStories
