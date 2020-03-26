import axios from "axios";

export default {
    // Need Routes

    //getting all of the needs
    getNeeds: function () {
        return axios.get("/api/needs");
    },

    //getting one need
    getNeed: function (id) {
        console.log(id)
        return axios.get("/api/needs/" + id);
    },

    //saves the need to the database
    postNeed: function (needData) {
        return axios.post("/api/need", needData);
    },

    // Update a Need when completed
    updateNeed: function (id, needCompletion) {
        return axios.put("/api/user/" + id, needCompletion);
    },
}