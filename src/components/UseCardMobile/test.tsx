import { render, screen } from '@testing-library/react'

import UseCardMobile from '.'

describe('<UseCardMobile />', () => {
  it('should render the heading', () => {
    const { container } = render(<UseCardMobile />)

    expect(screen.getByRole('heading', { name: /UseCardMobile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
