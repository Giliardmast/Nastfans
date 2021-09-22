import { Story, Meta } from '@storybook/react/types-6-0'
import VideoScroll from '.'

export default {
  title: 'Video/VideoScroll',
  component: VideoScroll,
  args: {
    url: 'vids/tiktok1.mp4',
    soundBar: false
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '30rem', position: 'relative' }}>
    <VideoScroll {...args} />
  </div>
)
