<template>
  <q-card>
    <q-card-section class="full-height q-px-none">
      <div class="row full-height">
        <div class="col-3 q-pa-md" style="margin: auto 0">
          <div class="flex items-center full-width" style="margin: auto">
            <p>Taskwise</p>
          </div>
          <div class="">
            <q-form @submit="onSubmit" @reset="onReset" class="q-px-md">
              <q-input
                filled dense
                v-model="username"
                label="Login"
                hint="Login"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type your login']"
              />

              <q-input
                filled dense class="q-mt-md"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[
                (val) => (val !== null && val !== '') || 'Please type password',
              ]"
              />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </div>
        </div>
        <div class="col-9 flex items-center right_section row">
          <div class="flex items-center text-white" style="margin: auto; letter-spacing: 6px; font-size: 16px">
            <q-avatar rounded color="secondary" text-color="orange">T</q-avatar><span class="q-ml-sm">askwise</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'boot/axios.js'
import { useAuthStore } from 'stores/auth-store.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const auth = useAuthStore();

const username = ref(null)
const password = ref(null)

const formLoading = ref(false);

function onSubmit() {
  formLoading.value = true;
  api
    .post("", {
      "method": "user.login",
      "params": {
        "username": username.value,
        "password": password.value
      }
    })
    .then(res => {
      console.log(res.data.code === 0)
      if (res.data.code === 0) {
        setTimeout(() => {
          auth.successLogin(res.data.data);
          router.push("/home");
        }, 1000);

      } else {
        alert(res.data.msg)
      }
    })
    .catch(() => alert('Something went wrong with your login !'))
    .finally(() => formLoading.value = false)
}

function onReset() {
  name.value = null
  username.value = null
  password.value = false
}
</script>

<style scoped>
.right_section {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0.7259278711484594) 0%, rgba(9,88,121,0.7455357142857143) 35%, rgba(0,48,255,0.6362920168067228) 100%);
}
</style>
