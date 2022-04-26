<template>
  <div class="container">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <center>
            <p><b>{{ this.first_name }} {{ this.last_name }}</b></p>
          <p>
            <img
              src="https://www.img.in.th/images/fbdc8860b6fc58a37befa97de1765c64.png"
              width="200"
              height="200"
              class="rounded"
              alt=""
            />
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
          <button
            type="button"
            class="btn btn-primary"
            v-if="useridfromlink == userid"
            @click="follow()"
          >
            {{ textfollow }}
          </button></center>
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
                <router-link :to="`/editcreatepost/${value._id}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    v-show="userid == value.userid"
                    id="edit"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </router-link>
                
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                  v-show="userid == value.userid"
                  @click="deletepost(value._id)"
                  color="red"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                  />
                </svg>
                
              </div>
              <router-link
                :to="`/Like_Comment_Follow_Report/${value._id}`"
                style="text-decoration: none; color: black"
                type="button" class="btn btn-outline-info"
              >
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
    };
  },

  methods: {
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
      axios
        .put("http://localhost:3000/profile/" + this.$route.params.id, {
          follow: this.allfollow,
        })
        .then(() => {})
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
        .delete("http://localhost:3000/post/" + postid)
        .then((res) => {
          if (this.$route.params.id != undefined) {
            this.type = true;
            axios
              .get("http://localhost:3000/postforuser/" + this.$route.params.id)
              .then((res) => {
                this.postforuser = res.data;
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            axios
              .get(
                "http://localhost:3000/postforuser/" +
                  localStorage.getItem("id")
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
        .get("http://localhost:3000/postforuser/" + this.$route.params.id)
        .then((res) => {
          this.postforuser = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("http://localhost:3000/postforuser/" + localStorage.getItem("id"))
        .then((res) => {
          this.postforuser = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (this.$route.params.id != undefined) {
      this.useridfromlink = this.$route.params.id;
      axios
        .get("http://localhost:3000/specificuser/" + this.$route.params.id)
        .then((res) => {
          this.first_name = res.data[0].first_name;
          this.last_name = res.data[0].last_name;
          this.phone_number = res.data[0].phone_number;
          this.userid = res.data[0]._id;
          this.email = res.data[0].email;
          this.sick = res.data[0].sick;
          this.height = res.data[0].height;
          this.weight = res.data[0].weight;
          this.sex = res.data[0].sex;
          this.tag = res.data[0].tag;
          this.allfollow = res.data[0].follow;

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
        .get("http://localhost:3000/specificuser/" + localStorage.getItem("id"))
        .then((res) => {
          this.first_name = res.data[0].first_name;
          this.last_name = res.data[0].last_name;
          this.phone_number = res.data[0].phone_number;
          this.userid = res.data[0]._id;
          this.email = res.data[0].email;
          this.sick = res.data[0].sick;
          this.height = res.data[0].height;
          this.weight = res.data[0].weight;
          this.sex = res.data[0].sex;
          this.tag = res.data[0].tag;
          this.allfollow = res.data[0].follow;

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
