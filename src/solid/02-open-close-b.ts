
import { HttpClinete } from './-open-close-c.';


export class TodoService { 
    
    constructor (private http:HttpClinete ){;
    }


    async getTodoItems() {

        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor (private http:HttpClinete ){

    }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor (private http:HttpClinete ){

    }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}