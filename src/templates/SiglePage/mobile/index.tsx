import Button from 'components/Button'
import { Container } from 'components/Container'
import PromotionalCard from 'components/PromotionalCard'
import SigleSidebar from 'components/SigleSidebar'
import { useCardProps } from 'components/UseCard'
import UseCardMobile from 'components/UseCardMobile'
import UserInfo, { userInfoProps } from 'components/UserInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type SigleTemplateProps = {
  cover: string
  userInfo: userInfoProps
  itemsCard: useCardProps
}

const SiglePage = ({ cover, userInfo, itemsCard }: SigleTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="Cover" />
      <Container>
        <S.UserContent>
          <UserInfo {...userInfo} />
        </S.UserContent>
        <S.SingleContent>
          <S.Content>
            <S.MuiTabsbox>
              <S.SigleTitle>Mobile</S.SigleTitle>
              <S.MuiTabs>
                <Button>Fotos</Button>
                <Button>Videos</Button>
                <Button>Packs</Button>
              </S.MuiTabs>
            </S.MuiTabsbox>

            <S.ContentCard>
              <UseCardMobile {...itemsCard} />
              <UseCardMobile {...itemsCard} />
              <UseCardMobile {...itemsCard} />
            </S.ContentCard>
          </S.Content>
          <S.SidbarConteiner>
            <PromotionalCard />
            <S.Sidbar>
              <SigleSidebar />
            </S.Sidbar>
          </S.SidbarConteiner>
        </S.SingleContent>
      </Container>
    </Base>
  )
}

export default SiglePage
