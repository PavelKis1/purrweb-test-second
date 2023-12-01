import axios from "axios";

export default class AuthService {

    static login(email, password) {
        return axios.post("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/login", { email, password });
    }

    static refreshToken() {
        return axios.get("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/refresh");
    }

    static logout() {
        return axios.post("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/log-out");
    }

    static refresh(token) {
        return axios.post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/refresh', { token })
    }

    static getUserInfo(id) {
        return axios.get("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/users/" + id);
    }
}