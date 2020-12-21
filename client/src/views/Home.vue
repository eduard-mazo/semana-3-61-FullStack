<template lang='pug'>
  .center
    b-card.mb-2(
      title='HOME PAGE'
      img-src='https://picsum.photos/600/300'
      img-alt='Image'
      img-top
      tag='article'
      style='max-width: 20rem;')
      b-card-text
      | Some quick example text to build on the card title and make
      | up the bulk of the card's content.
</template>

<script>

export default {
  name: 'Home',
};
</script>
<style scoped>
  .center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>
