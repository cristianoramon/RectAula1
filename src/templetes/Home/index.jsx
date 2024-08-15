import { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utilis/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/InputText';

class Home extends Component {
  state = {    
    posts: [ ],
    allPost:[],
    page:0,
    postsPerPage:50,
    search:''
  };

  timeOutUpdade = null;
 
   async componentDidMount() {   
    
     await this.loadPosts();

   }


   loadPosts  = async() =>  {

      const { page, postsPerPage } = this.state;

      const postsAndPhoto = await loadPosts();
      this.setState({
        posts: postsAndPhoto.slice(page,postsPerPage),
        allPost: postsAndPhoto
      });
   }

   loadMorePost = ()=> {   
      const {
        page,
        postsPerPage,
        allPost,
        posts
      }   = this.state;

      const nextPage = page+postsPerPage;
      const nextPosts = allPost.slice(nextPage,nextPage+postsPerPage)
      posts.push(...nextPosts);

      this.setState({
        posts,
        page:nextPage
      });

      console.log('load more posts');
   }


   componentDidUpdate(){
   }

   componentWillUnmount(){
   }

   
   handleChange = ( e ) => {

    const {value} = e.target;

    this.setState({
      search:value

    });

   }

  render() {

    const { posts,page,postsPerPage,allPost,search } = this.state;

    const noMorePage = page+postsPerPage >= allPost.length;

    const filteredPost = !!search ?  
    allPost.filter(
      post => {
        return post.title.toLowerCase().includes(search.toLowerCase() );
      }
         
    ):posts;
    return (
        <section  className='container'>

             <div className='search-container'>
                {!!search &&(
                  <h1>Search : {search}</h1>
                )}
            
              <TextInput
                handleChange={this.handleChange}  
                search={search}
              />
            </div>  
           <Posts posts={filteredPost}/>
           <div className="button-container">
              
              {!search && (
                <Button 
                text="Load more posts"
                onclick={this.loadMorePost}
                disabled={noMorePage}/>
              )}
              
            </div>      
        </section>      
    );
  }
}
export default Home;
