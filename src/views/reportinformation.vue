<template>
<div class="container">
    <div class="col-12">
        <h1>User Report {{title}}</h1>
        <br>
        <table style="width:100%; height:250px;">
            <tr style="text-align: center;">
                <th style="border:1px solid;">No.</th>
                <th style="border:1px solid;">User id</th>
                <th style="border:1px solid;">Report</th>
            </tr>
            <tr style="border:1px solid; text-align: center;" v-for="(value,index) in report" :key="index">
                <td style="border:1px solid;">{{index + 1}}</td>
                <td style="border:1px solid;">{{value.userid}}</td>
                <td style="border:1px solid;">{{value.report}}</td>

            </tr>
        </table>
        <br>
        <button class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" @click="getdeleteid(postid)">Delete Post</button>
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

            title: '',
            report: '',
            daleteid: '',
            postid:''

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
                            this.$router.push({
                        name: "report"
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
            .get("https://6mus9gbr73.execute-api.us-east-1.amazonaws.com/specificpost/" + this.$route.params.id, {
                withCredentials: false
            })
            .then((res) => {
                this.postid = res.data.Item.id
                this.title = res.data.Item.title;
                this.report = res.data.Item.report

            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
