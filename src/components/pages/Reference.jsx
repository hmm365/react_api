import React from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Title from "../layout/Title";
import RaferCont from "../include/RaferCont";
import Content from "../layout/Content";

export const Reference = () => {
	return (
		<>
			<Header />
			<Contents>
				<Title title={["Reference", "Book"]} />
				<RaferCont />
				<Content />
			</Contents>
			<Footer />
		</>
	);
};
