import React from 'react';

const MinimizeButton = (props: any) => {
	const minimizePlayer = () => {
		props.setMinimized(true);
	};

	return (
		<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='50px'
			height='50px'
			viewBox='0,0,256,256'
			onClick={minimizePlayer}
		>
			<g
				fill='#ffffff'
				fillRule='nonzero'
				stroke='none'
				strokeWidth='1'
				strokeLinecap='butt'
				strokeLinejoin='miter'
				strokeMiterlimit='10'
				strokeDasharray=''
				strokeDashoffset='0'
				fontFamily='none'
				fontWeight='none'
				fontSize='none'
				textAnchor='none'
				style={{ mixBlendMode: 'normal' }}
			>
				<g transform='scale(5.12,5.12)'>
					<path d='M5.97852,3.98047c-0.81349,0.00101 -1.54534,0.49459 -1.85108,1.24844c-0.30574,0.75385 -0.12447,1.61777 0.4585,2.18515l10.58594,10.58594h-5.17187c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h12v-12c0.00739,-0.54026 -0.2041,-1.06052 -0.58634,-1.44239c-0.38224,-0.38187 -0.90271,-0.59286 -1.44296,-0.58495c-1.1038,0.01618 -1.9858,0.92353 -1.9707,2.02734v5.17188l-10.58594,-10.58594c-0.37701,-0.38755 -0.89487,-0.60596 -1.43555,-0.60547zM43.96094,3.98047c-0.5196,0.01548 -1.01276,0.23264 -1.375,0.60547l-10.58594,10.58594v-5.17187c0.00739,-0.54026 -0.2041,-1.06052 -0.58634,-1.44239c-0.38224,-0.38187 -0.90271,-0.59286 -1.44296,-0.58495c-1.1038,0.01618 -1.9858,0.92353 -1.9707,2.02734v12h12c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175h-5.17187l10.58594,-10.58594c0.59152,-0.57498 0.76938,-1.45413 0.44787,-2.21383c-0.32151,-0.75969 -1.07643,-1.24409 -1.90099,-1.21977zM10,28c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h5.17188l-10.58594,10.58594c-0.52247,0.50163 -0.73294,1.24653 -0.55022,1.94741c0.18271,0.70088 0.73006,1.24822 1.43094,1.43094c0.70088,0.18271 1.44578,-0.02775 1.94741,-0.55022l10.58594,-10.58594v5.17188c-0.0102,0.72127 0.36875,1.39216 0.99175,1.75578c0.623,0.36361 1.39351,0.36361 2.01651,0c0.623,-0.36361 1.00195,-1.0345 0.99175,-1.75578v-12zM28,28v12c-0.0102,0.72127 0.36875,1.39216 0.99175,1.75578c0.623,0.36361 1.39351,0.36361 2.01651,0c0.623,-0.36361 1.00195,-1.0345 0.99175,-1.75578v-5.17187l10.58594,10.58594c0.50163,0.52248 1.24653,0.73295 1.94742,0.55024c0.70088,-0.18271 1.24823,-0.73006 1.43094,-1.43094c0.18271,-0.70088 -0.02776,-1.44578 -0.55024,-1.94742l-10.58594,-10.58594h5.17188c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z'></path>
				</g>
			</g>
		</svg>
	);
};

const MaximizeButton = (props: any) => {
	const maximizePlayer = () => {
		props.setMinimized(false);
	};

	return (
		<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='50px'
			height='50px'
			viewBox='0,0,256,256'
			onClick={maximizePlayer}
		>
			<g
				fill='#ffffff'
				fillRule='nonzero'
				stroke='none'
				strokeWidth='1'
				strokeLinecap='butt'
				strokeLinejoin='miter'
				strokeMiterlimit='10'
				strokeDasharray=''
				strokeDashoffset='0'
				fontFamily='none'
				fontWeight='none'
				fontSize='none'
				textAnchor='none'
				style={{ mixBlendMode: 'normal' }}
			>
				<g transform='scale(5.12,5.12)'>
					<path d='M5,5v11c-0.0102,0.72127 0.36875,1.39216 0.99175,1.75578c0.623,0.36361 1.39351,0.36361 2.01651,0c0.623,-0.36361 1.00195,-1.0345 0.99175,-1.75578v-4.17187l9.58594,9.58594c0.50163,0.52248 1.24653,0.73295 1.94742,0.55024c0.70088,-0.18271 1.24823,-0.73006 1.43094,-1.43094c0.18271,-0.70088 -0.02776,-1.44578 -0.55024,-1.94742l-9.58594,-9.58594h4.17188c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM34,5c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h4.17188l-9.58594,9.58594c-0.52248,0.50163 -0.73295,1.24653 -0.55024,1.94742c0.18271,0.70088 0.73006,1.24823 1.43094,1.43094c0.70088,0.18271 1.44578,-0.02776 1.94742,-0.55024l9.58594,-9.58594v4.17188c-0.0102,0.72127 0.36875,1.39216 0.99175,1.75578c0.623,0.36361 1.39351,0.36361 2.01651,0c0.623,-0.36361 1.00195,-1.0345 0.99175,-1.75578v-11zM19.96094,27.98047c-0.5196,0.01548 -1.01276,0.23264 -1.375,0.60547l-9.58594,9.58594v-4.17187c0.00739,-0.54026 -0.2041,-1.06052 -0.58634,-1.44239c-0.38224,-0.38187 -0.90271,-0.59286 -1.44296,-0.58495c-1.1038,0.01618 -1.9858,0.92353 -1.9707,2.02734v11h11c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175h-4.17187l9.58594,-9.58594c0.59152,-0.57498 0.76938,-1.45413 0.44787,-2.21382c-0.32151,-0.75969 -1.07643,-1.24408 -1.90099,-1.21977zM29.97852,27.98047c-0.81349,0.00101 -1.54533,0.49459 -1.85108,1.24844c-0.30574,0.75385 -0.12447,1.61777 0.4585,2.18515l9.58594,9.58594h-4.17187c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h11v-11c0.00739,-0.54026 -0.2041,-1.06052 -0.58634,-1.44239c-0.38224,-0.38187 -0.90271,-0.59286 -1.44296,-0.58495c-1.1038,0.01618 -1.9858,0.92353 -1.9707,2.02734v4.17188l-9.58594,-9.58594c-0.37701,-0.38755 -0.89487,-0.60596 -1.43555,-0.60547z'></path>
				</g>
			</g>
		</svg>
	);
};

export { MinimizeButton, MaximizeButton };