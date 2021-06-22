import axios from 'axios';

const api = {

    Search: function () {
        return axios.get('https://randomuser.me/api/?results=40&nat=us')
    }
};

export default api;