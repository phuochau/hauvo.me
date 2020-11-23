<template>
  <div class="container post-content">
    <b-spinner v-if="loading" class="mb-3" label="Spinning"></b-spinner>
    <template>
      <h1 class="mb-2">{{ about.title }}</h1>
      <h5 class="mb-3">{{ about.custom_excerpt }}</h5>
      <div class="text-left" v-html="about.html" />
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import _ from 'lodash'
import { getPost } from '~/api'

export default {
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState('app', ['about']),
    title() {
      return _.get(this.about, 'title')
    },
    description() {
      return _.get(this.about, 'custom_excerpt')
    },
    url() {
      return `https://www.hauvo.me/about`
    },
    ogTitle() {
      return _.get(this.about, 'og_title')
    },
    ogImage() {
      return _.get(this.about, 'og_image')
    },
    ogDescription() {
      return _.get(this.about, 'og_description')
    }
  },
  async beforeMount() {
    const post = await getPost('about')
    this.setAbout(post)
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
  },
  methods: {
    ...mapMutations('app', ['setAbout'])
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
