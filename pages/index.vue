<template>
  <div>
    <Header />
    <Testimonials />
    <Portfolios />
    <ContactMe />
  </div>
</template>
<script>
import Header from '~/components/home/Header'
import Portfolios from '~/components/home/Portfolios'
import Testimonials from '~/components/home/Testimonials'
import ContactMe from '~/components/home/ContactMe'

export default {
  components: {
    Header,
    Portfolios,
    Testimonials,
    ContactMe
  },
  data() {
    return {
      title: 'Hi, this is Hau Vo (aka Kevin)! Welcome to my portfolio site 👋',
      description:
        'As a tech product builder, technical architect, I work from draft ideas and turn them into real products that can serve millions of people',
      image:
        'https://gravatar.com/avatar/4a663b7032efa5ed8dab36c83d8bd201?s=512'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: "Hau Vo's portfolio" },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: this.image
        },
        { property: 'og:description', content: this.description },
        { property: 'og:url', content: 'https://www.hauvo.me' },
        { name: 'robots', content: 'index,follow' },
        { property: 'twitter:site', content: '@hauvophuoc' },
        { property: 'twitter:creator', content: '@hauvophuoc' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.description },
        { property: 'twitter:image', content: this.image }
      ]
    }
  }
}
</script>
