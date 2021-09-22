import { render, screen } from '@testing-library/react'

import PromotionalCard from '.'

describe('<PromotionalCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<PromotionalCard />)

    expect(
      screen.getByRole('heading', { name: /PromotionalCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
