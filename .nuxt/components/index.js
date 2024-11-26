export const Floatingbtn = () => import('../..\\components\\floatingbtn.vue' /* webpackChunkName: "components/floatingbtn" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Poppup = () => import('../..\\components\\poppup.vue' /* webpackChunkName: "components/poppup" */).then(c => wrapFunctional(c.default || c))
export const PagesDoctor = () => import('../..\\components\\pages\\doctor\\doctor.vue' /* webpackChunkName: "components/pages-doctor" */).then(c => wrapFunctional(c.default || c))
export const PagesNurse = () => import('../..\\components\\pages\\nurse\\nurse.vue' /* webpackChunkName: "components/pages-nurse" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeCategoryResult = () => import('../..\\components\\pages\\home\\category_result.vue' /* webpackChunkName: "components/pages-home-category-result" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeCategorySection = () => import('../..\\components\\pages\\home\\category_section.vue' /* webpackChunkName: "components/pages-home-category-section" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeFooterapp = () => import('../..\\components\\pages\\home\\footerapp.vue' /* webpackChunkName: "components/pages-home-footerapp" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeMobailfooter = () => import('../..\\components\\pages\\home\\mobailfooter.vue' /* webpackChunkName: "components/pages-home-mobailfooter" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeOverview = () => import('../..\\components\\pages\\home\\overview.vue' /* webpackChunkName: "components/pages-home-overview" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeServices = () => import('../..\\components\\pages\\home\\services.vue' /* webpackChunkName: "components/pages-home-services" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeTestimonial = () => import('../..\\components\\pages\\home\\testimonial.vue' /* webpackChunkName: "components/pages-home-testimonial" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderDesktopMenu = () => import('../..\\components\\pages\\header\\desktop_menu.vue' /* webpackChunkName: "components/pages-header-desktop-menu" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderDesktopNav = () => import('../..\\components\\pages\\header\\desktop_nav.vue' /* webpackChunkName: "components/pages-header-desktop-nav" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderDesktopNavSearch = () => import('../..\\components\\pages\\header\\desktop_nav_search.vue' /* webpackChunkName: "components/pages-header-desktop-nav-search" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderLogo = () => import('../..\\components\\pages\\header\\logo.vue' /* webpackChunkName: "components/pages-header-logo" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderMenu = () => import('../..\\components\\pages\\header\\menu.vue' /* webpackChunkName: "components/pages-header-menu" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderMobileNav = () => import('../..\\components\\pages\\header\\mobile_nav.vue' /* webpackChunkName: "components/pages-header-mobile-nav" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderMobileSearchHeader = () => import('../..\\components\\pages\\header\\mobile_search_header.vue' /* webpackChunkName: "components/pages-header-mobile-search-header" */).then(c => wrapFunctional(c.default || c))
export const PagesHeaderSearch = () => import('../..\\components\\pages\\header\\search.vue' /* webpackChunkName: "components/pages-header-search" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
