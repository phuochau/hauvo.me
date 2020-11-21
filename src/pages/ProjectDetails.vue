<template>
  <div class="container post-content">
    <b-spinner v-if="loading" label="Spinning"></b-spinner>
    <template v-else>
      <h1 class="mb-5">{{ post.title }}</h1>
      <div v-html="post.html" class="text-left"/>
    </template>
  </div>
</template>

<script>
import { getPost } from '@/api'
import _ from 'lodash'

export default {
  data () {
    const slug = _.get(this.$route, 'params.slug', 'welcome')
    return {
      slug,
      post: null,
      loading: true
    }
  },
  async mounted () {
    const data = await getPost(this.slug)
    console.log(data)
    this.post = data
    this.loading = false
  }
}
</script>
