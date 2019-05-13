function bootApp() {

  // Define a component
  // Q: What can it be?
  // A: A canvas, perhaps

  // The bucket component
  // A bucket contains
  //   A source
  //   A drain
  //   An inflow
  //   An outflow
  Vue.component('bucket-component', {
    template: `
    <div class="bucket">
      bucket
      <div class="bucket-input">
        bucket-input
        <br>Source: <bucket-input></bucket-input>
        <br>Drain: <bucket-input></bucket-input>
      </div>
    </div>`
  })

  Vue.component('bucket-input', {
    template: '<input>{{ bucketValue }}</input>'
  })

  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  new Vue({ el: '#components-demo' })

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Welcome to the Vue in You'
    }
  })
}

bootApp();
