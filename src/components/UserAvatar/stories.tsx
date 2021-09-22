import { Story, Meta } from '@storybook/react'
import UserAvatar, { UserAvatarProps } from '.'

export default {
  title: 'UserAvatar',
  component: UserAvatar,
  args: {
    username: 'Giliard',
    img: 'img/avatar/avatar1.jpg',
    nickname: '@giliardmast',
    size: 'medium',
    usergp: false,
    price: '200',
    age: '25',
    bg: false
  }
} as Meta

export const Default: Story<UserAvatarProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <UserAvatar {...args} />
  </div>
)
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
