import { IonItem, IonAvatar,IonImg, IonLabel } from "@ionic/react"


export default function UserListItem({userData}){
    console.log(userData);
    
    return(
    <IonItem button routerLink={`users/${userData.id}`} key={userData.id}>
    <IonAvatar slot="start">
      <IonImg src={userData.image} />
    </IonAvatar>
    <IonLabel>
      <h2>{userData.name}</h2>
      <p>{userData.title}</p>
    </IonLabel>
  </IonItem>
  );
}