import axios from "axios";


export default axios.create({
    baseURL: 'https://react-quiz-de772-default-rtdb.firebaseio.com/'
})