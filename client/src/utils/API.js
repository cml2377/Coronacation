import axios from "axios";

export default {
    // Need Routes

    getNeeds: function () {
        return axios.get("/api/needs");
    },

    getNeed: function (id) {
        console.log(id)
        return axios.get("/api/needs/" + id);
    },
    postNeed: function (needData) {
        return axios.post("/api/need/", needData);
    },

    // Update a Need when completed

}