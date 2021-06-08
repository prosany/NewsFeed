import React, { useContext } from 'react';
import { ChangeView } from '../../App';
import NoImg from '../../images/noimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({ item, handleDeleteItems, handleViewCard }) => {
  const [changeViewStyle] = useContext(ChangeView);
  const { id, title, summary, image, published } = item;
  
  return (
    <div className="item">
      <div className="cardBody" onClick={() => handleViewCard(id)}>
        <div className="img">
          <img src={image ? image : NoImg} alt="img" />
        </div>
        <div className="itemContent">
          <h3>{title}</h3>
          {changeViewStyle === 'grid' ? (
            <p>{summary?.substr(0, 60)}</p>
          ) : (
            <p>{summary?.substr(0, 100)}</p>
          )}
          <span>{published}</span>
        </div>
      </div>
      <div className="delete" onClick={() => handleDeleteItems(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default CardItem;
