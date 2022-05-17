import React from 'react';
import SwiperCore, { A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SpeakerSlider.css';
import devfolio from "../graphics/devfolio.png"
import filecoin from "../graphics/filecoin.png"
import polygon from "../graphics/polygon.png"
import tezos from "../graphics/tezos.png"
import celo from "../graphics/celo.png"
import interviewcake from "../graphics/interviewcake.png"
import icons8 from "../graphics/Icons8.png"
import clerky from "../graphics/clerky.jpg"

// Import Swiper styles
import 'swiper/swiper.scss';
import './SpeakerSlider.css';


// install Swiper components
SwiperCore.use([A11y, Autoplay]);

function SpeakerSlider() {

    // //for changing CSS of active slides in slider
    // const [first, changeFirst] = useState(1);
    // const [last, changeLast] = useState(1);
    //
    // const changeCSS = e => {
    //     changeFirst(e.realIndex);
    //     changeLast((e.activeIndex-1)%16);
    // }
    //
    // const checkBetween = index => {
    //     if (index > first && index < last) return true;
    //     if (first > last) {
    //         if (index > first) return true;
    //         if (index < first && index < last) return true;
    //     }
    //     return false;
    // }

    return (
        <>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            //onSlideChange={changeCSS}

            >

                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://devfolio.co' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                    <img className={"speaker-image-1"} src={devfolio} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://polygon.technology/' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-1"} src={polygon} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}

                            </div>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            //onSlideChange={changeCSS}

            >

                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://tezos.com' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={tezos} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://celo.org' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={celo} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-2"}>
                        <a href='https://filecoin.io' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={filecoin} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                updateOnWindowResize
                autoplay={{ delay: 3000 }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1260: { slidesPerView: 5 }, 1600: { slidesPerView: 6 } }}
            >
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://www.interviewcake.com/' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={interviewcake} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://www.clerky.com/' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={clerky} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"speaker-container-1"}>
                        <a href='https://icons8.com/' style={{"cursor":"pointer"}}>
                            <div className={"speaker-imagebox-main"}>
                                <img className={"speaker-image-2"} src={icons8} alt="" />
                            </div>
                            <div className={"speaker-textbox"}>
                                {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SpeakerSlider;
