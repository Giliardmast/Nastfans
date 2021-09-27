import { Story, Meta } from '@storybook/react/types-6-0'
import { useCardProps } from 'components/UseCard'
import UseCard from '.'

export default {
  title: 'UseCard',
  component: UseCard,
  args: {
    itemCard: {
      url: 'vids/tiktok1.mp4',
      soundBar: false
    }
  }
} as Meta

export const Default: Story<useCardProps> = (args) => <UseCard {...args} />
