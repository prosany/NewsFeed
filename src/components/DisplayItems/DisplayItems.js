import React, { useContext, useState } from 'react';
import { ChangeView } from '../../App';
import CardItem from '../CardItem/CardItem';
import './DisplayItems.scss';

const DisplayItems = ({ loadData, handleViewCard, handleDeleteItems }) => {
  const [changeViewStyle] = useContext(ChangeView);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(34);

  let className;
  switch (changeViewStyle) {
    case 'list':
      className = 'list';
      break;
    case 'grid':
      className = 'grid';
      break;
    default:
      className = 'list';
      break;
  }

  const pages = [];
  for (let i = 1; i <= Math.ceil(loadData.length / itemPerPage); i++) {
    pages.push(i);
  }
  const handlePagination = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const pageNumber = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handlePagination}
        className={currentPage === number ? 'activePage' : null}
      >
        {number}
      </li>
    );
  });

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = loadData.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentItem);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="p-5">
      <div className={className}>
        {currentItem.map((data, idx) => (
          <CardItem
            key={idx}
            item={data}
            handleDeleteItems={handleDeleteItems}
            handleViewCard={handleViewCard}
          />
        ))}
      </div>
      <div className="itemPagination text-center mt-3">
        <ul>
          <li>
            <button
              onClick={handlePrev}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageNumber}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === pages.length ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayItems;
