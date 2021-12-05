import React, { useState } from 'react';
import Modal from "./components/Modal";
import NewEventForm from './components/NewEventForm';
import SongList from "./components/SongList";

function App() {

  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <SongList />
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use Code FREE10 at the checkout</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm />
      </Modal>}
      <div>
        <button onClick={() => {setShowModal(true)}}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
