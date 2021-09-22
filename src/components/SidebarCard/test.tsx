import { render, screen } from '@testing-library/react'

import SidebarCard from '.'

describe('<SidebarCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<SidebarCard />)

    expect(screen.getByRole('heading', { name: /SidebarCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
