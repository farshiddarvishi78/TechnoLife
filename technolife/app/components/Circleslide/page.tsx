"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const categorise = [
  {
    title: "اعتبار بدون ضامن",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_sqTIyM_74046734-1030-49f0-85d3-231f227bc22b.webp",
  },
  {
    title: "تا 300 میلیون اعتبار",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_WW2v2J_632b651d-8862-4a24-b4c7-42c9dc9c1fc1.webp",
  },
  {
    title: "تا 300 میلیون وام برای همه",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_boemWF_2f0ba823-c895-41cd-bc47-e2da007a5375 (1).webp",
  },
  {
    title: "تا 300 میلیون وام",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_4O0XmH_3c46b989-1a5f-4476-8c52-b576346a677e.webp",
  },
  {
    title: "تا 400 میلیون اعتبار بانکی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_fUSRrI_3feae6b4-64a8-4d12-b4eb-78f3263eec71.webp",
  },
  {
    title: "شعبه دیجیتال بانک ملت",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_YFHBKM_b403b493-00c2-45d5-a839-2121e971e4d7.png",
  },
  {
    title: "طلای دیجیتال",
    image:
      "/Images/categoriesimg/banner_CircleCategories_72k9yG_35ba7390-e383-49c3-9e03-9b4ef848ab6c.webp",
  },
  {
    title: "پاور استیشن",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_MUgMHm_2bc422bb-2106-42c4-9ba3-a4eadd282bef.webp",
  },
  {
    title: "بخاری برقی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_BsWFjG_d186af97-1b72-451c-894b-7e83d5424560.webp",
  },
  {
    title: "دستگاه بخور سرد",
    image:
      "/Images/categoriesimg/banner_CircleCategories_nKcNg6_b925524f-f9df-4c07-8c9f-0562d2818c02.webp",
  },
  {
    title: "جدیدترین‌های شیائومی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_B2ukNG_b41df98f-67b2-40e9-bbe1-9da99c3d4f0e.webp",
  },
  {
    title: "مودم و روتر",
    image:
      "/Images/categoriesimg/banner_CircleCategories_LU2VLq_30213238-8a09-4101-ae64-52ccc8e0ca36.webp",
  },
  {
    title: "تلویزیون",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_vBptEt_0fea4fc8-60cc-42e5-9a94-7a187a5de13a.webp",
  },
  {
    title: "گوشی سامسونگ",
    image:
      "/Images/categoriesimg/banner_CircleCategories_sv3rTs_67ab937f-11b7-42bf-96b7-93d1a17ad86f.webp",
  },
  {
    title: "سشوار",
    image:
      "/Images/categoriesimg/banner_CircleCategories_pkOxpI_cfca3be9-4c10-4f96-8909-f729ef686997.webp",
  },
  {
    title: "پاوربانک",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_4X6CNX_606d3f78-31b3-4f70-8849-efcf100c80e3.webp",
  },
  {
    title: "ماشین لباسشویی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_sb7vhN_d23572e8-59f4-4802-9919-50b3e7f26e27.webp",
  },
  {
    title: "سکه پارسیان",
    image:
      "Images/Categoriesimg/banner_CircleCategories_iCZIwB_c53dd7c9-f4fb-4761-aeb9-f3c08e5c45ac.webp",
  },
  {
    title: "گوشی دکمه ای",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_3vHrZv_47a8b35c-520d-4aa6-89ab-f4a4b8809de7.webp",
  },
  {
    title: "گوشی آیفون",
    image:
      "Images/Categoriesimg/banner_CircleCategories_2KyY4S_fc9eeff0-6be2-4136-8cf5-53551d39f16d.webp",
  },
  {
    title: "جاروشارژی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_ohgkrr_e6434fd4-6246-4ee9-bf77-3e5a3dfc3d85.png",
  },
  {
    title: "لوازم آشپزخانه",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_bPzZfw_5ead727d-1bc3-4dfd-90f2-de516d14d2f9.webp",
  },
  {
    title: "باندل دیجیتال",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_oMoj1q_6b3fee67-e8b8-4409-947a-b340e821d2ce.webp",
  },
  {
    title: "انشگتر طلا",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_UOwSIP_113c58f9-640d-42c5-824b-6736817ad3c5.webp",
  },
  {
    title: "لپ تاپ",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_zaQZ8m_b20f7d10-01a9-4f16-a352-f95a445846f2.webp",
  },
  {
    title: "طلاآبشده",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_IWiUx8_5bb63f0b-b077-44eb-8bd3-518e297a2cd7.png",
  },
  {
    title: "هدفون و هندزفری",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_w3uYoT_23292e46-9f53-47f9-ac9e-e238b7ec7082.webp",
  },
  {
    title: "جاروبرقی",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_UK9JSF_03da37c8-e9f9-43c6-813b-9230a0692a4f.webp",
  },
  {
    title: "قاب و گلس",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_8cOxoV_ef808221-e944-479d-bb18-a731c5efe458.webp",
  },
  {
    title: "مینی واش",
    image:
      "/Images/Categoriesimg/banner_CircleCategories_UQ6aKv_728fb6cc-6e43-433b-968d-693b9d88ca19.webp",
  },
];

const Circleslide = () => {
  return (
    <div className=" h-[300px] bg-white w-full ">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        spaceBetween={35}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="categorySwiper"
        dir="rtl"
      >
        {categorise.map((item, index) => (
          <SwiperSlide key={index} className="!w-[180px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[140px] h-[140px] rounded-full border-2 border-sky-500 flex items-center justify-center p-2 mt-[60px]">
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <span className="text-sm text-[#334c81] text-center fontdubai">
                {item.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Circleslide;
