import { render, screen } from '@testing-library/react'

import MostVisitedAreas from '.'

describe('<MostVisitedAreas />', () => {
  it('should render the heading', () => {
    const { container } = render(<MostVisitedAreas />)

    expect(
      screen.getByRole('heading', { name: /MostVisitedAreas/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
