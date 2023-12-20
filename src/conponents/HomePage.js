

import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [backdropImage, setBackdropImage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQzZmE2ZThjNjI2ODE3YjE4YjUxNGEwYWQ1N2IxMSIsInN1YiI6IjY1N2FhNGI3N2VjZDI4MDBlNDZkMTJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UF8R-tvNbpupNLA3KShYztTe1tcVcyeVcS1mpqM0BdU',
      },
    };

    const fetchBackdropImage = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();
        const selectedMovie = data.results[counter % data.results.length];
        const imageUrl = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;
        setBackdropImage(imageUrl);
        setCounter((prevCounter) => prevCounter + 1);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch an initial backdrop image on component mount
    //   fetchBackdropImage();

    // Fetch a new backdrop image every 10 seconds
    const intervalId = setInterval(fetchBackdropImage, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [counter]); // Run the effect whenever the counter changes


  return (
    <div className="w-full h-[690px] flex items-center justify-center" style={{ backgroundImage: `url(${backdropImage})`, backgroundSize: 'cover' }}>
      {/* Lớp overlay màu đen */}
      <div className="absolute left-0 w-full h-full bg-black opacity-50 top-[47px]"></div>

      <div className="w-full relative h-[700px] flex items-center justify-center">
        <div>
          <div className="text-center ">
            <div className="text-white text-[90px]">Welcome...</div>
            <div className="text-white text-[24px]">Your Favourites Movies, TV Shows and Discover...</div>
            <div className="w-full flex justify-center ">
              <div className="w-[800px] h-[60px] mt-[20px]">
                <input type="text" placeholder="Search movies or TV shows..." className="text-[21px] w-4/5 rounded-l-[25px] h-full pl-[20px] outline-none" />
                <button type="submit" className="w-1/5 h-full bg-gradient-to-r relative from-blue-800 to-blue-500 rounded-r-[25px] top-[-2px]">
                  <p className="text-[18px] text-white font-bold">Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}