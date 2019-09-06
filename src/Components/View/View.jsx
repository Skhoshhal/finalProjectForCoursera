import React, { Component } from "react";
import "../../App.css";
import Circle from "react-circle";
import Swiper from "swiper";
import {Card, Spinner} from "reactstrap";

class View extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 6,
          spaceBetween: 10
        }
      },
      // slidesPerView: 'auto',
      spaceBetween: 5,
      loop: false,
      freeMode: true,
      //grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
  }

  render() {
    const { isLoading, data } = this.props;
    return (
      <div className="container content-container">
        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <h3>Earning Money with Spreadshop</h3>
            <p>
              Opening your Spreadshop is the easy part. Now that your Shop is
              live, you’re ready for some serious sales! This is the perfect
              time to go through the short list of failures that Thomas,
              Spreadshop’s Project Manager, has compiled. Take a look, and
              you’ll learn valuable lessons about the Shop experience…
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row row-content">
          <div className="col-sm-3 col-lg-3 text-center">
            <h6>Affiliate Commission</h6>
            <Circle progress={20} />
          </div>
          <div className="col-sm-1 col-lg-1 text-center align-self-center">
            <div className="separator">+</div>
          </div>
          <div className="col-sm-3 col-lg-3 text-center">
            <h6>Volume Bonus</h6>
            <Circle progress={40} />
          </div>
          <div className="col-sm-1 col-lg-1 text-center align-self-center">
            <div className="separator">+</div>
          </div>
          <div className="col-sm-4 col-lg-3 text-center">
            <h6>Your Design Price</h6>
            <Circle progress={100} />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-sm-12 col-lg-12 col-xl-12">
            <br />
            <p>
              With so many ways to make money, earning will be the least of your
              worries. Between your must-have merch and our monthly shop
              promotions, your fans will be filling their shopping carts without
              hesitation
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row row-content">
          <div className="col-sm-12 col-lg-12 col-xl-12">
            <h4>See What Others Are Selling</h4>
          </div>
        </div>
        <br />
        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <p>
              Yes, that’s standard. The Spreadshirt logo will not appear on your
              Shop. It allows you to add your personal touch the way you see
              fit. The only mention of Spreadshirt is in the footer (“Powered by
              Spreadshirt”).
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <p>
              We’re sure you’ve seen this before: a Shop or site is crammed with
              over-personalization and over-customization. This includes flashy
              banners and excessive use of CSS/HTML. Don’t overcomplicate your
              website or Shop, as it will vicariously impact your customer’s
              journey.
            </p>
          </div>
        </div>
        <br />
        <div className="row row-content justify-content-center">
          <div className="col-6 col-sm-6 col-lg-12 col-xl-12 text-center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A366MPA1667PT17X176Y15D1004321934S13PA1668PT17X0Y12D1004321880S43/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">Plead The Fifth</p>
                <p className="text-center price">23$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A1MPA1663PT17X0Y81D12530227S49/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">Red Friday Shirt</p>
                <p className="text-center price">34$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X33Y5D1025066916FS2952/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">vu meter T-Shirt</p>
                <p className="text-center price">56$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A2MPA1667PT17X16Y49D1007396913S28/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">Ant Bully</p>
                <p className="text-center price">17$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T813A2MPA3132PT17X35Y38D1025014655FS2187/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">FUNnel Vision</p>
                <p className="text-center price">55$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                  className="product-image"
                  src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X33Y5D1025066916FS2952/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">LIBERALS FEAR</p>
                <p className="text-center price">34$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                    className="product-image"
                    src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X24Y0D1013594223S43/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">Yellowstone Dutton</p>
                <p className="text-center price">30$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                    className="product-image"
                    src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A328MPA1663PT17X0Y22D1007411757S36/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">Engineer Labour</p>
                <p className="text-center price">20$</p>
              </Card>
              <Card className="swiper-slide">
                <img
                    className="product-image"
                    src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X49Y44D1025096368FS2885/views/1,width=378,height=378,appearanceId=366,backgroundColor=F2F2F2"
                />
                <p className="text-center name">funny star wars</p>
                <p className="text-center price">40$</p>
              </Card>
            </div>
            <div className="swiper-pagination"></div>
            <br />
            <br />
          </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row row-content">
          <div className="col-sm-12 col-lg-12 col-xl-12">
            <h4>Product Quality</h4>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-sm-12 col-lg-12 col-xl-12">
            <p>
              Shops on Spreadshirt can easily be integrated with any website.
              Just go to “Shop Settings -> Extended -> Shop Integration” and you
              will find all the necessary information there. You can integrate
              your Shop without specific knowledge of IT programming. The Shop
              is then available via a URL.
            </p>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <img
              className="desktop-image"
              src="https://www.spreadshop.com/content/f_auto,q_70,x_350,y_200,w_800,h_300,c_crop/pages/SellCustomTshirts/digital_direct"
            />
            <br />
            <br />
            <h4>Digital Direct Printing</h4>
            <p>
              Shops on Spreadshirt can easily be integrated with any website.
              Just go to “Shop Settings -> Extended -> Shop Integration” and you
              will find all the necessary information there. You can integrate
              your Shop without specific knowledge of IT programming. The Shop
              is then available via a URL.
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <img
              className="desktop-image"
              src="https://www.spreadshop.com/content/f_auto,q_70,x_250,y_150,w_800,h_300,c_crop/v123/pages/SellCustomTshirts/thermo_sublimation"
            />
            <br />
            <br />
            <h4>Thermo Sublimation</h4>
            <p>
              Shops on Spreadshirt can easily be integrated with any website.
              Just go to “Shop Settings -> Extended -> Shop Integration” and you
              will find all the necessary information there. You can integrate
              your Shop without specific knowledge of IT programming. The Shop
              is then available via a URL.
            </p>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <img
              className="desktop-image"
              src="https://www.spreadshop.com/content/f_auto,q_70,x_150,y_150,w_800,h_300,c_crop/pages/SellCustomTshirts/laser_transfer"
            />
            <br />
            <br />
            <h4>Laser Transfer</h4>
            <p>
              Shops on Spreadshirt can easily be integrated with any website.
              Just go to “Shop Settings -> Extended -> Shop Integration” and you
              will find all the necessary information there. You can integrate
              your Shop without specific knowledge of IT programming. The Shop
              is then available via a URL.
            </p>
          </div>
          <br />
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <img
              className="desktop-image"
              src="https://www.spreadshop.com/content/f_auto,q_70,x_350,y_100,w_800,h_300,c_crop/v123/pages/SellCustomTshirts/flex"
            />
            <br />
            <br />
            <h4>FLEX Printing</h4>
            <p>
              Shops on Spreadshirt can easily be integrated with any website.
              Just go to “Shop Settings -> Extended -> Shop Integration” and you
              will find all the necessary information there. You can integrate
              your Shop without specific knowledge of IT programming. The Shop
              is then available via a URL.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <h2>Shipping & Customer Support</h2>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <br />
            <p>
              Do not go with AdWords Express. Just, no! It’s a trap! The absence
              of granular steering options makes this product a waste of time
              and money. The campaign set-up options are too basic to drive
              serious conversions, traffic, and revenue. Trust me. Try Google
              AdWords or Facebook Ads instead.
            </p>
            <p>
              Make sure to get yourself familiar with the metrics and options
              ahead of time! Control your results and continue to find your
              optimization potential. There’s a lot to discover and Make sure
              you have eye-catching marketing assets already in place.
            </p>
            <p>
              You’re going to need them for your ads, blog posts and social
              media activity. We have teamed up with our friends from
              Placeit.net to offer you a 15% discount on all subscriptions and
              single downloads. Give it a try here.
            </p>
            <p>
              A professional design tool alone won’t help you become an
              outstanding illustrator. However, the more professional a software
              is, the more likely it’s backed by support from users and the
              provider, allowing you to learn more from the community.
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-6">
            <img
              className="desktop-image1"
              src="https://www.spreadshop.com/content/f_auto,q_60/pages/SellMerchandise/shipping"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default View;
