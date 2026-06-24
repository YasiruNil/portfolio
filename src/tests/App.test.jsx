import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText(/YASIRU N\./i)).toBeTruthy()
  })

  it('renders all nav links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Experience')).toBeTruthy()
    // expect(screen.getByText('Projects')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('renders the Hire Me button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /hire me/i })).toBeTruthy()
  })
})
