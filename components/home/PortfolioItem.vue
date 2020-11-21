<template>
  <b-link :to="ref" class="portfolio-link">
    <div class="portfolio-item pl-md-5 pr-md-5">
      <b-img-lazy
        class="portfolio-image mb-3"
        fluid
        rounded
        :src="image"
      ></b-img-lazy>
      <h6 class="portfolio-item-title text-indigo">{{ name }}</h6>
      <h4 class="portfolio-item-slogan">{{ slogan }}</h4>
      <div class="portfolio-item-tag text-secondary">{{ tags }}</div>
    </div>
  </b-link>
</template>
<script>
import _ from 'lodash'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ref() {
      return {
        path: `/project/${this.slug}`
      }
    },
    id() {
      return this.data.id
    },
    slug() {
      return this.data.slug
    },
    image() {
      return this.data.feature_image
    },
    name() {
      return this.data.title
    },
    slogan() {
      return this.data.custom_excerpt
    },
    tags() {
      return _.get(this.data, 'tags', [])
        .filter((item) => item.slug !== 'portfolio')
        .map((item) => item.name)
        .join(', ')
    }
  }
}
</script>
<style lang="scss" scoped>
.portfolio-link {
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
  }
}

.portfolio-item {
  margin-bottom: 8rem;
  text-align: left;

  &:hover {
    text-decoration: none;
  }

  .portfolio-image {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  .portfolio-item-title {
    font-weight: bold;
  }

  .portfolio-item-tag {
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>
