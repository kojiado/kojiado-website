export const fadeUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const fadeDownAnimationVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}


export const fadeLeftUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    x: -100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { ease: [0.71,0.08,0.2,0.92], duration: 1 }
  },
  initial2: {
    opacity: 0,
  },
  animate2: {
    opacity: 1,
    transition: { ease: [0.71,0.08,0.2,0.92], duration: 1 }
  }
}

export const fadeRightUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { ease: [0.71,0.08,0.2,0.92], duration: 1 }
  },
  initial2: {
    opacity: 0,
  },
  animate2: {
    opacity: 1,
    transition: { ease: [0.71,0.08,0.2,0.92], duration: 1 }
  }
}

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}