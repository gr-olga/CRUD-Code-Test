
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
    <form @submit.prevent="submitForm" class="form-wrapper" >
      <div class="input-wrapper">
        <label  for="firstname">First Name:</label>
        <input type="text" id="firstname" v-model="formData.firstName" required>
<!--        <p class="error" :style="{ display: !valid }">{{ error }}</p>-->
      </div>

      <div class="input-wrapper">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" v-model="formData.lastName" required>
      </div>

      <div class="input-wrapper">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="formData.dateOfBirth" required>
      </div>

      <div class="input-wrapper">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phoneNumber" required>
      </div>

      <div class="input-wrapper">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

      <div class="input-wrapper">
        <label for="bank">Bank Account Number:</label>
        <input type="text" id="bank" v-model="formData.bankAccountNumber" required>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>


<style scoped>
.form-wrapper{
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin: 0 auto;
  width: 50%;
  padding: 20px;
  border: 1px solid silver;
  border-radius: 5px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  width: 100%;
}
.error {
  color: red;
  font-weight: bold;
  margin: 0;
}
input {
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 5px;
  font-size: 16px;
  width: 50%;
}
button {
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: darkseagreen;
  margin: 15px 5px;
}
button:hover {
 background-color: #497349;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
