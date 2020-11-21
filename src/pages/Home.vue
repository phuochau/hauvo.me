<template>
  <div>
    <Header />
    <Portfolios />
  </div>
</template>
<script>
import Header from '@/components/home/Header'
import Portfolios from '@/components/home/Portfolios'

export default {
  components: {
    Header,
    Portfolios
  },
  data () {
    return {
      title: 'Hi, this is Hau Vo (aka Kevin)! Welcome to my portfolio site 👋',
      description: 'As a tech product builder, technical architect, I work from draft ideas and turn them into real products that can serve millions of people'
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
          { name: 'description', content: this.description },
          { property: 'og:title', content: this.title },
          { property: 'og:site_name', content: "Hau Vo's portfolio"},
          { property: 'og:type', content: 'website'},    
          { property: 'og:image', content: 'https://gravatar.com/avatar/4a663b7032efa5ed8dab36c83d8bd201?s=512' },
          { property: 'og:description', content: this.description },
          { property: 'og:url', content: 'https://www.hauvo.me' },
          { name: 'robots', content: 'index,follow'} 
      ]
    };
  }
}
</script>