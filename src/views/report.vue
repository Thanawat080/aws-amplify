<template>
<div class="container">
    <div class="col-12">
        <h1>Report from user</h1>
        <br>
        <table style="width:100%; height:250px;">
            <tr style="text-align: center;">
                <th style="border:1px solid;">No.</th>
                <th style="border:1px solid;">Post Name</th>
                <th style="border:1px solid;">Report count</th>
                <th style="border:1px solid;">Delete or Go to report detail</th>
            </tr>
            <tr style="border:1px solid; text-align: center;" v-for="(value,index) in post" :key="index">
                <td style="border:1px solid;">{{index + 1}}</td>
                <td style="border:1px solid;">{{value.title}}</td>
                <td style="border:1px solid;">{{value.report.length}}</td>
                <td style="border:1px solid;"><button class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" @click="getdeleteid(value.id, value.title)">Delete</button>  <router-link :to="`/reportinformation/${value.id}`" style="text-decoration: none; color: white"><button class="btn btn-info" style="margin-left:10px;" >Go to report detail</button></router-link></td>
            </tr>
        </table>
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
            post: "",
            daleteid: '',
            title: '',
        };
    },

    methods: {
        getdeleteid(value, title) {
            this.daleteid = value
            this.title = title
        },

        deletepost(id) {
            axios
                .delete("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/post/" + id, {
                    withCredentials: false
                })
                .then((res) => {
                    axios
                        .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/post", {
                            withCredentials: false
                        })
                        .then((res) => {
                            console.log(res.data)
                            const array = []
                            for (let i = 0; i < res.data.length; i++) {
                                if (res.data[i].report.length > 0) {
                                    array.push(res.data[i])
                                }
                            }
                            this.post = array;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {

        axios
            .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/post", {
                withCredentials: false
            })
            .then((res) => {
                console.log(res.data)
                const array = []
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].report.length > 0) {
                        array.push(res.data[i])
                    }
                }
                this.post = array;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
