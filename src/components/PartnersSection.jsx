import "./PartnersSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import agrobank from "../partners/agrobank.svg";
import fao from "../partners/fao.png";
import markaziybank from "../partners/markaziybank.png";
import oliytalim from "../partners/oliy-talim.png";
import qishloq from "../partners/qishloq1.png";
import rau from "../partners/rau1.png";
import turonbank from "../partners/turon-bank.png";
import worldbank from "../partners/world-bank 1.png";

export default function PartnersSection() {
     const partners = [agrobank, fao, markaziybank, oliytalim, qishloq, rau, turonbank, worldbank];

     return (
          <section className="partners-section">
               <div className="partners-container">
                    <h2 className="partners-title">
                         Our <span className="text-teal">Partners</span>
                    </h2>

                    <div className="partners-slider-wrapper">
                         <Swiper
                              modules={[Autoplay]}
                              spaceBetween={30}
                              slidesPerView={2}
                              breakpoints={{
                                   560: { slidesPerView: 3 },
                                   760: { slidesPerView: 4 },
                                   1024: { slidesPerView: 5 },
                              }}
                              loop={true}
                              speed={5000} // makes it smooth and continuous
                              autoplay={{
                                   delay: 0,
                                   disableOnInteraction: false,
                                   pauseOnMouseEnter: false,
                              }}
                              allowTouchMove={false}
                              className="partners-swiper"
                         >
                              {partners.map((item, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="partner-card">
                                             <img
                                                  src={item}
                                                  alt={`Partner ${index + 1}`}
                                                  style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }}
                                             />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </section>
     );
}
