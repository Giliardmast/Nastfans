import { Story, Meta } from '@storybook/react/types-6-0'
import SidebarCard from '.'
import { SocialProps } from 'components/SidebarCard'

export default {
  title: 'Video/SidebarCard',
  component: SidebarCard,
  args: {
    likes: 999,
    coments: 1354,
    shares: 1876
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<SocialProps> = (args) => (
  <div style={{ maxWidth: '3.5rem' }}>
    <SidebarCard {...args} />
  </div>
)
