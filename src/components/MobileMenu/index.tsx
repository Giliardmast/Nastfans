import { Compass } from '@styled-icons/open-iconic/Compass'
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline'
import { EmailOutline as MenssagenIcon } from '@styled-icons/evaicons-outline/EmailOutline'
import { UserCircle as UserIcon } from '@styled-icons/boxicons-regular/UserCircle'
import { Home as HomeIcon } from '@styled-icons/boxicons-solid/Home'
import { useState } from 'react'
import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <HomeIcon />
          <S.Texbox>Home</S.Texbox>
        </S.IconWrapper>
        <S.IconWrapper>
          <SearchIcon aria-label="pesquisar" />
          <S.Texbox>Pesquisar</S.Texbox>
        </S.IconWrapper>
        <S.IconWrapper>
          <Compass aria-label="Descubrir" size="31" />
          <S.Texbox>Descubrir</S.Texbox>
        </S.IconWrapper>
        <S.IconWrapper>
          <MenssagenIcon />
          <S.Texbox>Caixa de entrada</S.Texbox>
        </S.IconWrapper>
        <S.IconWrapper>
          <UserIcon />
          <S.Texbox>Perfil</S.Texbox>
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  )
}

export default Menu
