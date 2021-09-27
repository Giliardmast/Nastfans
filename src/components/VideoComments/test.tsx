import { render, screen } from '@testing-library/react'

import VideoComments from '.'

describe('<VideoComments />', () => {
  it('should render the heading', () => {
    const { container } = render(<VideoComments />)

    expect(
      screen.getByRole('heading', { name: /VideoComments/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
