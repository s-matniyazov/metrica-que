import LoginLayout from 'layouts/LoginLayout.vue'
import BaseLayout from 'layouts/BaseLayout.vue'
import CustomersPage from 'pages/customers/CustomersPage.vue'
import MainLayout from 'layouts/MainLayout.vue'

const routes = [
  {path: '/login', component: LoginLayout},
  {path: '/', component: MainLayout},
  {
    path: '/home',
    component: BaseLayout,
    children: [
      {path: '/customers', component: CustomersPage}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
