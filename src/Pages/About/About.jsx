import "./About.css";
export default function About() {
  return (
    <div>
      <div className="aboutMain">
        <div className="aboutMainText">
          <h1>About Us</h1>
          <p>Per venenatis ac purus velit egestas natoque</p>
        </div>
      </div>
      <div className="aboutCompany">
        <div className="aboutCompanyImg"></div>
        <div className="aboutCompanyText">
          <h6>About Company</h6>
          <h2>Excellent quality is worth the price tag.</h2>
          <p>
            Arcu eget malesuada imperdiet ornare pretium fringilla elit nullam.
            Orci elementum nec netus placerat convallis cursus class diam arcu
            tincidunt sed. Dolor tristique parturient consequat suscipit
            malesuada viverra proin commodo.
          </p>
          <div className="idea">
            <div className="ideaIcon"></div>
            <div className="ideaText">
              <h5>The Idea</h5>
              <p>
                Eget nullam augue accumsan ridiculus sit ac ornare sociosqu
                molestie nibh massa lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whatWeDo">
        <div className="whatWeDoColor">
          <div className="whatWeDoLorem">
            <p>What we Do</p>
            <h2>
              We make your clothes <br />
              shine bright.
            </h2>
          </div>
          <div className="whatWeDoCards d-flex align-items-center">
            <div className="whatWeDoCard1 d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <img
                  src="/src/Img/icons8-wash-by-hand-48 (1).png"
                  width="64px"
                  alt=""
                />
              </div>
              <h4>Wash & Fold</h4>
              <p>
                Venenatis tempor morbi class taciti porttitor habitant aliquam
                hendrerit auctor a ultrices justo
              </p>
            </div>
            <div className="whatWeDoCard2  d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <img
                  src="/src/Img/icons8-dry-cleaning-64.png"
                  width="64px"
                  alt=""
                />
              </div>
              <h4>Dry Cleaning</h4>
              <p>
                Venenatis tempor morbi class taciti porttitor habitant aliquam
                hendrerit auctor a ultrices justo
              </p>
            </div>
            <div className="whatWeDoCard3  d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <img
                  src="/src/Img/icons8-clean-carpet-64.png"
                  width="64px"
                  alt=""
                />
              </div>
              <h4>Other Cleaning</h4>
              <p>
                Venenatis tempor morbi class taciti porttitor habitant aliquam
                hendrerit auctor a ultrices justo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="claimPromo">
        <div className="claimPromoColor">
          <div className="claimPromoText">
            <h1>Discount up to 50% On Your First Order.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a  className="c-button c-button--gooey claimPromoButton">
              Claim Promo
              <div className="c-button__blobs">
                <div />
                <div />
                <div />
              </div>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{ display: "block", height: 0, width: 0 }}
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={10}
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="smartWayImg">
        <div className="smartWay d-flex align-items-center justify-content-center">
          <div className="smartWayText">
            <p className="h1">The smart way to wash your clothes.</p>
            <p>
              Dictumst nisl convallis in. Platea purus natoque quisque hendrerit
              quis curae nunc. Hac si viverra eget fames urna a orci. Semper
              blandit laoreet nisl aliquet metus dui proin. Accumsan at
              vestibulum habitant aliquet non ipsum sollicitudin. Cursus
              efficitur vestibulum conubia pharetra natoque torquent.
            </p>
            <p>
              Orci montes lacus proin. Facilisi libero fermentum luctus
              dictumst. Cubilia habitant magna molestie non risus blandit.
              Dictumst hac mi nostra nascetur.
            </p>
          </div>
        </div>
      </div>
      <div className="Insight">
        <h2>Insight</h2>
        <div className="InsightCards d-flex gap-lg-4 flex-md-wrap gap-md-4 align-items-center justify-content-center">
          <div className="InsightCard1">
            <div className="card" style={{ width: "17rem", height: "30rem" }}>
              <img src="/src/Img/6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">
                  Laundry Tips To Follow During Coronavirus
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
              </div>
            </div>
          </div>
          <div className="InsightCard2">
            <div className="card" style={{ width: "17rem", height: "30rem" }}>
              <img src="/src/Img/7.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">
                  Tips To Choose & Maintain The Best Fabrics For Tablecloths
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
              </div>
            </div>
          </div>
          <div className="InsightCard3">
            <div className="card" style={{ width: "17rem", height: "30rem" }}>
              <img src="/src/Img/8.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">
                  Useful Tips to Wash Baby Clothes The Right Way
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
              </div>
            </div>
          </div>
          <div className="InsightCard4">
            <div className="card" style={{ width: "17rem", height: "30rem" }}>
              <img src="/src/Img/9.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Laundry Tips For Winters</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
