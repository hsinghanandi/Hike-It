import React from 'react';
import SavedHikeTitle from './SavedHikeTitle';
import SavedHikeRating from './SavedHikeRating';
import SavedHikeImage from './SavedHikeImage';

export default function SavedHikeCard({ imageRef, title, rating }) {
    return (
        <div className='savedHikeCard'>
            <SavedHikeImage imageRef={imageRef} title={title} />
            <div className='blogContent'>
            <SavedHikeTitle title={title} />
            <SavedHikeRating rating={rating} />
            </div>
        </div>
    );
}
