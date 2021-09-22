import { Container } from 'components/Container'
import Heading from 'components/Heading'
import SliderStories from 'components/SliderStories'
import { UserStoriesProps } from 'components/UserStories'
import Base from 'templates/Base'
import * as S from './styles'
export type HomeTemplateProps = {
  UserStories: UserStoriesProps[]
}
const Home = ({ UserStories }: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.Heading>
        <Heading lineLeft lineColor="secondary">
          Sugestões para você
        </Heading>
      </S.Heading>
      <SliderStories items={UserStories} />
    </Container>

    <Container>
      <S.Heading>
        <Heading lineLeft lineColor="secondary">
          Feed
        </Heading>
      </S.Heading>
    </Container>
  </Base>
)

export default Home
