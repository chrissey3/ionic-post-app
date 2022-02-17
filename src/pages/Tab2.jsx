import { IonContent, IonList, useIonViewWillEnter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UserListItem from '../components/UserListItem';
import { useState } from 'react';
import './Tab2.css';

const Tab2 = () => {
  const [users, setUsers] = useState([]);
  async function loadUsers(){
    
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/web-mobile-app-dev/main/data/users.json"
      
    );
    const data = await response.json();
    setUsers(data);
    console.log(data);
    

  }
  useIonViewWillEnter(() => {
  loadUsers();
  
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Users</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        {users.map(user=>(
        <UserListItem userData={user} key={user.id}/>
        ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
