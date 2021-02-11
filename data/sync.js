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
    fs.writeFileSync('./data/projects.json', JSON.stringify(posts))
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i]
      const tags = post.tags
      console.log(post)
      if (tags.filter((t) => t.slug === 'portfolio').length > 0) {
        getPost(post.slug).then((data) => {
          fs.writeFileSync(
            `./data/portfolio/${post.slug}.json`,
            JSON.stringify(data)
          )
          console.log(`Synchronized ${post.slug}`)
        })
      }
    }

    getPost('about').then((about) => {
      fs.writeFileSync('./data/about.json', JSON.stringify(about))
      console.log('Synchronized about.')
    })
    console.log('Done!!!')
  })
}

sync()
