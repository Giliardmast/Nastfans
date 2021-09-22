import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

export type UserStoriesProps = {
  name: string
  img: string
  link: string
}
const UserStories = ({ name, img, link }: UserStoriesProps) => (
  <S.Wrapper>
    <S.ContentUserCicle>
      <Link href={link} passHref>
        <S.UserCicle>
          <S.UserCicleBox>
            <S.BoxOne className="Cicle"></S.BoxOne>
            <S.Boxtwo className="CicleColor"></S.Boxtwo>
            <S.ImgUserCicle>
              <Image src={img} alt={name} width={200} height={200} />
            </S.ImgUserCicle>
          </S.UserCicleBox>
          <S.UserCicleNome>{name}</S.UserCicleNome>
        </S.UserCicle>
      </Link>
    </S.ContentUserCicle>
  </S.Wrapper>
)

export default UserStories
