import { Global } from '@emotion/react'

const SlickThemeStyle = () => (
  <Global
    styles={`
    @charset "UTF-8";
/* Slider */
.slick-loading .slick-list {
  background: #fff url("./ajax-loader.gif") center center no-repeat;
}

/* Icons */
@font-face {
  font-family: "slick";
  src: url("./fonts/slick.eot");
  src: url("./fonts/slick.eot?#iefix") format("embedded-opentype"), url("./fonts/slick.woff") format("woff"), url("./fonts/slick.ttf") format("truetype"), url("./fonts/slick.svg#slick") format("svg");
  font-weight: normal;
  font-style: normal;
}
/* Arrows */
.slick-prev,
.slick-next {
  position: absolute;
  display: block;
  height: 100%;
  width: 47px;
  line-height: 0px;
  font-size: 0px;
  cursor: pointer;
  background: transparent;
  color: transparent;
  top: 0;
  padding: 0;
  border: none;
  outline: none;
  z-index: 1;
  transition: background 0.3s, -webkit-transform 0.1s ease-out 0s;
}
.slick-prev:hover, .slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  font-weight: 700;
  transform: scale(1.25);
  color: #fff;
  background: rgba(20, 20, 20, 0.4);
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
  display: none;
}
.slick-prev:before,
.slick-next:before {
  font-family: nf-icon;
  font-size: 20px;
  line-height: 1;
  color: white;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: 5px;
  transform-origin: 55% 50%;
}
[dir=rtl] .slick-prev {
  left: auto;
  right: -25px;
}
.slick-prev:before {
  content: "";
}
[dir=rtl] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: 0;
  transform-origin: 45% 50%;
}
[dir=rtl] .slick-next {
  left: -25px;
  right: auto;
}
.slick-next:before {
  content: "";
}
[dir=rtl] .slick-next:before {
  content: "←";
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots li button {
  border: 0;
  background: transparent;
  display: block;
  height: 20px;
  width: 20px;
  outline: none;
  line-height: 0px;
  font-size: 0px;
  color: transparent;
  padding: 5px;
  cursor: pointer;
}
.slick-dots li button:hover, .slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover:before, .slick-dots li button:focus:before {
  opacity: 1;
}
.slick-dots li button:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "•";
  width: 20px;
  height: 20px;
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;
  text-align: center;
  color: black;
  opacity: 0.25;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  color: black;
  opacity: 0.75;
}

/*# sourceMappingURL=slick-theme.css.map */

    `}
  />
)

export default SlickThemeStyle
