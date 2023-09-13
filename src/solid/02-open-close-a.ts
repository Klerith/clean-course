import { HttpClinete } from './-open-close-c.';
import { PhotosService, PostService, TodoService } from './02-open-close-b';

(async () => {

    const httpClient = new HttpClinete();

    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photosService = new PhotosService(httpClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();