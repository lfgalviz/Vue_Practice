const app = Vue.createApp({
    data() {
      return {
          user:"",
          confirmUser:""
           };
    },
    methods: {
        alerta(){
            alert("hola");
        },
        setUser(event){
            this.user=event.target.value;
        },
        confirmUsers(event){
            this.confirmUser=this.user;
        },

    },
  });
  app.mount("#assignment");
  