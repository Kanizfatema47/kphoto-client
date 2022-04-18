// import React from 'react';
// import animal1 from '../../images/gallery/animal1.jpg'
// import animal2 from '../../images/gallery/animal2.jpg'
// import animal3 from '../../images/gallery/animal3.jpg'
// import animal4 from '../../images/gallery/animal4.jpg'
// import animal5 from '../../images/gallery/animal5.jpg'
// const GalleryAll = () => {
//     return (
//         <div className='all'>
//             <img src={animal1} alt="" />
//             <img src={animal2} alt="" />
//             <img src={animal3} alt="" />
//             <img src={animal4} alt="" />
//             <img src={animal5} alt="" />
//         </div>
//     );
// };

// export default GalleryAll;



import React from 'react';
import './GalleryAll.css'

const GalleryAll = ({ picture }) => {
    return (

        <div className='gallery-details '>
            <img src={picture.img} alt="" className='rounded' />

        </div>

    );
};

export default GalleryAll;