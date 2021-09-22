import { render, screen } from '@testing-library/react'

import Dialog from '.'

describe('<Dialog />', () => {
  it('should render the heading', () => {
    const { container } = render(<Dialog />)

    expect(screen.getByRole('heading', { name: /Dialog/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
