export const loadPosts = async() => {

    const postResponse        = fetch('https://jsonplaceholder.typicode.com/posts');
    const postResponsePhoto   = fetch('https://jsonplaceholder.typicode.com/photos');
    const[posts,photos]       = await Promise.all([postResponse,postResponsePhoto]);
    
    const postJson          = await posts.json();
    const postJsonPhoto     = await photos.json();

    const postsAndPhoto     = postJson.map(
      (post,index) => {
        return {...post,cover: postJsonPhoto[index].url}
      }
    );

    return postsAndPhoto;
}