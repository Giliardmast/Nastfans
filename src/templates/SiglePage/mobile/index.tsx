import { useCardProps } from 'components/UseCard'
import UserInfoMobile, { userInfoProps } from 'components/UserInfoMobile'
import Base from 'templates/Base/mobile'
import Image from 'next/image'
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical'

import * as S from './styles'
import Radio from 'components/Radio'

export type SigleTemplateProps = {
  cover: string
  userInfo: userInfoProps
  itemsCard: useCardProps
}

const SiglePage = ({ cover, userInfo, itemsCard }: SigleTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="Cover" />
      <S.UserContent>
        <UserInfoMobile {...userInfo} />
      </S.UserContent>
      <S.SingleContent>
        <S.Content>
          <S.MuiTabsbox>
            <S.Menu>
              <ThreeDotsVertical />
            </S.Menu>
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
            <S.Video>
              <Image
                src="/img/gp/default-gp.png"
                alt="tezt"
                width={195}
                height={325}
              />
            </S.Video>
            <S.Video>
              <Image
                src="/img/gp/default-gp.png"
                alt="tezt"
                width={195}
                height={325}
              />
            </S.Video>
            <S.Video>
              <Image
                src="/img/gp/default-gp.png"
                alt="tezt"
                width={195}
                height={325}
                className="img__avatar"
              />
            </S.Video>
            <S.Video>
              <Image
                src="/img/gp/default-gp.png"
                alt="tezt"
                width={195}
                height={325}
                className="img__avatar"
              />
            </S.Video>
            <S.Video>
              <Image
                src="/img/gp/default-gp.png"
                alt="tezt"
                width={195}
                height={325}
                className="img__avatar"
              />
            </S.Video>
          </S.VideoFeed>
        </S.Content>
      </S.SingleContent>
    </Base>
  )
}

export default SiglePage
