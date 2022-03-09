import { css, Global } from '@emotion/react'
import React from 'react'

export const GlobalStyle: React.FC = () => (
	<Global
		styles={css`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
			}

			:root {
				padding: 0;
				margin: 0;
				width: 100vw;
				height: 100vh;
				max-height: 100vh;
				height: 100%;
			}

			body {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				width: 100vw;
				height: 100vh;
				max-height: 100vh;
				height: 100%;

				overflow-y: auto;
				scroll-behavior: smooth;

				font-size: clamp(100%, 1rem + 2vw, 18px);
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				background-color: #fafafa;
				scrollbar-gutter: stable;
			}
			.no-select {
				user-select: none;
				-moz-user-select: none;
				-webkit-user-select: none;
			}
		`}
	/>
)
