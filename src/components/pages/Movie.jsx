import React from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import Content from "../layout/Content";

export const Movie = () => {
	return (
		<>
			<Header />
			<Contents>
				<Title title={["movie", "referce api"]} />
				<AboutCont />
				<Content />
			</Contents>
			<Footer />
		</>
	);
};
