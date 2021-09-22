import { render, screen } from '@testing-library/react'

import SliderStories from '.'

describe('<SliderStories />', () => {
  it('should render the heading', () => {
    const { container } = render(<SliderStories />)

    expect(screen.getByRole('heading', { name: /SliderStories/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
