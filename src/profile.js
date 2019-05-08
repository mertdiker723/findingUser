export default class Profile{
    constructor(){
        this.urlUser = "https://jsonplaceholder.typicode.com/users?username=";
        this.urlTodo = "https://jsonplaceholder.typicode.com/todos?userId=";
    }


    async getProfile(username){
        const user = await fetch(`${this.urlUser}`+ username);
        const userJson = await user.json();

        return {
            userJson:userJson
        }
    }
}