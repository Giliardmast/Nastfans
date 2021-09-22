import { render, screen } from '@testing-library/react'

import UiNumber from '.'

describe('<UiNumber />', () => {
  it('should render the heading', () => {
    const { container } = render(<UiNumber />)

    expect(screen.getByRole('heading', { name: /UiNumber/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
