import Image from 'next/image'
import React from 'react'
import bgImg from '../public/images/header.png'
import grup from '../public/images/grup.png'
import koltuk from '../public/images/koltuk.png'
import oda from '../public/images/oda.png'
import oda2 from '../public/images/oda2.png'
import urun from '../public/images/urun.png'

const Home = () => {
	return (
		<React.Fragment>
			<header className="border">
				<ul className="flex flex-wrap justify-center gap-20 p-5">
					<li>
						<a href="/home">Ana Sayfa</a>
					</li>
					<li>
						<a href="/about">Hakkımızda</a>
					</li>
					<li>
						<a href="/services">Hizmetler</a>
					</li>
					<li>
						<a href="/contact">İletişim</a>
					</li>
				</ul>
			</header>

			<div className="bg-hero-pattern bg-cover bg-center h-[784px] flex flex-row justify-center items-center text-white gap-60">
				<div className="w-96 flex flex-col flex-wrap items-start gap-5">
					<h1 className="text-2xl">Furniture</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur. At rhoncus etiam convallis ullamcorper sit. Velit pretium vitae
						molestie viverra nibh posuere.
					</p>
					<p>Lorem ipsum dolor sit amet consectetur. At rhoncus etiam convallis ullamcorper sit. Velit pretium vitae</p>
					<button className="bg-orange-400 text-white rounded-lg px-6 py-2 cursor-pointer">Read More</button>
				</div>
				<div>
					<h1 className="text-6xl">
						Make a room <br /> comfortable & <br /> elegant
					</h1>
				</div>
				<div className="flex flex-col gap-10">
					<h1 className="text-2xl">Featured</h1>
					<div className="relative">
						<Image src={koltuk} alt="featured" className="w-40" />
						<div className="shadow-2xl shadow-white bg-white opacity-80  rounded-xl text-black absolute top-10 left-20 p-10">
							<h2>Chair</h2>
							<p>$100</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 divide-x divide-gray-500 bg-gray-300 p-10 rounded-3xl w-[60%] mx-auto gap-10 relative bottom-16">
				<div>
					<h1 className="text-4xl text-center">7</h1>
					<p className="text-center">Years of experience</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">100+</h1>
					<p className="text-center">Happy customers</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">100+</h1>
					<p className="text-center">Happy customers</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">100+</h1>
					<p className="text-center">Happy customers</p>
				</div>
			</div>

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
							<p>Free Delivery</p>
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
							<p>Free Delivery2</p>
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

							<p>Free Delivery3</p>
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
							<p>Free Delivery4</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center gap-5 mt-10">
				<h1 className="text-2xl font-semibold">Oda Market</h1>
				<p className="text-center text-gray-500 w-[600px]">
					Lorem ipsum dolor sit amet consectetur. At rhoncus etiam convallis ullamcorper sit. Velit pretium vitae
					molestie viverra nibh posuere. Lorem ipsum dolor sit amet consectetur. At rhoncus etiam convallis ullamcorper
					sit.
				</p>
			</div>

			<div className="flex flex-col items-center gap-10 mt-10">
				<div className="flex items-center gap-10">
					<Image src={oda} alt="oda" />
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Bedroom</h1>
						<p className="text-gray-500">
							e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
							Enim nunc augue fringilla amet. Parturient ornare blandit fames auctor augue.
						</p>
					</div>
				</div>
				<div className="flex items-center gap-10">
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Bedroom</h1>
						<p className="text-gray-500">
							e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
							Enim nunc augue fringilla amet. Parturient ornare blandit fames auctor augue.
						</p>
					</div>
					<Image src={oda} alt="oda" />
				</div>
				<div className="flex items-center gap-10">
					<Image src={oda} alt="oda" />
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Bedroom</h1>
						<p className="text-gray-500">
							e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
							Enim nunc augue fringilla amet. Parturient ornare blandit fames auctor augue.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center gap-5 mt-10 pt-10 bg-slate-100">
				<h1 className="text-2xl font-semibold">Best Selling Products</h1>
				<p className="text-center text-gray-500 w-[600px]">
					e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
					Enim nunc augue fringilla amet. Parturient ornare blandit fames auctor augue.
				</p>
			</div>

			<div className="flex justify-center items-center h-screen bg-slate-100">
				<div className="grid grid-cols-4 gap-4 text-orange-500">
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Chair</h1>
						<div className="flex items-center gap-2">
							<p>$100</p>
							<p className="text-xs line-through opacity-50">$200</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center gap-20 p-16">
				<div className="flex flex-col gap-5">
					<h1 className="text-4xl">
						The Best Furniture <br /> Manufacturer Of Your Choice
					</h1>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur. <br /> At rhoncus etiam convallis ullamcorper sit. Velit pretium
						vitae <br /> molestie viverra nibh posuere.
					</p>
				</div>
				<div className="flex flex-col items-center gap-5">
					<Image src={grup} alt="grup" />
					<div className="flex flex-col items-center gap-5">
						<h1 className="text-4xl">Interior Design By Us</h1>
						<p className="text-gray-500 w-[500px] text-center">
							Lorem ipsum dolor sit amet consectetur. At rhoncus etiam convallis ullamcorper sit. Velit pretium vitae.
						</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-10">
				<div className="flex flex-col gap-5">
					<h1 className="text-4xl font-bold">What People Are Saying About Us</h1>
					<div className="flex gap-4">
						<Image src={bgImg} alt="bgImg" width={50} height={50} className="rounded-full" />
						<div>
							<h1 className="font-semibold">John Doe</h1>
							<p className="text-sm text-gray-500">Proje Yöneticisi</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p>
							“They are have a perfect touch for make something so <br /> professional ,interest and useful for a lot of
							people .”
						</p>
						<div>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={null}
									stroke="green"
									className="w-[53px] h-[53px]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</button>
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="green"
									viewBox="0 0 24 24"
									strokeWidth={null}
									stroke="white"
									className="w-14 h-14"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<Image src={oda2} alt="oda2" />
			</div>

			<div className="flex flex-col items-end justify-center gap-5 mt-10 bg-footer-texture bg-cover bg-center h-[400px] text-white p-20">
				<div className="flex flex-col gap-5 p-20">
					<h1 className="text-6xl">
						Get more discound <br /> Off your order
					</h1>
					<p className="text-3xl">Join our malinig list</p>

					<div className="flex gap-3">
						<input type="text" placeholder="Enter your email" className="border-2 rounded-lg p-2 outline-none" />
						<button className="bg-orange-400 text-white rounded-lg px-6 py-2 cursor-pointer">Subscribe</button>
					</div>
				</div>
			</div>

			<footer className="bg-gray-400 text-white">
				<div className="flex justify-around p-10">
					<div className="text-3xl">Logo</div>

					<ul className="flex gap-2">
						<li>
							<a href="#">home</a>
						</li>
						<li>
							<a href="#">about</a>
						</li>
						<li>
							<a href="#">service</a>
						</li>
						<li>
							<a href="#">contact</a>
						</li>
						<li>
							<a href="#">product</a>
						</li>
					</ul>

					<div className="flex gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
							<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
								clipRule="evenodd"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
								clipRule="evenodd"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<div className="border-[0.5px] border-white "></div>
				<ul className="flex justify-center gap-3 p-10">
					<li>
						<a href="#">Facebook</a>
					</li>
					<li>
						<a href="#">İnstagram</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
					<li>
						<a href="#">Linkedin</a>
					</li>
					<li>
						<a href="#">Pinterest</a>
					</li>
				</ul>
			</footer>
		</React.Fragment>
	)
}

export default Home
