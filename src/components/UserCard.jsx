import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react"
export default function UserCard({user}){
    return(
<IonCard>
          <IonImg src={user.image}></IonImg>
          <IonCardHeader>
              <IonCardSubtitle><p>{user.title}</p></IonCardSubtitle>
              <IonCardTitle><h2>{user.name}</h2></IonCardTitle>
          
          
          </IonCardHeader>
          </IonCard>
          )
          }
