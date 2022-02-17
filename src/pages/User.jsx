import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
   
    
    useIonViewWillEnter,
    useIonViewWillLeave,
    IonButton,
    IonBackButton,
  } from "@ionic/react";

  import React from "react";
  import { useParams } from "react-router";
  import PostCard from "../components/PostCard";
  
  import UserCard from "../components/UserCard";
  import postService from "../service/postService";
  import userService from "../service/userService";
  
  
  
  
  const User = () => {
    const params = useParams();
    const [user, setUser] = React.useState({});
    const [posts, setPosts] = React.useState([]);

    /*async function getUser(id){
        const response = await fetch(
          "https://raw.githubusercontent.com/cederdorff/web-mobile-app-dev/main/data/users.json"
          
        );
        const data = await response.json();
        
        

        const userData = data.find((user) => user.id === id);
        setUser(userData);
        console.log(userData);
        
    
      }*/
      async function JoinArrayU(id){
        const postsT = await postService.GetPosts();
     


      
        const post = postsT.filter(post => post.uid === id);
       // combine objects with spread operator
        delete post.uid; // delete uid - it's inside post.user.id
        //return post;
   
    console.log(post);
      setPosts(post);

      const userData = await userService.GetOneUser(id);
      console.log(userData);
      setUser(userData);
      //return postsWithUser;
     
   }
    
    useIonViewWillEnter(()=>{
        console.log(params);
        const id = parseInt(params.id);
        //getUser(id);
        
        
        console.log(user);
        JoinArrayU(id);
    })

    useIonViewWillLeave(()=>{
      setUser([]);
      
    })

    
    
   
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
              <IonButton slot="start">
                  <IonBackButton text="Users" defaultHref="/posts"></IonBackButton>
              </IonButton>
            <IonTitle>User List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>User </h2>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Detail</IonTitle>
            </IonToolbar>
          </IonHeader>
          <UserCard user={user} />
          {posts.map(post => (
          <PostCard post={post} user={user} key={post.id}/>
          ))}
        </IonContent>
      </IonPage>
    );
  };
  
  export default User;