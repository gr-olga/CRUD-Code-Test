
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        email: '',
        bankAccountNumber: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit('form-submitted', this.formData);
    },
  },
});
</script>

<template>
  <div >
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" v-model="formData.firstName" required>
      </div>

      <div>
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" v-model="formData.lastName" required>
      </div>

      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="formData.dateOfBirth" required>
      </div>

      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phoneNumber" required>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

      <div>
        <label for="bank">Bank Account Number:</label>
        <input type="text" id="bank" v-model="formData.bankAccountNumber" required>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
