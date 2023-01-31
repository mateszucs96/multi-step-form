import React from 'react';

type Props = {
	title: string;
	info: string;
};

const SectionHeading = ({ title, info }: Props) => {
	return (
		<div className="">
			<h1>{title}</h1>
			<p>{info}</p>
		</div>
	);
};

export default SectionHeading;
