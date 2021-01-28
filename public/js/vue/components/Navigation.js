"use strict";

Vue.component("navigation-component", {
  data: () => {
    return {};
  },
  methods: {
    listenComponent() {
      this.$emit("change-component-emit", "listen-component");

    },
    pusherComponent() {
      this.$emit("change-component-emit", "pusher-component");
    },
  },
  template: `
          <div class="text-end">
                <a @click="listenComponent" class="card-link">Listen Component</a>
                <a @click="pusherComponent" class="card-link">Pusher Component</a>
          </div>
      `,
});
