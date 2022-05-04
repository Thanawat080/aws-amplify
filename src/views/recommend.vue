<template>
  <div class="container">
    <div class="col-12">
      <div class="row">
        <div class="card" style="width: 15rem; margin: 5px">
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
            class="card-img-top"
            style="margin-top: 10px"
          />
          <div class="card-body">
            <h5 class="card-title">แนะนำ</h5>
            <p class="card-text">ข้อความ</p>
          </div>
        </div>
        <div class="card" style="width: 15rem; margin: 5px">
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
            class="card-img-top"
            style="margin-top: 10px"
          />
          <div class="card-body">
            <h5 class="card-title">แนะนำ</h5>
            <p class="card-text">ข้อความ</p>
          </div>
        </div>
        <div class="card" style="width: 15rem; margin: 5px">
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
            class="card-img-top"
            style="margin-top: 10px"
          />
          <div class="card-body">
            <h5 class="card-title">แนะนำ</h5>
            <p class="card-text">ข้อความ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },

  methods: {
    logout() {
      localStorage.clear();
    },
  },
  mounted() {
    this.username = localStorage.getItem("name");
  },
};
</script>

<style scoped></style>
