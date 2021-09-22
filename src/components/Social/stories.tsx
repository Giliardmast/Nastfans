import { Story, Meta } from '@storybook/react'
import Social, { RedesSociaisProps } from '.'

export default {
  title: 'Social',
  component: Social,
  args: {
    twitter: 'juizgxxx',
    youtube: 'juizgxxx',
    instagram: '',
    telegram: 'giliard558',
    tiktok: '',
    link: ''
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<RedesSociaisProps> = (args) => <Social {...args} />
