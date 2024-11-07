import React, { useEffect, useState } from 'react';
import apiInstance from '../configg/api/apiaxiosconfig';
import Loader from '../Component/Loader';
import CommentList from '../Component/commentscomponent/CommentList';
import ShowMoreButton from '../Component/commentscomponent/ShowMorebutton';
function Comments() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [reply, setReply] = useState({}); // To manage individual replies
  const [likedComments, setLikedComments] = useState({}); // Track liked comments
  const [replyVisibility, setReplyVisibility] = useState({}); // Track reply input visibility
  const [visibleComments, setVisibleComments] = useState(20); // Track how many comments to show

  const getData = () => {
    setLoading(true); // Start loading
    apiInstance
      .get("comments")
      .then((res) => {
        setUserList([...res.data]);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Stop loading in case of error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleReplyChange = (id, value) => {
    setReply((prevReplies) => ({
      ...prevReplies,
      [id]: value,
    }));
  };

  const handleReplySubmit = (id) => {
    // Handle reply submission logic, like API call or UI update
    console.log(`Reply to comment ${id}: ${reply[id]}`);
    setReply((prevReplies) => ({
      ...prevReplies,
      [id]: "", // Clear reply input
    }));
  };

  const showMoreComments = () => {
    setVisibleComments((prev) => prev + 20); // Show 20 more comments
  };

  const handleLikeClick = (id) => {
    setLikedComments((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Toggle like state
    }));
  };

  const handleReplyClick = (id) => {
    setReplyVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id], // Toggle reply input visibility
    }));
  };

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while data is loading
      ) : (
        <div>
          {/* Table Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-4xl font-bold text-gray-800">User Comments</h1>
          </div>

          {/* Comments List */}
          {userList.length > 0 ? (
            <CommentList
              userList={userList.slice(0, visibleComments)}
              likedComments={likedComments}
              replyVisibility={replyVisibility}
              reply={reply}
              handleLikeClick={handleLikeClick}
              handleReplyClick={handleReplyClick}
              handleReplyChange={handleReplyChange}
              handleReplySubmit={handleReplySubmit}
            />
          ) : (
            <p>No Comments Available</p>
          )}

          {/* Show More Button */}
          <ShowMoreButton
            showMoreComments={showMoreComments}
            userList={userList}
            visibleComments={visibleComments}
          />
        </div>
      )}
    </div>
  );
}

export default Comments;
