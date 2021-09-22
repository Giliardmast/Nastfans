import * as S from './styles'
import Link from 'next/link'

export type MostVisitedAreasProps = {
  district: string
  slug: string
}

export type MostVisitedProps = {
  items: MostVisitedAreasProps[]
}

const MostVisitedAreas = ({ items }: MostVisitedProps) => (
  <S.Wrapper>
    <S.Content>
      {items.map((item) => (
        <S.Bairros key={item.district} {...item}>
          <Link href={`./${item.slug}`}>
            <a>{item.district}</a>
          </Link>
        </S.Bairros>
      ))}
    </S.Content>
    <S.Sidebar>Ver mais</S.Sidebar>
  </S.Wrapper>
)

export default MostVisitedAreas
