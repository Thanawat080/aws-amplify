<template>
<div class="container">
    <div class="col-12">
        <h1>BMI : {{bmi}}</h1>
        <h3>Name : {{first_name}} {{last_name}}</h3>
        <h6 style="color:red;">สามารถลองคำนวณค่า BMI ได้โดยการใส่ น้ำหนัก กับ ส่วนสูง ในช่องด้านล่างได้เลย</h6>
        <div class="form-floating mb-3">

            <input type="email" class="form-control" id="floatingInput" v-model="weight">
            <label for="floatingInput">weight</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" v-model="height">
            <label for="floatingInput">height</label>
        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            weight: 0,
            height: 0

        };
    },

    methods: {

    },
    mounted() {
        axios
            .get('https://l5r8hpbor7.execute-api.us-east-1.amazonaws.com/specificuser/' + localStorage.getItem('id'), {
                withCredentials: false
            })
            .then((res) => {
                this.first_name = res.data.Item.first_name
                this.last_name = res.data.Item.last_name
                this.weight = res.data.Item.weight
                this.height = res.data.Item.height

            })
            .catch((err) => {
                console.log(err)
            })
    },
    computed: {
        bmi() {
            var cal = this.weight / ((this.height / 100) ** 2)
            return cal.toFixed(2);

        }
    }

};
</script>

<style scoped></style>
