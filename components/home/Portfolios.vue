<template>
  <div
    class="container-fluid d-flex flex-column align-items-center justify-content-center"
  >
    <div class="row">
      <b-spinner v-if="loading" label="Spinning"></b-spinner>
      <div v-for="item in projects" v-else :key="item.id" class="col-md-6">
        <PortfolioItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '@/api'
import PortfolioItem from './PortfolioItem'

export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      loading: true,
      projects: []
    }
  },
  async mounted() {
    const data = await getPosts()
    this.projects = data
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.port-item {
  height: 200px;
}
</style>
