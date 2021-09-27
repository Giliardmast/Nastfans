import MobileMenu from 'components/MobileMenu'
import * as S from './styles'
export type BaseTemplateProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    {children}
    <S.sectionBg className="mobile_menu">
      <MobileMenu />
    </S.sectionBg>
  </S.Wrapper>
)

export default Base
