import React from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Maincont from "../include/Maincont.jsx";

export const Main = () => {
	return (
		<>
			<Header />
			<Contents>
				<Maincont />
			</Contents>
			<Footer />
		</>
	);
};
