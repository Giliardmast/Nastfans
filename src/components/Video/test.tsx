import { render, screen } from '@testing-library/react'

import Videos from '.'

describe('<Videos />', () => {
  it('should render the heading', () => {
    const { container } = render(<Videos />)

    expect(screen.getByRole('heading', { name: /Videos/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
