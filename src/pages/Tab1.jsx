import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';


import { useState } from 'react';
import './Tab1.css';
import PostCard from '../components/PostCard';
import userService from '../service/userService';
import postService from '../service/postService';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  

     async function joinArray(){
     const postsT = await postService.GetPosts();
     const usersT = await userService.GetUser();


      const postsWithUser = postsT.map(post => {
        const user = usersT.find(user => user.id === post.uid);
        post = { ...post, user: user }; // combine objects with spread operator
        delete post.uid; // delete uid - it's inside post.user.id
        return post;
    });
    console.log(postsWithUser);
      setPosts(postsWithUser);
      setUsers(usersT);
      //return postsWithUser;
     
   }

  useIonViewWillEnter(() => {
    //getPosts();
    //getUser();
    joinArray();
    
  }
  
  )
  

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        {posts.map(post => (
        <PostCard post={post} user={post.user} key={post.id}/>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
