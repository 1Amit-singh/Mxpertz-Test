import React from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const SinglePageCards = ({ para, image, className }) => {
	return (
		<div
			className={twMerge(
				`p-2 bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 rounded-xl mx-auto max-w-[250px] flex flex-col gap-2`,
				className
			)}
		>
			<img
				src={image}
				className="aspect-square overflow-hidden object-cover max-w-full rounded-lg"
			></img>
			<h1 className="text-sm">{para}</h1>
		</div>
	);
};

export default SinglePageCards;
