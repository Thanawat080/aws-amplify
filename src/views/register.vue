<template>
<div class="container">
    <div class="col-12">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Username" v-model="username" />
            <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingInput" placeholder="Password" v-model="password" />
            <label for="floatingInput">Password</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="Email address" v-model="email" />
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="tel" class="form-control" id="floatingInput" placeholder="Phone Number" v-model="phone_number" />
            <label for="floatingInput">Phone Number</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="First name" v-model="first_name" />
            <label for="floatingInput">First name</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Last name" v-model="last_name" />
            <label for="floatingInput">Last name</label>
        </div>

        <button type="button" class="btn btn-primary" @click="cf_register">
            Register
        </button>
        <p>
            <a></a>&nbsp;<a>Back to <router-link to="/login">Login</router-link></a>
        </p>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            phone_number: "",
            email: "",
        };
    },

    methods: {
        cf_register() {
            const { v4: uuidv4 } = require('uuid');
            axios
                .post("https://s21sj3a9b1.execute-api.us-east-1.amazonaws.com/user", {
                    id: uuidv4(),
                    user_name: this.username,
                    password: this.password,
                    phone_number: this.phone_number,
                    email: this.email,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    tag: [],
                    weight: "",
                    height: "",
                    sick: "",
                    sex: "",
                    type: "user",}, { withCredentials: false }
                )
                .then((response) => {
                    if (response.data == 'Cannot use this username because already have this username') {
                        alert("Cannot use this username because already have this username");
                    } else {
                        this.$router.push({
                            name: "login"
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped>
</style>
