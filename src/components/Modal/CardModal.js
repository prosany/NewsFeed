import React from 'react';
import NoImg from '../../images/noimg.jpg';

const CardModal = ({ trigger, closeModal, modalData }) => {
  const { title, summary, image } = modalData;
  return (
    <>
      {trigger ? (
        <div className="cardModal">
          <div className="modalInner">
            <img src={image ? image : NoImg} alt="" />
            <h3>{title}</h3>
            <p>{summary && summary.substr(0, 350)}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardModal;
