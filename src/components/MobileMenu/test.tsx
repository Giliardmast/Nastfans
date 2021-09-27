import { render, screen } from '@testing-library/react'

import MobileMenu from '.'

describe('<MobileMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<MobileMenu />)

    expect(
      screen.getByRole('heading', { name: /MobileMenu/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
