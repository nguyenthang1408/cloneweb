import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faDoorOpen,
  faUtensils,
  faDumbbell,
  faSwimmingPool,
  faBacon,
  faStore,
  faWifi,
  faSpa,
  faTv,
  faSmokingBan,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons";
import {
  Wrapper,
  HeaderTitleH2,
  DivHeaderTitleH2,
  DivImg,
  Img,
  DivCenter,
  DivImgChildren,
  Hr,
  Border,
  DivImgChildrenColumn,
  DivFooter,
  DivCenterFooter,
  DivFooterZoom,
  DivFooterZoomCenter,
  CartHotelZoom,
  DivTitleCenterZoom,
  DivButton,
  DivButtonPrice,
  Button,
} from "./bookTicket.styles";

export default function bookTicket() {
  library.add(faCreativeCommonsNc);

  const [img, setImg] = useState("src/assets/h-1-1.png");

  const ListImg = {
    img1: "src/assets/h-1-1.png",
    img2: "src/assets/h-1-2.png",
    img3: "src/assets/h-1-3.png",
    img4: "src/assets/h-1-4.png",
    img5: "src/assets/h-1-5.png",
    img6: "src/assets/h-1-6.png",
  };

  const [show1, setShow1] = useState(true);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const [show5, setShow5] = useState(false);

  const [show6, setShow6] = useState(false);

  const handleShowImg1 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img1);
  };

  const handleShowImg2 = () => {
    setShow2(true);
    setShow1(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img2);
  };

  const handleShowImg3 = () => {
    setShow3(true);
    setShow2(false);
    setShow1(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img3);
  };

  const handleShowImg4 = () => {
    setShow4(true);
    setShow2(false);
    setShow3(false);
    setShow1(false);
    setShow5(false);
    setShow6(false);
    setImg(ListImg.img4);
  };

  const handleShowImg5 = () => {
    setShow5(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow1(false);
    setShow6(false);
    setImg(ListImg.img5);
  };

  const handleShowImg6 = () => {
    setShow6(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow1(false);
    setImg(ListImg.img6);
  };

  return (
    <Wrapper>
      <DivHeaderTitleH2>
        <HeaderTitleH2>VINPEARL DISCOVERY COASTALLAND</HeaderTitleH2>
      </DivHeaderTitleH2>
      <DivImg>
        <img src={img} />
      </DivImg>
      <DivCenter>
        <Hr>
          <Border></Border>
        </Hr>
        <DivImgChildren>
          <DivImgChildrenColumn>
            <img
              src={ListImg.img1}
              width="100%"
              height="100%"
              style={show1 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg1}
            />
            <img
              src={ListImg.img2}
              width="100%"
              height="100%"
              style={show2 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg2}
            />
            <img
              src={ListImg.img3}
              width="100%"
              height="100%"
              style={show3 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg3}
            />
            <img
              src={ListImg.img4}
              width="100%"
              height="100%"
              style={show4 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg4}
            />
            <img
              src={ListImg.img5}
              width="100%"
              height="100%"
              style={show5 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg5}
            />
            <img
              src={ListImg.img6}
              width="100%"
              height="100%"
              style={show6 ? { opacity: 1 } : { opacity: 0.6 }}
              onClick={handleShowImg6}
            />
          </DivImgChildrenColumn>
        </DivImgChildren>
      </DivCenter>
      <DivFooter>
        <DivCenterFooter>
          <span>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            &emsp; B??i D??i, G??nh D???u, Ph?? Qu???c
          </span>
          <span>
            <FontAwesomeIcon icon={faDoorOpen} />
            &emsp; Nh???n ph??ng: 14:00
          </span>
          <span>
            <FontAwesomeIcon icon={faDoorOpen} />
            &emsp; Tr??? ph??ng: 12:00
          </span>

          <h2>M?? t???</h2>

          <span style={{ fontSize: "19px", lineHeight: 1.5 }}>
            N???i b???t v???i ki???n ??????tr??c ?????a Trung H???i, Vinpearl Discovery
            Coastalland Phu Quoc thi???t k??? t???ng ph??ng ngh??? trang nh??, sang tr???ng
            trong khu b??i bi???n G??nh D???u thu???c ?????o Ph?? Qu???c. Ph??ng ngh??? t???i ????y
            ???????c trang b??? k??t an to??n c?? nh??n, khu v???c gh??? ng???i v?? m??y s???y qu???n
            ??o. Ph??ng t???m ri??ng ??i k??m v??i sen, m??y s???y t??c v?? ????? v??? sinh c??
            nh??n mi???n ph??. C??c ph??ng c??n c?? TV truy???n h??nh c??p, minibar v?? khu
            v???c ??n u???ng ????? t???o thu???n ti???n cho kh??ch. Resort c?? c??c c???a h??ng ??n
            u???ng ph???c v??? nhi???u m??n ??n ki???u Vi???t Nam, ????ng Nam ?? v?? Ch??u ??u. Du
            kh??ch c?? th??? truy c???p WiFi mi???n ph?? ??? c??c khu v???c chung. D???ch v??? ????a
            ????n s??n bay c?? th??? ???????c s???p x???p theo y??u c???u. Ch??? ngh??? n???m c??ch v?????n
            th?? Vinpearl Safari Ph?? Qu???c 10 ph??t l??i xe v?? ph?????ng D????ng ????ng 35
            ph??t l??i xe. S??n bay g???n nh???t l?? s??n bay qu???c t??? Ph?? Qu???c, n???m trong
            b??n k??nh 1 gi??? l??i xe t??? Vinpearl Discovery Coastalland Phu Quoc.
          </span>

          <h2>Ti???n ??ch</h2>

          <span>
            <FontAwesomeIcon icon={faUtensils} />
            &emsp; Nh?? h??ng
          </span>

          <span>
            <FontAwesomeIcon icon={faDumbbell} />
            &emsp; Ph??ng Gym
          </span>

          <span>
            <FontAwesomeIcon icon={faSwimmingPool} />
            &emsp; H??? b??i
          </span>

          <span>
            <FontAwesomeIcon icon={faBacon} />
            &emsp; C??ng vi??n n?????c
          </span>

          <span>
            <FontAwesomeIcon icon={faStore} />
            &emsp; Shop qu??
          </span>

          <span>
            <FontAwesomeIcon icon={faWifi} />
            &emsp; M???ng internet
          </span>

          <span>
            <FontAwesomeIcon icon={faSpa} />
            &emsp; C??y c???nh
          </span>

          <span>
            <FontAwesomeIcon icon={faTv} />
            &emsp; Tivi
          </span>

          <span>
            <FontAwesomeIcon icon={faSmokingBan} />
            &emsp; Kh??ng h??t thu???c
          </span>

          <h2 style={{ marginTop: "80px" }}>H???ng ph??ng</h2>
        </DivCenterFooter>
      </DivFooter>
      <DivFooterZoom>
        <DivFooterZoomCenter>
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking1.png" />
            <DivTitleCenterZoom>
              <h3>Villa 2 Bedrooms (233m2m2)</h3>
              <span>4A+2C-2 Gi?????ng ????n V?? 1 Gi?????ng ????i C???c L???n</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Kh??ng Ho??n
                Ti???n
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao G???m B???a S??ng
              </span>
              <DivButton>
                <Button> ?????t ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    5,120,000 ??
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    ph??ng/????m
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 2 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking2.png" />
            <DivTitleCenterZoom>
              <h3>Villa 3 Bedrooms(390m2m2)</h3>
              <span>6A+3C-2 Gi?????ng ????n V?? 2 Gi?????ng ????i L???n</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Kh??ng Ho??n
                Ti???n
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao G???m B???a S??ng
              </span>
              <DivButton>
                <Button> ?????t ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    7,520,000 ??
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    ph??ng/????m
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 3 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking3.png" />
            <DivTitleCenterZoom>
              <h3>Villa 3 Bedrooms Ocean View(390m2m2)</h3>
              <span>6A+3C-2 Gi?????ng ????n V?? 2 Gi?????ng ????i L???n Kh??ng Ho??n</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Kh??ng Ho??n
                Ti???n
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao G???m B???a S??ng
              </span>
              <DivButton>
                <Button> ?????t ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    8,480,000 ??
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    ph??ng/????m
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
          {/* column 3 */}
          <CartHotelZoom>
            <img src="http://127.0.0.1:5173/src/assets/booking3.png" />
            <DivTitleCenterZoom>
              <h3>Villa 4 Bedrooms(405m2m2)</h3>
              <span>8A+4C-3 Gi?????ng ????i V?? 2 Gi?????ng ????n</span>
              <span style={{ fontSize: "15px", opacity: 0.6 }}>
                <FontAwesomeIcon icon={faCreativeCommonsNc} /> &nbsp; Kh??ng Ho??n
                Ti???n
              </span>
              <span style={{ color: "green", fontSize: "15px" }}>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; Bao G???m B???a S??ng
              </span>
              <DivButton>
                <Button> ?????t ngay </Button>
                <DivButtonPrice>
                  <span
                    style={{ marginTop: "5px", opacity: 0.7, fontWeight: 600 }}
                  >
                    9,920,000 ??
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      opacity: 0.6,
                      textAlign: "right",
                    }}
                  >
                    ph??ng/????m
                  </span>
                </DivButtonPrice>
              </DivButton>
            </DivTitleCenterZoom>
          </CartHotelZoom>
        </DivFooterZoomCenter>
      </DivFooterZoom>
    </Wrapper>
  );
}
