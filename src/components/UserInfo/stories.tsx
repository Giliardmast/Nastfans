import { Story, Meta } from '@storybook/react/types-6-0'
import UserInfo, { userInfoProps } from '.'

export default {
  title: 'UserInfo',
  component: UserInfo,
  args: {
    useAvatar: {
      username: 'Giliard',
      img: 'img/avatar/avatar1.jpg',
      nickname: '@giliardmast'
    },
    linkSocias: {
      twitter: 'juizgxxx',

      youtube: 'juizgxxx',
      telegram: 'giliard558'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<userInfoProps> = (args) => (
  <div style={{ width: '130rem' }}>
    <UserInfo {...args} />
  </div>
)
