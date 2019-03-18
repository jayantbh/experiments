import React, { lazy, PureComponent, Suspense, useLayoutEffect } from 'react';
import uuid from 'uuid/v4';

export const character = (letter: string = 'A', font: string = 'Product Sans') => {
	return lazy(() =>
		import(/* webpackMode: 'eager', webpackPreload: true */ `!@svgr/webpack!charset/${font}/${letter}.svg`));
};

interface CommonGenericLetterProps {
	fontSize?: number;
	staggerDuration?: number;
	delay?: number;
}

type GenericLetterProps = CommonGenericLetterProps & {
	font?: string,
};

type FallbackLetterProps = CommonGenericLetterProps & {
	id: string,
	index: number,
};

const FallbackLetter = ({ fontSize = 100, staggerDuration = 0, index, delay = 0, id }: FallbackLetterProps) => {
	useLayoutEffect(() => () => { setTimeout(() =>
		animate(document.getElementById(id), {
			staggerDuration: delay + staggerDuration * index,
		}),
	); });
	return (<div style={{ height: fontSize, width: fontSize / 1.2 }}/>);
};

type LetterProps = GenericLetterProps & {
	index?: number,
	letter: string,
};

export const Letter = ({
	index = 0, letter = 'A', font = 'Product Sans', fontSize = 100, staggerDuration = 0, delay = 0,
}: LetterProps) => {
	const Character = character(letter, font);
	const id = uuid();
	return (
		<Suspense
			fallback={
				<FallbackLetter
					fontSize={fontSize}
					staggerDuration={staggerDuration}
					delay={delay}
					id={id}
					index={index}
				/>
			}
		>
			<Character
				id={id}
				style={{ visibility: 'hidden' }}
				height={fontSize}
			/>
		</Suspense>
	);
};

type LineProps = GenericLetterProps & {
	text: string,
};

export const Line = ({ text = 'Hello', font = 'Product Sans', staggerDuration = 0, delay = 0 }: LineProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			{text.split('').map((char, i) => (
				<Letter
					key={i}
					index={i}
					letter={char}
					font={font}
					staggerDuration={staggerDuration}
					delay={delay}
				/>
			))}
		</div>
	);
};

function animate(el: HTMLElement | null, { staggerDuration = 0 } = {}) {
	if (!el) return;
	const paths = el.querySelectorAll('path');
	paths.forEach((path) => {
		setupPath(path);
		setTimeout(() => makePathVisible(el, path), staggerDuration);
	});
}

function setupPath(path: SVGPathElement) {
	const l = String(path.getTotalLength());
	path.style.strokeDashoffset = l;
	path.style.strokeDasharray = l;
}

function makePathVisible(el: HTMLElement, path: SVGPathElement) {
	el.style.visibility = 'visible';
	path.style.transition = 'stroke-dashoffset 2s';
	path.style.strokeDashoffset = '0';
}
