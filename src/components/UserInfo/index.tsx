import Button from 'components/Button'
import Social, { RedesSociaisProps } from 'components/Social'
import UserAvatar, { UserAvatarProps } from 'components/UserAvatar'
import { Like } from '@styled-icons/evil/Like'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type userInfoProps = {
  useAvatar: UserAvatarProps
  linkSocias: RedesSociaisProps
}

const UserInfo = ({ useAvatar, linkSocias }: userInfoProps) => (
  <S.Content>
    <S.UserInfo>
      <UserAvatar {...useAvatar} size="large" />
      <S.ActionContainer>
        <S.ActionContent>
          <S.Action>
            <Button icon={<Like />} size="medium" className="bt_like">
              Seguir
            </Button>
          </S.Action>
        </S.ActionContent>
        <S.ActionContent className="metrics">
          <S.Action>1.5k seguidores</S.Action>
          <S.Action>68 videos</S.Action>
          <S.Action>127 Packs</S.Action>
        </S.ActionContent>
      </S.ActionContainer>
    </S.UserInfo>
    <S.UserSocial>
      <MediaMatch greaterThan="medium">
        <Social {...linkSocias} />
      </MediaMatch>
    </S.UserSocial>
  </S.Content>
)

export default UserInfo
