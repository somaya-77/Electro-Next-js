'use client'

// import { useMediaQuery } from 'react-responsive';
// const breakpoints = {
// 	xs: '(max-width: 992px)',
// 	lg: '(min-width: 993px)',
// };

// type Breakpoint = keyof typeof breakpoints;

// interface MediaQueryResults {
// 	xs: boolean;
// 	lg: boolean;
// }

// // Custom Hook
// const useResponsive = (): MediaQueryResults => {
// 	const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
// 		const breakpointKey = key as Breakpoint;
// 		acc[breakpointKey] = useMediaQuery({ query: breakpoints[breakpointKey] });
// 		return acc;
// 	}, {} as MediaQueryResults);

// 	return mediaQueries;
// };

// export default useResponsive;

import { useMediaQuery } from 'react-responsive';

const breakpoints = {
	xs: '(max-width: 992px)',
	lg: '(min-width: 993px)',
};

// type Breakpoint = keyof typeof breakpoints;

interface MediaQueryResults {
	xs: boolean;
	lg: boolean;
}

// Custom Hook
const useResponsive = (): MediaQueryResults => {
	const xs = useMediaQuery({ query: breakpoints.xs });
	const lg = useMediaQuery({ query: breakpoints.lg });

	return { xs, lg };
};

export default useResponsive;
