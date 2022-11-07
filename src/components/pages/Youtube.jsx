import React from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import Contact from "../layout/Contact";

export const Youtube = () => {
	return (
		<>
			<Header />
			<Contents>
				<Title title={["Youtube", "referce api"]} />
				<AboutCont />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
