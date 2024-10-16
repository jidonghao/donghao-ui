
import DHLoading from "./DHLoading/DHLoading.vue";
import DHNoOther from "./DHNoOther/DHNoOther.vue";

const components = [DHLoading, DHNoOther];

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}