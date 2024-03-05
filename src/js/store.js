
import { siblings } from 'dom7';
import { createStore } from 'framework7';
import Framework7 from 'framework7';

// var store;


// const store = createStore({
//   state: {
//     products: [
//       {
//         id: '1',
//         title: 'Apple iPhone 8',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
//       },
//       {
//         id: '2',
//         title: 'Apple iPhone 8 Plus',
//         description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
//       },
//       {
//         id: '3',
//         title: 'Apple iPhone X',
//         description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
//       },
//     ]
//   },
//   getters: {
//     products({ state }) {
//       return state.products;
//     }
//   },
//   actions: {
//     addProduct({ state }, product) {
//       state.products = [...state.products, product];
//     },
//   },
// })


var store = createStore({
  state: {
    props: {},
  },
  actions: {
    actualizarProps({ state }, props) {
      state.props = props;
    },
  },
});






export default store;
