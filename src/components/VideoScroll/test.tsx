import { render, screen } from '@testing-library/react'

import VideoScroll from '.'

describe('<VideoScroll />', () => {
  it('should render the heading', () => {
    const { container } = render(<VideoScroll />)

    expect(
      screen.getByRole('heading', { name: /VideoScroll/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
