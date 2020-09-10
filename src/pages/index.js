import React, { useState, useEffect } from "react"
import styled from "styled-components"
import anime from "animejs"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Landing from "../components/landing"
import Values from "../components/values"
import AnimatedSVG from "../components/animated-svg"
import Mentorship from "../components/mentorship"
import Collaboration from "../components/collaboration"
import Community from "../components/community"

const NUM_SECTIONS = 5

const Background = styled.div`
  background: #041454;
  position: relative;
  z-index: 1;
`

const MorphWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`

//front is second in the array, second in the html
const isOnPage = []
const IndexPage = () => {
  const [step, setStep] = useState(0)
  //const [needsLoop, setNeedsLoop] = useState(true);
  //const [initShapeLoopStep, setShapeLoopStep] = useState(0);
  const DOM = {}
  const shapes = [
    {
      // landing
      path: [
        "M303 851C237.12 553.064 644.638 549.432 796 431.133C892.088 356.033 902.448 249.372 972.546 168C1012.87 121.192 1072.96 82.7517 1180.5 63.5C1338.06 35.2946 1519.67 215.453 1618.5 428.222C1704.4 613.143 1727.77 822.696 1618.5 941.5C1567.01 997.479 1435.3 1036.56 1274 1056.59C1103.78 1077.73 900.608 1077.67 724 1053.87C504.931 1024.36 326.734 958.338 303 851Z",
        "M709 878.999C699 881.602 635.5 846.999 629.5 841.999C623.5 836.999 614.808 765.499 592.5 745.499C570.191 725.499 519.5 725 499 674C478.5 623 488.5 575 503 549.5C517.5 524 544 492 592.5 480.5C641 469 691.5 469.157 724.5 496.5C757.5 523.843 774.3 546.5 777.5 598C780.7 649.5 763.5 655 747.5 688C731.5 721 766.5 783.5 763.5 798.5C760.5 813.5 719 876.397 709 878.999Z",
      ],
      pathAlt: [
        "M81.5003 896C-84.9087 701.259 438.479 569.226 607 477C712 419.537 747.5 336.5 747.5 183.5C747.5 50.5001 898.5 -21.0001 1069.5 38C1240.5 97.0001 1395.5 252.926 1410 450.963C1424.5 649 1614.27 819.696 1505 938.5C1402 1050.48 1187.8 977.966 1026.5 998C856.279 1019.14 638.108 1097.29 461.5 1073.5C242.431 1043.99 152.915 979.573 81.5003 896Z",
        "M688.97 908.118C663.695 883.962 628.59 869.503 616.37 855.825C610.691 836.356 612.475 812.884 611.726 795.002C610.572 767.431 605.443 749.235 566.897 726.712C530.861 705.655 515.77 662.265 519.826 622.498C525.729 564.626 571.513 504.766 646.41 493.988C715.31 484.073 771.695 516.025 797.312 559.188C827.346 609.795 815.27 680.091 774.293 710.876C744.351 733.371 750.429 757.408 753.733 789.675C755.291 804.887 761.305 822.695 759.603 841.204C733.706 868.957 718.952 879.173 688.97 908.118Z",
      ],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#020A39",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#FFE394",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
          {
            duration: 500,
            easing: "easeOutQuad",
            elasticity: 600,
          },
        ],
        svg: {
          duration: 2000,
          easing: "easeOutElastic",
        },
      },
    },
    {
      // pillars
      path: [
        "M917.847 1000.42C844.575 977.015 745.825 871.182 734.914 796.794C724.002 722.405 716.377 635.964 750.168 557.949C783.959 479.934 861.762 382.655 1000.34 353.179C1138.92 323.704 1250.49 356.965 1288.89 386.448C1327.29 415.931 1412.65 472.807 1437.71 555.692C1462.76 638.576 1461.52 741.135 1421.63 823.766C1381.73 906.397 1328.42 962.186 1234 1000.42C1139.58 1038.65 991.119 1023.82 917.847 1000.42Z",
        "M418.999 919.5C312.655 855.249 268 752.5 322 639C376 525.5 491.5 511 544 506.5C596.5 502 645.5 444 630.5 370.5C615.5 297 545 196.751 678.5 115.752C812 34.7516 996 71.7516 1114.5 115.752C1233 159.752 1394 249.5 1399.5 362.5C1405 475.5 1322.5 533 1184 514.5C1045.5 496 841.499 544.5 863.5 660.5C885.5 776.5 847.499 879.5 770.999 919.5C694.499 959.5 525.344 983.752 418.999 919.5Z",
      ],
      pathAlt: [
        "M912.5 961.5C839.228 938.096 735.5 907.5 688 831C640.5 754.5 640.208 619.515 674 541.5C707.791 463.485 815.919 341.975 954.5 312.5C1093.08 283.025 1185.5 297.917 1260.5 355.5C1335.5 413.083 1341.95 525.616 1367 608.5C1392.05 691.384 1495.4 763.869 1455.5 846.5C1415.6 929.131 1349 997 1253.5 1011C1158 1025 985.772 984.904 912.5 961.5Z",
        "M406 933.5C299.655 869.249 251.5 702.5 305.5 589C359.5 475.5 485.5 483.5 538 479C590.5 474.5 658.5 423.172 643.5 349.672C628.5 276.172 547.5 149 681 67.9999C814.5 -13 972.5 89 1091 133C1209.5 177 1371.5 214.5 1377 327.5C1382.5 440.5 1311.5 547.5 1173 529C1034.5 510.5 813 530 835 646C857 762 838 907.5 761.5 947.5C685 987.5 512.344 997.752 406 933.5Z",
      ],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#000000",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#5C92D7",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 300,
          },
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 300,
          },
        ],
        svg: {
          duration: 2000,
          easing: "easeOutElastic",
        },
      },
    },
    {
      // mentorship
      path: [
        "M1281.65 923.12C1208.37 899.716 950.646 804.62 888.646 732.62C826.646 660.62 778.354 543.635 812.145 465.62C845.936 387.605 959.645 178.12 1168.15 190.12C1376.65 202.12 1288.15 380.62 1362.65 409.62C1437.15 438.62 1548.15 306.12 1684.15 306.12C1820.15 306.12 1791.15 617.62 1764.65 696.62C1738.15 775.62 1696.07 878.887 1601.65 917.12C1507.23 955.353 1354.92 946.524 1281.65 923.12Z",
        "M38.5 489.5C64 386.5 104.879 266.936 181.879 196.435C258.879 125.935 375.379 48.4354 454.379 36.9353C533.38 25.4353 698.879 4.93553 823.379 196.436C947.879 387.936 813.878 496.194 983.378 559.935C1152.88 623.676 1182.88 484.335 1354.38 542.435C1525.88 600.535 1517.4 851.935 1419.38 936.936C1321.36 1021.94 1148.4 1043.44 1037.4 1059.44C926.408 1075.44 643.122 1075.56 462 1026.5C280.878 977.435 156.379 909.435 90.8794 822.435C25.3794 735.435 13 592.5 38.5 489.5Z",
      ],
      pathAlt: [
        "M1256.97 220.643C1113.97 165.643 933.971 275.643 872.971 344.643C698.971 526.143 848.823 712.861 975.295 826.249C1120.29 956.249 1598.47 993.643 1743.47 951.643C1888.47 909.643 1935.97 476.643 1846.47 354.143C1756.97 231.643 1541.47 426.643 1411.47 430.643C1281.47 434.643 1399.97 275.643 1256.97 220.643Z",
        "M845.295 258.249C768.703 98.7489 483.295 -12.7511 228.795 65.7489C-25.7051 144.249 -137.205 372.249 -75.2051 632.749C-13.2051 893.249 263.795 1018.75 580.295 1051.25C896.795 1083.75 1354.29 1013.25 1461.79 949.249C1569.29 885.249 1614.79 785.749 1478.29 632.749C1341.79 479.749 1170.79 642.358 1066.29 612.249C912.295 567.877 921.886 417.749 845.295 258.249Z",
      ],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#A6ADD8",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#FFE394",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 2000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
          {
            duration: 2000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
        ],
        svg: {
          duration: 2500,
          easing: "easeOutElastic",
        },
      },
    },
    {
      // collaboration
      path: [
        "M1268.34 19.4104C1358.08 21.938 1090.51 195.58 1129.1 211.483C1167.69 227.387 1477.01 9.76161 1563.42 40.0625C1649.83 70.3634 1170.2 335.147 1307.33 306.1C1444.46 277.052 1645.93 164.611 1577.93 254.486C1509.92 344.361 1112.03 612.13 829.616 768.285C547.202 924.439 231.469 1076.41 395.376 923.677C559.283 770.948 282.315 893.686 261.717 858.309C241.119 822.932 410.051 692.468 141.56 799.705C-126.931 906.942 107.342 717.068 328.197 549.812C549.051 382.557 1178.6 16.8827 1268.34 19.4104Z",
        "M645.316 1090.75C651.877 967.966 670.947 847.023 590.294 790.014C509.641 733.005 492.456 616.415 530.538 501.218C568.62 386.021 524.04 315.277 448.626 204.601C645.73 180.616 809.634 174.144 948.591 277.95C1087.55 381.757 1373.82 333.58 1534.41 350.661C1694.99 367.742 1737.84 442.476 1575.33 539.3C1412.83 636.123 1126 706.014 1069 808C1012 909.986 906.065 1049.57 645.316 1090.75Z",
      ],
      pathAlt:
        "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#FFE394",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#020A39",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 2000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
          {
            duration: 2000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
        ],
        svg: {
          duration: 2500,
          easing: "easeOutElastic",
        },
      },
    },
    {
      // community
      path: [
        "M764.077 28.779C839.987 28.779 1009.61 35.5743 1054.63 107.185C1099.65 178.796 1121.64 326.76 1054.63 421.893C987.618 517.026 1053.06 583.41 1034.73 592.296C1016.41 601.182 912.232 543.646 764.077 572.394C615.922 601.143 578.229 656.027 470.385 683.731C362.541 711.435 233.232 664.914 186.64 612.12C140.047 559.327 99.8676 465 88.5 402C77.1323 339 98.6894 226.885 148.947 161.547C199.204 96.2086 256.791 28.7791 360.447 28.7791L764.077 28.779Z",
        "M1270.42 1048.01C1174.09 1032.33 799.484 943.89 782.505 911.586C765.527 879.282 749 839.975 782.505 808.612C816.01 777.25 1099.83 627.964 1113.67 595.452C1127.5 562.94 1109.7 202.795 1163.1 174.046C1216.5 145.297 1743.63 259.823 1767.42 297.354C1791.2 334.885 1631.65 689.016 1604.42 728.115C1577.2 767.214 1547.88 940.857 1471.97 1016.65C1396.07 1092.44 1366.75 1063.69 1270.42 1048.01Z",
      ],
      pathAlt:
        "M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#282faf",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#191919",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
        ],
        svg: {
          duration: 2000,
          easing: "easeOutExpo",
        },
      },
    },
    {
      // contact
      path:
        "M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
      pathAlt:
        "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
      scaleX: 2.5,
      scaleY: 2,
      rotate: 0,
      tx: 0,
      ty: -50,
      fill: {
        color: "#282faf",
        duration: 500,
        easing: "linear",
      },
      animation: {
        path: {
          duration: 3000,
          easing: "easeOutQuad",
          elasticity: 600,
        },
        svg: {
          duration: 3000,
          easing: "easeOutElastic",
        },
      },
    },
    {
      // team
      path: [
        "M39 844.5L8 489.5L716.75 372.75L1425.5 256L1800 426L1522.5 783L1151.62 798.375L509 826L39 844.5Z",
        "M1050.5 139L469.501 161.5L498.001 546L188 703.5L636 961L850.5 804.5L1065 648L1057.75 393.5L1050.5 139Z",
      ],
      pathAlt:
        "M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [
        {
          color: "#282faf",
          duration: 500,
          easing: "linear",
        },
        {
          color: "#282faf",
          duration: 500,
          easing: "linear",
        },
      ],
      animation: {
        path: [
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
          {
            duration: 3000,
            easing: "easeOutElastic",
            elasticity: 600,
          },
        ],
        svg: {
          duration: 2000,
          easing: "easeOutExpo",
        },
      },
    },
  ]
  DOM.svg = document.querySelector(".morph")
  DOM.frontShapeEl = DOM.svg?.querySelector(".front-path")
  DOM.backShapeEl = DOM.svg?.querySelector(".back-path")

  // initShapeEl
  useEffect(() => {
    DOM.svg = document.querySelector(".morph")
    DOM.frontShapeEl = DOM.svg?.querySelector(".front-path")
    DOM.backShapeEl = DOM.svg?.querySelector(".back-path")
    anime.remove(DOM.svg)
    anime({
      targets: DOM.svg,
      duration: 1,
      easing: "linear",
      scaleX: shapes[0].scaleX,
      scaleY: shapes[0].scaleY,
      translateX: shapes[0].tx + "px",
      translateY: shapes[0].ty + "px",
      rotate: shapes[0].rotate + "deg",
    })
  }, [])
  /*
  // initShapeLoop
  useEffect(() => {
    if (needsLoop) {
      setNeedsLoop(false);
      console.log("starting loop");
      anime.remove(DOM.frontShapeEl);
      anime.remove(DOM.backShapeEl);
      anime({
        targets: DOM.frontShapeEl,
        easing: 'linear',
        d: [{ value: shapes[initShapeLoopStep].pathAlt[0], duration: 3500 }, { value: shapes[initShapeLoopStep].path[0], duration: 3500 }],
        loop: true,
        fill: {
          value: shapes[initShapeLoopStep].fill[0].color,
          duration: shapes[initShapeLoopStep].fill[0].duration,
          easing: shapes[initShapeLoopStep].fill[0].easing
        },
        direction: 'alternate'
      });
      anime({
        targets: DOM.backShapeEl,
        easing: 'linear',
        d: [{ value: shapes[initShapeLoopStep].pathAlt[1], duration: 3500 }, { value: shapes[initShapeLoopStep].path[1], duration: 3500 }],
        loop: true,
        fill: {
          value: shapes[initShapeLoopStep].fill[1].color,
          duration: shapes[initShapeLoopStep].fill[1].duration,
          easing: shapes[initShapeLoopStep].fill[1].easing
        },
        direction: 'alternate'
      });
    }
  });
  */

  useEffect(() => {
    window.addEventListener("click", function (event) {
      console.log(event)
    })

    return window.removeEventListener("click", () => {})
  }, [])
  // On step change
  useEffect(() => {
    anime.remove(DOM.frontShapeEl)
    anime.remove(DOM.backShapeEl)
    anime({
      targets: DOM.frontShapeEl,
      duration: shapes[step].animation.path[0].duration,
      easing: shapes[step].animation.path[0].easing,
      elasticity: shapes[step].animation.path[0].elasticity || 0,
      d: shapes[step].path[0],
      fill: {
        value: shapes[step].fill[0].color,
        duration: shapes[step].fill[0].duration,
        easing: shapes[step].fill[0].easing,
      },
      complete: () => {},
    })
    anime({
      targets: DOM.backShapeEl,
      duration: shapes[step].animation.path[1].duration,
      easing: shapes[step].animation.path[1].easing,
      elasticity: shapes[step].animation.path[1].elasticity || 0,
      d: shapes[step].path[1],
      fill: {
        value: shapes[step].fill[1].color,
        duration: shapes[step].fill[1].duration,
        easing: shapes[step].fill[1].easing,
      },
      complete: function () {},
    })

    anime.remove(DOM.svg)
    anime({
      targets: DOM.svg,
      duration: shapes[step].animation.svg.duration,
      easing: shapes[step].animation.svg.easing,
      elasticity: shapes[step].animation.svg.elasticity || 0,
      scaleX: shapes[step].scaleX,
      scaleY: shapes[step].scaleY,
      translateX: shapes[step].tx + "px",
      translateY: shapes[step].ty + "px",
      rotate: shapes[step].rotate + "deg",
    })
  }, [step])

  // Scroll monitor callbacks for section idx
  const getCallbacks = idx => {
    return {
      fullyEnterViewport: () => {
        if (!isOnPage[idx]) {
          isOnPage[idx] = true
          console.log(idx + "enters")
          setStep(idx)
        }
      },
      exitViewport: watcher => {
        if (isOnPage[idx]) {
          isOnPage[idx] = false
          const pos = !watcher.isAboveViewport ? idx - 1 : idx + 1
          if (pos <= NUM_SECTIONS && step !== pos) {
            console.log("exit to " + pos)
            setStep(pos)
          }
        }
      },
    }
  }
  // need the body class name to change the body background color on this
  // page only since we have a maxw-width and the margins would be the wrong color
  return (
    <>
      <Helmet>
        <body class="homepage" />
      </Helmet>
      <Layout page="homepage">
        <Background>
          <MorphWrap className="morph-wrap">
            <AnimatedSVG
              frontPath={shapes[0].pathAlt[0]}
              backPath={shapes[0].pathAlt[1]}
            />
          </MorphWrap>
          <Landing callbacks={getCallbacks(0)} />
          <Values callbacks={getCallbacks(1)} />
          <Mentorship callbacks={getCallbacks(2)} />
          <Collaboration callbacks={getCallbacks(3)} />
          <Community callbacks={getCallbacks(4)} />
        </Background>
      </Layout>
    </>
  )
}
export default IndexPage
