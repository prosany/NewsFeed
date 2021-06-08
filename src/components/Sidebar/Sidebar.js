import React, { useContext } from 'react';
import { ChangeView } from '../../App';
import './Sidebar.scss';
import Profile from './Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faListUl } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ handleOpenFeedback }) => {
  const [changeViewStyle, setChangeViewStyle] = useContext(ChangeView);
  const handleChangeList = () => {
    setChangeViewStyle('list');
  };
  const handleChangeGrid = () => {
    setChangeViewStyle('grid');
  };

  return (
    <div className="sidebarDiv">
      <Profile />
      <div className="toggle mt-3">
        <h3>View Toggle</h3>
        <div className="buttons d-flex">
          <button
            className="gridButton"
            style={{ backgroundColor: changeViewStyle === 'grid' && '#97eec8' }}
            onClick={handleChangeGrid}
          >
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button
            className="listButton"
            style={{ backgroundColor: changeViewStyle === 'list' && '#97eec8' }}
            onClick={handleChangeList}
          >
            <FontAwesomeIcon icon={faListUl} />
          </button>
        </div>
      </div>
      <div className="sendFeedback mt-3">
        <h3>Have A Feedback?</h3>
        <button onClick={handleOpenFeedback}>We're Listening</button>
      </div>
    </div>
  );
};

export default Sidebar;
