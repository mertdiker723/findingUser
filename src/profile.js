export default class Profile{
    constructor(){
        this.urlUser = "https://jsonplaceholder.typicode.com/users?username=";
        this.urlTodo = "https://jsonplaceholder.typicode.com/todos?userId=";
        this.urlAlbum = "https://jsonplaceholder.typicode.com/albums?userId=";
    }


    async getProfile(username){
        const user = await fetch(`${this.urlUser}`+ username);
        const userJson = await user.json();

        const todo = await fetch(`${this.urlTodo}` + userJson[0].id);

        const todoJson = await todo.json();


        const album = await fetch(`${this.urlAlbum}`+userJson[0].id);

        const albumJson = await album.json();
        
        return {
            userJson:userJson,
            todoJson:todoJson,
            albumJson:albumJson
        }
    }
}