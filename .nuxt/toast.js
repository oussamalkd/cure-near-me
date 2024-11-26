import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"C:\\Users\\Oussama\\Desktop\\demo_project - Copy\\node_modules\\vue-toastification\\dist\\index.css"});
  inject('toast', toast);
}
