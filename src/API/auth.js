import axios from "axios";

export default class AuthService {

    static async login(email, password) {
        return await axios.post("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/login", { email, password });
    }

    static async logout(token) {
        return await axios.post( 'http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/log-out', {
            headers: {
                accept: "*/*",
                Authorization: `Bearer ${token}`
            }
        });
    }

    static async refresh(token) {
        return await axios.get('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/refresh', {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }

    static async getUserInfo(id) {
        return await axios.get("http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/users/" + id);
    }
}