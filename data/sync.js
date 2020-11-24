const fs = require('fs')
const GhostContentAPI = require('@tryghost/content-api')

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://hauvo-me-back.herokuapp.com',
  key: 'd33547440438a4ae42c4785228',
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
