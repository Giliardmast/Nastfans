import { render, screen } from '@testing-library/react'

import UseCard from '.'

describe('<UseCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<UseCard />)

    expect(
      screen.getByRole('heading', { name: /UseCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
