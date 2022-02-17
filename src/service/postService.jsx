import userService from '../service/userService';
class PostService{

  //const [users, setUsers] = useState([]);
  async GetPosts(){
     const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/web-mobile-app-dev/main/data/posts.json"
     );
     const data = await response.json();
     //setPosts(data);
     
     console.log(data);
     return data;
  }
  
}
const postService = new PostService();
export default postService;