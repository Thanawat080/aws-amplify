<template>
  <div class="EditProfile">
    <div class="container">
      <div class="col">
        <center>
          <img
            src="https://www.img.in.th/images/fbdc8860b6fc58a37befa97de1765c64.png"
            width="200"
            height="200"
            class="rounded"
            alt=""
          />
          <br />
          <br />
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">First Name</span>
            <input
              type="text"
              class="form-control"
              placeholder="Firstname"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="first_name"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Last Name</span>
            <input
              type="text"
              class="form-control"
              placeholder="Lastname"
              aria-label="Username"
              aria-describedby="basic-addon1"
               v-model="last_name"
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Sex</span>
            <div class="form-check" style="margin-left:15px; margin-top:10px;">
              <input
                class="form-check-input"
                type="radio" name="flexRadioDefault"
                id="flexCheckDefault"
                value="male"
                v-model="sex"
              />
              <label class="form-check-label" for="flexCheckDefault">
                male
              </label>
            </div>
            <div class="form-check"  style="margin-left:15px; margin-top:10px;">
              <input
                class="form-check-input"
                type="radio" name="flexRadioDefault"
                value="female"
                v-model="sex"
              />
              <label class="form-check-label" for="flexCheckChecked">
                female
              </label>
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Height</span>
            <input
              type="text"
              class="form-control"
              placeholder="Height"
              aria-label="Username"
              aria-describedby="basic-addon1"
               v-model="height"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Weight</span>
            <input
              type="text"
              class="form-control"
              placeholder="Weight"
              aria-label="Username"
              aria-describedby="basic-addon1"
               v-model="weight"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Phonenumber</span>
            <input
              type="text"
              class="form-control"
              placeholder="Phonenumber"
              aria-label="Username"
              aria-describedby="basic-addon1"
               v-model="phone_number"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
               v-model="email"
            />
          </div>
          <div class="input-group">
            <span class="input-group-text">โรคประจำตัว</span>
            <textarea class="form-control" aria-label="โรคประจำตัว"  v-model="sick"></textarea>
          </div>
          <br />
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            @change="onChange($event)"
          >
            <option value="ลดความอ้วน">ลดความอ้วน</option>
            <option value="หุ่นดี">หุ่นดี</option>
            <option value="Sixpack">Sixpack</option>
            <option value="ไม่ใช้อุปกรณ์">ไม่ใช้อุปกรณ์</option>
          </select>
          <br />
          <span v-if="error != false">{{ error }}</span>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Custom tag</span>

            <input
              type="text"
              class="form-control"
              placeholder="Custom tag"
              aria-label="Custom tag"
              aria-describedby="basic-addon1"
              v-model="customtag"
            />

            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              @click="confirmcustom"
            >
              เพิ่ม
            </button>
          </div>

          <button
            type="button"
            class="btn btn-sm btn-danger"
            v-for="(value, index) in tag"
            :key="index"
            @click="cancletag(index)"
          >
            <font size="1">{{ value }}</font>
            &nbsp;
            <b>x</b>
          </button>
          <br />
          <br />
          <button type="button" class="btn btn-primary" @click="Change">
            Change
          </button>
          <!-- <div v-if="error != false">{{ error }}</div> -->
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      tag: [],
      first_name: '',
      last_name: '',
      phone_number: '',
      weight: 0,
      height: 0,
      email: '',
      sick:'',
      sex:'',
      customtag: ''
      
    }
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
        return `customtag must be less than 20 characters.`
      }
      return false
    },
  },
  methods: {
    Change() {
      axios
        .put('http://localhost:3000/profile/' + localStorage.getItem('id'), {
          tag: this.tag,
          sick:this.sick,
          email:this.email,
          phone_number:this.phone_number,
          first_name:this.first_name,
          last_name:this.last_name,
          sex:this.sex,
          weight:this.weight,
          height:this.height
        })
        .then(() => {
          this.$router.push({ name: 'profile' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onChange(event) {
      if (this.tag.indexOf(event.target.value) == -1) {
        this.tag.push(event.target.value)
      }
    },
    cancletag(index) {
      console.log(index)
      this.tag.splice(index, 1)
    },
    confirmcustom() {
      function isEmpty(str) {
        return str.replace(/^\s+|\s+$/g, '').length == 0
      }

      if (isEmpty(this.customtag)) {
        alert('input the customtag')
      } else if (this.customtag.length > 20) {
        alert('customtag must be 20 character')
      } else {
        this.tag.push(this.customtag)
      }
    },
  },
  created() {
    axios
      .get('http://localhost:3000/login/' + localStorage.getItem('name'))
      .then((res) => {
        for (var i = 0; i < res.data[0].tag.length; i++) {
          this.tag.push(res.data[0].tag[i])
        }
        console.log(this.tag)
      })
      .catch((err) => {
        console.log(err)
      })


      axios
      .get('http://localhost:3000/specificuser/' + localStorage.getItem('id'))
      .then((res) => {
          this.first_name =  res.data[0].first_name
          this.last_name =  res.data[0].last_name
          this.phone_number =  res.data[0].phone_number
          this.weight =  res.data[0].weight
          this.height =  res.data[0].height
          this.email =  res.data[0].email
          this.sick =  res.data[0].sick
          this.sex =  res.data[0].sex
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
