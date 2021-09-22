import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Footer />
