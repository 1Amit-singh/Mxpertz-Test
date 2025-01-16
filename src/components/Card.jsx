import React from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const Card = ({ title, image, btnText, className }) => {
	// https://images.unsplash.com/photo-1735776327649-eeb6b6ed8829?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
	return (
		<div
			className={twMerge(
				`p-4 bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 rounded-xl mx-auto max-w-[300px] flex flex-col gap-2`,
				className
			)}
		>
			<img
				src={image}
				className="aspect-square overflow-hidden object-cover max-w-full rounded-lg"
			></img>
			<h1 className="font-semibold">{title}</h1>
			{btnText && (
				<Button
					text={btnText || "Demo"}
					className={"w-full py-1.5 font-semibold"}
				></Button>
			)}
		</div>
	);
};

export default Card;
