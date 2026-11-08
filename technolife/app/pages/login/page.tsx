const Login = () => {


    return (
        <div>
            <div className="flex flex-col justify_center items-center pt-25">

                <div className="w-[180px] h-[70px]">
                    <img className="w-full h-full object-contain" src="/Images/Logos/static_logo_techno_new.svg" alt="" />
                </div>
                <div className="flex flex-row-reverse gap-5 mt-8 text-2xl fontnian">
                    <span> ورود </span>
                    <span> | </span>
                    <span> ثبت نام </span>
                </div>

                <div dir="rtl" className="mt-8 text-sm font-bold fontdubai">
                    <span>خوش اومدی :)</span>
                </div>


                <div className="relative w-[459px] mt-15">
                    
                    <input
                        type="text"
                        className="w-full h-[46px] border border-gray-300 rounded-xl px-4 pt-2 peer focus:outline-6 focus:outline-blue-100 focus:border focus:border-sky-500"
                        placeholder=""
                    />

                    
                    <span className="fontdubai absolute right-4 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:right-3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-black ">
                        شماره موبایل خود را وارد کنید
                    </span>
                </div>

                <div className="w-[459px] h-[46px] mt-15 mt-40">
                    <button className="w-full h-[46px] rounded-xl text-xl font-bold fontnian text-white bg-[#223C78]" type="button">ادامه </button>
                </div>

                <div dir="rtl" className="mt-4 text-sm font-medium">
                    <p className="fontnian [word-spacing:3px]">
                        ورود|ثبت نام شما به معنای پذیرش <a className="text-[#239dc5]" href="">قوانین و مقررات</a> و <a className="text-[#239dc5]" href="">حریم خصوصی کاربران</a> تکنولایف است.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Login