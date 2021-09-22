import { Story, Meta } from '@storybook/react'
import UserStories, { UserStoriesProps } from '.'

export default {
  title: 'UserStories',
  component: UserStories,
  args: {
    img: 'https://img.fancentro.com/h4/eecb404c/avatar/65lf3sfKWgUrlUIHEpI0nV9aW1E.sbVKK323uSGj2H7CfwB3nBz6RbksM9MXm7LE8Rr-2axUFLOPehuW95QFr84.Xu0U1IxlTzw1sjp3I2O98eJWUsKDNUCn4qT1Jnj7uYuRCXE43c3A6y-NNq5k5fZGfqljQkcy7tYQ8F2HjW8ampBKBw73snlyYJ.PdQLWkoKRsSIsDn05KqeuSrHEyw==/w150_h150b.jpg',
    name: 'Rachel Starr',
    link: 'https://fancentro.com/rachelstarr'
  }
} as Meta

export const Default: Story<UserStoriesProps> = (args) => (
  <UserStories {...args} />
)
