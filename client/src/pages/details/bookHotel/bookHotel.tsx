import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import footer from "../../../components/footer/footer";
import {
  Wrapper,
  DivHeader,
  WrapperBook,
  H1,
  DivContentImg,
  DivImg,
  CartImg,
  DivRightImg,
  DivRightImg1,
  Span,
  Select,
  Option,
  DivSelect,
  DivOld,
  Hr,
  ButtonBookTickets,
  DivFooterCenter,
  SpanFooter,
  DivInDiv,
  DivFooter,
  DivInDivFooter,
  Ul,
  Li,
} from "./bookHotel.styles";
import Footer from "../../../components/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faPrint,
  faCalendar,
  faRecycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { numberTicket } from "../../../components/redux/Tickets/numberTicket";
import { fetchTicket } from "../../../components/redux/Tickets/ticketSlice";

export default function bookHotel() {
  const [listBook, setListBook] = useState({
    img: "",
    title: "",
    star: 5,
    numberReview: 0,
    address: "",
    price: 0,
    bookHotel: false,
    priceChildren: 0,
    priceElderly: 0,
  });

  const [numberCount, setNumberCount] = useState();

  const [quantity, setQuantity] = useState(0);

  const [quantityAdults, setQuantityAdults] = useState(0);

  const [quantityElder, setQuantityElder] = useState(0);

  const [sumMoney, setSumMoney] = useState(0);

  const param = useParams();

  const dispatch = useDispatch();

  const number = useSelector((state: any) => state.numberTicket.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.post("http://localhost:5555/getBookId", {
      data: {
        id: param,
      },
    }).then((res) => setListBook(res.data));
  }, []);

  const handleAddNumber = () => {
    dispatch(numberTicket.actions.addBuyTicket(param));
  };

  function currencyFormat(num: Number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    number.map((value: any) => {
      if (value.id == param.id) {
        setNumberCount(value.ticket);
      }
    });
  }, [number]);

  const handleChange = (a: any) => {
    setQuantity(a.target.value);
  };

  const handleChangeAdults = (e: any) => {
    setQuantityAdults(e.target.value);
  };

  const handleElder = (e: any) => {
    setQuantityElder(e.target.value);
  };

  useEffect(() => {
    const sum =
      quantityAdults * 1150000 + quantity * 575000 + quantityElder * 1150000;
    setSumMoney(sum);
  }, [quantity, quantityAdults, quantityElder]);

  return (
    <Wrapper>
      <WrapperBook>
        <DivHeader>
          <H1>TOUR 3 ?????O</H1>
        </DivHeader>
        <DivContentImg>
          <DivImg>
            <CartImg src={`${listBook.img}`} alt="" />
          </DivImg>
          <DivOld>
            <DivRightImg>
              <Span>Ng?????i l???n (tr??n 1,4m)</Span>
              <DivSelect>
                <Select onChange={(e) => handleChangeAdults(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>

                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {" "}
                  {currencyFormat(Number(listBook.price))} ??
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(quantityAdults * Number(listBook.price))} ??
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 2 */}

            <DivRightImg>
              <Span>Tr??? em (t??? 1m ?????n 1,4m)</Span>
              <DivSelect>
                <Select onChange={(e) => handleChange(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>

                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {currencyFormat(Number(listBook.priceChildren))} ??
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(quantity * Number(listBook.priceChildren))} ??
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 3 */}

            <DivRightImg>
              <Span>Ng?????i cao tu???i (tr??n 60 tu???i)</Span>
              <DivSelect>
                <Select onChange={(e) => handleElder(e)}>
                  <Option disabled value="0">
                    0
                  </Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
                <Span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  {" "}
                  {currencyFormat(Number(listBook.priceElderly))} ??
                </Span>
                <Span>=</Span>
                <Span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currencyFormat(
                    quantityElder * Number(listBook.priceElderly)
                  )}{" "}
                  ??
                </Span>
              </DivSelect>
            </DivRightImg>

            {/* row 4 */}

            <Hr></Hr>

            <DivRightImg1>
              <Span>T???ng t???m t??nh: </Span>
              <Span style={{ color: "#ff5722", fontWeight: 600, opacity: 1 }}>
                {currencyFormat(sumMoney)}
              </Span>
            </DivRightImg1>
            <ButtonBookTickets onClick={handleAddNumber}>
              ?????T V??
            </ButtonBookTickets>
          </DivOld>
        </DivContentImg>

        {/* footerCenter */}

        <DivFooterCenter>
          <DivInDiv>
            <SpanFooter>
              <FontAwesomeIcon
                icon={faBoltLightning}
                fontSize="14px"
                color="red"
              />{" "}
              X??c nh???n nhanh ch??ng
            </SpanFooter>

            {/* xuat ve */}

            <SpanFooter>
              <FontAwesomeIcon icon={faPrint} fontSize="16px" /> Xu???t v?? ??i???n t???
            </SpanFooter>
            {/* ve co dinh */}
            <SpanFooter>
              <FontAwesomeIcon icon={faCalendar} fontSize="16px" /> V?? ??p d???ng
              ng??y c??? ?????nh
            </SpanFooter>

            {/* ve khong tra */}

            <SpanFooter style={{ marginRight: "100px" }}>
              <FontAwesomeIcon icon={faRecycle} fontSize="16px" /> V?? kh??ng ho??n
              tr???
            </SpanFooter>
          </DivInDiv>
        </DivFooterCenter>

        {/* footer */}

        <DivFooter>
          <DivInDivFooter>
            <Span style={{ opacity: "1" }}>T???ng quan</Span>
            <Span style={{ fontSize: "18px" }}>
              ?????a ch???: 104, Tr???n H??ng ?????o, P.D????ng ????ng, TP.Ph?? Qu???c, T.Ki??n
              Giang
            </Span>
            <Span style={{ fontSize: "18px" }}>Gi??? m??? c???a: 7:30 - 17:30</Span>
            <Span style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
              <Span style={{ fontSize: "18px" }}>1 ????nh gi??</Span>
            </Span>
            <Span style={{ opacity: "1" }}>Chi ti???t</Span>
            <Span style={{ fontSize: "18px" }}>
              Ph?? Qu???c - h??n ?????o ng???c v???i nh???ng ?????a ??i???m kh??m ph?? kh??ng th??? b???
              l??? nh?? H??n M??y R??t , h??n M??ng Tay, H??n Gh???m Gh?? v?? H??n Th??m. ?????c
              bi???t l?? c??p treo H??n Th??m l?? c??p treo v?????t bi???n d??i nh???t th??? gi???i
              hi???n nay . Tham gia combo tour tr???n g??i n??y, ch??ng ta s??? c??ng v???i
              Bee Bee tr???i nghi???m, tham gia nh???ng ho???t ?????ng nh?? l???n ng???m san h??
              ,c??u c?? ....th?????ng th???c h???i s???n t????i s???ng bao g???m 8 m??n ngay tr??n
              ?????o.
            </Span>
            <Span
              style={{ fontSize: "20px", opacity: "0.7", marginTop: "5px" }}
            >
              L???CH TR??NH THAM QUAN
            </Span>
            <Span style={{ fontSize: "18px" }}>
              8-9h: &nbsp;&nbsp;&nbsp;????n qu?? kh??ch t???i kh??ch s???n / resort /
              ??i???m h???n
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Tham quan trang trai nu??i c???y ng???c trai
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Di chuy???n v??? c???ng An Th???i , L??n Cano c??ng kh??m ph?? qu???n ?????o An
              Th???i , Ph?? Qu???c
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Cano di chuy???n tham quan ??i qua 12 h??n ?????o l???n nh??? v?? d???ng ch??n
              t???i 4 ??i???m ?????p nh???t
            </Span>
            <Span style={{ fontSize: "18px" }}>
              H??n M??ng Tay : Check in - t???m bi???n
            </Span>
            <Span style={{ fontSize: "18px" }}>H??n G???m Gh?? : Ng???m san h??</Span>
            <Span style={{ fontSize: "18px" }}>
              H??n M??y R??t : Ngh??? ng??i - t???m bi???n
            </Span>
            <Span style={{ fontSize: "18px" }}>??n tr??a h???i s???n 8 m??n</Span>
            <Span style={{ fontSize: "18px" }}>
              C??ng vi??n san h?? : ??i b??? d?????i ????y bi???n - chi ph?? t??? t??c
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Cano di chuy???n v??? c???ng An Th???i.
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Xe ????a qu?? kh??ch check in t???i cung ???????ng Hy L???p t???i Ga An Th???i
            </Span>
            <Span style={{ fontSize: "18px" }}>
              17h00 : Xe ????a qu?? kh??ch tr??? v??? kh??ch s???n , ??i???m h???n ho???c c??c ?????a
              ??i???m kh??c theo y??u c???u c???a kh??ch h??ng.
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR BAO G???M:</Span>
            <Span>
              <Ul>
                <Li>Xe ????a ????n</Li>
                <Li>Cano SB hi???n ?????i</Li>
                <Li>HDV nhi???t t??nh theo su???t h??nh tr??nh</Li>
                <Li>V?? c??p treo , CVN</Li>
                <Li>B???a tr??a v???i th???c ????n 8 m??n</Li>
                <Li>
                  D???ng c??? l???n ng???m san h?? , ??o phao , k??nh l???n , ???ng th??? , ch??n
                  v???t ...
                </Li>
                <Li>D???ng c??? c??u c??</Li>
                <Li>MI???N PH?? CH???P ???NH V?? QUAY FLYCAM K??? NI???M TH???C ????N</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>TH???C ????N</Span>
            <Span>
              <Ul>
                <Li>L????? c?? B???p</Li>
                <Li>C?? B???p kho t???</Li>
                <Li>T??m n?????ng ho???c lu???c</Li>
                <Li>S?? t?? n?????ng m??? h??nh</Li>
                <Li>M???c x??o chua ng???t</Li>
                <Li>Tr??ng chi??n</Li>
                <Li>C??m tr???ng</Li>
                <Li>Tr??i c??y</Li>
                <Li>Tr?? ????</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR KH??NG BAO G???M</Span>
            <Span>
              <Ul>
                <Li>
                  V?? ??i b??? d?????i ????y bi???n (li??n h??? v???i HDV ho???c Sales ????? ?????t
                  tr?????c n???u s??? d???ng d???ch v??? n??y)
                </Li>
                <Li>Chi ph?? c?? nh??n kh??c</Li>
                <Li>V?? sunset sanato ( 100k )</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>TOUR RI??NG GIA ????NH</Span>
            <Span>
              <Ul>
                <Li>
                  Tr??? t??? 1 - 3 tu???i ???????c mi???n ph?? (n???u ph??t sinh v?? c??p treo s???
                  t??? t??c thanh to??n th??m ph?? v?? c??p treo tr??? em).
                </Li>
                <Li>
                  Trong m???i nh??m kh??ch, 02 ng?????i l???n ch??? ???????c k??m t???i ??a 01 tr???
                  nh??? mi???n ph??, n???u nhi???u h??n s??? ph??? thu 50% v?? tr??n m???i tr???
                  nh???.
                </Li>
                <Li>
                  Tr??? em t??? 4 - 9 tu???i t??nh 50% v?? ng?????i l???n (tr?????ng h???p tour b??
                  ph??t sinh chi???u cao tr??n 1m4 n???u c?? ??i c??p treo ph??? thu ph?? v??
                  c??p treo ng?????i l???n VN??).
                </Li>
                <Li>Tr??? em t??? 10 tu???i tr??? l??n t??nh b???ng v?? ng?????i l???n</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>CH??NH S??CH THANH TO??N:</Span>
            <Span>
              <Ul>
                <Li>Thanh to??n 50% khi ?????t tour</Li>
                <Li>S??? ti???n c??n l???i s??? ???????c thanh to??n trong ng??y ??i tour</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>CH??NH S??CH H???Y TOUR:</Span>
            <Span style={{ fontSize: "18px" }}>Tour gh??p:</Span>
            <Span style={{ fontSize: "18px" }}>
              H???y tr?????c 01 ng??y: mi???n ph?? hu???
            </Span>
            <Span style={{ fontSize: "18px" }}>
              H???y trong ng??y: ph???t ph?? 100%
            </Span>
            <Span style={{ fontSize: "18px" }}>
              ????ng k?? kh??ng tham gia ph???t 100%.
            </Span>
            <Span style={{ fontSize: "18px" }}>Tour ri??ng:</Span>
            <Span style={{ fontSize: "18px" }}>
              H???y tr?????c 03 ng??y so v???i ng??y ??i tour: mi???n ph??
            </Span>
            <Span style={{ fontSize: "18px" }}>
              H???y tr?????c 02 ng??y so v???i ng??y ??i tour: ph???t ph?? 50% t???ng ti???n tour
            </Span>
            <Span style={{ fontSize: "18px" }}>
              H???y tr?????c 01 ng??y so v???i ng??y ??i tour: ph???t ph?? 100% t???ng ti???n
              tour
            </Span>
            <Span style={{ fontSize: "18px", fontWeight: "700" }}>
              Tr?????ng h???p b???t kh??? kh??ng:
            </Span>
            <Span style={{ fontSize: "18px" }}>
              C??ng ty h???y tour do s??? c??? b???t kh??? kh??ng nh?? thi??n tai, d???ch b???nh,
              ho??? ho???n, l?? l???t. Ho???c do l???nh c???m t??u, c???m xe, c???m ???????ng, ????nh
              c??ng, do xe l???a, m??y bay ho??n/h???y chuy???n ...
            </Span>
            <Span style={{ fontSize: "18px" }}>
              C??ng ty kh??ng ch???u tr??ch nhi???m b???i th?????ng th??m b???t k??? chi ph?? n??o
              kh??c ngo??i vi???c ho??n tr??? nh???ng chi ph?? d???ch v??? Qu?? kh??ch ch??a ???????c
              s??? d???ng c???a tour ????.
            </Span>
            <Span style={{ fontSize: "20px" }}>CH??NH S??CH GI???M TR???</Span>
            <Span style={{ fontSize: "18px" }}>Tr?????ng h???p b???t kh??? kh??ng:</Span>
            <Span>
              <Ul>
                <Li>
                  ?????i v???i nh???ng tour c?? bao g???m ??n tr??a s??? gi???m tr??? 200k/v??
                  ng?????i l???n khi kh??ch t??? t??c ??n tr??a.
                </Li>
                <Li>
                  Kh??ch tour gh??p t??? t??c di chuy???n ??i v?? v??? ho???c c?? t??i x??? ????a
                  ????n ri??ng gi???m 50k/kh??ch.
                </Li>
                <Li>Tour VIP kh??ng s??? d???ng HDV gi???m 500k.</Li>
              </Ul>
            </Span>
            <Span style={{ fontSize: "18px" }}>
              Kh??ch Tour VIP t??? t??c di chuy???n ???????c gi???m tr??? theo b???ng gi?? xe v??
              kh??ng g???m ph??? thu xe 7 ch???, 16 ch???.
            </Span>
          </DivInDivFooter>
        </DivFooter>
      </WrapperBook>
    </Wrapper>
  );
}
