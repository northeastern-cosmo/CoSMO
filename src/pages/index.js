import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import anime from "animejs"
import { useScrollState } from 'scrollmonitor-hooks';

import Landing from "../components/landing"
import Values from "../components/values"
import AnimatedSVG from "../components/animated-svg"

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
  const [initShapeLoopStep, setShapeLoopStep] = useState(0);
  const DOM = {};
  const shapes = [
    {
      path: ["M796 431.133C947.361 312.834 886 116.219 1180.5 63.5C1475 10.7809 1853.5 686 1618.5 941.5C1445.28 1129.83 364 1126.87 303 851C237.12 553.064 644.638 549.432 796 431.133Z",
        "M397.287 690.828C300.035 658.527 308.005 494.986 427.882 451.084C569.882 399.079 661.882 560.584 599.382 632.084C563.114 673.575 600.121 707.776 604.83 764.712C585.228 797.217 572.903 810.262 549.549 844.778C519.828 826.366 488.423 820.125 473.641 809.267C449.29 763.832 467.133 714.027 397.287 690.828Z"],
      pathAlt: ["M796 431.133C947.361 312.834 886 116.219 1180.5 63.5C1475 10.7809 1853.5 686 1618.5 941.5C1445.28 1129.83 364 1126.87 303 851C237.12 553.064 644.638 549.432 796 431.133Z",
        "M397.287 690.828C300.035 658.527 308.005 494.986 427.882 451.084C569.882 399.079 661.882 560.584 599.382 632.084C563.114 673.575 600.121 707.776 604.83 764.712C585.228 797.217 572.903 810.262 549.549 844.778C519.828 826.366 488.423 820.125 473.641 809.267C449.29 763.832 467.133 714.027 397.287 690.828Z"],
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
      path: ['M1397.39 566.375C1374.79 495.743 1306.27 442.063 1225.75 403.216C1145.23 364.369 997.484 327.51 914.975 389.09C832.467 450.67 769.475 538.122 745.46 647.601C721.445 757.08 811.147 911.762 946.759 973.918C1082.37 1036.07 1267.43 990.87 1355.72 883.51C1444 776.15 1419.99 637.006 1397.39 566.375Z',
        'M1392.71 431.749C1293.76 585.321 1068.3 406.383 915.828 523.246C828.189 590.417 877.901 789.182 782.244 848.999C640.661 937.533 452.766 905.075 409.455 771.972C345.315 574.857 541.827 560.214 610.253 476.857C712.892 351.821 436.549 127.199 807.274 105.202C992.581 94.2064 1486.95 285.503 1392.71 431.749Z'],
      pathAlt: ['M1397.39 566.375C1374.79 495.743 1306.27 442.063 1225.75 403.216C1145.23 364.369 997.484 327.51 914.975 389.09C832.467 450.67 769.475 538.122 745.46 647.601C721.445 757.08 811.147 911.762 946.759 973.918C1082.37 1036.07 1267.43 990.87 1355.72 883.51C1444 776.15 1419.99 637.006 1397.39 566.375Z',
        'M1392.71 431.749C1293.76 585.321 1068.3 406.383 915.828 523.246C828.189 590.417 877.901 789.182 782.244 848.999C640.661 937.533 452.766 905.075 409.455 771.972C345.315 574.857 541.827 560.214 610.253 476.857C712.892 351.821 436.549 127.199 807.274 105.202C992.581 94.2064 1486.95 285.503 1392.71 431.749Z'],
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: [{
        color: '#FFFFFF',
        duration: 500,
        easing: 'linear'
      }, {
        color: '#5C92D7',
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
          duration: 2000,
          easing: 'easeOutElastic'
        }
      }
    },
    {
      path: ['M1256.97 220.643C1113.97 165.643 933.971 275.643 872.971 344.643C698.971 526.143 848.823 712.861 975.295 826.249C1120.29 956.249 1598.47 993.643 1743.47 951.643C1888.47 909.643 1935.97 476.643 1846.47 354.143C1756.97 231.643 1541.47 426.643 1411.47 430.643C1281.47 434.643 1399.97 275.643 1256.97 220.643Z',
        "M845.295 258.249C768.703 98.7489 483.295 -12.7511 228.795 65.7489C-25.7051 144.249 -137.205 372.249 -75.2051 632.749C-13.2051 893.249 263.795 1018.75 580.295 1051.25C896.795 1083.75 1354.29 1013.25 1461.79 949.249C1569.29 885.249 1614.79 785.749 1478.29 632.749C1341.79 479.749 1170.79 642.358 1066.29 612.249C912.295 567.877 921.886 417.749 845.295 258.249Z"],
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
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        }, {
          duration: 3000,
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
      path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      scaleX: 1.5,
      scaleY: 1,
      rotate: -20,
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
    },
    {
      path: 'M 247.6,239.6 C 174.3,404.5 245.5,601.9 358.5,624.3 471.5,646.6 569.1,611.6 659.7,655.7 750.4,699.7 1068,687.6 1153,534.4 1237,381.1 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 928.4,393.8 706.8,283.5 485.2,173.1 320.8,74.68 247.6,239.6 Z',
      pathAlt: 'M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z',
      scaleX: 1.8,
      scaleY: 1.5,
      rotate: 0,
      tx: 250,
      ty: 50,
      fill: {
        color: '#282faf',
        duration: 500,
        easing: 'linear'
      },
      animation: {
        path: {
          duration: 3000,
          easing: 'easeOutElastic',
          elasticity: 600
        },
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
  // initShapeLoop
  useEffect(() => {
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
  }, [initShapeLoopStep]);

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
      complete: function () {
        setShapeLoopStep(step);
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
        setShapeLoopStep(step);
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