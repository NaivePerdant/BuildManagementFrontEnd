import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  console.log('hasToken', hasToken)
  if (to.path === '/login') {
    console.log('to.path1', to.path)
    // if is logged in, redirect to the home page
    next({ path: '/' })
    NProgress.done()
  } else {
    console.log('to.path2', to.path)
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
