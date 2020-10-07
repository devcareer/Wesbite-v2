import React from "react"
import {Container,Row,Col} from "react-bootstrap"
import "../assets/scss/app.scss"

 function Partners() {
  return (
    <>
      <h1 className="hubs">Partnering Hubs</h1>

<Container>
  <div className="sponsors__cards">

  <Row className="partner-one">
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818475/image_21_bjwrq9.svg" alt="Wennovation" /></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818475/image_23_qsh9vg.svg" alt="CC-hub" /></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818470/image_27_lcyzqu.svg" alt="Hapa Space" srcset=""/></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818470/image_29_guj3g6.svg" alt="Olotu" srcset=""/></Col>
  </Row>

  <Row className="partner-two">

    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818475/image_24_oqhiwc.svg" alt="aimtoget" srcset=""/></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818471/image_28_ec75i0.svg" alt="bongohive" className="partner-two-bongohive" srcset=""/></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818473/image_31_dwrauh.svg" alt="seventwenty" className="partner-two-seventwenty" srcset=""/></Col>
    <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818470/image_30_c3wwi2.svg" alt="impacthub" srcset=""/></Col>
  </Row>


<Row className="partner-three">
<Col> <img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818475/image_22_xqwepx.svg" alt="hub360" srcset=""/></Col>
<Col> <img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818477/image_26_hwtusr.svg" alt="Swahili" srcset=""/></Col>
<Col> <img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818477/image_25_xi5tb3.svg" alt="Rumblecube" srcset=""/></Col>
</Row>



<h1 className="sponsors_text">Our Sponsors</h1>
<Row className="sponsors-one">
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818473/image_32_emkqpp.svg" alt="revin" srcset=""/></Col>
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818471/image_33_tlobbv.svg" alt="kuda" srcset=""/></Col>
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818471/image_35_cn2rm7.svg" alt="gofundme" srcset=""/></Col>
</Row>

<Row className="sponsors-two">
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601818472/image_36_y2zjhg.svg" alt="piss" srcset=""/></Col>
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601649998/pngwave_4_1_pjtqpq.png" alt="isam" srcset=""/></Col>
  <Col><img src="https://res.cloudinary.com/ddunuksxx/image/upload/v1601650007/image_37_rxaog8.png" alt="eden" srcset=""/></Col>
</Row>
  </div>

</Container>

    </>
  )
}
export default Partners