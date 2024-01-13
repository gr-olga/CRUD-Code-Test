<script setup>
import {reactive} from 'vue';
import {store} from "@/store";
import {isUserExist} from "@/utils/utils";
import {isValidPhoneNumber} from "libphonenumber-js";

const state = reactive({
  formData: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    bankAccountNumber: '',
  }
});

function submitForm(event) {
  event.preventDefault();
  if (isUserExist(state.formData, store.state.users)) return alert("User already exists!")
  if (isValidPhoneNumber(state.formData.phoneNumber)) return console.log(state.formData.phoneNumber)
  store.commit('setUsers', state.formData);
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="form-wrapper">
      <div class="input-wrapper">
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" v-model="state.formData.firstName" required>
      </div>

      <div class="input-wrapper">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" v-model="state.formData.lastName" required>
      </div>

      <div class="input-wrapper">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="state.formData.dateOfBirth" required>
      </div>

      <div class="input-wrapper">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="state.formData.phoneNumber" required>
      </div>

      <div class="input-wrapper">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="state.formData.email" required>
      </div>

      <div class="input-wrapper">
        <label for="bank">Bank Account Number:</label>
        <input type="text" id="bank" v-model="state.formData.bankAccountNumber" required>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>


<style scoped>
.form-wrapper {
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
