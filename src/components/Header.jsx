import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
	return (
		<header className="flex justify-between px-[5%] py-10">
			<div className="text-3xl font-semibold">BrainyLingo</div>
			<div className="flex gap-4">
				<div>
					<NavLink
						to={"/"}
						className={({ isActive, isPending }) =>
							isPending
								? "pending"
								: isActive
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 inline-block text-transparent bg-clip-text text-base font-semibold"
								: "text-base font-semibold"
						}
					>
						Home
					</NavLink>
				</div>
				<div>
					<NavLink
						to={"/leaderboard"}
						className={({ isActive, isPending }) =>
							isPending
								? "pending"
								: isActive
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 inline-block text-transparent bg-clip-text text-base font-semibold"
								: "text-base font-semibold"
						}
					>
						LeaderBoard
					</NavLink>
				</div>
				<div>
					<NavLink
						to={"/daily-quiz"}
						className={({ isActive, isPending }) =>
							isPending
								? "pending"
								: isActive
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 inline-block text-transparent bg-clip-text text-base font-semibold"
								: "text-base font-semibold"
						}
					>
						Daily Quiz
					</NavLink>
				</div>
				<div>
					<NavLink
						to={"/genre"}
						className={({ isActive, isPending }) =>
							isPending
								? "pending"
								: isActive
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 inline-block text-transparent bg-clip-text text-base font-semibold"
								: "text-base font-semibold"
						}
					>
						Genre
					</NavLink>
				</div>
			</div>
			<div className="p-0.5 bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 rounded-full">
				<Button text="Sign Out" className={"bg-passive-color"} />
			</div>
		</header>
	);
};

export default Header;
