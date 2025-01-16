import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import DailyQuiz from "./pages/DailyQuiz";
import Genre from "./pages/Genre";
import Header from "./components/Header";
import SingleStory from "./pages/SingleStory";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-gradient-to-r from-bg-gradient-1 via-bg-gradient-2 to-bg-gradient-3 min-h-screen text-white">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/leaderboard" element={<LeaderBoard />} />
					<Route path="/daily-quiz" element={<DailyQuiz />} />
					<Route path="/genre" element={<Genre />} />
					<Route path="/story/:id" element={<SingleStory />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
