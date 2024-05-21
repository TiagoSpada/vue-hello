const { createApp } = Vue

  createApp({
    data() {
      return {
        saluto: 'Hello World!',
        prova: 'https://picsum.photos/300'
      }
    }
  }).mount('#app')