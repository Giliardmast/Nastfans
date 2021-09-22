import * as S from './styles'
import numeral from 'numeral'

export type UiNumberProps = {
  format: string
  children: number
}
const UiNumber = ({ format, children }: UiNumberProps) => (
  <S.Wrapper>{numeral(children).format(format)}</S.Wrapper>
)

export default UiNumber
