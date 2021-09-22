import { Compass } from '@styled-icons/open-iconic/Compass'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2Outline as MenuIcon } from '@styled-icons/evaicons-outline/Menu2Outline'
import { EmailOutline as MenssagenIcon } from '@styled-icons/evaicons-outline/EmailOutline'
import { UserCircle as UserIcon } from '@styled-icons/boxicons-regular/UserCircle'
import { CloseCircle as CloseIcon } from '@styled-icons/ionicons-sharp/CloseCircle'

import { useState } from 'react'
import Link from 'next/link'
import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Link href="/">
        <a>
          <Logo hideOnMobile />
        </a>
      </Link>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="pesquisar" />
            </S.IconWrapper>
            <S.MenuLink>
              <Link href="/discover">
                <a>Descubrir</a>
              </Link>
            </S.MenuLink>
            <S.MenuLink>
              <Link href="#">
                <a>Ganhe Dinheiro</a>
              </Link>
            </S.MenuLink>
            {!username && (
              <>
                <S.MenuLink>
                  <Link href="/sign-up">
                    <a>Inscrever-se</a>
                  </Link>
                </S.MenuLink>
                <S.MenuLink>
                  <Link href="/sign-in">
                    <a>Entrar</a>
                  </Link>
                </S.MenuLink>
                <S.MenuLink>
                  <Link href="#">
                    <a>inglês</a>
                  </Link>
                </S.MenuLink>
              </>
            )}
            {!!username && (
              <>
                <S.MenuLink>
                  <Link href="#">
                    <a>Painel</a>
                  </Link>
                </S.MenuLink>
                <S.IconWrapper>
                  <MenssagenIcon />
                </S.IconWrapper>
                <S.IconWrapper>
                  <UserIcon />
                </S.IconWrapper>
              </>
            )}
          </S.MenuGroup>
        </S.MenuNav>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.MenuGroup>
          <S.IconWrapper>
            <SearchIcon aria-label="pesquisar" />
          </S.IconWrapper>
          <S.IconWrapper>
            <Compass aria-label="Descubrir" />
          </S.IconWrapper>
          <S.IconWrapper>
            <MenssagenIcon />
          </S.IconWrapper>
          <S.IconWrapper>
            <UserIcon />
          </S.IconWrapper>
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </S.MenuGroup>
      </MediaMatch>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>
            <Link href="#">
              <a>Home</a>
            </Link>
          </S.MenuLink>
          <S.MenuLink>
            <Link href="#">
              <a>Explore</a>
            </Link>
          </S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink>
                <Link href="#">
                  <a>My account</a>
                </Link>
              </S.MenuLink>
              <S.MenuLink>
                <Link href="#">
                  <a>Wishlist</a>
                </Link>
              </S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth as="a" size="large">
                Login in now
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount href="/sign-up" title="Sing Up">
              Sing Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
