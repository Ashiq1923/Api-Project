import React, { useEffect, useState } from 'react';
import apiInstance from '../configg/api/apiaxiosconfig';
import Loader from '../Component/Loader';

function Photos() {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [postsToShow, setPostsToShow] = useState(10); // Initial number of photos to show

  const getData = () => {
    setLoading(true); // Start loading
    apiInstance.get("photos")
      .then((res) => {
        setPhotoList([...res.data]);
        setLoading(false); // Stop loading once data is received
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Stop loading in case of an error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Handle "Show More" functionality
  const handleShowMore = () => {
    setPostsToShow(postsToShow + 10); // Increase the number of photos to show by 10
  };

  return (
    <div>
      {loading ? (
        <Loader /> // Display Loader while data is loading
      ) : (
        <div>
          {/* Header */}
          <div className="bg-blue-600 text-white p-4">
            <h1 className="text-3xl font-bold">Photo Gallery</h1>
          </div>

          {/* Table for Photos */}
          {photoList.length > 0 ? (
            <div className="mt-6">
              <table className="w-full table-auto border-separate border-spacing-2">
                <thead>
                  <tr className="bg-gray-500">
                    <th className="p-2 border-2">No</th>
                    <th className="p-2 border-2">Title</th>
                    <th className="p-2 border-2">Thumbnail</th>
                    <th className="p-2 border-2">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {photoList.slice(0, postsToShow).map((photo) => (
                    <tr key={photo.id} className="border-2 text-black">
                      <td className="flex justify-center mt-6">{photo.id}</td>
                      <td className="p-2 border-2">{photo.title}</td>
                      <td className="p-2 border-2">
                        <img src={photo.thumbnailUrl} alt={photo.title} className="w-16 h-16" />
                      </td>
                      <td className="p-2 border-2">
                        <a href={photo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          View Full Image
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Show More Button */}
              {photoList.length > postsToShow && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleShowMore}
                    className="bg-blue-500  text-white p-4 mb-[10px] rounded"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p>No Photos Available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Photos;
