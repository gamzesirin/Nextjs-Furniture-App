import React from 'react'

const About = () => {
	return (
		<div className="flex flex-row items-center justify-center gap-32">
			<div className="w-[500px] flex flex-col items-start gap-5">
				<h1 className="text-4xl text-start font-semibold">Hakkımızda</h1>
				<p className="text-gray-500 text-justify">
					1990 yılında kurulan firmamız, 30 yılı aşkın süredir mobilya sektöründe hizmet vermektedir. Müşteri
					memnuniyeti odaklı çalışan firmamız, kaliteli ürünleri uygun fiyatlarla müşterilerine sunmaktadır.
				</p>
				<p className="text-gray-500 text-justify">
					Hizmetlerimiz arasında, mobilya satışı, mobilya montajı, mobilya tamiri, mobilya boyama, mobilya taşıma ve
					mobilya depolama hizmetleri bulunmaktadır.
				</p>
				<p className="text-gray-500 text-justify">
					Firmamız, müşterilerine en iyi hizmeti sunabilmek için, alanında uzman ve deneyimli personellerle
					çalışmaktadır. Müşteri memnuniyeti odaklı çalışan firmamız, müşterilerine en iyi hizmeti sunabilmek için, en
					iyi ürünleri en uygun fiyatlarla sunmaktadır.
				</p>
				<button className="bg-orange-400 text-white rounded-lg px-6 py-2 cursor-pointer">Daha Fazla</button>
			</div>
			<div className="flex flex-row gap-5">
				<div className="flex flex-col gap-5">
					<div className="bg-white text-orange-400 rounded-lg p-10 cursor-pointer flex flex-col items-center border-2 border-orange-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-16 h-16"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
							/>
						</svg>
						<p>Ücretsiz Teslimat</p>
					</div>
					<div className="bg-orange-400 text-white rounded-lg p-10 cursor-pointer flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-16 h-16"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
						</svg>
						<p>Kolay Kurulum</p>
					</div>
				</div>
				<div className="flex flex-col gap-5 pt-10">
					<div className="bg-orange-400 text-white rounded-lg p-10 cursor-pointer flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-16 h-16"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
							/>
						</svg>

						<p>Kaliteli Alışveriş</p>
					</div>
					<div className="bg-white text-orange-400 rounded-lg p-10 cursor-pointer flex flex-col items-center border-2 border-orange-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-16 h-16"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
							/>
						</svg>
						<p>Güvenli Ödeme</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
