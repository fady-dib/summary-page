import React from "react";
import '../Reviews/reviews.css'

const Reviews: React.FC = () => {
    return (
        <div className="reviews">
            <p className="reviews-title">Reviews</p>
            <div className="review">
                <div className='info'>
                    <img className='seller-img' src="/review.png"></img>
                    <div>
                    <p className='nickname'>Keni-</p>
                    <p className="review-date">October 2021</p>
                    </div>
                </div>
                <div className="review-content">thanks</div>
            </div>
            <div className="review">
                <div className='info'>
                    <img className='seller-img' src="/review.png"></img>
                    <div>
                    <p className='nickname'>Keni-</p>
                    <p className="review-date">October 2021</p>
                    </div>
                </div>
                <div className="review-content">insane coach</div>
            </div>
            <div className="review">
                <div className='info'>
                    <img className='seller-img' src="/placeholder.png"></img>
                    <div>
                    <p className='nickname'>pranmar123</p>
                    <p className="review-date">June 2021</p>
                    </div>
                </div>
                <div className="review-content">Great coaching! Smoke reviewed my game and he gave me really good tips/tricks to watch for and notice! We worked on the laning phase and strategies! 10/10 would recommend for anyon... <span>+more</span></div>
            </div>
            <p className="showall">Show all 5 reviews <span><img className="showall-img" src="/showall.png"></img></span></p>
        </div>
    )
}

export default Reviews