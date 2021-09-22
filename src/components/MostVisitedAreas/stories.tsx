import { Story, Meta } from '@storybook/react'
import MostVisitedAreas, { MostVisitedAreasProps } from '.'
import items from './mock'

export default {
  title: 'MostVisitedAreas',
  component: MostVisitedAreas,
  args: { items }
} as Meta

export const Default: Story<MostVisitedAreasProps[]> = (args) => (
  <div style={{ maxWidth: '120rem', margin: ' 0 auto' }}>
    <MostVisitedAreas items={args} {...args} />
  </div>
)
