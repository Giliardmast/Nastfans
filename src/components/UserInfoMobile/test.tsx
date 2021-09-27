import { render, screen } from '@testing-library/react'

import UserInfoMobile from '.'

describe('<UserInfoMobile />', () => {
  it('should render the heading', () => {
    const { container } = render(<UserInfoMobile />)

    expect(
      screen.getByRole('heading', { name: /UserInfoMobile/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
