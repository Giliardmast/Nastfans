import { render, screen } from '@testing-library/react'

import Social from '.'

describe('<Social />', () => {
  it('should render the heading', () => {
    const { container } = render(<Social />)

    expect(screen.getByRole('heading', { name: /Social/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
