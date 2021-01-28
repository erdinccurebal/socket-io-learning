"use strict";

Vue.component("pusher-component", {
  data: () => {
    return {
      pusherData: ""
    };
  },
  methods: {
    listenComponent() {
      this.selectComponent = "listen-component";
    },
    push(){
      socket.emit("pusher", this.pusherData);
    }
  },
  template: `
    <div>
      <h5 class="card-title">Pusher</h5>
      <div class="input-group mb-3">
        <input @keydown.enter="push" v-model="pusherData" type="text" class="form-control">
        <button @click="push" style="width: 100%;" type="button" class="btn btn-success mt-2">SEND</button>
      </div>
    </div>
    `,
});
