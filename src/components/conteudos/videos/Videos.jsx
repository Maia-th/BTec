import React from 'react';
import './Videos.css';

export default function Videos() {
  return (
    <section className="sectionVideos">
        <h2>Assista aos Videos da BTec </h2>
        <article className='videosYouTube'>
            <div className='videoDiv'>
            <iframe src="https://www.youtube.com/embed/ZEdDLwAqkeE?si=1quTaGO86Yu-elja" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='videoDiv'>
            <iframe src="https://www.youtube.com/embed/pOOMUe13aFI?si=GLbFSRHKxT6KYKRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='videoDiv'>
            <iframe src="https://www.youtube.com/embed/6VDWl3boFCY?si=6waliKSqUpSQV-TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='videoDiv'>
            <iframe src="https://www.youtube.com/embed/Q3CvzpgrVAM?si=xfv8Yx3gFcXdCqr7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='videoDiv'>
            <iframe src="https://www.youtube.com/embed/_wVJJlimHTU?si=vwgSs73PAN-f57ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </article>
    </section>
              
      
    
  );
}