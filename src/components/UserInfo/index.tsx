import Button from 'components/Button'
import Social, { RedesSociaisProps } from 'components/Social'
import UserAvatar, { UserAvatarProps } from 'components/UserAvatar'
import { Like } from '@styled-icons/evil/Like'
import * as S from './styles'

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
            <Button icon={<Like />} size="medium">
              Seguir
            </Button>
          </S.Action>
          <S.Action>
            <Button minimal>Envia Messagem</Button>
          </S.Action>
        </S.ActionContent>
        <S.ActionContent className="metrics">
          <S.Action>68 videos</S.Action>
          <S.Action>127 fotos</S.Action>
          <S.Action>1.5k seguidores</S.Action>
        </S.ActionContent>
      </S.ActionContainer>
    </S.UserInfo>
    <S.UserSocial>
      <Social {...linkSocias} />
    </S.UserSocial>
  </S.Content>
)

export default UserInfo
