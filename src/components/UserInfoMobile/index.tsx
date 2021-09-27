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
const UserInfoMobile = ({ useAvatar, linkSocias }: userInfoProps) => (
  <S.Content>
    <S.TopbarContent>
      <S.Action>1.5k seguidores</S.Action>
      <S.Action>68 videos</S.Action>
      <S.Action>127 Packs</S.Action>
    </S.TopbarContent>
    <S.UserInfo>
      <UserAvatar {...useAvatar} size="medium" />
    </S.UserInfo>
  </S.Content>
)

export default UserInfoMobile
