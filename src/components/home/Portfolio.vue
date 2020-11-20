<template>
  <div class="container d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4" v-for="item in 12" :key="item">
        <b-img class="port-item" src="https://picsum.photos/1024/400/?image=41" fluid></b-img>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.port-item {
  height: 200px;
}
</style>