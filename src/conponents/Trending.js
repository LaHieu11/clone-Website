import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Day from './TrendingMovie/Day';
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

const Trending = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [trendingData, setTrendingData] = useState([]);
    const [weekData, setWeekData] = useState([]);
    const [monthData, setMonthData] = useState([]);

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
                    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
                    options
                );
                const data = await response.json();
                setTrendingData(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
                    'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
                    options
                );
                const data = await response.json();
                setWeekData(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
                    'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
                    options
                );
                const data = await response.json();
                setMonthData(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const CustomTabList = ({ children }) => (
        <TabList className='border-none relative left-[1015px] w-[200px] rounded-[20px] bg-white p-[0px] flex justify-center items-center'>
            {React.Children.map(children, (child, index) => (
                React.cloneElement(child, {
                    style: {
                        textDecoration: 'none',
                        height: '100%',
                        border: 'none',
                        width: '100px',
                        bottom: '0',
                        borderRadius: '20px',
                        textAlign: 'center',
                        background: index === selectedTabIndex ? 'linear-gradient(98.37deg, #001df8 .99%, #06c5ff 100%)' : 'initial',
                        color: index === selectedTabIndex ? 'white' : 'black',
                    },
                    onClick: () => setSelectedTabIndex(index),
                })
            ))}
        </TabList>
    );
    return (
        <div className='w-full h-[456px] flex justify-center mt-[40px]'>
            <div className='w-[1217px] h-[540px]'>
                <p className="text-[16px] font-normal text-[#02ff28] relative top-[25px]">Trending Movie's & TV Shows</p>
                <Tabs selectedIndex={selectedTabIndex} onSelect={index => setSelectedTabIndex(index)} >
                    <CustomTabList>
                        <Tab>Day</Tab>
                        <Tab>Week</Tab>
                        <Tab>Month</Tab>
                    </CustomTabList>

                    <TabPanel style={{marginTop:"20px"}}>
                        <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <div className='carousel h-[405px] mb-[50px] '>
                                    <Swiper slidesPerView={5} spaceBetween={30} className='mySwiper'>
                                        {trendingData && trendingData.map((movie) => (
                                            <SwiperSlide key={movie.id} className='h-[450px]'>
                                                <Day movie={movie} genreMap={genreMap} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel style={{marginTop:"20px"}}>
                        <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <div className='carousel h-[405px] mb-[50px] '>
                                    <Swiper slidesPerView={5} spaceBetween={30} className='mySwiper'>
                                        {weekData && weekData.map((movie) => (
                                            <SwiperSlide key={movie.id} className='h-[450px]'>
                                                <Day movie={movie} genreMap={genreMap} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel style={{marginTop:"20px"}}>

                        <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <div className='carousel h-[405px] mb-[50px] '>
                                    <Swiper slidesPerView={5} spaceBetween={30} className='mySwiper'>
                                        {monthData && monthData.map((movie) => (
                                            <SwiperSlide key={movie.id} className='h-[450px]'>
                                                <Day movie={movie} genreMap={genreMap} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Trending;