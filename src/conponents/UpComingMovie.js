import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Film from './EXFilm';

const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    14: 'Fantasy',
    10751: 'Family',
    10402: 'Music',
    10749: 'Romance',
    27: 'Horror',
    53: 'Thriller',
    878: 'Science Fiction',
    9648: 'Mystery',
    80: 'Crime',
    18: 'Drama',
    99: 'Documentary',
    10759: 'Action & Adventure',
    10765: 'Science Fiction & Fantasy',
    10764: 'Reality',
    36:'History',
    37: 'Western',
    10752:'War',
};

const UpComingMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQzZmE2ZThjNjI2ODE3YjE4YjUxNGEwYWQ1N2IxMSIsInN1YiI6IjY1N2FhNGI3N2VjZDI4MDBlNDZkMTJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UF8R-tvNbpupNLA3KShYztTe1tcVcyeVcS1mpqM0BdU',
                    },
                };
                const response = await fetch(
                    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
                    options
                );
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='w-full h-[456px] flex justify-center mt-[40px]'>
            <div className='w-[1217px] h-[540px]'>
                <div className='flex items-center justify-between mb-[20px] text-[#01F328]'>
                    <p>Upcoming Movies</p>
                    <div className='switchingTabs w-[100px] h-[34px] bg-gradient-to-tr from-black to-indigo-600 rounded-3xl px-2 py-2'>
                        <div className='flex items-center h-[30px] relative'>
                            <span className='h-auto flex justify-center items-center w-full text-[14px] relative text-white mb-[10px]'>
                                Movies
                            </span>
                            <span className='h-[30px] w-[100px] rounded-[15px] absolute'></span>
                        </div>
                    </div>
                </div>
                <div className='carousel h-[405px] mb-[50px] '>
                    <Swiper slidesPerView={5} spaceBetween={30} className='mySwiper'>
                        {movies &&
                            movies.map((movie) => (
                                <SwiperSlide key={movie.id} className='h-[450px]'>
                                    <Film movie={movie} genreMap={genreMap} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default UpComingMovie;
