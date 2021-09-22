import { render, screen } from '@testing-library/react'

import UserInfo from '.'

describe('<UserInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<UserInfo />)

    expect(
      screen.getByRole('heading', { name: /UserInfo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
