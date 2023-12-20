import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Film = ({ movie, genreMap }) => {
    if (!movie) {
        return null;
    }

    const value = movie.vote_average;

    return (
        <div className="caroselfItem w-[405px]">
            <div className="posterBlock relative w-[full]">
                <div className='w-full flex justify-center'>
                    <span className="text-transparent w-[216px] h-[324px] rounded-[12px] " style={{ color: "transparent", display: "inline-block" }}>
                        <img className='rounded-[12px]' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                    </span>
                </div>

                <div className='relative w-[50px] h-[50px]  bg-white  top-[-30px] left-[100px] rounded-full p-[2px] flex items-center justify-center' >
                    <CircularProgressbar styles={{ text: { fontSize: '35px' } }} value={value} maxValue={10} text={`${value.toFixed(1)}`} />
                </div>

                <div className='w-[145px] h-[40px] flex flex-wrap justify-end relative bottom-[130px] left-[160px]'>
                    <ul className='flex flex-wrap-reverse justify-end'>
                        {(movie.genre_ids || []).slice(0, 5).map((genreId) => (
                            <li key={genreId} className='cursor-pointer hover:bg-black h-[20px] w-auto text-[12px] bg-[#4b4bf7] rounded-[5px] text-white p-[2px] m-[2px] flex justify-center items-center'>
                                {genreMap[genreId]}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='textBlock relative flex flex-col text-center w-[216px] top-[-70px] left-[100px]'>
                    <span className='text-[20px] text-white truncate'>{movie.title}</span>
                    <span className='text-[14px] text-[#7D7D7D]'>{movie.release_date}</span>
                </div>
            </div>
        </div>
    );
};

export default Film;
