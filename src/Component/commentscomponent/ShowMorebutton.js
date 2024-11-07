import React from 'react';

const ShowMoreButton = ({ showMoreComments, userList, visibleComments }) => {
  return (
    userList.length > visibleComments && (
      <div className="flex justify-center p-6">
        <button
          onClick={showMoreComments}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <i className="fa-solid fa-arrow-down mr-2"></i>
          Show More
        </button>
      </div>
    )
  );
};

export default ShowMoreButton;
