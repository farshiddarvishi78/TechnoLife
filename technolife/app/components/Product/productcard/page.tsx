const ProductCard = () => {
    return (
        <div className="border botder-t border-gray-300 rounded-2xl w-[250px] h-[400px] flex flex-col">

            <a dir="rtl" className="p-5" href="">
                <img src="/Images/products/thumbnail/small_product-1.png" alt="" />
                <span className="mt-5 fontvazir text-sm overflow-y-hidden">هدست گیمینگ تسکو مدل 5126</span>
            </a>

            <div className="flex flex-row  w-full h-[20%]">
                <div dir="rtl" className=" w-[60%] h-full flex flex-col items-center ">
                    <div className=" h-full flex flex-row gap-2 items-center justify-center">
                        <span className="fontvazir text-[13px] text-black overflow-y-hidden">55.880.000</span>
                        <span className="fontvazir text-[8px] text-gray-500 overflow-y-hidden">تومان</span>
                    </div>
                    <div className=" h-full flex flex-row gap-1 items-center justify-center">
                        <p  className="fontvazir text-[13px] pl-7 text-gray-500 overflow-y-hidden"><del>68.550.000</del></p>
                    </div>
                </div>
                <div className="bg-amber-350 w-[40%] p-1 flex flex-row justify-end h-fit">
                    <span className="text-[13px] bg-[#A2191F] text-amber-50 rounded-b-sm p-1 ">21%</span>
                </div>
            </div>

            <hr className=" w-[80%] text-sm mx-auto border-0 border-t border-gray-300" />

        </div>
    )
}
export default ProductCard