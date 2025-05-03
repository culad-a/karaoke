import { render } from '@redwoodjs/testing/web'

import MerciPage from './MerciPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MerciPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MerciPage />)
    }).not.toThrow()
  })
})
