<template lang='pug'>
  .center
    b-card.mb-2(
      title='Grupo 61'
      img-src='https://picsum.photos/600/300'
      img-alt='Image'
      img-top
      tag='article'
      style='max-width: 20rem;')
      b-form(@submit='onSubmit' @reset='onReset' v-if='show')
        b-form-group(
          id='input-group-1'
          label='Email address:'
          label-for='input-1')
          b-form-input(
            id='input-1'
            v-model='form.email'
            placeholder='Enter email'
            required)
        b-form-group(
          id='input-group-2'
          label='Your Password:'
          label-for='input-2')
          b-form-input(
            id='input-2'
            type='password'
            v-model='form.password'
            placeholder='Enter Password'
            required)
        b-button(
          type='submit'
          variant='primary') Submit
</template>

<script>
import Swal from 'sweetalert2';
import { userLogin } from '../services/user.service';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      if (await userLogin(this.form)) {
        const userData = JSON.parse(localStorage.getItem('user'));
        Swal.fire(`Good job! ${userData.user.nombre}`, 'You are ready to start!', 'success');
        console.log('her');
        this.$router.push('/about').catch((err) => { console.log(err); });
      } else {
        Swal.fire('No existes!', 'You aren´t ready to start!', 'error');
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = '';
      this.form.password = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  props: {
    msg: String,
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
