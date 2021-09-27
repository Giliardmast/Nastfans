import { Story, Meta } from '@storybook/react'
import { VideoProps } from '.'
import Videos from '.'

export default {
  title: 'Video/Videos',
  component: Videos,
  args: {
    url: 'vids/tiktok1.mp4',
    soundBar: false
  }
} as Meta

export const Default: Story<VideoProps> = (args) => (
  <div style={{ width: '30rem', position: 'relative' }}>
    <Videos {...args} />
  </div>
)
