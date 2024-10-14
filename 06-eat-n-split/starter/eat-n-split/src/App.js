import logo from './logo.svg';
import './App.css';

import { Friends } from './components/Friends';
import { AddFriend } from './components/AddFriend';
import { SplitBill } from './components/SplitBill';
import { useState } from 'react';

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

  function handleUpdateBalance(newBalance, friendId) {
    setFriendList(() => friendList.map((friend) => {
      friend.balance = friend.id === friendId ? newBalance : friend.balance
      return friend
    }))


  }

  return <>
    <div className='app'>
      <div className='sidebar'>
        <Friends
          friendList={friendList}
          handleSetSplitFormOpen={setSplitFormOpen}
          handleSetCurrentSplitFriend={setCurrentSplitFriend}
          currentSplitFriend={currentSplitFriend}
          handleSetAddFriendFormOpen={setAddFriendFormOpen}
        />
        {
          addFriendFormOpen ?
            <AddFriend onAddFriend={addFriendHandler} setAddFriendFormOpen={setAddFriendFormOpen} /> :
            <button className='button' onClick={() => setAddFriendFormOpen(true)}>Add Friend</button>
        }
      </div>
      {
        splitFormOpen &&
        <SplitBill onClickCloseForm={setSplitFormOpen}
          selectedFriend={friendList.filter((friend) => friend.id === currentSplitFriend)[0]}
          handleUpdateBalance={handleUpdateBalance}
          handleSetSplitFormOpen={setSplitFormOpen}
          handleSetCurrentSplitFriend={setCurrentSplitFriend}

        />}

    </div >
  </>
}

export default App;
