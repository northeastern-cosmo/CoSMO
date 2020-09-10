import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import anime from "animejs"
import { useScrollState } from 'scrollmonitor-hooks';

import Landing from "../components/landing"
import Values from "../components/values"
import AnimatedSVG from "../components/animated-svg"
import Header from "../components/header/header"

const NUM_SECTIONS = 4;

const Background = styled.div`
background: #041454;
position: relative;
z-index: -2;
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
  z-index: -1;
`


//front is second in the array, second in the html
const isOnPage = [];
const IndexPage = () => {
  const [step, setStep] = useState(0);
  //const [needsLoop, setNeedsLoop] = useState(true);
  //const [initShapeLoopStep, setShapeLoopStep] = useState(0);
  const DOM = {};
  const shapes = [
    {
      path: ["M112 851C46.1197 553.064 453.638 549.432 605 431.133C701.088 356.033 711.448 249.372 781.546 168C821.868 121.192 881.957 82.7517 989.5 63.5C1147.06 35.2946 1328.67 215.453 1427.5 428.222C1513.4 613.143 1536.77 822.696 1427.5 941.5C1376.01 997.479 1244.3 1036.56 1083 1056.59C912.779 1077.73 709.608 1077.67 533 1053.87C313.931 1024.36 135.734 958.338 112 851Z",
        "M707.549 909.778C677.828 891.366 646.423 885.125 631.641 874.267C622.061 856.392 619.012 837.841 614.584 820.5C607.757 793.762 597.655 769.9 555.287 755.828C515.678 742.673 493.523 707.747 489.274 668C483.09 610.157 514.829 542.106 585.882 516.084C651.247 492.146 706.017 513.447 740 550.386C779.843 593.694 791.113 658.496 757.382 697.084C732.734 725.281 741.929 750.112 751.83 781C756.497 795.562 761.321 811.47 762.83 829.712C743.228 862.217 730.903 875.262 707.549 909.778Z"],
      pathAlt: ["M81.5003 896C-84.9087 701.259 438.479 569.226 607 477C712 419.537 747.5 336.5 747.5 183.5C747.5 50.5001 898.5 -21.0001 1069.5 38C1240.5 97.0001 1395.5 252.926 1410 450.963C1424.5 649 1614.27 819.696 1505 938.5C1402 1050.48 1187.8 977.966 1026.5 998C856.279 1019.14 638.108 1097.29 461.5 1073.5C242.431 1043.99 152.915 979.573 81.5003 896Z",
        "M688.97 908.118C663.695 883.962 628.59 869.503 616.37 855.825C610.691 836.356 612.475 812.884 611.726 795.002C610.572 767.431 605.443 749.235 566.897 726.712C530.861 705.655 515.77 662.265 519.826 622.498C525.729 564.626 571.513 504.766 646.41 493.988C715.31 484.073 771.695 516.025 797.312 559.188C827.346 609.795 815.27 680.091 774.293 710.876C744.351 733.371 750.429 757.408 753.733 789.675C755.291 804.887 761.305 822.695 759.603 841.204C733.706 868.957 718.952 879.173 688.97 908.118Z"],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [{
        color: '#020A39',
        duration: 500,
        easing: 'linear'
      }, {
        color: '#FFE394',
        duration: 500,
        easing: 'linear'
      }],
      animation: {
        path: [{
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        }, {
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        }],
        svg: {
          duration: 2000,
          easing: 'easeOutElastic'
        }
      }
    },
    {
      path: ['M917.847 1000.42C844.575 977.015 745.825 871.182 734.914 796.794C724.002 722.405 716.377 635.964 750.168 557.949C783.959 479.934 861.762 382.655 1000.34 353.179C1138.92 323.704 1250.49 356.965 1288.89 386.448C1327.29 415.931 1412.65 472.807 1437.71 555.692C1462.76 638.576 1461.52 741.135 1421.63 823.766C1381.73 906.397 1328.42 962.186 1234 1000.42C1139.58 1038.65 991.119 1023.82 917.847 1000.42Z',
        'M418.999 919.5C312.655 855.249 268 752.5 322 639C376 525.5 491.5 511 544 506.5C596.5 502 645.5 444 630.5 370.5C615.5 297 545 196.751 678.5 115.752C812 34.7516 996 71.7516 1114.5 115.752C1233 159.752 1394 249.5 1399.5 362.5C1405 475.5 1322.5 533 1184 514.5C1045.5 496 841.499 544.5 863.5 660.5C885.5 776.5 847.499 879.5 770.999 919.5C694.499 959.5 525.344 983.752 418.999 919.5Z'],
      pathAlt: ['M912.5 961.5C839.228 938.096 735.5 907.5 688 831C640.5 754.5 640.208 619.515 674 541.5C707.791 463.485 815.919 341.975 954.5 312.5C1093.08 283.025 1185.5 297.917 1260.5 355.5C1335.5 413.083 1341.95 525.616 1367 608.5C1392.05 691.384 1495.4 763.869 1455.5 846.5C1415.6 929.131 1349 997 1253.5 1011C1158 1025 985.772 984.904 912.5 961.5Z',
        'M406 933.5C299.655 869.249 251.5 702.5 305.5 589C359.5 475.5 485.5 483.5 538 479C590.5 474.5 658.5 423.172 643.5 349.672C628.5 276.172 547.5 149 681 67.9999C814.5 -13 972.5 89 1091 133C1209.5 177 1371.5 214.5 1377 327.5C1382.5 440.5 1311.5 547.5 1173 529C1034.5 510.5 813 530 835 646C857 762 838 907.5 761.5 947.5C685 987.5 512.344 997.752 406 933.5Z'],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [{
        color: '#000000',
        duration: 500,
        easing: 'linear'
      }, {
        color: '#5C92D7',
        duration: 500,
        easing: 'linear'
      }],
      animation: {
        path: [{
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 300
        }, {
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 300
        }],
        svg: {
          duration: 2000,
          easing: 'easeOutElastic'
        }
      }
    },
    {
      path: ['M1198.5 827C1125.23 803.596 899 755.5 845 664.5C791 573.5 778 495 845 378.5C912 262 1175 156.5 1283.5 223.5C1392 290.5 1290.5 399.5 1384.5 441C1478.5 482.5 1625 256 1821.5 320C2018 384 1888.4 744.369 1848.5 827C1808.6 909.631 1581.5 967 1464.5 936C1347.5 905 1271.77 850.404 1198.5 827Z',
        "M1559.5 856C1526 988 1345.5 1019.5 1230.5 1047C1115.5 1074.5 851.5 1092.5 707 1092.5C562.5 1092.5 341.5 1061.5 203 998.5C64.5003 935.5 12.5001 893.5 -60.9999 770C-134.5 646.5 -170 403.5 -98.5 286C-27 168.5 123.5 47.6379 400 28.0002C676.5 8.36245 788.001 141.5 855.001 256.5C922.001 371.5 969 546 1054.5 581.5C1140 617 1267.81 543.5 1397.91 562.5C1528 581.5 1593 724 1559.5 856Z"],
      pathAlt: ['M1256.97 220.643C1113.97 165.643 933.971 275.643 872.971 344.643C698.971 526.143 848.823 712.861 975.295 826.249C1120.29 956.249 1598.47 993.643 1743.47 951.643C1888.47 909.643 1935.97 476.643 1846.47 354.143C1756.97 231.643 1541.47 426.643 1411.47 430.643C1281.47 434.643 1399.97 275.643 1256.97 220.643Z',
        "M845.295 258.249C768.703 98.7489 483.295 -12.7511 228.795 65.7489C-25.7051 144.249 -137.205 372.249 -75.2051 632.749C-13.2051 893.249 263.795 1018.75 580.295 1051.25C896.795 1083.75 1354.29 1013.25 1461.79 949.249C1569.29 885.249 1614.79 785.749 1478.29 632.749C1341.79 479.749 1170.79 642.358 1066.29 612.249C912.295 567.877 921.886 417.749 845.295 258.249Z"],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [{
        color: '#1C2E74',
        duration: 500,
        easing: 'linear'
      }, {
        color: '#FFE394',
        duration: 500,
        easing: 'linear'
      }],
      animation: {
        path: [{
          duration: 2000,
          easing: 'easeOutElastic',
          elasticity: 600
        }, {
          duration: 2000,
          easing: 'easeOutElastic',
          elasticity: 600
        }],
        svg: {
          duration: 2500,
          easing: 'easeOutElastic'
        }
      }
    },
    {
      path: ['M1702.59 196.464C1803.75 238.131 1445.19 338.516 1484.03 374.802C1522.87 411.087 1942.7 274.103 2031.36 348.773C2120.01 423.442 1491.86 545.763 1656.79 568.634C1821.72 591.504 2085.96 538.612 1980.45 620.836C1874.94 703.059 1338.73 864.18 968.79 936.508C598.853 1008.84 192.376 1061.67 426.596 942.699C660.816 823.732 307.568 856.97 295.283 804.267C282.998 751.563 515.93 662.357 177.185 680.018C-161.561 697.679 164.279 562.874 467.765 450.349C771.25 337.825 1601.43 154.796 1702.59 196.464Z',
      "M577.803 1249.91C622.857 1090.87 684.032 937.839 593.432 839.946C502.832 742.052 514.415 584.312 599.221 444.279C684.028 304.246 645.552 198.718 577.803 31.9952C847.512 57.2031 1067.81 95.8236 1222.25 271.805C1376.69 447.786 1772.36 466.915 1981.27 535.45C2190.18 603.986 2225.16 714.244 1980.02 794.441C1734.87 874.637 1328.39 895.11 1209 976.943C1089.61 1058.78 937.398 1270.86 577.803 1249.91"],
      pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      scaleX: 1.5,
      scaleY: 1,
      rotate: -20,
      tx: 0,
      ty: -50,
      fill: [{
        color: '#FFE394',
        duration: 500,
        easing: 'linear'
      },{
        color: '#020A39',
        duration: 500,
        easing: 'linear'
      }],
      animation: {
        path: [{
          duration: 3000,
          easing: 'easeOutQuad',
          elasticity: 600
        },{
          duration: 3000,
          easing: 'easeOutQuad',
          elasticity: 600
        }],
        svg: {
          duration: 3000,
          easing: 'easeOutElastic'
        }
      }
    },
    {
      path: ['M39 844.5L8 489.5L716.75 372.75L1425.5 256L1800 426L1522.5 783L1151.62 798.375L509 826L39 844.5Z',
      "M1050.5 139L469.501 161.5L498.001 546L188 703.5L636 961L850.5 804.5L1065 648L1057.75 393.5L1050.5 139Z"],
      pathAlt: 'M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z',
      scaleX: 1.8,
      scaleY: 1.5,
      rotate: 0,
      tx: 250,
      ty: 50,
      fill: [{
        color: '#282faf',
        duration: 500,
        easing: 'linear'
      },{
        color: '#282faf',
        duration: 500,
        easing: 'linear'
      }], 
      animation: {
        path: [{
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        },{
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        }],
        svg: {
          duration: 2000,
          easing: 'easeOutExpo'
        }
      }
    },
    // footer shape:
    {
      path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      scaleX: 2.5,
      scaleY: 2,
      rotate: 0,
      tx: 0,
      ty: -50,
      fill: {
        color: '#282faf',
        duration: 500,
        easing: 'linear'
      },
      animation: {
        path: {
          duration: 3000,
          easing: 'easeOutQuad',
          elasticity: 600
        },
        svg: {
          duration: 3000,
          easing: 'easeOutElastic'
        }
      }
    }
  ];
  DOM.svg = document.querySelector('.morph');
  DOM.frontShapeEl = DOM.svg?.querySelector('.front-path');
  DOM.backShapeEl = DOM.svg?.querySelector('.back-path');

  // initShapeEl
  useEffect(() => {
    DOM.svg = document.querySelector('.morph');
    DOM.frontShapeEl = DOM.svg?.querySelector('.front-path');
    DOM.backShapeEl = DOM.svg?.querySelector('.back-path');
    anime.remove(DOM.svg);
    anime({
      targets: DOM.svg,
      duration: 1,
      easing: 'linear',
      scaleX: shapes[0].scaleX,
      scaleY: shapes[0].scaleY,
      translateX: shapes[0].tx + 'px',
      translateY: shapes[0].ty + 'px',
      rotate: shapes[0].rotate + 'deg'
    });

  }, []);
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

  // On step change
  useEffect(() => {
    anime.remove(DOM.frontShapeEl);
    anime.remove(DOM.backShapeEl);
    anime({
      targets: DOM.frontShapeEl,
      duration: shapes[step].animation.path[0].duration,
      easing: shapes[step].animation.path[0].easing,
      elasticity: shapes[step].animation.path[0].elasticity || 0,
      d: shapes[step].path[0],
      fill: {
        value: shapes[step].fill[0].color,
        duration: shapes[step].fill[0].duration,
        easing: shapes[step].fill[0].easing
      },
      complete: () => {
      }
    });
    anime({
      targets: DOM.backShapeEl,
      duration: shapes[step].animation.path[1].duration,
      easing: shapes[step].animation.path[1].easing,
      elasticity: shapes[step].animation.path[1].elasticity || 0,
      d: shapes[step].path[1],
      fill: {
        value: shapes[step].fill[1].color,
        duration: shapes[step].fill[1].duration,
        easing: shapes[step].fill[1].easing
      },
      complete: function () {
      }
    });

    anime.remove(DOM.svg);
    anime({
      targets: DOM.svg,
      duration: shapes[step].animation.svg.duration,
      easing: shapes[step].animation.svg.easing,
      elasticity: shapes[step].animation.svg.elasticity || 0,
      scaleX: shapes[step].scaleX,
      scaleY: shapes[step].scaleY,
      translateX: shapes[step].tx + 'px',
      translateY: shapes[step].ty + 'px',
      rotate: shapes[step].rotate + 'deg'
    });
  }, [step]);

  // Scroll monitor callbacks for section idx
  const getCallbacks = (idx) => {
    return {
      fullyEnterViewport: () => {
        if (!isOnPage[idx]) {
          isOnPage[idx] = true;
          console.log(idx + "enters");
          setStep(idx);
        }
      },
      exitViewport: (watcher) => {
        if (isOnPage[idx]) {
          isOnPage[idx] = false;
          const pos = !watcher.isAboveViewport ? idx - 1 : idx + 1;
          if (pos <= NUM_SECTIONS && step !== pos) {
            console.log("exit to " + pos);
            setStep(pos);
          }
        }
      }
    }
  }

  return (
    <Background>
      <Header></Header>
      <MorphWrap className="morph-wrap">
        <AnimatedSVG frontPath={shapes[0].pathAlt[0]} backPath={shapes[0].pathAlt[1]} />
      </MorphWrap>
      <Landing callbacks={getCallbacks(0)} />
      <Values callbacks={getCallbacks(1)} />
      <Landing callbacks={getCallbacks(2)} />
      <Values callbacks={getCallbacks(3)} />
    </Background>
  );
}
export default IndexPage;