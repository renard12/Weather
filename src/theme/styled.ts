/**
 * Styled component utilities
 * Creates components with theme-aware styling using design tokens
 */

import { theme } from './tokens';

// Style utilities that use CSS variables and reference theme tokens
// These utilities provide Tailwind class names that map to our design tokens
// For direct token values, use the helper functions at the bottom of this file
export const styled = {
  // Typography - maps to theme.fontSize tokens
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    'sm:sm': 'sm:text-sm',
    'sm:3xl': 'sm:text-3xl',
    white: 'text-white',
  },

  // Font weights - maps to theme.fontWeight tokens
  font: {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
    mono: 'font-mono',
  },

  // Colors
  color: {
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-secondary-600 dark:text-secondary-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-warning-600 dark:text-warning-400',
    danger: 'text-danger-600 dark:text-danger-400',
    info: 'text-info-600 dark:text-info-400',
    muted: 'text-muted-foreground',
    heading: 'text-gray-900 dark:text-white',
    label: 'text-gray-700 dark:text-gray-300',
    placeholder: 'placeholder-gray-500 dark:placeholder-gray-400',
    icon: 'text-gray-500 dark:text-gray-400',
    error: 'text-red-600 dark:text-red-400',
    white: 'text-white',
    current: 'text-current',
    yellow500: 'text-yellow-500',
    yellow800: 'text-yellow-800 dark:text-yellow-200',
    orange500: 'text-orange-500',
    orange800: 'text-orange-800 dark:text-orange-200',
    red500: 'text-red-500',
    red800: 'text-red-800 dark:text-red-200',
    blue600: 'text-blue-600 dark:text-blue-400',
    blue800: 'text-blue-800 dark:text-blue-200',
    blue900: 'text-blue-900 dark:text-blue-300',
    gray400: 'text-gray-400',
    gray500: 'text-gray-500 dark:text-gray-400',
    gray600: 'text-gray-600 dark:text-gray-400',
    gray800: 'text-gray-800 dark:text-gray-200',
    red600: 'text-red-600 dark:text-red-400',
  },

  // Backgrounds
  bg: {
    primary: 'bg-primary-600 dark:bg-primary-500',
    secondary: 'bg-secondary-100 dark:bg-secondary-800',
    success: 'bg-success-100 dark:bg-success-900',
    warning: 'bg-warning-100 dark:bg-warning-900',
    danger: 'bg-danger-100 dark:bg-danger-900',
    info: 'bg-info-100 dark:bg-info-900',
    card: 'bg-card',
    muted: 'bg-muted',
    white: 'bg-white dark:bg-gray-800',
    glass: 'bg-white/80 dark:bg-gray-800/80',
    skeleton: 'bg-gray-200 dark:bg-gray-700',
    gray50: 'bg-gray-50 dark:bg-gray-800',
    gray100: 'bg-gray-100 dark:bg-gray-700',
    gray200: 'bg-gray-200 dark:bg-gray-700',
    yellow50: 'bg-yellow-50 dark:bg-yellow-900/20',
    yellow200: 'bg-yellow-200 dark:bg-yellow-900/50',
    orange50: 'bg-orange-50 dark:bg-orange-900/20',
    orange200: 'bg-orange-200 dark:bg-orange-900/50',
    red50: 'bg-red-50 dark:bg-red-900/20',
    red200: 'bg-red-200 dark:bg-red-900/50',
    blue50: 'bg-blue-50 dark:bg-blue-900/20',
  },

  // Borders - uses theme.colors tokens for border colors
  border: {
    default: 'border border-border',
    primary: 'border-primary-500 dark:border-primary-400',
    secondary: 'border-secondary-300 dark:border-secondary-600',
    success: 'border-success-500 dark:border-success-400',
    warning: 'border-warning-500 dark:border-warning-400',
    danger: 'border-danger-500 dark:border-danger-400',
    transparent: 'border border-transparent',
    base: 'border',
    input: 'border border-gray-300 dark:border-gray-600',
    error: 'border-red-500',
    yellow200: 'border border-yellow-200 dark:border-yellow-800',
    red200: 'border border-red-200 dark:border-red-800',
    l4: 'border-l-4',
    red500: 'border-red-500',
    orange500: 'border-orange-500',
    yellow500: 'border-yellow-500',
  },

  // Spacing - maps to theme.spacing tokens
  spacing: {
    p: {
      0: 'p-0',
      1: 'p-1',
      2: 'p-2',
      3: 'p-3',
      4: 'p-4',
      5: 'p-5',
      6: 'p-6',
      8: 'p-8',
    },
    mb: {
      0: 'mb-0',
      1: 'mb-1',
      2: 'mb-2',
      3: 'mb-3',
      4: 'mb-4',
      6: 'mb-6',
      'sm:8': 'sm:mb-8',
      'lg:0': 'lg:mb-0',
    },
    mt: {
      1: 'mt-1',
      2: 'mt-2',
      3: 'mt-3',
      4: 'mt-4',
      6: 'mt-6',
    },
    px: {
      0: 'px-0',
      1: 'px-1',
      2: 'px-2',
      3: 'px-3',
      4: 'px-4',
      5: 'px-5',
      6: 'px-6',
      8: 'px-8',
    },
    py: {
      0: 'py-0',
      1: 'py-1',
      1.5: 'py-1.5',
      2: 'py-2',
      3: 'py-3',
      4: 'py-4',
      8: 'py-8',
      'sm:8': 'sm:py-8',
    },
    m: {
      0: 'm-0',
      1: 'm-1',
      2: 'm-2',
      3: 'm-3',
      4: 'm-4',
      5: 'm-5',
      6: 'm-6',
      8: 'm-8',
    },
    mx: {
      0: 'mx-0',
      1: 'mx-1',
      1.5: 'mx-1.5',
      2: 'mx-2',
      2.5: 'mx-2.5',
      3: 'mx-3',
      4: 'mx-4',
    },
    mr: {
      1: 'mr-1',
      1.5: 'mr-1.5',
      2: 'mr-2',
      2.5: 'mr-2.5',
    },
    ml: {
      1: 'ml-1',
      1.5: 'ml-1.5',
      2: 'ml-2',
      2.5: 'ml-2.5',
    },
    pl: {
      3: 'pl-3',
      10: 'pl-10',
    },
    pr: {
      3: 'pr-3',
      10: 'pr-10',
      24: 'sm:pr-24',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      'sm:3': 'sm:gap-3',
      'sm:4': 'sm:gap-4',
      'sm:6': 'sm:gap-6',
      'lg:6': 'lg:gap-6',
    },
  },

  // Border radius - maps to theme.borderRadius tokens
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  },

  // Shadows - maps to theme.boxShadow tokens
  shadow: {
    sm: 'shadow-sm',
    default: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    none: 'shadow-none',
    hover: {
      sm: 'hover:shadow-sm',
      md: 'hover:shadow-md',
      lg: 'hover:shadow-lg',
      xl: 'hover:shadow-xl',
      none: 'hover:shadow-none',
    },
    active: {
      sm: 'active:shadow-sm',
      md: 'active:shadow-md',
      lg: 'active:shadow-lg',
      none: 'active:shadow-none',
    },
  },

  // Transitions - uses theme.transition tokens for durations
  transition: {
    fast: 'transition-all duration-150',
    base: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    opacity200: 'transition-opacity duration-200',
    all200: 'transition-all duration-200',
    all1000: 'transition-all duration-1000',
    slow: 'transition-all duration-500',
    slower: 'transition-all duration-700',
  },

  // Line heights - maps to theme.lineHeight tokens
  leading: {
    3: 'leading-3',
    4: 'leading-4',
    5: 'leading-5',
    6: 'leading-6',
    7: 'leading-7',
    8: 'leading-8',
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  },

  // Opacity
  opacity: {
    0: 'opacity-0',
    25: 'opacity-25',
    50: 'opacity-50',
    60: 'opacity-60',
    75: 'opacity-75',
    80: 'opacity-80',
    90: 'opacity-90',
    100: 'opacity-100',
  },

  // Size utilities
  size: {
    w3: 'w-3',
    h3: 'h-3',
    w4: 'w-4',
    h4: 'h-4',
    w5: 'w-5',
    h5: 'h-5',
    w8: 'w-8',
    h8: 'h-8',
    w12: 'w-12',
    h12: 'h-12',
    w16: 'w-16',
    h16: 'h-16',
    w20: 'w-20',
    h20: 'h-20',
  },

  // Min heights
  minHeight: {
    8: 'min-h-8',
    10: 'min-h-10',
    12: 'min-h-12',
  },

  // Layout utilities
  layout: {
    inline: 'inline-flex',
    flex: 'flex',
    flexCol: 'flex-col',
    flexRow: 'flex-row',
    flex1: 'flex-1',
    flexWrap: 'flex-wrap',
    itemsCenter: 'items-center',
    justifyCenter: 'justify-center',
    justifyBetween: 'justify-between',
    relative: 'relative',
    absolute: 'absolute',
    insetZero: 'inset-0',
    overflowHidden: 'overflow-hidden',
    overflowYAuto: 'overflow-y-auto',
    grid: 'grid',
    gridCols1: 'grid-cols-1',
    gridCols2: 'grid-cols-2',
    smGridCols2: 'sm:grid-cols-2',
    mdGridCols3: 'md:grid-cols-3',
    lgGridCols3: 'lg:grid-cols-3',
    xlGridCols4: 'xl:grid-cols-4',
    lgFlexRow: 'lg:flex-row',
    lgItemsCenter: 'lg:items-center',
    lgJustifyBetween: 'lg:justify-between',
    smFlexRow: 'sm:flex-row',
    block: 'block',
    hidden: 'hidden',
    smFlex: 'sm:flex',
    wFull: 'w-full',
    smMaxWMd: 'sm:max-w-md',
    maxW4xl: 'max-w-4xl',
    maxW7xl: 'max-w-7xl',
    mxAuto: 'mx-auto',
    insetY0: 'inset-y-0',
    left0: 'left-0',
    right0: 'right-0',
    topFull: 'top-full',
    pointerEventsNone: 'pointer-events-none',
    spaceY2: 'space-y-2',
    spaceY4: 'space-y-4',
    spaceX4: 'space-x-4',
    smSpaceY6: 'sm:space-y-6',
    zIndex50: 'z-50',
    maxH80: 'max-h-80',
    minHScreen: 'min-h-screen',
    textLeft: 'text-left',
    textCenter: 'text-center',
    textRight: 'text-right',
    listDecimal: 'list-decimal',
    listInside: 'list-inside',
    pt20: 'pt-20',
  },

  // Interactive utilities
  interactive: {
    focusOutline: 'focus:outline-none',
    disabledCursor: 'disabled:cursor-not-allowed',
    selectNone: 'select-none',
    touchManipulation: 'touch-manipulation',
    whitespaceNowrap: 'whitespace-nowrap',
    srOnly: 'sr-only',
    notSrOnly: 'sm:not-sr-only',
    lineThrough: 'line-through',
    underline: 'underline',
    group: 'group',
    groupHoverOpacity100: 'group-hover:opacity-100',
    hoverTextGray700: 'hover:text-gray-700 dark:hover:text-gray-200',
    hoverTextRed700: 'hover:text-red-700 dark:hover:text-red-300',
    hoverBgGray100: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  },

  // Animation utilities
  animation: {
    pulse: 'animate-pulse',
    shimmer: 'animate-shimmer',
    spin: 'animate-spin',
    fadeIn: 'animate-fade-in',
    none: '',
  },

  // Visual effects
  effects: {
    backdropBlur: 'backdrop-blur-md',
  },

  // Background opacity
  bgOpacity: {
    0: 'bg-opacity-0',
    100: 'bg-opacity-100',
    hover: 'hover:bg-opacity-100',
  },

  // Gradient utilities
  gradient: {
    toBr: 'bg-gradient-to-br',
    fromBlue50: 'from-blue-50',
    toBlue100: 'to-blue-100',
    darkFromGray900: 'dark:from-gray-900',
    darkToGray800: 'dark:to-gray-800',
  },

  // Ring styles for focus states
  ring: {
    primary: 'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
    secondary: 'focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
    danger: 'focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
    gray: 'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
    input: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    inputError: 'focus:ring-red-500',
    blue: 'ring-2 ring-blue-500',
  },

  // Button-specific composite styles
  button: {
    primary: {
      base: 'bg-primary-600 dark:bg-primary-500 text-white',
      hover: 'hover:bg-primary-700 dark:hover:bg-primary-600',
      active: 'active:bg-primary-800 dark:active:bg-primary-700',
      disabled: 'disabled:bg-primary-300 dark:disabled:bg-primary-800 disabled:opacity-60',
    },
    secondary: {
      base: 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100',
      hover: 'hover:bg-secondary-200 dark:hover:bg-secondary-700',
      active: 'active:bg-secondary-300 dark:active:bg-secondary-600',
      disabled: 'disabled:bg-secondary-50 dark:disabled:bg-secondary-900 disabled:opacity-60',
    },
    ghost: {
      base: 'bg-transparent text-muted-foreground',
      hover: 'hover:bg-muted hover:bg-opacity-100',
      active: 'active:bg-gray-200 dark:active:bg-gray-700',
      disabled: 'disabled:text-gray-400 dark:disabled:text-gray-600 disabled:opacity-50',
      border: 'border-transparent hover:border-gray-200 dark:hover:border-gray-700',
    },
    danger: {
      base: 'bg-danger-600 dark:bg-danger-500 text-white',
      hover: 'hover:bg-danger-700 dark:hover:bg-danger-600',
      active: 'active:bg-danger-800 dark:active:bg-danger-700',
      disabled: 'disabled:bg-danger-300 dark:disabled:bg-danger-800 disabled:opacity-60',
    },
  },
};

// Theme-aware class builder
export const themeClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Get theme color value
export const getThemeColor = (color: keyof typeof theme.colors, shade?: string | number): string => {
  const colorValue = theme.colors[color];
  if (typeof colorValue === 'string') {
    return colorValue;
  }
  if (typeof colorValue === 'object' && shade) {
    return colorValue[shade as keyof typeof colorValue] || '';
  }
  return '';
};

// Get theme spacing value
export const getThemeSpacing = (size: keyof typeof theme.spacing): string => {
  return theme.spacing[size];
};

// Get theme font size
export const getThemeFontSize = (size: keyof typeof theme.fontSize): string => {
  return theme.fontSize[size];
};

// Get theme font weight
export const getThemeFontWeight = (weight: keyof typeof theme.fontWeight): string => {
  return theme.fontWeight[weight];
};

// Get theme border radius
export const getThemeBorderRadius = (size: keyof typeof theme.borderRadius): string => {
  return theme.borderRadius[size];
};

// Get theme shadow
export const getThemeShadow = (size: keyof typeof theme.boxShadow): string => {
  return theme.boxShadow[size];
};

// Get theme transition duration
export const getThemeTransition = (speed: keyof typeof theme.transition): string => {
  return theme.transition[speed];
};

// Get theme breakpoint
export const getThemeBreakpoint = (size: keyof typeof theme.breakpoints): string => {
  return theme.breakpoints[size];
};

// Get theme z-index
export const getThemeZIndex = (level: keyof typeof theme.zIndex): string => {
  return theme.zIndex[level];
};