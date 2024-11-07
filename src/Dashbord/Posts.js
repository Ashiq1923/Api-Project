import React, { useEffect, useState } from 'react';
import apiInstance from '../configg/api/apiaxiosconfig';
import Loader from '../Component/Loader';

function Posts() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [likedPosts, setLikedPosts] = useState({}); // Track liked posts
  const [comments, setComments] = useState({}); // Store comments for each post
  const [commentText, setCommentText] = useState({}); // Store comment text separately for each post
  const [postsToShow, setPostsToShow] = useState(20); // Number of posts to show by default

  const getData = () => {
    setLoading(true); // Set loading to true when data is being fetched
    apiInstance
      .get("posts")
      .then((res) => {
        setPostList([...res.data]);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Handle Like click action
  const handleLikeClick = (postId) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId], // Toggle like state
    }));
  };

  // Handle Comment input change for each post
  const handleCommentChange = (postId, e) => {
    setCommentText((prevCommentText) => ({
      ...prevCommentText,
      [postId]: e.target.value, // Update comment text for the specific post
    }));
  };

  // Handle Comment submit action for each post
  const handleCommentSubmit = (postId) => {
    if (commentText[postId]?.trim()) {
      setComments((prevComments) => {
        const newComments = { ...prevComments };
        if (!newComments[postId]) {
          newComments[postId] = [];
        }
        newComments[postId].push({ userName: 'User', text: commentText[postId] }); // Add new comment
        return newComments;
      });
      setCommentText((prevCommentText) => ({
        ...prevCommentText,
        [postId]: '', // Clear input after submit for the specific post
      }));
    }
  };

  // Show more posts when clicked
  const handleShowMore = () => {
    setPostsToShow(postsToShow + 20); // Increase the number of posts to show by 20
  };

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while data is loading
      ) : (
        <div>
          {/* Table Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-4xl font-bold text-gray-800">User Posts</h1>
          </div>

          {/* Posts */}
          {postList.length > 0 ? (
            <div className="space-y-4">
              {postList.slice(0, postsToShow).map((post) => ( // Show posts up to `postsToShow`
                <div key={post.id} className="border-b p-4 flex flex-col space-y-4">
                  {/* Post Header */}
                  <div className="font-bold text-black text-xl">{post.title}</div>
                  <div className="text-gray-600 text-sm">{post.body}</div>

                  {/* Like, Share, and Comment buttons */}
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => handleLikeClick(post.id)}
                      className={`text-lg ${likedPosts[post.id] ? 'text-blue-500' : 'text-gray-600'}`}
                    >
                      <i className={`fa-solid fa-thumbs-up`}></i> Like
                    </button>
                    <button className="text-lg text-gray-600">
                      <i className="fa-solid fa-share"></i> Share
                    </button>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-4">
                    <div className="text-black text-lg font-semibold">Comments</div>
                    <div className="text-black flex flex-col space-y-2 mt-2">
                      {comments[post.id] && comments[post.id].map((comment, index) => (
                        <div key={index} className="border-b py-2">
                          <span className="font-semibold">{comment.userName}: </span>
                          <span>{comment.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Comment Input */}
                    <div className="flex items-center mt-2">
                      <input
                        type="text"
                        value={commentText[post.id] || ''} // Bind each post's comment input separately
                        onChange={(e) => handleCommentChange(post.id, e)}
                        placeholder="Add a comment..."
                        className="p-2 border text-black rounded mr-2 w-full"
                      />
                      <button
                        onClick={() => handleCommentSubmit(post.id)}
                        className="text-green-500"
                      >
                        <i className="fa-solid fa-arrow-right"></i> Submit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Show More button */}
              {postList.length > postsToShow && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleShowMore}
                    className="bg-blue-500 text-white p-4 rounded"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p>No Posts Available</p> // Message if no data is available
          )}
        </div>
      )}
    </div>
  );
}

export default Posts;
