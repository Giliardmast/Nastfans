import { Story, Meta } from '@storybook/react'
import Videos from '.'

export default {
  title: 'Video/Videos',
  component: Videos,
  args: {
    url: 'vids/tiktok1.mp4',
    soundBar: false
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '30rem', position: 'relative' }}>
    <Videos {...args} />
  </div>
)
