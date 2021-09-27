import { render, screen } from '@testing-library/react'

import VideoFeed from '.'

describe('<VideoFeed />', () => {
  it('should render the heading', () => {
    const { container } = render(<VideoFeed />)

    expect(
      screen.getByRole('heading', { name: /VideoFeed/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
