Vue.component("codenames", {
  props: ["name","codename"],
  data: function () {
    return{
      fakename:this.name
    }
  },
  methods:{
    scrambleName:function(){
      if(this.fakename==this.name){
        this.fakename=this.codename;
      }
      else{
        this.fakename=this.name;
      }
    }
  },
  template:'<div v-on:click="scrambleName()">{{fakename}}</div>'
});

var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    mess: "",
    emailmess: "",
    submission: "",
    submissionmess: "",
    list: [
      { name: "Protagonist", codename: "Joker" },
      { name: "Anne", codename: "Panther" },
      { name: "Ryuji", codename: "Skull" }
    ]
  },
  watch: {
    name: function (){
      if(this.name.length < 2){
        this.mess = "The input needs to have at least 2 characters."
      }
      else{
        this.mess = ""
      }
    },
      
    email: function(){ 
      if(!this.checkEmail(this.email)){
        this.emailmess = "The email needs to be formatted as exampleemail@domain.xxx"
      }
      else{
        this.emailmess = ""
      }
             
     },
    
    submission: function(){
      if(this.name.length < 2){
        this.submissionmess = "Not Submitted"
      }
      else{
        this.submissionmess = "Submitted"
      }
    }
  },
  
  methods:{
    checkEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});