import photo13 from './photo13.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export default function(){
    return(
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable:true}}
      scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
>
        <SwiperSlide>
        <div className="page10">

        <div className="page4A">
            <h2>Customer Reviews</h2>
            <p>We are Travel Agent</p>
        </div>
        <div className="page10B">
        <p>Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler. Although travel was once an uncertain and hazardous event, it is now an easily planned</p>          
        </div>

        <div className="page10C">
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
        </div>
        <div className="page10D">
            <div className="page10Dleft">
                <img src={photo13}/>
            </div>
            <div className="page10dright">
                <h2>John Smith</h2>
                <p>Solo Traveller</p>
            </div>
        </div>
        
       </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="page10">

        <div className="page4A">
            <h2>Hello Gyss</h2>
            <p>We are Travel Agent</p>
        </div>
        <div className="page10B">
        <p>Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler. Although travel was once an uncertain and hazardous event, it is now an easily planned</p>          
        </div>

        <div className="page10C">
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
        </div>
        <div className="page10D">
            <div className="page10Dleft">
                <img src={photo13}/>
            </div>
            <div className="page10dright">
                <h2>Michal Smith</h2>
                <p>Traveller</p>
            </div>
        </div>
        
       </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="page10">

        <div className="page4A">
            <h2>Customer Reviews</h2>
            <p>We are Travel Agent</p>
        </div>
        <div className="page10B">
        <p>Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler. Although travel was once an uncertain and hazardous event, it is now an easily planned</p>          
        </div>

        <div className="page10C">
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
        </div>
        <div className="page10D">
            <div className="page10Dleft">
                <img src={photo13}/>
            </div>
            <div className="page10dright">
                <h2>Jacob Mathon</h2>
                <p>Solo Traveller</p>
            </div>
        </div>
        
       </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="page10">

        <div className="page4A">
            <h2>Customer Reviews</h2>
            <p>We are Travel Agent</p>
        </div>
        <div className="page10B">
        <p>Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler. Although travel was once an uncertain and hazardous event, it is now an easily planned</p>          
        </div>

        <div className="page10C">
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
        </div>
        <div className="page10D">
            <div className="page10Dleft">
                <img src={photo13}/>
            </div>
            <div className="page10dright">
                <h2>Keyl John</h2>
                <p>Solo Traveller</p>
            </div>
        </div>
        
       </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="page10">

        <div className="page4A">
            <h2>Customer Reviews</h2>
            <p>We are Travel Agent</p>
        </div>
        <div className="page10B">
        <p>Today, tourism is a big factor in the economic prosperity of many countries. The modern travel industry is organized to cater to every need and desire of the individual traveler. Although travel was once an uncertain and hazardous event, it is now an easily planned</p>          
        </div>

        <div className="page10C">
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
        </div>
        <div className="page10D">
            <div className="page10Dleft">
                <img src={photo13}/>
            </div>
            <div className="page10dright">
                <h2>John Smith</h2>
                <p>Solo Traveller</p>
            </div>
        </div>
        
       </div>
       </SwiperSlide>
       </Swiper>
    );
}