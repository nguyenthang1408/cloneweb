import React, { useState, useEffect } from "react";
import {
  WrapperReview,
  ReviewTitle,
  ReviewTitleH1,
  ReviewTitleSpan,
  ReviewContent,
  ReviewContentCart,
  DivCenter,
  DivImgSingle,
  DivBelowImgSingle,
  DivSpanSpeak,
  DivNameSingle,
  DivJobSingle,
} from "./review.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Review() {



  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const [colorFirst, setColorFirst] = useState("orange");

  const [colorSecond, setColorSecond] = useState("#aaa");

  const HandleFirst = () => {
    setColorFirst("orange");
    setColorSecond("#aaa");
  };

  const HandleSecond = () => {
    setColorFirst("#aaa");
    setColorSecond("orange");
  };
var a;
if(window.matchMedia("(max-width: 700px)"))
{
  a=3;
}
else{
  a=1;
}

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <WrapperReview>
      <DivCenter>
        <ReviewTitle>
          <ReviewTitleH1>KH??CH H??NG N??I G???</ReviewTitleH1>
          <ReviewTitleSpan>
            Nh???ng chia s??? th???c t??? c???a kh??ch h??ng sau khi s??? d???ng d???ch v??? c???a Bee
          </ReviewTitleSpan>
        </ReviewTitle>
        <ReviewContent>
          <Slider {...settings}>
            <ReviewContentCart>
              <DivImgSingle>
                <img src="src/assets/avt1.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    M??nh ???? ??i du l???ch nhi???u n??i c??ng ???? t???ng ??i tour ?????o, sau
                    khi s??? d???ng d???ch v??? tour ?????o c???a Bee m??nh th???y r???t h??i l??ng,
                    m??nh s??? gi???i thi???u cho b???n b??.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Duy H???i</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Travel blogger, H?? N???i</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt2.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    M??nh r???t y??u Ph?? Qu???c, c??? c?? d???p l?? m??nh ??i. Tr???i nghi???m l???n
                    ?????u v???i d???ch v??? c???a Bee r???t h??i l??ng, m??nh s??? ti???p t???c d??ng
                    d???ch v??? c???a Bee ??? nh???ng l???n sau.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>L????ng B???ng Quang</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca nh???c s??, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt3.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Tour th???t s??? r???t tuy???t v???i, l???n ?????u m??nh ???????c th???y san h?? t???
                    nhi??n nh?? th??? n??y, c??c anh h?????ng d???n vi??n r???t nhi???t t??nh,
                    m??nh r???t h??i l??ng.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Tu??? Ph????ng</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca s??, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt4.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Tr???i nghi???m th???t th?? v??? khi tham gia tour 4 ?????o c???a Bee, l???n
                    ?????u m??nh ???????c ng???m san h?? tr???c ti???p nh?? v???y, r???t vui ???.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Hi???n H???</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca s??, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt5.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    C?? nh??n anh th???y tour ?????o c???a Bee r???t tuy???t v???i, gi?? tour
                    h???p l??, l???ch tr??nh ?????y ?????. Anh v?? gia ????nh ???? kh??ng sai l???m
                    khi l???a ch???n Bee.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Anh ?????c</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Travel blogger, H?? N???iDoanh nh??n, H?? N???i</h4>
              </DivJobSingle>
            </ReviewContentCart>
            <ReviewContentCart>
              {" "}
              <DivImgSingle>
                <img src="src/assets/avt6.jpg" />
              </DivImgSingle>
              <DivBelowImgSingle>
                <FontAwesomeIcon icon={faQuoteLeft} opacity="0.4" />
              </DivBelowImgSingle>
              <DivSpanSpeak>
                <div>
                  <span>
                    Sau khi s??? d???ng d???ch v??? tour 4 ?????o c???a Bee th?? m??nh th???y r???t
                    h??i l??ng v??? ch???t l?????ng c??ng nh?? s??? nhi???t t??nh c???a c??c h?????ng
                    d???n vi??n.
                  </span>
                </div>
              </DivSpanSpeak>
              <DivNameSingle>
                <h1>Lynk Lee</h1>
              </DivNameSingle>
              <DivJobSingle>
                <h4>Ca s??, TP.HCM</h4>
              </DivJobSingle>
            </ReviewContentCart>
          </Slider>
        </ReviewContent>

        {/* Row 2 */}

        {/* <ButtonDiv>
          <Button color={colorFirst} onClick={HandleFirst}></Button>&nbsp;
          <Button color={colorSecond} onClick={HandleSecond}></Button>&nbsp;
        </ButtonDiv> */}
      </DivCenter>
    </WrapperReview>
  );
}
