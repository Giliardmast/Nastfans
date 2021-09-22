import { Story, Meta } from '@storybook/react'
import { UserStoriesProps } from 'components/UserStories'
import SliderStories from '.'
import items from './mock'
export default {
  title: 'SliderStories',
  component: SliderStories,
  args: { items }
} as Meta

export const Default: Story<UserStoriesProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <SliderStories items={args} {...args} />
  </div>
)
