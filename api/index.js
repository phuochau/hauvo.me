import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://hauvo-me-back.herokuapp.com',
  key: 'd33547440438a4ae42c4785228',
  version: 'v3',
})

export const getPosts = async () => {
  return await api.posts
    .browse({ limit: 'all', include: 'authors,tags', filter: 'tag:portfolio' })
    .catch((err) => {
      console.error(err)
    })
}

export const getPost = async (slug) => {
  return await api.posts.read({ slug }).catch((err) => {
    console.error(err)
  })
}
