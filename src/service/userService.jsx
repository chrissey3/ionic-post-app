
  //const [users, setUsers] = useState([]);
  class UserService{
  async GetUser(){
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/web-mobile-app-dev/main/data/users.json"
      
    );
    const data = await response.json();
    
    

    
    //setUsers(data);
    console.log(data);
    return data;
    

  }

  async GetOneUser(id){
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/web-mobile-app-dev/main/data/users.json"
      
    );
    const data = await response.json();
    const userData = data.find((user) => user.id === id);
    

    
    //setUsers(data);
    console.log(userData);
    return userData;
    

  }
}
const userService = new UserService();
export default userService;
     