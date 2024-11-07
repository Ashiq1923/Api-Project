
const Comment = ({ user, handleLikeClick, handleReplyClick, likedComments, replyVisibility, reply, handleReplyChange, handleReplySubmit }) => {
  return (
    <div key={user.id} className="border-b p-4 flex flex-col space-y-2">
      {/* Comment Box */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
          {/* User Image Placeholder */}
          <span className="text-white text-lg font-semibold">{user.name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <div className="text-black font-bold">{user.name}</div>
          <div className="text-sm text-gray-600">{user.email}</div>
          {/* Display comment body */}
          <div className="mt-2 text-black">{user.body}</div>
        </div>
      </div>

      {/* Underline */}
      <div className="border-t mt-2"></div>

      {/* Icons */}
      <div className="flex items-center space-x-4 mt-2">
        <div
          className={`cursor-pointer ${likedComments[user.id] ? 'text-blue-500' : 'text-gray-600'}`}
          onClick={() => handleLikeClick(user.id)} // Handle like toggle
        >
          <i className="fa-solid fa-thumbs-up"></i>
        </div>
        <div className="cursor-pointer text-gray-600">
          <i className="fa-solid fa-share"></i>
        </div>
        <div
          className="cursor-pointer text-blue-500"
          onClick={() => handleReplyClick(user.id)} // Handle reply toggle
        >
          <i className="fa-solid fa-reply"></i> Reply
        </div>
      </div>

      {/* Reply Input */}
      {replyVisibility[user.id] && (
        <div className="mt-2 flex items-center">
          <input
            type="text"
            value={reply[user.id] || ""}
            onChange={(e) => handleReplyChange(user.id, e.target.value)}
            placeholder="Reply to comment"
            className="text-black p-2 border rounded mr-2 w-full"
          />
          <button
            onClick={() => handleReplySubmit(user.id)}
            className="text-green-500"
          >
            {reply[user.id] ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-arrow-right"></i>
            )}
          </button>
        </div>
      )}

      {/* Display reply if submitted */}
      {reply[user.id] && !replyVisibility[user.id] && (
        <div className="mt-2 text-gray-600 italic">
          <div>Reply: {reply[user.id]}</div>
        </div>
      )}
    </div>
  );
};

export default Comment;
