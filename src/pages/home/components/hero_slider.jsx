import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import slide_1 from "../../../assets/images/slide_1.jpg";
import slide_2 from "../../../assets/images/slide_2.jpg";
import slide_3 from "../../../assets/images/slide_3.jpg";

const HeroSlider = () => {
  return (
    <>
      <section className="h-screen w-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          autoplay
          spaceBetween={0}
          slidesPerView={1}
          navigation
          effect="fade"
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="h-screen w-screen relative">
              <img
                src={slide_1}
                className="w-full h-full object-cover"
                alt="lambo avanterdor image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-white font-poppins">
                    <h1 className="text-5xl font-bold">
                      lamborghini aventador
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-screen w-screen relative">
              <img
                src={slide_2}
                className="w-full h-full object-cover"
                alt="lambo avanterdor image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-white font-poppins">
                    <h1 className="text-5xl font-bold">
                      lamborghini aventador
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-screen w-screen relative">
              <img
                src={slide_3}
                className="w-full h-full object-cover"
                alt="lambo avanterdor image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-white font-poppins">
                    <h1 className="text-5xl font-bold">
                      lamborghini aventador
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeroSlider;
