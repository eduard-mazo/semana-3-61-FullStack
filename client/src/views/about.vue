<template lang='pug'>
  .center
    b-card.mb-2(
      :title='user.name'
      :img-src="user.name=='eduard mazo'?'https://github.com/eduard-mazo.png?size=200':'https://picsum.photos/600/300'"
      img-alt='Image'
      img-top
      tag='article'
      style='max-width: 20rem;')
      b-card-text
        | {{user.email}}
      b-button(
        variant='primary'
        @click='signOut()') Log Out
      |
      b-button(
        variant='primary'
        @click='newUser()') Agregar
</template>

<script>
import { logOut, addUser } from '../services/user.service';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
      },
    };
  },
  name: 'Home',
  beforeMount() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.user = userData.user;
  },
  methods: {
    signOut() {
      logOut();
      this.$router.push('/login').catch((err) => { console.log(err); });
    },
    newUser() {
      addUser({
        rol: 'Administrador',
        nombre: 'Nombre_prueba',
        password: '123',
        email: 'prueba3@gmail.com',
        estado: 1,
      });
    },
  },
};
</script>
<style scoped>
  .center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>
