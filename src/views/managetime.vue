<template>
<div class="container">
    <div class="col-12">
        <table class="table">
            <thead>
                <tr style="text-align: center">
                    <th scope="col">Mon</th>
                    <th scope="col">Tue</th>
                    <th scope="col">Wed</th>
                    <th scope="col">Thu</th>
                    <th scope="col">Fri</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Sun</th>
                </tr>
            </thead>
            <tbody>
                <tr style="text-align: center">
                    <td>
                        <div class="form-floating">
                            <textarea v-model="mon1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="tue1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="wed1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="thu1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="fri1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sat1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sun1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-floating">
                            <textarea v-model="mon2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="tue2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="wed2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="thu2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="fri2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sat2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sun2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-floating">
                            <textarea v-model="mon3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="tue3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="wed3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="thu3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="fri3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sat3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sun3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-floating">
                            <textarea v-model="mon4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="tue4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="wed4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="thu4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="fri4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sat4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-floating">
                            <textarea v-model="sun4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Todo</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-danger" @click="save()">Save</button>

        <table class="table">
            <thead>
                <tr style="text-align: center">
                    <th scope="col">Mon</th>
                    <th scope="col">Tue</th>
                    <th scope="col">Wed</th>
                    <th scope="col">Thu</th>
                    <th scope="col">Fri</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Sun</th>
                </tr>
            </thead>
            <tbody>
                <tr style="text-align: center">
                    <td>
                        <div class="form-control" @click="clickmon1check()" :style="{'background-color':getschedule.colormon1}">
                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.mon1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicktue1check()" :style="{'background-color':getschedule.colortue1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.tue1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickwed1check()" :style="{'background-color':getschedule.colorwed1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.wed1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickthu1check()" :style="{'background-color':getschedule.colorthu1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.thu1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickfri1check()" :style="{'background-color':getschedule.colorfri1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.fri1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksat1check()" :style="{'background-color':getschedule.colorsat1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sat1}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksun1check()" :style="{'background-color':getschedule.colorsun1}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sun1}}</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-control" @click="clickmon2check()" :style="{'background-color':getschedule.colormon2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.mon2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicktue2check()" :style="{'background-color':getschedule.colortue2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.tue2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickwed2check()" :style="{'background-color':getschedule.colorwed2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.wed2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickthu2check()" :style="{'background-color':getschedule.colorthu2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.thu2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickfri2check()" :style="{'background-color':getschedule.colorfri2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.fri2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksat2check()" :style="{'background-color':getschedule.colorsat2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sat2}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksun2check()" :style="{'background-color':getschedule.colorsun2}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sun2}}</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-control" @click="clickmon3check()" :style="{'background-color':getschedule.colormon3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.mon3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicktue3check()" :style="{'background-color':getschedule.colortue3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.tue3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickwed3check()" :style="{'background-color':getschedule.colorwed3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.wed3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickthu3check()" :style="{'background-color':getschedule.colorthu3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.thu3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickfri3check()" :style="{'background-color':getschedule.colorfri3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.fri3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksat3check()" :style="{'background-color':getschedule.colorsat3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sat3}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksun3check()" :style="{'background-color':getschedule.colorsun3}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sun3}}</label>
                        </div>
                    </td>
                </tr>
                <tr style="text-align: center">
                    <td>
                        <div class="form-control" @click="clickmon4check()" :style="{'background-color':getschedule.colormon4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.mon4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicktue4check()" :style="{'background-color':getschedule.colortue4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.tue4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickwed4check()" :style="{'background-color':getschedule.colorwed4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.wed4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickthu4check()" :style="{'background-color':getschedule.colorthu4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.thu4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clickfri4check()" :style="{'background-color':getschedule.colorfri4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.fri4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksat4check()" :style="{'background-color':getschedule.colorsat4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sat4}}</label>
                        </div>
                    </td>
                    <td>
                        <div class="form-control" @click="clicksun4check()" :style="{'background-color':getschedule.colorsun4}">

                            <label for="floatingTextarea" style="width: 60px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;">{{getschedule.sun4}}</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            username: "",
            mon1: '',
            mon2: '',
            mon3: '',
            mon4: '',
            tue1: '',
            tue2: '',
            tue3: '',
            tue4: '',
            wed1: '',
            wed2: '',
            wed3: '',
            wed4: '',
            thu1: '',
            thu2: '',
            thu3: '',
            thu4: '',
            fri1: '',
            fri2: '',
            fri3: '',
            fri4: '',
            sat1: '',
            sat2: '',
            sat3: '',
            sat4: '',
            sun1: '',
            sun2: '',
            sun3: '',
            sun4: '',
            schedule: [],
            mon1check: true,
            mon2check: true,
            mon3check: true,
            mon4check: true,
            tue1check: true,
            tue2check: true,
            tue3check: true,
            tue4check: true,
            wed1check: true,
            wed2check: true,
            wed3check: true,
            wed4check: true,
            thu1check: true,
            thu2check: true,
            thu3check: true,
            thu4check: true,
            fri1check: true,
            fri2check: true,
            fri3check: true,
            fri4check: true,
            sat1check: true,
            sat2check: true,
            sat3check: true,
            sat4check: true,
            sun1check: true,
            sun2check: true,
            sun3check: true,
            sun4check: true,
            getschedule: '',
            colormon1: 'green',
            colormon2: 'green',
            colormon3: 'green',
            colormon4: 'green',
            colortue1: 'green',
            colortue2: 'green',
            colortue3: 'green',
            colortue4: 'green',
            colorwed1: 'green',
            colorwed2: 'green',
            colorwed3: 'green',
            colorwed4: 'green',
            colorthu1: 'green',
            colorthu2: 'green',
            colorthu3: 'green',
            colorthu4: 'green',
            colorfri1: 'green',
            colorfri2: 'green',
            colorfri3: 'green',
            colorfri4: 'green',
            colorsat1: 'green',
            colorsat2: 'green',
            colorsat3: 'green',
            colorsat4: 'green',
            colorsun1: 'green',
            colorsun2: 'green',
            colorsun3: 'green',
            colorsun4: 'green',
        };
    },

    methods: {

        save() {
            if (this.mon1 != '') {
                this.mon1check = false
                this.colormon1 = 'red'
            }
            if (this.mon2 != '') {
                this.mon2check = false
                this.colormon2 = 'red'
            }
            if (this.mon3 != '') {
                this.mon3check = false
                this.colormon3 = 'red'
            }
            if (this.mon4 != '') {
                this.mon4check = false
                this.colormon4 = 'red'
            }
            if (this.tue1 != '') {
                this.tue1check = false
                this.colortue1 = 'red'
            }
            if (this.tue2 != '') {
                this.tue2check = false
                this.colortue2 = 'red'
            }
            if (this.tue3 != '') {
                this.tue3check = false
                this.colortue3 = 'red'
            }
            if (this.tue4 != '') {
                this.tue4check = false
                this.colortue4 = 'red'
            }
            if (this.wed1 != '') {
                this.wed1check = false
                this.colorwed1 = 'red'
            }
            if (this.wed2 != '') {
                this.wed2check = false
                this.colorwed2 = 'red'
            }
            if (this.wed3 != '') {
                this.wed3check = false
                this.colorwed3 = 'red'
            }
            if (this.wed4 != '') {
                this.wed4check = false
                this.colorwed4 = 'red'
            }
            if (this.thu1 != '') {
                this.thu1check = false
                this.colorthu1 = 'red'
            }
            if (this.thu2 != '') {
                this.thu2check = false
                this.colorthu2 = 'red'
            }
            if (this.thu3 != '') {
                this.thu3check = false
                this.colorthu3 = 'red'
            }
            if (this.thu4 != '') {
                this.thu4check = false
                this.colorthu4 = 'red'
            }
            if (this.fri1 != '') {
                this.fri1check = false
                this.colorfri1 = 'red'
            }
            if (this.fri2 != '') {
                this.fri2check = false
                this.colorfri2 = 'red'
            }
            if (this.fri3 != '') {
                this.fri3check = false
                this.colorfri3 = 'red'
            }
            if (this.fri4 != '') {
                this.fri4check = false
                this.colorfri4 = 'red'
            }
            if (this.sat1 != '') {
                this.sat1check = false
                this.colorsat1 = 'red'
            }
            if (this.sat2 != '') {
                this.sat2check = false
                this.colorsat2 = 'red'
            }
            if (this.sat3 != '') {
                this.sat3check = false
                this.colorsat3 = 'red'
            }
            if (this.sat4 != '') {
                this.sat4check = false
                this.colorsat4 = 'red'
            }
            if (this.sun1 != '') {
                this.sun1check = false
                this.colorsun1 = 'red'
            }
            if (this.sun2 != '') {
                this.sun2check = false
                this.colorsun2 = 'red'
            }
            if (this.sun3 != '') {
                this.sun3check = false
                this.colorsun3 = 'red'
            }
            if (this.sun4 != '') {
                this.sun4check = false
                this.colorsun4 = 'red'
            }
            this.schedule.push({
                mon1: this.mon1,
                mon2: this.mon2,
                mon3: this.mon3,
                mon4: this.mon4,
                tue1: this.tue1,
                tue2: this.tue2,
                tue3: this.tue3,
                tue4: this.tue4,
                wed1: this.wed1,
                wed2: this.wed2,
                wed3: this.wed3,
                wed4: this.wed4,
                thu1: this.thu1,
                thu2: this.thu2,
                thu3: this.thu3,
                thu4: this.thu4,
                fri1: this.fri1,
                fri2: this.fri2,
                fri3: this.fri3,
                fri4: this.fri4,
                sat1: this.sat1,
                sat2: this.sat2,
                sat3: this.sat3,
                sat4: this.sat4,
                sun1: this.sun1,
                sun2: this.sun2,
                sun3: this.sun3,
                sun4: this.sun4,
                mon1check: this.mon1check,
                mon2check: this.mon2check,
                mon3check: this.mon3check,
                mon4check: this.mon4check,
                tue1check: this.tue1check,
                tue2check: this.tue2check,
                tue3check: this.tue3check,
                tue4check: this.tue4check,
                wed1check: this.wed1check,
                wed2check: this.wed2check,
                wed3check: this.wed3check,
                wed4check: this.wed4check,
                thu1check: this.thu1check,
                thu2check: this.thu2check,
                thu3check: this.thu3check,
                thu4check: this.thu4check,
                fri1check: this.fri1check,
                fri2check: this.fri2check,
                fri3check: this.fri3check,
                fri4check: this.fri4check,
                sat1check: this.sat1check,
                sat2check: this.sat2check,
                sat3check: this.sat3check,
                sat4check: this.sat4check,
                sun1check: this.sun1check,
                sun2check: this.sun2check,
                sun3check: this.sun3check,
                sun4check: this.sun4check,
                colormon1: this.colormon1,
                colormon2: this.colormon2,
                colormon3: this.colormon3,
                colormon4: this.colormon4,
                colortue1: this.colortue1,
                colortue2: this.colortue2,
                colortue3: this.colortue3,
                colortue4: this.colortue4,
                colorwed1: this.colorwed1,
                colorwed2: this.colorwed2,
                colorwed3: this.colorwed3,
                colorwed4: this.colorwed4,
                colorthu1: this.colorthu1,
                colorthu2: this.colorthu2,
                colorthu3: this.colorthu3,
                colorthu4: this.colorthu4,
                colorfri1: this.colorfri1,
                colorfri2: this.colorfri2,
                colorfri3: this.colorfri3,
                colorfri4: this.colorfri4,
                colorsat1: this.colorsat1,
                colorsat2: this.colorsat2,
                colorsat3: this.colorsat3,
                colorsat4: this.colorsat4,
                colorsun1: this.colorsun1,
                colorsun2: this.colorsun2,
                colorsun3: this.colorsun3,
                colorsun4: this.colorsun4,

            })
            axios
                .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                    timeschedule: this.schedule,
                })
                .then(() => {
                    alert("Schedule successfully")
                    this.mon1 = ''
                    this.mon2 = ''
                    this.mon3 = ''
                    this.mon4 = ''
                    this.tue1 = ''
                    this.tue2 = ''
                    this.tue3 = ''
                    this.tue4 = ''
                    this.wed1 = ''
                    this.wed2 = ''
                    this.wed3 = ''
                    this.wed4 = ''
                    this.thu1 = ''
                    this.thu2 = ''
                    this.thu3 = ''
                    this.thu4 = ''
                    this.fri1 = ''
                    this.fri2 = ''
                    this.fri3 = ''
                    this.fri4 = ''
                    this.sat1 = ''
                    this.sat2 = ''
                    this.sat3 = ''
                    this.sat4 = ''
                    this.sun1 = ''
                    this.sun2 = ''
                    this.sun3 = ''
                    this.sun4 = ''
                    this.schedule = []
                    axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                        .then((response) => {
                            this.getschedule = response.data[0].timeschedule[0]

                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });

        },
        clickmon1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.mon1check = !this.getschedule.mon1check
                    if (this.getschedule.mon1check) {
                        this.getschedule.colormon1 = "green"
                    } else {
                        this.getschedule.colormon1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickmon2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.mon2check = !this.getschedule.mon2check
                    if (this.getschedule.mon2check) {
                        this.getschedule.colormon2 = "green"
                    } else {
                        this.getschedule.colormon2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickmon3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.mon3check = !this.getschedule.mon3check
                    if (this.getschedule.mon3check) {
                        this.getschedule.colormon3 = "green"
                    } else {
                        this.getschedule.colormon3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickmon4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.mon4check = !this.getschedule.mon4check
                    if (this.getschedule.mon4check) {
                        this.getschedule.colormon4 = "green"
                    } else {
                        this.getschedule.colormon4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicktue1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.tue1check = !this.getschedule.tue1check
                    if (this.getschedule.tue1check) {
                        this.getschedule.colortue1 = "green"
                    } else {
                        this.getschedule.colortue1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicktue2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.tue2check = !this.getschedule.tue2check
                    if (this.getschedule.tue2check) {
                        this.getschedule.colortue2 = "green"
                    } else {
                        this.getschedule.colortue2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicktue3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.tue3check = !this.getschedule.tue3check
                    if (this.getschedule.tue3check) {
                        this.getschedule.colortue3 = "green"
                    } else {
                        this.getschedule.colortue3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicktue4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.tue4check = !this.getschedule.tue4check
                    if (this.getschedule.tue4check) {
                        this.getschedule.colortue4 = "green"
                    } else {
                        this.getschedule.colortue4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickwed1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.wed1check = !this.getschedule.wed1check
                    if (this.getschedule.wed1check) {
                        this.getschedule.colorwed1 = "green"
                    } else {
                        this.getschedule.colorwed1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickwed2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.wed2check = !this.getschedule.wed2check
                    if (this.getschedule.wed2check) {
                        this.getschedule.colorwed2 = "green"
                    } else {
                        this.getschedule.colorwed2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickwed3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.wed3check = !this.getschedule.wed3check
                    if (this.getschedule.wed3check) {
                        this.getschedule.colorwed3 = "green"
                    } else {
                        this.getschedule.colorwed3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickwed4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.wed4check = !this.getschedule.wed4check
                    if (this.getschedule.wed4check) {
                        this.getschedule.colorwed4 = "green"
                    } else {
                        this.getschedule.colorwed4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickthu1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.thu1check = !this.getschedule.thu1check
                    if (this.getschedule.thu1check) {
                        this.getschedule.colorthu1 = "green"
                    } else {
                        this.getschedule.colorthu1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickthu2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.thu2check = !this.getschedule.thu2check
                    if (this.getschedule.thu2check) {
                        this.getschedule.colorthu2 = "green"
                    } else {
                        this.getschedule.colorthu2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickthu3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.thu3check = !this.getschedule.thu3check
                    if (this.getschedule.thu3check) {
                        this.getschedule.colorthu3 = "green"
                    } else {
                        this.getschedule.colorthu3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickthu4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.thu4check = !this.getschedule.thu4check
                    if (this.getschedule.thu4check) {
                        this.getschedule.colorthu4 = "green"
                    } else {
                        this.getschedule.colorthu4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickfri1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.fri1check = !this.getschedule.fri1check
                    if (this.getschedule.fri1check) {
                        this.getschedule.colorfri1 = "green"
                    } else {
                        this.getschedule.colorfri1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickfri2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.fri2check = !this.getschedule.fri2check
                    if (this.getschedule.fri2check) {
                        this.getschedule.colorfri2 = "green"
                    } else {
                        this.getschedule.colorfri2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickfri3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.fri3check = !this.getschedule.fri3check
                    if (this.getschedule.fri3check) {
                        this.getschedule.colorfri3 = "green"
                    } else {
                        this.getschedule.colorfri3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clickfri4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.fri4check = !this.getschedule.fri4check
                    if (this.getschedule.fri4check) {
                        this.getschedule.colorfri4 = "green"
                    } else {
                        this.getschedule.colorfri4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksat1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sat1check = !this.getschedule.sat1check
                    if (this.getschedule.sat1check) {
                        this.getschedule.colorsat1 = "green"
                    } else {
                        this.getschedule.colorsat1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksat2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sat2check = !this.getschedule.sat2check
                    if (this.getschedule.sat2check) {
                        this.getschedule.colorsat2 = "green"
                    } else {
                        this.getschedule.colorsat2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksat3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sat3check = !this.getschedule.sat3check
                    if (this.getschedule.sat3check) {
                        this.getschedule.colorsat3 = "green"
                    } else {
                        this.getschedule.colorsat3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksat4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sat4check = !this.getschedule.sat4check
                    if (this.getschedule.sat4check) {
                        this.getschedule.colorsat4 = "green"
                    } else {
                        this.getschedule.colorsat4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksun1check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sun1check = !this.getschedule.sun1check
                    if (this.getschedule.sun1check) {
                        this.getschedule.colorsun1 = "green"
                    } else {
                        this.getschedule.colorsun1 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksun2check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sun2check = !this.getschedule.sun2check
                    if (this.getschedule.sun2check) {
                        this.getschedule.colorsun2 = "green"
                    } else {
                        this.getschedule.colorsun2 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksun3check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sun3check = !this.getschedule.sun3check
                    if (this.getschedule.sun3check) {
                        this.getschedule.colorsun3 = "green"
                    } else {
                        this.getschedule.colorsun3 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clicksun4check() {
            axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
                .then((response) => {
                    this.getschedule = response.data[0].timeschedule[0]
                    this.getschedule.sun4check = !this.getschedule.sun4check
                    if (this.getschedule.sun4check) {
                        this.getschedule.colorsun4 = "green"
                    } else {
                        this.getschedule.colorsun4 = "red"
                    }
                    axios
                        .put("http://localhost:3000/schedule/" + localStorage.getItem('id'), {
                            timeschedule: this.getschedule,
                        })
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    },
    mounted() {
        axios.get("http://localhost:3000/specificuser/" + localStorage.getItem('id'))
            .then((response) => {
                this.getschedule = response.data[0].timeschedule[0]

            })
            .catch((err) => {
                console.log(err);
            });

    },
};
</script>

<style scoped></style>
