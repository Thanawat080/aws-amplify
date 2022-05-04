<template>
<div class="container">
    <div class="col-12">

        <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="Username" v-model="username">
            <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            <label for="floatingInput">Password</label>
        </div>

        <button type="button" class="btn btn-success" @click="login">
            LOGIN
        </button>
        <p>
            <a>Forget Password?</a>&nbsp;<a>
                or <router-link to="/register">
                    Create Account
                </router-link></a>
        </p>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: ''
        };
    },

    methods: {
        async login() {
            
            // const response = await fetch("https://qi479h500l.execute-api.us-east-1.amazonaws.com/user/" + this.username + '/' + this.password)
            // console.log(response)
            axios
                .get("https://qi479h500l.execute-api.us-east-1.amazonaws.com/user/" + this.username + '/' + this.password,{withCredentials: false})
                .then((response) => {
                    console.log(response.data)
                    // if (response.data == 'password not match') {
                    //     alert("invalid username or password");
                    // } 
                    if (response.data.length > 0) {
                        this.$router.push({
                            name: "home"
                        });
                        localStorage.setItem("name", this.username);
                        localStorage.setItem("id", response.data[0].id);
                        localStorage.setItem("type", response.data[0].type);
                        this.$emit("auth-change");
                    } else {
                        alert("invalid username or password");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
