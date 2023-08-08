import JsonView from './json-viewer'

// const install = Vue => {
//   Vue.component('JsonViewer', JsonView)
// }

// export default Object.assign(JsonView, { install })
const coms = [JsonView]

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install;