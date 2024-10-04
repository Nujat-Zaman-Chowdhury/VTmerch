const products = [
    {
        productName:'Army Green Active Short Sleeve',
        image:'/img/img (4).jpeg',
        price:'$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName:'Army Green Active Short Sleeve',
        image:'/img/img (6).jpeg',
        price:'$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName:'Army Green Active Short Sleeve',
        image:'/img/img (7).jpeg',
        price:'$ 34.95',
        currentPrice: '$ 34.95',
    },
    {
        productName:'Army Green Active Short Sleeve',
        image:'/img/img (10).jpeg',
        price:'$ 34.95',
        currentPrice: '$ 34.95',
    },
]

const ProductsSection = () => {
    return (
        <div className="container mx-auto py-[101px]">
            <h1 className="uppercase font-montserrat text-[50px] font-semibold text-[#060606] tracking-[0.5px] leading-[120%] mb-[48px]">Buy 1 get 1 Free <br /> 
            on <span className="text-stroke">best selling products</span></h1>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {
                    products.map(product=>(
                        <div key={product.productName} className="rounded-[12px] pb-6 px-4 pt-4 shadow-md flex flex-col font-inter w-72">
                            <img className="rounded-[8px] object-cover w-full" src={product.image} alt="product" />
                            <h3 className=" text-[16px] text-[#060606] mt-[29px] mb-4">{product.productName}</h3>
                            <h5 className="text-[20px] font-medium text-[#060606] flex gap-3">{product.price} <span className="text-[#9B9B9B] line-through">{product.currentPrice}</span></h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsSection;