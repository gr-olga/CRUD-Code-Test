<template>
  <div id="app">
    <h1>Client Form</h1>
    <div>
      <client-form @form-submitted="handleFormSubmission" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ClientForm from '@/components/ClientForm.vue';

export default defineComponent({
  components: {
    ClientForm,
  },
  methods: {
    handleFormSubmission(formData) {
      // You can handle the form submission logic here
      console.log('Form submitted with data:', formData);
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
