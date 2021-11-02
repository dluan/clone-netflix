import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Netflix Sans";
        font-weight: 100;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format("woff");
      }
      @font-face {
          font-family: "Netflix Sans";
          font-weight: 300;
          src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff) format("woff");
      }
      @font-face {
          font-family: "Netflix Sans";
          font-weight: 400;
          src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff) format("woff");
      }
      @font-face {
          font-family: "Netflix Sans";
          font-weight: 700;
          src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff) format("woff");
      }
      @font-face {
          font-family: "Netflix Sans";
          font-weight: 800;
          src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff) format("woff");
      }
      @font-face {
          font-family: "Netflix Sans";
          font-weight: 900;
          src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2) format("woff2"), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff) format("woff");
      }
      @font-face {
        font-family: nf-icon;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.eot);
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.eot?#iefix) format("embedded-opentype"), url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff) format("woff"),
            url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.ttf) format("truetype"), url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.svg#nf-icon-v1-93) format("svg");
        font-weight: 400;
        font-style: normal;
      }

      [class*=" icon-"],
      [class^="icon-"] {
          font-family: nf-icon;
          speak: none;
          font-style: normal;
          font-weight: 400;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          transform: translateZ(0);
      }
    `}
  />
)

export default Fonts
