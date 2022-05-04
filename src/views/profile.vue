<template>
<div class="container">
    <div class="col-12">
        <div class="row">
            <div class="col-4">
                <center>
                    <p><b>{{ this.first_name }} {{ this.last_name }}</b></p>
                    <p>
                        <img :src=pic width="200" height="200" class="rounded" alt="" />
                    </p>
                    <p>
                        <a class="edit_profile" v-if="this.$route.params.id == undefined">
                            <font size="2">
                                <router-link to="/editProfile"><span class="badge bg-secondary">Edit profile</span></router-link>
                            </font>
                        </a>
                    </p>
                    <p>
                        <b>Follow :</b> {{ countfollow }}
                    </p>
                    <button type="button" class="btn btn-primary" v-if="useridfromlink != userid" @click="follow()">
                        {{ textfollow }}
                    </button>
                </center>
            </div>
            <div class="col-8">
                <p><b>MAIL :</b> {{ this.email }}</p>
                <p><b>PHONE NUMBER :</b> {{ this.phone_number }}</p>
                <p><b>WEIGHT :</b> {{ this.weight }}</p>
                <p><b>HEIGHT :</b> {{ this.height }}</p>
                <p><b>SEX :</b> {{ this.sex }}</p>
                <p><b>SICK :</b> {{ this.sick }}</p>
                <b>TAGS :</b>
                <p v-for="(value, index) in tag" :key="index" style="color: red">
                    {{ value }}
                </p>
            </div>
        </div>
        <div v-for="(value, index) in postforuser" :key="index">
            <div class="card">
                <div class="card-header text-center">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8">
                            {{ value.title }}
                        </div>
                        <div class="col-2" v-if="!type">
                            <router-link :to="`/editcreatepost/${value.id}`">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" v-show="userid == value.userid" id="edit">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </router-link>

                            <svg xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#exampleModalCenter" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" v-show="userid == value.userid" @click="getdeleteid(value.id, value.title)" color="red">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>

                        </div>
                        <router-link :to="`/Like_Comment_Follow_Report/${value.id}`" style="text-decoration: none; color: black" type="button" class="btn btn-outline-info">
                            ไปยังโพส
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ value.description }}</p>
                </div>
            </div>

            <br />
        </div>
    </div>

    <!-- modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Want to delete {{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning" @click="deletepost(daleteid)" data-dismiss="modal">Confirm Delete</button>
                </div>
            </div>
        </div>
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
            phone_number: "",
            userid: "",
            email: "",
            postforuser: [],
            type: false,
            sick: "",
            weight: 0,
            height: 0,
            sex: "",
            tag: "",
            useridfromlink: "",
            allfollow: "",
            find: 0,
            textfollow: "Follow",
            countfollow: 0,
            pic: '',
            daleteid: '',
            title: ''
        };
    },

    methods: {
        getdeleteid(value, title) {
            this.daleteid = value
            this.title = title
        },
        follow() {
            if (this.allfollow.length > 0) {
                for (let i = 0; i < this.allfollow.length; i++) {
                    if (this.allfollow[i].userid == localStorage.getItem("id")) {
                        this.find = 1;
                        if (this.allfollow[i].follow) {
                            this.allfollow[i].follow = false;
                            this.textfollow = "Follow";
                            this.countfollow -= 1;
                        } else {
                            this.allfollow[i].follow = true;
                            this.textfollow = "Unfollow";
                            this.countfollow += 1;
                        }
                    }
                }
            }
            if (this.find == 0) {
                this.countfollow += 1;
                this.textfollow = "Unfollow";
                this.allfollow.push({
                    follow: true,
                    userid: localStorage.getItem("id"),
                });
                this.find = 0;
            }
            console.log(this.allfollow)
            axios
                .put("https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com/follow/" + this.$route.params.id, {
                    follow: this.allfollow,
                }, {
                    withCredentials: false
                })
                .then(() => {
                    console.log('ez')
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        logout() {
            localStorage.clear();
            this.$emit("auth-change");
        },
        deletepost(postid) {
            axios
                .delete("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/post/" + postid, {
                    withCredentials: false
                })
                .then((res) => {
                    if (this.$route.params.id != undefined) {
                        this.type = true;
                        axios
                            .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/postforuser/" + this.$route.params.id, {
                                withCredentials: false
                            })
                            .then((res) => {
                                this.postforuser = res.data;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        axios
                            .get(
                                "https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/postforuser/" +
                                localStorage.getItem("id"), {
                                    withCredentials: false
                                }
                            )
                            .then((res) => {
                                this.postforuser = res.data;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        if (this.$route.params.id != undefined) {
            this.type = true;
            axios
                .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/postforuser/" + this.$route.params.id, {
                    withCredentials: false
                })
                .then((res) => {

                    this.postforuser = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/postforuser/" + localStorage.getItem("id"), {
                    withCredentials: false
                })
                .then((res) => {

                    this.postforuser = res.data
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        if (this.$route.params.id != undefined) {
            this.useridfromlink = this.$route.params.id;

            axios
                .get('https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com/specificuser/' + this.$route.params.id, {
                    withCredentials: false
                })
                .then((res) => {

                    this.first_name = res.data.Item.first_name;
                    this.last_name = res.data.Item.last_name;
                    this.phone_number = res.data.Item.phone_number;
                    this.userid = localStorage.getItem("id");
                    this.email = res.data.Item.email;
                    this.sick = res.data.Item.sick;
                    this.height = res.data.Item.height;
                    this.weight = res.data.Item.weight;
                    this.sex = res.data.Item.sex;
                    this.tag = res.data.Item.tag;
                    if (res.data.Item.follow == undefined) {
                        this.allfollow = []
                    } else {
                        this.allfollow = res.data.Item.follow;
                    }
                    this.pic = res.data.Item.img

                    for (let i = 0; i < this.allfollow.length; i++) {
                        if (this.allfollow[i].follow) {
                            this.countfollow += 1;
                        }
                        if (this.allfollow[i].userid == localStorage.getItem("id")) {
                            if (this.allfollow[i].follow) {
                                this.textfollow = "Unfollow";
                            } else {
                                this.textfollow = "Follow";
                            }
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {

            axios
                .get('https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com/specificuser/' + localStorage.getItem("id"), {
                    withCredentials: false
                })
                .then((res) => {
                    this.first_name = res.data.Item.first_name;
                    this.last_name = res.data.Item.last_name;
                    this.phone_number = res.data.Item.phone_number;
                    this.userid = res.data.Item.id;
                    this.email = res.data.Item.email;
                    this.sick = res.data.Item.sick;
                    this.height = res.data.Item.height;
                    this.weight = res.data.Item.weight;
                    this.sex = res.data.Item.sex;
                    this.tag = res.data.Item.tag;
                    if (res.data.Item.follow == undefined) {
                        this.allfollow = []
                    } else {
                        this.allfollow = res.data.Item.follow;
                    }
                    this.pic = res.data.Item.img

                    for (let i = 0; i < this.allfollow.length; i++) {
                        if (this.allfollow[i].follow) {
                            this.countfollow += 1;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
</script>

<style></style>
