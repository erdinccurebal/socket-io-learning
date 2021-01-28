"use strict";

Vue.component("listen-component", {
    data: () => {
      return {
        ioData: []
      };
    },
    methods: {
      listenComponent() {
        this.selectComponent = "listen-component";
      },
    },created(){
      socket.on('pusher', (msg) => {
       this.ioData.push(msg);
      });
    },
    template: `
    <div>
      <h5 class="card-title">Listen</h5>
      <p id="listen-area" class="card-text bg-dark text-white p-2"> {{ ioData }} </p>
    </div>
    `,
  });