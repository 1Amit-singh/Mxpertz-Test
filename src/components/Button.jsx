import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ className, text, onClick }) => {
	return (
		<>
			<button
				className={twMerge(
					"px-5 py-3 bg-btn-yellow rounded-full min-w-[100px]",
					className
				)}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
