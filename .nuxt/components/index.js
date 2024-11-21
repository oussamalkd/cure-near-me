export { default as PagesDoctor } from '../..\\components\\pages\\doctor\\doctor.vue'
export { default as PagesHeaderDesktopMenu } from '../..\\components\\pages\\header\\desktop_menu.vue'
export { default as PagesHeaderDesktopNav } from '../..\\components\\pages\\header\\desktop_nav.vue'
export { default as PagesHeaderDesktopNavSearch } from '../..\\components\\pages\\header\\desktop_nav_search.vue'
export { default as PagesHeaderLogo } from '../..\\components\\pages\\header\\logo.vue'
export { default as PagesHeaderMenu } from '../..\\components\\pages\\header\\menu.vue'
export { default as PagesHeaderMobileNav } from '../..\\components\\pages\\header\\mobile_nav.vue'
export { default as PagesHeaderMobileSearchHeader } from '../..\\components\\pages\\header\\mobile_search_header.vue'
export { default as PagesHeaderSearch } from '../..\\components\\pages\\header\\search.vue'
export { default as PagesNurse } from '../..\\components\\pages\\nurse\\nurse.vue'

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
