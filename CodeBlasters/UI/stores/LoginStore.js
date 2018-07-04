import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

class LoginStore {
    @observable authenticated = false;

    @action setAuthenticated(val){
        this.authenticated = val;
    }

    @computed get getIsAuthenticated(){
        return this.authenticated;
    }

    @action async login(name, pwd){
        try{
            var response = await axios.post('http://localhost:3000/eventpage/login',{Email : name , Password :pwd});
            console.log(response);
            if (response.data === "Authenticated"){
                await this.setAuthenticated(true);
                console.log(this.getIsAuthenticated);
            }else{
                await this.setAuthenticated(false);
                console.log(this.getIsAuthenticated);
            }
        }catch(e){
            this.setAuthenticated(false);
        }
    }
}
export default new LoginStore();
export { LoginStore };