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
    props: ['label'],
    template: `
    <div class="bucket">
      bucket
      {{ label }}
      <br>Source: <bucket-input placeholder="Source"></bucket-input>
      <br>Drain: <bucket-input thing="stamps"></bucket-input>
    </div>`
  })

  Vue.component('bucket-input', {
    props: ['thing'],
    template: '<div>{{ thing }}<input class="bucket-input"></div>'
  })

  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })

  new Vue({ el: '#components-demo' })

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Welcome to the Vue in You'
    }
  })

  new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My first post' },
        { id: 2, title: 'A 2nd post' },
        { id: 3, title: 'Ah, a third' }
      ]
    }
  })
}

bootApp();
