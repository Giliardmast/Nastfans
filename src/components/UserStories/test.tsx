import { render, screen } from '@testing-library/react'

import UserStories from '.'

describe('<UserStories />', () => {
  it('should render the heading', () => {
    const { container } = render(<UserStories />)

    expect(screen.getByRole('heading', { name: /UserStories/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
