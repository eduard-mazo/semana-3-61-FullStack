<template>
  <div class="center">
    <h1>{{ msg }}</h1>
    <b-card
      title="Grupo 61"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'login',
  data: () => {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const reqOptions = { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(this.form)
        }
      const res = await fetch('http://localhost:3000/api/auth/signin', reqOptions)
      const data = await res.json();
      console.log(data);
      data && this.$swal("Good job!", "Submmit", "success");
    },
    alert() {
      this.$swal("Good job!", "You are ready to start!", "success");
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
      })
    }
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>
