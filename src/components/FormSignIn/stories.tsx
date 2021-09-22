import { Story, Meta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: '300px', margin: 'auto' }}>
    <FormSignUp />
  </div>
)
