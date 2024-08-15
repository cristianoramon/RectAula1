import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };

  timeOutUpdade = null;
 
   componentDidMount(){
    this.handleTimeout();    
   }

   componentDidUpdate(){
    clearTimeout( this.timeOutUpdade);
    this.handleTimeout();   
   }

   componentWillUnmount(){
    clearTimeout(this.timeOutUpdade);
   }

   handleTimeout = () => {

    const {posts,counter} = this.state;
    posts[0].title='Titulo mudou';

   // this.setState({posts});
    
    this.timeOutUpdade= setInterval( () => {
      this.setState({posts,counter:counter+1});
    },5000);

   }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
