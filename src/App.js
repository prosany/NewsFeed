import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import DisplayItems from './components/DisplayItems/DisplayItems';
import Feedback from './components/Feedback/Feedback';
import CardModal from './components/Modal/CardModal';
import Sidebar from './components/Sidebar/Sidebar';
import './style/global.scss';

export const ChangeView = createContext();

const App = () => {
  const [changeViewStyle, setChangeViewStyle] = useState('list');
  const [loadData, setLoadData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleFeedback, setToggleFeedback] = useState(false);

  useEffect(() => {
    fetch('https://api.first.org/data/v1/news')
      .then((res) => res.json())
      .then((data) => {
        setLoadData(data.data);
      });
  }, [changeViewStyle]);

  const handleDeleteItems = (id) => {
    const filterItem = loadData.filter((data) => data.id !== id);
    setLoadData(filterItem);
  };

  const handleViewCard = (id) => {
    const findItem = loadData.find((data) => data.id === id);
    console.log(findItem);
    setToggleModal(true);
    setModalData(findItem);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  const handleCloseFeedback = () => {
    setToggleFeedback(false);
  };

  const handleOpenFeedback = () => {
    setToggleFeedback(true);
  };

  return (
    <ChangeView.Provider value={[changeViewStyle, setChangeViewStyle]}>
      <main>
        <CardModal
          trigger={toggleModal}
          closeModal={closeModal}
          modalData={modalData}
        />
        <Feedback
          trigger={toggleFeedback}
          handleCloseFeedback={handleCloseFeedback}
        />
        <div className="sidebar">
          <Sidebar handleOpenFeedback={handleOpenFeedback} />
        </div>
        <div className="content">
          <DisplayItems
            handleViewCard={handleViewCard}
            handleDeleteItems={handleDeleteItems}
            loadData={loadData}
          />
        </div>
      </main>
    </ChangeView.Provider>
  );
};

export default App;
