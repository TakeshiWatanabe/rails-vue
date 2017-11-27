import Vue from 'vue/dist/vue.esm.js'
import App from '../app.vue'
import axios from 'axios';

new Vue({
  el: '#employees',
  data: {
    employeeInfo: {},
    employeeInfoBool: false
  },
  methods: {
    setEmployeeInfo(id){
      console.log('--------------')
      axios.get(`employees/${id}`)
        .then(res => {
          console.log(res.data)
          this.employeeInfo = res.data;
          this.employeeInfoBool = true;
        });
    }
  }
});