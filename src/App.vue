<script setup>
import ClientForm from "@/components/ClientForm.vue";
import {store} from "@/store";
import {computed} from "vue";

const users = computed( () => store.state.users);
</script>

<template>
  <div id="app">
    <h1>Client Form</h1>
    <div>
      <client-form/>
      <div v-for="(user, index) in users" :key="index">
        <p> {{ user.firstName }}</p>
        <p> {{ user.lastName }}</p>
        <p> {{ user.dateOfBirth }}</p>
        <p> {{ user.phoneNumber }}</p>
        <p> {{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

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
