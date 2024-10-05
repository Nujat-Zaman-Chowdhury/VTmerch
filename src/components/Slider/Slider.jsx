import { useRef } from 'react';

const products = [
    {
        productName: 'Army Green Active Short Sleeve',
        image: '/img/img (9).png',
        price: '$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName: 'Army Green Active Short Sleeve',
        image: '/img/img (10).png',
        price: '$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName: 'Army Green Active Short Sleeve',
        image: '/img/img (11).jpeg',
        price: '$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName: 'Army Green Active Short Sleeve',
        image: '/img/img (11).png',
        price: '$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName: 'Army Green Active Short Sleeve',
        image: '/img/img (11).jpeg',
        price: '$ 34.95',
        currentPrice: '$ 34.95',
    },
    
];

const Slider = () => {
    const sliderRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX; 
        scrollLeft = sliderRef.current.scrollLeft;
        sliderRef.current.classList.add('dragging');
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const x = e.pageX || e.touches[0].pageX; 
        const walk = (x - startX) * 1.5; 
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const dragStop = () => {
        isDragging = false;
        sliderRef.current.classList.remove('dragging');
    };

    return (
        <div
            ref={sliderRef}
            className="slider-container flex gap-6 overflow-x-scroll scrollbar-hide md:ml-[48px] lg:ml-[187px] lg:-mt-4 z-50"
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragStop}
            onMouseLeave={dragStop}
            onTouchStart={dragStart}
            onTouchMove={dragging}
            onTouchEnd={dragStop}
        >
            {
                products.map((product, index) => (
                    <div
                        key={index}
                        className="productCard rounded-[12px] pb-6 px-4 pt-4 flex-shrink-0 w-[333px] lg:w-[400px] font-inter"
                    >
                        <img
                            className="rounded-[8px] object-cover object-center w-full h-[333px] lg:h-[400px]"
                            src={product.image}
                            alt={product.productName}
                        />
                        <h3 className="text-[16px] text-white mt-[29px] mb-4 font-medium">{product.productName}</h3>
                        <h5 className="text-[20px] font-medium text-[#FFFFFFCC] flex gap-3">
                            {product.price} <span className="text-[#FFFFFFCC] line-through">{product.currentPrice}</span>
                        </h5>
                    </div>
                ))
            }
        </div>
    );
};

export default Slider;
