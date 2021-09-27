import { Story, Meta } from '@storybook/react'
import { useCardProps } from 'components/UseCard'
import UseCardMobile from '.'

export default {
  title: 'UseCardMobile',
  component: UseCardMobile,
  args: {
    itemCard: {
      url: 'vids/tiktok1.mp4',
      soundBar: false
    }
  }
} as Meta

export const Default: Story<useCardProps> = (args) => (
  <UseCardMobile {...args} />
)
