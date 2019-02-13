import axios from 'axios'

export function toggleStar(shouldBeStarred) {
  if (shouldBeStarred) {
    axios.put('https://api.github.com/user/starred/tylercollier-intraedge/unit-test-demo')
  } else {
    axios.delete('https://api.github.com/user/starred/tylercollier-intraedge/unit-test-demo')
  }
}