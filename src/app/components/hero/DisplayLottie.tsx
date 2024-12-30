"use client";

import { Component, Suspense } from "react";
import Lottie from "lottie-react";
import { PulseLoader } from "react-spinners";

interface DisplayLottieProps {
  animationData: any;
}

export default class DisplayLottie extends Component<DisplayLottieProps> {
  render() {
    const { animationData } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<PulseLoader />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
