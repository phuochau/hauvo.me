<template>
  <div class="container-fluid section">
    <div class="row">
      <div v-for="(item, index) in data" :key="index" class="col-md-4">
        <blockquote class="blockquote test-item">
          <p class="mb-2 font-italic">"{{ item.content }}"</p>
          <footer class="blockquote-footer">
            <b>{{ item.name }}</b> - <cite>{{ item.title }}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>
<script>
import data from './testimonials-data.json'

export default {
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.test-item {
  position: relative;
}
</style>
