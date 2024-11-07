import React from 'react';
import Comment from './Comment';

const CommentList = ({ userList, likedComments, replyVisibility, reply, handleLikeClick, handleReplyClick, handleReplyChange, handleReplySubmit }) => {
  return (
    <div className="space-y-4">
      {userList.map((user) => (
        <Comment
          key={user.id}
          user={user}
          likedComments={likedComments}
          replyVisibility={replyVisibility}
          reply={reply}
          handleLikeClick={handleLikeClick}
          handleReplyClick={handleReplyClick}
          handleReplyChange={handleReplyChange}
          handleReplySubmit={handleReplySubmit}
        />
      ))}
    </div>
  );
};

export default CommentList;
