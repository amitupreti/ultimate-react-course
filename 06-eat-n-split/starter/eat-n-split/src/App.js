import logo from './logo.svg';
import './App.css';

import { Friends } from './components/Friends';
import { AddFriend } from './components/AddFriend';
import { SplitBill } from './components/SplitBill';
import { useState } from 'react';
import { Button } from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [currentSplitFriend, setCurrentSplitFriend] = useState(null);


  const [addFriendFormOpen, setAddFriendFormOpen] = useState(false);
  const [splitFormOpen, setSplitFormOpen] = useState(false);



  function addFriendHandler(friend) {
    setFriendList(() => {
      const newList = [...friendList, friend];
      return newList;
    })
    setAddFriendFormOpen(false)
  }

  function handleUpdateBalance(newBalance) {
    setFriendList(() => friendList.map((friend) => {
      friend.balance = friend.id === currentSplitFriend.id ? newBalance : friend.balance
      return friend
    }))

    setSplitFormOpen(false);
    setCurrentSplitFriend(null);

  }
  function handleSetCurrentSplitFriend(friend) {
    setSplitFormOpen(friend !== null)
    setCurrentSplitFriend(friend)
    setAddFriendFormOpen(false)
  }



  return <>
    <div className='app'>
      <div className='sidebar'>
        <Friends
          friendList={friendList}
          handleSetCurrentSplitFriend={handleSetCurrentSplitFriend}
          currentSplitFriend={currentSplitFriend}
        />
        {
          addFriendFormOpen &&
          <AddFriend onAddFriend={addFriendHandler} />
        }
        {
          <Button onClickHandler={() => setAddFriendFormOpen(() => !addFriendFormOpen)}>{addFriendFormOpen ? "Close" : "Add Friend"}</Button>
        }
      </div>
      {
        splitFormOpen &&
        <SplitBill onClickCloseForm={setSplitFormOpen}
          selectedFriend={currentSplitFriend}
          handleUpdateBalance={handleUpdateBalance}

        />}

    </div >
  </>
}

export default App;
