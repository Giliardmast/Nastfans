import { useState } from 'react'
import * as S from './styles'

import UiNumber from 'components/UiNumber'

import { Favorite } from '@styled-icons/material/Favorite'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { MessageCircle as Message } from '@styled-icons/evaicons-solid/MessageCircle'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'

export type SocialProps = {
  likes: number
  coments: number
  shares: number
}

const SidebarCard = ({ likes, coments, shares }: SocialProps) => {
  const [liked, setLiked] = useState(false)
  function FormatNumber(likes: number) {
    let format = '0a'

    if (likes >= 1000) {
      format = '0.0a'
    }

    return format
  }
  return (
    <S.Sidebar>
      <S.Item_sidebar_icons>
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}
        <UiNumber format={FormatNumber(likes)}>
          {liked ? likes + 1 : likes}
        </UiNumber>
      </S.Item_sidebar_icons>
      <S.Item_sidebar_icons>
        <Message />
        <span>{coments}</span>
      </S.Item_sidebar_icons>
      <S.Item_sidebar_icons>
        <Whatsapp />
        <UiNumber format={FormatNumber(shares)}>{shares}</UiNumber>
      </S.Item_sidebar_icons>
    </S.Sidebar>
  )
}

export default SidebarCard
