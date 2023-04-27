// import React from 'react';
// import { TransitionSpecs  } from "@react-navigation/stack";

interface CustomTransition {
/*   gestureEnabled: boolean;
  gestureDirection: 'horizontal' | 'vertical';
  transitionSpec: {
    open: any;
    close: any;
  }; */
  cardStyleInterpolator: ({
    current,
    next,
    layouts,
  }: {
    current: any;
    next?: any;
    layouts: any;
  }) => {
    cardStyle: {
      transform: [
        { translateX: any },
        { rotate: any },
        { scale: any },
      ];
    };
    opacity: any;
  };
}



const customTransition: CustomTransition = {
 
/*   gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.FadeInFromBottomAndroidSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  }, */
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    }
  }
}

export default customTransition
