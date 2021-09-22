import { render, screen } from '@testing-library/react'

import SigleSidebar from '.'

describe('<SigleSidebar />', () => {
  it('should render the heading', () => {
    const { container } = render(<SigleSidebar />)

    expect(
      screen.getByRole('heading', { name: /SigleSidebar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
