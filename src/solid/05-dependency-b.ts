import { LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() {}

    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}