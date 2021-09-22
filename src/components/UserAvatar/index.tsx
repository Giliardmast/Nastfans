import Button from 'components/Button'
import * as S from './styles'
import Image from 'next/image'

export type UserAvatarProps = {
  username: string
  img: string
  nickname: string
  size?: 'small' | 'medium' | 'large'
  color?: 'white' | 'black'
  usergp?: boolean
  price?: string
  age?: string
  bg?: boolean
}

const UserAvatar = ({
  username,
  img,
  nickname,
  color = 'white',
  price,
  age,
  bg = false,
  size = 'small',
  usergp
}: UserAvatarProps) => (
  <S.Wrapper size={size} usergp={usergp} bg={bg} color={color}>
    <S.UserCicleBox>
      <S.BoxOne className="Cicle"></S.BoxOne>
      <S.Avatar>
        <Image
          src={img}
          alt={username}
          width={250}
          height={250}
          className="img__avatar"
        />
      </S.Avatar>
    </S.UserCicleBox>
    <S.UserName>
      {username}
      <span>{usergp ? <S.Age>{`${age} anos`} </S.Age> : nickname}</span>
    </S.UserName>
    <S.UserSeguir>
      <Button size="small">{usergp ? `R$ ${price}` : 'Seguir'}</Button>
    </S.UserSeguir>
  </S.Wrapper>
)

export default UserAvatar
