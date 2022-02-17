import { IonCard, IonCardHeader, IonImg, IonHeader, IonTitle, IonCardContent } from "@ionic/react"
import UserListItem from "./UserListItem";
export default function PostCard({post, user}){
    console.log(user);
    return(
   
    <IonCard>
        <IonHeader>
           <UserListItem userData={user}/>
        </IonHeader>    
        <IonImg src={post.image}/>
        <IonCardHeader>
            <IonTitle>
             <h1>{post.title}</h1>
            </IonTitle>
        </IonCardHeader>
        <IonCardContent>
            <p>{post.body}</p>
        </IonCardContent>
    </IonCard>
   
    )
}