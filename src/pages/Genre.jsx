import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Genre = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await axios.get(
					"https://mxpertztestapi.onrender.com/api/sciencefiction"
				);
				if (response.status === 200) {
					setData(response.data);
				}
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<div>
				<h1 className="text-4xl font-bold text-center">
					Science Fiction Stories
				</h1>

				<div className="flex gap-4 w-full justify-center mt-10">
					<Button text="New" className={"bg-btn-blue font-bold"} />
					<Button
						text="In Progress"
						className={"bg-btn-yellow font-bold"}
					/>
					<Button
						text="Completed"
						className={"bg-btn-green font-bold"}
					/>
					<Button
						text="Clear All"
						className={
							"bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 font-bold"
						}
					/>
				</div>

				{/* cards */}
				{data && data.length > 0 ? (
					<div className="grid grid-cols-12 gap-8	 px-[5%] mt-20">
						{data.slice(0, 15).map((item, index) => {
							return (
								<div
									className="col-span-6 md:col-span-4 lg:col-span-3"
									key={index}
								>
									<NavLink to={`/story/${item._id}`}>
										<Card
											title={item.Title}
											image={`https://ik.imagekit.io/dev24/${item?.Image[0]}`}
											btnText={item.Status}
										/>
									</NavLink>
								</div>
							);
						})}
					</div>
				) : (
					<div className="text-center mt-40">Loading...</div>
				)}
			</div>
		</>
	);
};

export default Genre;
