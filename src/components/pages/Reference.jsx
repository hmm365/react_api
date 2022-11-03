import React from "react";
import { useState, useEffect } from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Title from "../layout/Title";
import RaferCont from "../include/RaferCont";
import Content from "../layout/Content";

//클래스형 컴퍼넌트 / 함수형 컴퍼넌트 --> 리엑트 훅
//변수 : 저장, 추가 , 변경 --> 자동

export const Reference = () => {
	const [references, setReferences] = useState([]);

	useEffect(() => {
		fetch("https://hmm365.github.io/react_api/src/utils/reference.json")
			.then(response => response.json())
			.then(result => console.log(result))
			// .then(result => setReferences(result.data.cssRefer))
			.catch(error => console.log("error", error));
	}, []);

	return (
		<>
			<Header />
			<Contents>
				<Title title={["Reference", "Book"]} />
				<RaferCont references={references} />
				<Content />
			</Contents>
			<Footer />
		</>
	);
};
