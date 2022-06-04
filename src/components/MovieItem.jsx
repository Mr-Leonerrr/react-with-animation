/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendar, faClipboardUser } from '@fortawesome/free-solid-svg-icons';

const MovieItem = ({ movie }) => {

    const {
        image,
        title,
        description,
        genres,
        rating,
        releaseDate,
        rated
    } = movie;
    const formattedGenres = genres?.join(', ');
    const backgroundImage = {
        backgroundImage: `url(${image})`
    };

    return (
        <>
            <div className="mt-6 flex items-center bg-gray-200 p-4 mb-4 w-3/4 animate__animated animate__jello rounded-md">
                <div className="movie-poster w-1/4">
                    <div className="bg-cover bg-center rounded-md h-72 w-48" style={backgroundImage}></div>
                </div>

                <div className="movie-details w-3/4">
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center">
                            <h2 className="text-xl font-semibold">{title}</h2>
                        </div>
                        <div className="flex items-center">
                            <p className="text-gray-600">{formattedGenres}</p>
                        </div>
                        <p className="mt-4 text-gray-600">{description}</p>

                        <div className="flex items-center mt-4">
                            {
                                Array.from({ length: 10 }, (_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <FontAwesomeIcon
                                            key={index}
                                            icon={faStar}
                                            className={`text-yellow-500 ${ratingValue <= rating ? 'text-yellow-500' : 'text-gray-500'}`}
                                        />
                                    );
                                })
                            }
                        </div>

                        <div className="flex items-center mt-4">
                            <FontAwesomeIcon icon={faClipboardUser} className="text-gray-600 mr-2" />
                            <p className="text-gray-600">{rated}</p>
                        </div>

                        <div className="flex items-center mt-4">
                            <FontAwesomeIcon icon={faCalendar} className="text-gray-600 mr-2" />
                            <p className="text-gray-600">{releaseDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieItem;