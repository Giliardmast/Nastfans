import { Container } from 'components/Container'
import PromotionalCard from 'components/PromotionalCard'
import Radio from 'components/Radio'
import SigleSidebar from 'components/SigleSidebar'
import { ItemVideoFeedProps } from 'components/VideoFeed'
import UserInfo, { userInfoProps } from 'components/UserInfo'
import Base from 'templates/Base/desktop'
import Image from 'next/image'

import * as S from './styles'
import VideoFeed from 'components/VideoFeed'
import { Key } from 'react'

export type SigleTemplateProps = {
  cover: string
  userInfo: userInfoProps
  feedItems: ItemVideoFeedProps[]
}

const SiglePage = ({ cover, userInfo, feedItems }: SigleTemplateProps) => {
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
              <S.SigleTitle>Desktop</S.SigleTitle>
              <S.MuiTabs>
                <Radio
                  id="feed"
                  value="feed"
                  label="Feed"
                  labelFor="feed"
                  name="multitabs"
                  button
                />
                <Radio
                  id="videos"
                  value="videos"
                  label="Premium Videos"
                  labelFor="videos"
                  name="multitabs"
                  button
                />
                <Radio
                  id="packs"
                  value="packs"
                  label="Packs"
                  labelFor="packs"
                  name="multitabs"
                  button
                />
              </S.MuiTabs>
            </S.MuiTabsbox>

            <S.VideoFeed>
              {feedItems.map((feedItem, index) => (
                <VideoFeed key={index} {...feedItem} />
              ))}
            </S.VideoFeed>
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
