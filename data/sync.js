require('dotenv').config()
const fs = require('fs')
const GhostContentAPI = require('@tryghost/content-api')

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

function getPosts() {
  return api.posts
    .browse({ limit: 'all', include: 'authors,tags', filter: 'tag:portfolio' })
    .catch((err) => {
      console.error(err)
    })
}

function getPost(slug) {
  return api.posts.read({ slug, include: 'authors,tags' }).catch((err) => {
    console.error(err)
  })
}

function sync() {
  getPosts().then((posts) => {
    console.log('Got posts!')
    getPost('about').then((about) => {
      console.log('Got about!')
      fs.writeFileSync('./data/projects.json', JSON.stringify(posts))
      fs.writeFileSync('./data/about.json', JSON.stringify(about))
      console.log('Synchronized posts!')
    })
  })
}

sync()
