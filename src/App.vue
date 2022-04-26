<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand">
          <router-link to="/">Fitness</router-link>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="!username"
                >Account</a
              >
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="username"
                >{{ username }}</a
              >
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li v-if="username">
                  <router-link class="dropdown-item" to="/profile"
                    ><i class="fas fa-sign-in-alt"></i
                    >{{ "\xa0" }}Profile</router-link
                  ><a @click="logout()">
                  <router-link class="dropdown-item" to="/home" 
                    ><i class="fas fa-user-plus"></i
                    >{{ "\xa0" }}Logout</router-link
                  ></a>

                </li>
                <li v-if="!username">
                  <router-link class="dropdown-item" to="/login"
                    ><i class="fas fa-sign-in-alt"></i
                    >{{ "\xa0" }}Login</router-link
                  >

                  <router-link class="dropdown-item" to="/register" 
                    ><i class="fas fa-user-plus"></i
                    >{{ "\xa0" }}Register</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <br />
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <router-view
            :key="$route.fullPath"
            @auth-change="onAuthChange"
            class="d-flex justify-content-center"
          />
        </div>
        <div class="col-2" v-if="username">
          <div class="list-group">
            <router-link
              to="/managetime"
              type="button"
              class="list-group-item list-group-item-action"
            >
              จัดตารางเวลา
            </router-link>
            <router-link
              to="/createpost"
              type="button"
              class="list-group-item list-group-item-action"
            >
              สร้างโพสต์
            </router-link>
            <router-link
              to="/recommend"
              type="button"
              class="list-group-item list-group-item-action"
            >
              คำแนะนำ
            </router-link>
            <router-link
              to="/bmi"
              type="button"
              class="list-group-item list-group-item-action"
            >
              BMI
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      //  user: {},
      user:0
    };
  },
  methods: {
    onAuthChange() {
      this.username = localStorage.getItem("name");
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      this.onAuthChange();
    

    },
  },
  mounted() {
    this.onAuthChange();
    this.username = localStorage.getItem("name");
  },
};
</script>
