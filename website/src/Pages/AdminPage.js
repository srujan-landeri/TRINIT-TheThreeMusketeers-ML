import React, { useEffect } from 'react'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

import icon from "../assets/icon.png"


export function AdminPage() {

  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  function signout(){
    auth.signOut().then(() => {
      navigate('/login')
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
      async function isAdmin(email) {
        const db = getFirestore();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
    
        const querySnapshot = await getDocs(q);
        const userDocs = querySnapshot.docs.map(doc => {
            console.log(doc.data())
            return doc.data()
        });
        return userDocs.some(user => user.role === 'admin');
    }

    // if(auth.currentUser) {
    //   isAdmin(auth.currentUser.email).then(isAdmin => {
    //     if(!isAdmin) {
    //       navigate('/login')
    //     }
    //   }).then(() => setLoading(false))
    // }else{
    //   navigate('/login')
    // }
  })

  const [currentTab, setCurrentTab] = React.useState('Detected Damages');

  function changeTab(tab){
    setCurrentTab(tab);
  }

  return (
    <div className='admin'>
      <div className='admin-header'>
          
          <div className='logo-title'>
            <img src={icon} alt="icon" />
            <h1>PaveGuardian</h1>
          </div>

          <div className='nav'>
            <button className={currentTab === "Detected Damages"? "active" : ""} onClick={() => changeTab("Detected Damages")}>Detected Damages</button>
            <button className={currentTab === "Locations"? "active" : ""} onClick={() => changeTab("Locations")}>Locations</button>
            <button className={currentTab === "Statistics"? "active" : ""} onClick={() => changeTab("Statistics")}>Stats</button>
            <button onClick={signout}>Logout</button>
          </div>
      </div>
    </div>
  )
}

