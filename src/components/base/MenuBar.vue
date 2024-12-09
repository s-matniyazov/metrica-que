<template>
  <div class="leftbar-tab-menu">
    <div class="main-icon-menu">
      <router-link to="/home" class="logo logo-metrica d-block text-center" />
      <div class="main-icon-menu-body">
        <div class="position-reletive h-100" data-simplebar style="overflow-x: hidden;">
          <ul class="nav nav-tabs" role="tablist" id="tab-menu">
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard"
                data-bs-trigger="hover">
              <router-link to="/home" id="dashboard-tab" class="nav-link">
                <i class="mdi mdi-login"></i>
              </router-link>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Apps"
                data-bs-trigger="hover">
              <router-link to="/home" id="apps-tab" class="nav-link">
                <i class="mdi mdi-login"></i>
              </router-link>
            </li>

            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Uikit"
                data-bs-trigger="hover">
              <router-link to="/home" id="uikit-tab" class="nav-link">
                <i class="mdi mdi-login"></i>
              </router-link>
            </li>

            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Pages"
                data-bs-trigger="hover">
              <router-link to="/home" id="pages-tab" class="nav-link">
                <i class="mdi mdi-login"></i>
              </router-link>
            </li>

            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Authentication"
                data-bs-trigger="hover">
              <router-link to="/home" id="authentication-tab" class="nav-link">
                <i class="mdi mdi-login"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-menu-inner">
      <div class="topbar-left q-pa-sm">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-card>
            <q-tabs
            v-model="tab"
            dense
            class="text-grey flex"
            active-color="primary"
            indicator-color="primary"
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>
        </q-card>
        </div>
        <q-separator />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('mails')
</script>

<style scoped>

</style>
