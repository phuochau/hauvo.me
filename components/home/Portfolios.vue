<template>
  <div
    class="section container-fluid d-flex flex-column align-items-center justify-content-center"
  >
    <h2 class="mb-5">Some recent projects</h2>
    <b-spinner v-if="loading" label="Updating..." class="mb-5"></b-spinner>
    <div class="row">
      <div v-for="item in projects" :key="item.id" class="col-md-6">
        <PortfolioItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getPosts } from '@/api'
import PortfolioItem from './PortfolioItem'

export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState('app', ['projects'])
  },
  async mounted() {
    const data = await getPosts()
    this.setProjects(data)
    this.loading = false
  },
  methods: {
    ...mapMutations('app', ['setProjects'])
  }
}
</script>

<style lang="scss" scoped>
.port-item {
  height: 200px;
}
</style>
