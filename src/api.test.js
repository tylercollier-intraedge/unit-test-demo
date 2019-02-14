import * as api from './api'
import axios from 'axios'

jest.mock('axios')

describe('toggleStar', () => {
  it('uses PUT when true', () => {
    api.toggleStar(true)
    expect(axios.put).toHaveBeenCalled()
  })

  it('uses DELETE when false', () => {
    api.toggleStar(false)
    expect(axios.delete).toHaveBeenCalled()
  })
})
