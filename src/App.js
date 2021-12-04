import React, { useState } from 'react';
import Modal from "./components/Modal";
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
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus autem, et hic corporis sed numquam eos itaque corrupti neque optio adipisci vitae molestiae quaerat. Harum rerum fuga eos! Quae.</p>
        <a href="#">find out more...</a>
      </Modal>}
      <div>
        <button onClick={() => {setShowModal(true)}}>Show modal</button>
      </div>
    </div>
  );
}

export default App;
