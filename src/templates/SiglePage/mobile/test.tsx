import { render, screen } from '@testing-library/react'

import SiglePage from '.'

describe('<SiglePage />', () => {
  it('should render the heading', () => {
    const { container } = render(<SiglePage />)

    expect(
      screen.getByRole('heading', { name: /SiglePage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
