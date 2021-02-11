<template>
  <div class="container post-content">
    <b-spinner v-if="loading" label="Spinning"></b-spinner>
    <template v-else>
      <h1 class="mb-2">{{ post.title }}</h1>
      <h5 class="mb-3">{{ post.custom_excerpt }}</h5>
      <div class="tags text-secondary mb-5">{{ tags }}</div>
      <div class="text-left" v-html="post.html" />
    </template>
  </div>
</template>

<script>
import _ from 'lodash'
import { getPost } from '~/api'

export default {
  data() {
    return {
      post: null,
      loading: true
    }
  },
  computed: {
    title() {
      return _.get(this.post, 'title')
    },
    description() {
      return _.get(this.post, 'custom_excerpt')
    },
    url() {
      return `https://www.hauvo.me/project/${_.get(this.post, 'slug')}`
    },
    ogTitle() {
      return _.get(this.post, 'og_title')
    },
    ogImage() {
      return _.get(this.post, 'og_image')
    },
    ogDescription() {
      return _.get(this.post, 'og_description')
    },
    tags() {
      return _.get(this.post, 'tags', [])
        .filter((item) => item.slug !== 'portfolio')
        .map((item) => item.name)
        .join(', ')
    }
  },
  async beforeMount() {
    const slug = _.get(this.$route, 'params.slug')
    let cache = null
    try {
      cache = require(`../../data/portfolio/${slug}`)
    } catch (e) {
      console.log("Can't load cache")
    }
    if (cache) {
      this.post = cache
      this.loading = false
    }
    const post = await getPost(slug)
    this.post = post
    this.loading = false
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { name: 'robots', content: 'index,follow' },
        { property: 'og:title', content: this.ogTitle },
        {
          property: 'og:site_name',
          content: "Hau Vo's portfolio"
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.ogImage },
        { property: 'og:description', content: this.ogDescription },
        { property: 'og:url', content: this.url },
        { property: 'twitter:site', content: '@hauvophuoc' },
        { property: 'twitter:creator', content: '@hauvophuoc' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.description },
        { property: 'twitter:image', content: this.ogImage }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
