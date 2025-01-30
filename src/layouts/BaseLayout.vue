<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>
<!--          {{ `${authStore.user}` }}-->
          {{ `${authStore.user.id}. ${authStore.user.fullname}` }}
        </div>
      </q-toolbar>

      <div class="q-pt-sm q-gutter-xs">
        <q-bar>

          <q-btn
            v-for="(menu, index) in authStore.menus" :key="index"
            square
            flat
            class="cursor-pointer gt-md"
            style="border: 1px solid rgba(31, 59, 132, 0.8); border-radius: 5px"
            >{{ menu.menu_name }}
          </q-btn>
          <q-space />
        </q-bar>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="q-px-sm bg-primary"
      width="250"
    >
      <q-bar> Taskwise </q-bar>
      <q-list class="full-width q-mt-sm">
        <q-item v-for="(menu, index) in authStore.menus" :key="index" dense
          class="full-width q-mt-xs morris-hover-point" clickable style="border: 1px solid cadetblue; border-radius: 5px">
<!--          <q-item-section avatar>-->
<!--            <q-icon name="flare" color="white" />-->
<!--          </q-item-section>-->
          <q-item-section class="text-white"> {{ menu.menu_name }} </q-item-section>
        </q-item>
      </q-list>

      <div class="p-4 code-to-copy">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input class="form-control" type="text" placeholder="Username" aria-label="Username"
                 aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
          <input class="form-control" type="text" placeholder="Recipient's username"
                 aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
        <label class="form-label" for="basic-url">Your vanity URL</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
          <input class="form-control" id="basic-url" type="text" aria-describedby="basic-addon3" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input class="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
          <span class="input-group-text">.00</span>
        </div>
        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>.
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from 'stores/auth-store.js'

import { ref } from 'vue'

const authStore = useAuthStore()

const leftDrawerOpen = ref(false)
</script>

<style scoped></style>
