import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export const getPosts = async () => {
  return await api.posts
    .browse({ limit: 'all', include: 'authors,tags', filter: 'tag:portfolio' })
    .catch((err) => {
      console.error(err)
    })
}

export const getPost = async (slug) => {
  return await api.posts
    .read({ slug, include: 'authors,tags' })
    .catch((err) => {
      console.error(err)
    })
}
