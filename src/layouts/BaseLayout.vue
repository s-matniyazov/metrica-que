<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title >
          Quasar App
        </q-toolbar-title>

        <div>Quasar</div>
      </q-toolbar>

      <div class="q-pt-sm q-gutter-xs">
        <q-bar>
          <q-btn square flat class="cursor-pointer gt-md" style="border: 1px solid rgba(31,59,132,0.8); border-radius: 5px">File</q-btn>
          <q-btn square flat class="cursor-pointer gt-md" style="border: 1px solid rgba(31,59,132,0.8); border-radius: 5px">Edit</q-btn>
          <q-btn square flat class="cursor-pointer gt-md" style="border: 1px solid rgba(31,59,132,0.8); border-radius: 5px">View</q-btn>
          <q-btn square flat class="cursor-pointer gt-md" style="border: 1px solid rgba(31,59,132,0.8); border-radius: 5px">Window</q-btn>
          <q-btn square flat class="cursor-pointer gt-md" style="border: 1px solid rgba(31,59,132,0.8); border-radius: 5px">Help</q-btn>
          <q-space />
        </q-bar>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="q-px-none flex items-center bg-primary"
      :width="50"
    >
      <q-list class="full-width">
        <q-item class="full-width">
          <q-item-section avatar>
            <q-icon name="flare" color="white" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="flare" color="white" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="flare" color="white" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="flare" color="white" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

import { ref } from 'vue'

const leftDrawerOpen = ref(false)

</script>

<style scoped>

</style>
