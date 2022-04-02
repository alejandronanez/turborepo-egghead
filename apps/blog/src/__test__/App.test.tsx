import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders a heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      name: /hello https:\/\/egghead.io/i,
    })

    expect(heading).toBeInTheDocument()
  })
})