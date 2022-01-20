const app = Vue.createApp({
  data() {
    return {
      name: "Luis Fernando Galviz Corrales",
      age: "23",
      urlI: "http://1.bp.blogspot.com/-PDPkawVpiEM/USKdvazIKFI/AAAAAAAAPoQ/3GunEMDjljY/s1600/bp00.jpg",
    };
  },
  methods: {
    ageplusFive(age) {
      return parseInt(age) + 5;
    },
    randomNumber() {
        const randomNumbers=Math.random();
      return randomNumbers;
    },
  },
});
app.mount("#assignment");
