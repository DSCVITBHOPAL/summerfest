import React from 'react';
import SwiperCore, { A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SpeakerSlider.css';


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
        <Swiper
            updateOnWindowResize
            autoplay={{delay: 3000}}
            speed={1000}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{768: {slidesPerView: 3}, 1024: {slidesPerView: 4}, 1260: {slidesPerView: 5}, 1600: {slidesPerView: 6}}}
            //onSlideChange={changeCSS}
            
        >
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IeR5LKDXITI-gIJHD1Djb1CwLa9GYEdnCg&usqp=CAU" alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        {/* <h1 className={"speaker-name"}>Brian Li</h1> */}
                        <p className={"speaker-title"}>Coming soon</p>
                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker1} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Sandra Bermond</h1>
                        <p className={"speaker-title"}>Program Manager, Duke Innovation Co-Lab</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={tom} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Tom Rose</h1>
                        <p className={"speaker-title"}>Founder and Former CEO, Testive</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker2} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>David Hoang</h1>
                        <p className={"speaker-title"}>Director of Design, Webflow</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker3} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Alex Balfanz</h1>
                        <p className={"speaker-title"}>Co-Creator, Jailbreak</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker4} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Jeff Maggioncalda</h1>
                        <p className={"speaker-title"}>CEO, Coursera</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker5} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Kelly Garvy</h1>
                        <p className={"speaker-title"}>Founder, Upstate</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker6} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Scott Cadora</h1>
                        <p className={"speaker-title"}>Founder and CEO, Medicare Pathfinder</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker8} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Jenn Byrne</h1>
                        <p className={"speaker-title"}>Co-Founder and President, Quesnay Inc.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker9} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Danai Adkisson</h1>
                        <p className={"speaker-title"}>Web Developer, Duke University</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker10} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Ali Sarafzadeh</h1>
                        <p className={"speaker-title"}>Co-Founder and CPO, Saasable</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker11} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Archana Ahlawat</h1>
                        <p className={"speaker-title"}>Founding Engineer, Color of Change</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker12} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Hugh Thomas</h1>
                        <p className={"speaker-title"}>Professor, Duke OIT</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker13} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>David Rein</h1>
                        <p className={"speaker-title"}>Research Engineering, Secant AI</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker14} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Rahul Sengottuvelu</h1>
                        <p className={"speaker-title"}>Co-Founder and CTO, Cohere (YC S20)</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"speaker-container"}>
                    <div className={"speaker-imagebox"}>
                        <img className={"speaker-image"} src={speaker15} alt="" />
                    </div>
                    <div className={"speaker-textbox"}>
                        <h1 className={"speaker-name"}>Laura Kogler</h1>
                        <p className={"speaker-title"}>Engineering Director, Code for America</p>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
    )
}

export default SpeakerSlider;