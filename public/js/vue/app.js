"use strict";

new Vue({
  el: "#app",
  data() {
    return {
      title: "Socket IO Learning",
      selectComponent: "welcome-component",
    };
  },
  methods: {
    changeComponent(eventData) {
      this.selectComponent = eventData;
    },
  }
});
