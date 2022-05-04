<template>
  <div class="EditProfile">
    <div class="container">
      <div class="col">
        <center>
          <img
            :src=img
            width="200"
            height="200"
            class="rounded"
            alt=""
          />
          <br>
          <br>
          <input
          style="margin-left:70px;"
            id="fileInput"
            type="file"
            class="file-input"
            @change="(event) => attachImage(event)"
          />
          <br />
          <br />
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Firstname"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="first_name"
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Lastname"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="last_name"
            />
            <label for="floatingInput">Last Name</label>
          </div>

          <div class="form-floating mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexCheckDefault"
                value="male"
                v-model="sex"
              />
              <label class="form-check-label" for="flexCheckDefault">
                MALE
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="female"
                v-model="sex"
              />
              <label class="form-check-label" for="flexCheckChecked">
                FEMALE
              </label>
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Height"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="height"
            />
            <label for="floatingInput">Height</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Weight"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="weight"
            />
            <label for="floatingInput">Weight</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              class="form-control"
              placeholder="Phonenumber"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="phone_number"
            />
            <label for="floatingInput">Phonenumber</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="email"
            />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating">
            <textarea
              class="form-control"
              aria-label="โรคประจำตัว"
              v-model="sick"
            ></textarea>
            <label for="floatingTextarea">โรคประจำตัว</label>
          </div>
          <br />
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              @change="onChange($event)"
            >
              <option value="ลดความอ้วน">ลดความอ้วน</option>
              <option value="หุ่นดี">หุ่นดี</option>
              <option value="Sixpack">Sixpack</option>
              <option value="ไม่ใช้อุปกรณ์">ไม่ใช้อุปกรณ์</option>
            </select>
            <label for="floatingSelect">TAGS</label>
          </div>
          <br />

          <div class="row">
            <div class="col-11">
              <label v-if="error != false">{{ error }}</label>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Custom tag"
                  aria-label="Custom tag"
                  aria-describedby="basic-addon1"
                  v-model="customtag"
                />
                <label for="floatingInput">Custom tag</label>
              </div>
            </div>
            <div class="col-1">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="confirmcustom"
              >
                เพิ่ม
              </button>
            </div>
          </div>

          <div class="row">
            <div
              class="col-2"
              v-for="(value, index) in tag"
              :key="index"
              @click="cancletag(index)"
            >
              <button type="button" class="btn btn-outline-danger">
                {{ value }}
              </button>
            </div>
          </div>

          <br />
          <button type="button" class="btn btn-primary" @click="Change">
            Change
          </button>
          <br /><br />
          <!-- <div v-if="error != false">{{ error }}</div> -->
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            tag: [],
            first_name: "",
            last_name: "",
            phone_number: "",
            weight: 0,
            height: 0,
            email: "",
            sick: "",
            sex: "",
            customtag: "",
            user_name: "",
            password: "",
            img: '',
        };
    },
    props: {
        minLength: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        error() {
            if (this.customtag.length > 20) {
                return `customtag must be less than 20 characters.`;
            }
            return false;
        },
    },
    methods: {
        async getDataUrl(file) {
            const reader = new FileReader()
            return new Promise(resolve => {
                reader.onload = event => resolve(event.target.result)
                reader.readAsDataURL(file)
            })
        },

        async browseForImage(id) {
            const inputEl = document.getElementById(`fileInput`)
            inputEl.click()
            console.log(id)
        },

        async attachImage(event) {
            let file = event.target.files[0]
            let dataUrl = await this.getDataUrl(file)
            axios
            .post('https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/images', {
                fileName: file.name,
                fileData: dataUrl
            },{withCredentials: false})
            .then((res) => {
                console.log(res.data.imageUrl)
                this.img = res.data.imageUrl
            })
            .catch((err) => {
                console.log(err)
            })
        },
        Change() {
            axios
                .put(
                    "https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com//profile/" +
                    localStorage.getItem("id"), {
                        user_name: localStorage.getItem("name"),
                        password: this.password,
                        tag: this.tag,
                        sick: this.sick,
                        email: this.email,
                        phone_number: this.phone_number,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        sex: this.sex,
                        weight: this.weight,
                        height: this.height,
                        img: this.img,
                        type: "user",
                    }, {
                        withCredentials: false
                    }
                )
                .then(() => {
                    this.$router.push({
                        name: "profile"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        onChange(event) {
            if (this.tag.indexOf(event.target.value) == -1) {
                this.tag.push(event.target.value);
            }
        },
        cancletag(index) {
            console.log(index);
            this.tag.splice(index, 1);
        },
        confirmcustom() {
            function isEmpty(str) {
                return str.replace(/^\s+|\s+$/g, "").length == 0;
            }

            if (isEmpty(this.customtag)) {
                alert("input the customtag");
            } else if (this.customtag.length > 20) {
                alert("customtag must be 20 character");
            } else {
                this.tag.push(this.customtag);
            }
        },
    },
    created() {
        // axios
        //   .get('http://localhost:3000/login/' + localStorage.getItem('name'))
        //   .then((res) => {
        //     for (var i = 0; i < res.data[0].tag.length; i++) {
        //       this.tag.push(res.data[0].tag[i])
        //     }
        //     console.log(this.tag)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })

        axios
            .get(
                "https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com/specificuser/" +
                localStorage.getItem("id"), {
                    withCredentials: false
                }
            )
            .then((res) => {
                console.log(res.data.Item);
                this.first_name = res.data.Item.first_name;
                this.last_name = res.data.Item.last_name;
                this.phone_number = res.data.Item.phone_number;
                this.weight = res.data.Item.weight;
                this.height = res.data.Item.height;
                this.email = res.data.Item.email;
                this.sick = res.data.Item.sick;
                this.sex = res.data.Item.sex;
                this.user_name = localStorage.getItem("name");
                this.password = res.data.Item.password;
                this.img = res.data.Item.img;
                for (var i = 0; i < res.data.Item.tag.length; i++) {
                    this.tag.push(res.data.Item.tag[i]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
