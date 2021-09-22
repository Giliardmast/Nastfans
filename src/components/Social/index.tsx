import * as S from './styles'
import Link from 'next/link'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { InstagramAlt as Instagram } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Telegram } from '@styled-icons/boxicons-logos/Telegram'
import { Tiktok } from '@styled-icons/boxicons-logos/Tiktok'
import { Link as LinkIcon } from '@styled-icons/boxicons-regular/Link'

export type RedesSociaisProps = {
  twitter?: string
  youtube?: string
  instagram?: string
  telegram?: string
  tiktok?: string
  linkAtenativo?: string
}

const Social = ({
  twitter,
  youtube,
  instagram,
  telegram,
  tiktok,
  linkAtenativo
}: RedesSociaisProps) => {
  return (
    <S.IconWrapper>
      <S.Icon>
        {twitter && (
          <Link href={`https://twitter.com/${twitter}`}>
            <a>
              <span className="twitter">
                <Twitter title="Twitter" size={32} />
              </span>
            </a>
          </Link>
        )}
        {youtube && (
          <Link href={`https://www.youtube.com/${youtube}`}>
            <a>
              <span className="youtube">
                <Youtube title="Youtube" size={32} />
              </span>
            </a>
          </Link>
        )}
        {instagram && (
          <Link href={`https://www.instagram.com/${instagram}`}>
            <a>
              <span className="instagram">
                <Instagram title="Instagram" size={32} />
              </span>
            </a>
          </Link>
        )}
        {telegram && (
          <Link href={`${telegram}`}>
            <a>
              <span className="telegram">
                <Telegram title="telegram" size={32} />
              </span>
            </a>
          </Link>
        )}
        {tiktok && (
          <Link href={`https://www.tiktok.com/@${tiktok}`}>
            <a>
              <span className="tiktok">
                <Tiktok title="tiktok" size={32} />
              </span>
            </a>
          </Link>
        )}
        {linkAtenativo && (
          <Link href={`${linkAtenativo}`}>
            <a>
              <span className="linkAtenativo">
                <LinkIcon title="linkAtenativo" size={32} />
              </span>
            </a>
          </Link>
        )}
      </S.Icon>
    </S.IconWrapper>
  )
}

export default Social
