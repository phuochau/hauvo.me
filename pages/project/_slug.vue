<template>
  <div class="container post-content">
    <b-spinner v-if="loading" label="Spinning"></b-spinner>
    <template v-else>
      <h1 class="mb-5">{{ post.title }}</h1>
      <div class="text-left" v-html="post.html" />
    </template>
  </div>
</template>

<script>
import _ from 'lodash'
import { getPost } from '~/api'

export default {
  data() {
    const slug = _.get(this.$route, 'params.slug', 'welcome')
    return {
      slug,
      post: null,
      loading: true,
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
      return _.get(this.post, 'url')
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
  },
  async mounted() {
    const data = await getPost(this.slug)
    console.log(data)
    this.post = data
    this.loading = false
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:title', content: this.ogTitle },
        { property: 'og:site_name', content: "Hau Vo's portfolio" },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.ogImage },
        { property: 'og:description', content: this.ogDescription },
        { property: 'og:url', content: this.url },
        { name: 'robots', content: 'index,follow' },
      ],
    }
  },
}
</script>
