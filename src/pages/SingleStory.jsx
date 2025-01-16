import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SinglePageCards from "../components/SinglePageCards";

const SingleStory = () => {
	// https://mxpertztestapi.onrender.com/api/sciencefiction/{id}
	const [data, setData] = useState([]);
	const { id } = useParams();
	const [tab, setTab] = useState(null);
	const [currentImage, setCurrentImage] = useState(0);

	console.log(tab);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await axios.get(
					`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
				);
				if (response.status === 200) {
					setData(response.data);
					setTab(response.data.Wordexplore);
				}
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="px-[5%]">
			<h1 className="text-center text-3xl font-bold mb-10">
				{data?.Storyadvenure?.Storytitle}
			</h1>

			<div className="flex gap-4 w-full justify-center font-bold">
				<div>
					<Button
						text="Word Explore"
						className={`${
							tab === data?.Wordexplore
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2"
								: "bg-passive-color"
						}`}
						onClick={() => setTab(data?.Wordexplore)}
					/>
				</div>
				<div>
					<Button
						text="Story Advenure"
						onClick={() => setTab(data?.Storyadvenure)}
						className={`${
							tab === data?.Storyadvenure
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2"
								: "bg-passive-color"
						}`}
					/>
				</div>
				<div>
					<Button
						text="Brain Quest"
						onClick={() => setTab(data?.Brainquest)}
						className={`${
							tab === data?.Brainquest
								? "bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2"
								: "bg-passive-color"
						}`}
					/>
				</div>
			</div>

			<div className="flex gap-4 md:flex-row md:items-start flex-col items-center justify-center mt-10">
				<div className="flex flex-col gap-4">
					{data.Image && (
						<img
							src={`https://ik.imagekit.io/dev24/${data?.Image[currentImage]}`}
							className="aspect-square max-w-[400px]"
						/>
					)}

					<div className="flex gap-6 w-full justify-center">
						<button
							className="p-4 rounded-full aspect-square bg-passive-color text-white font-semibold text-xl bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 "
							onClick={() =>
								setCurrentImage(
									currentImage != 0 ? currentImage - 1 : 0
								)
							}
							disabled={currentImage === 0}
						>
							<IoIosArrowBack />
						</button>
						<button
							className="p-4 rounded-full aspect-square bg-passive-color text-white font-semibold text-xl bg-gradient-to-r from-cards-gradient-1 to-cards-gradient-2 "
							onClick={() =>
								setCurrentImage(
									currentImage <= data?.Image.length - 1
										? currentImage + 1
										: data?.Image.length - 1
								)
							}
							disabled={currentImage === data?.Image?.length - 1}
						>
							<IoIosArrowForward />
						</button>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-4 w-full">
					{tab &&
						tab === data?.Wordexplore &&
						tab.map((item, index) => (
							<div className="col-span-6 md:col-span-4 lg:col-span-2">
								<SinglePageCards
									para={item.Storyitext}
									image={`https://ik.imagekit.io/dev24/${item?.Storyimage[0]}`}
									className={"max-w-[200px] p-2"}
								/>
							</div>
						))}
					{tab && tab === data?.Storyadvenure && "Story Adventure"}
					{tab && tab === data?.Brainquest && "Brainquest"}
				</div>
			</div>
		</div>
	);
};

export default SingleStory;
