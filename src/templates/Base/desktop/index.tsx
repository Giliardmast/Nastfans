import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'
export type BaseTemplateProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.sectionBg>
      <Container>
        <Menu />
      </Container>
    </S.sectionBg>
    <S.Content> {children}</S.Content>
    <S.sectionBg>
      <Container>
        <Footer />
      </Container>
    </S.sectionBg>
  </S.Wrapper>
)

export default Base
