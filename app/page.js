import Image from 'next/image'
import Paggination from '../public/images/Paggination.png'
import React from 'react'
import bgImg from '../public/images/header.png'
import grup from '../public/images/grup.png'
import koltuk from '../public/images/koltuk.png'
import oda from '../public/images/oda.png'
import oda2 from '../public/images/oda2.png'
import oda3 from '../public/images/oda3.png'
import sandalye from '../public/images/sandalye.png'
import urun from '../public/images/urun.png'
import urun1 from '../public/images/urun1.png'
import urun2 from '../public/images/urun2.png'
import urun3 from '../public/images/urun3.png'
import urun4 from '../public/images/urun4.png'
import urun5 from '../public/images/urun5.png'
import urun6 from '../public/images/urun6.png'
import urun7 from '../public/images/urun7.png'

const Home = () => {
	return (
		<React.Fragment>
			<header className="border">
				<ul className="flex flex-wrap justify-center gap-20 p-5 font-semibold">
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

			<div className="bg-hero-pattern bg-cover bg-center h-[884px] flex flex-row justify-center items-center text-white gap-60">
				<div className="w-96 flex flex-col flex-wrap items-start gap-5">
					<h1 className="text-2xl">Mobilya</h1>
					<p>
						Mobilya seçimi yapmak ve ev dekorasyonu yapmak aslında basit gibi görünse de sürece bakıldığı zaman oldukça
						zorlayıcı ve dikkat edilmesi gereken bir durum.
					</p>
					<p>
						Hepimiz yaşamışızdır elbette ki; en ufak bir ev dekorasyon ürününü veya aksesuarı alırken bile birden fazla
						düşünmüş veya diğer alternatiflerini de kontrol etmişizdir.
					</p>
					<button className="bg-orange-400 text-white rounded-lg px-6 py-2 cursor-pointer">Daha Fazla</button>
				</div>
				<div>
					<h1 className="text-8xl">
						Bir oda yap <br /> rahat & <br />
						zarifçe
					</h1>
				</div>
				<div className="flex flex-col gap-10">
					<h1 className="text-2xl text-black">Öne Çıkanlar</h1>
					<div className="relative">
						<Image src={koltuk} alt="featured" className="w-40" />
						<div className=" text-black absolute top-16 font-semibold text-xs p-12">
							<h2>Koltuk</h2>
							<p>10000 TL</p>
						</div>
					</div>
					<div className="relative">
						<Image src={sandalye} alt="featured" className="w-40" />
						<div className=" text-black absolute top-16 font-semibold text-xs p-12 ">
							<h2>Sandalye</h2>
							<p>200 TL</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 divide-x divide-gray-500 bg-gray-300 p-10 rounded-3xl w-[60%] mx-auto gap-10 relative bottom-16">
				<div>
					<h1 className="text-4xl text-center">7</h1>
					<p className="text-center">Yılların Deneyimi</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">300+</h1>
					<p className="text-center">Memnun Müşteriler</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">250+</h1>
					<p className="text-center">Devamlı Müşteriler</p>
				</div>
				<div>
					<h1 className="text-4xl text-center">100+</h1>
					<p className="text-center">Stoklu Ürünler</p>
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

			<div className="flex flex-col items-center gap-10 mt-20">
				<h1 className="text-2xl font-semibold">Mobilya Türleri</h1>
				<p className="text-justify text-gray-500 w-[600px]">
					Koltuk takımı bir evdeki neredeyse bütün dekorasyon içindeki en önemli mobilya takımlarının başında geliyor.
					Aynı zamanda da en çok kullanılan mobilya olması durumu ile de bu sorunun sorulması oldukça anlamlı. Gelelim
					mobilyanın nasıl seçilmesi gerektiğine.. Koltuk takımı seçilirken dış görüntüsü elbette size uygun olmalı
					ancak dış görüntüsü kadar içi de oldukça önemli.
				</p>
			</div>

			<div className="flex flex-col items-center gap-10 mt-20">
				<div className="flex items-center gap-10">
					<Image src={oda} alt="oda" />
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Klasik Mobilya</h1>
						<p className="text-gray-500">
							Retro ve nostaljik tasarımları sevenler için tasarlanmış özel ürünler diyebiliriz. Evlerimize ayrı bir
							şıklık ve detay katacak olan mobilya türleridir. Eski zamanlardan günümüze kadar süregelen bir yapıya
							sahiptir. Klasik mobilyaları tamamlayan şeyler, konsol, ayna ve sehpadır. Klasik mobilyanın en belirgin
							özelliği ahşaptan üretiliyor olmasıdır. Aynı zamanda ahşap olan bölümlerin oyularak işlenmesi de dikkat
							çeken özellikleri arasındadır. Bu da eve başka hava katar. Klasik Mobilya tercih edenlerin, diğer eşyaları
							da bu tarza yakın olmalıdır. Bu sayede daha şık ve güzel konseptler ortaya çıkacaktır. Ahşap mobilyaları
							tamamlayacak diğer bir ürün ise yemek takımı seçimlerinizdir.
						</p>
					</div>
				</div>
				<div className="flex items-center gap-10">
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Modern Mobilya</h1>
						<p className="text-gray-500">
							Mobilyada ön planda olan şey modern olmasıdır. Kişilerin yaşam tarzını yansıtması gerekir. Her kesime
							hitap eden bir yapısı olan modern mobilya takımlarının en dikkat çeken özelliği her alana uyum sağlıyor
							olmasıdır. Modern mobilyalar belirtilen kalite standartları dahilinde üretilir. Ayrıca kişilerin
							ihtiyaçları düşünülerek tasarlanmış özel ürünlerdir. Bunlar diğer mobilyalara göre birazcık daha sade ve
							şık tasarımlar da diyebiliriz.
						</p>
					</div>
					<Image src={oda2} alt="oda" />
				</div>
				<div className="flex items-center gap-10">
					<Image src={oda3} alt="oda" />
					<div className="flex flex-col gap-5 w-[500px]">
						<h1 className="text-2xl font-medium">Avangard Mobilya</h1>
						<p className="text-gray-500">
							Avangard yani “Avantgarde” anlamı Fransızca bir terimdir. Kelime anlamı olarak önde gelen birinci, farklı,
							olağandışı, demektir. Avangard mobilyayı evinizin her alanında tercih edebilirsiniz. Gösterişi severim
							diyen biriyseniz bu tarz mobilyalar tam size göre. Avangard mobilya, yatak odası takımlarında ön plana
							çıkarken, oturma gruplarında ve salon takımlarında da yerini ön sıralarda alıyor. Bu ürünlerle evinizin
							ihtişamından gözlerinizi alamayacağınızı söyleyebiliriz.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center gap-5 mt-10 pt-10 bg-gray-300">
				<h1 className="text-2xl font-semibold">En Çok Satılan Ürünler</h1>
				<p className="text-center text-gray-500 w-[600px]">
					Mobilya hayatımıza bir yatak odası, yemek odası, mutfak, oturma odası gibi eşyalar ile dokunuşlar yapmaktadır.
					Bu anlamda konfor ve kişiye hitap eden mobilyalar özellikle tercih meselesidir.
				</p>
			</div>

			<div className="flex justify-center items-center p-20 bg-gray-300">
				<div className="grid grid-cols-4 gap-4 text-orange-500">
					<div className="flex flex-col">
						<Image src={urun} alt="urun" className="border rounded-lg border-black bg-white h-[250px]" />
						<h1 className=" font-semibold text-2xl mt-2">Koltuk</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun1} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Sandalye</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun2} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Masa</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun3} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Yatak</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun4} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Dolap</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun5} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Çerçeve</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun6} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Çekmece</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="flex flex-col">
						<Image src={urun7} alt="urun" className="border rounded-lg border-black bg-white" />
						<h1 className=" font-semibold text-2xl mt-2">Beşik</h1>
						<div className="flex items-center gap-2">
							<p>500 TL</p>
							<p className="text-xs line-through opacity-50">800 TL</p>
						</div>
					</div>
					<div className="col-span-4 flex items-center justify-center">
						<Image src={Paggination} alt="Paggination" />
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center gap-10 p-16">
				<div className="flex flex-col gap-5">
					<h1 className="text-4xl">
						En İyi Mobilya <br />
						Seçtiğiniz Üreticiden
					</h1>
					<p className="text-gray-500 text-justify text-sm">
						Mobilya seçimi yapmak ve ev dekorasyonu yapmak aslında basit gibi görünse de <br />
						sürece bakıldığı zaman oldukça zorlayıcı ve dikkat edilmesi gereken bir durum. <br />
						Hepimiz yaşamışızdır elbette ki; en ufak bir ev dekorasyon ürününü veya <br />
						aksesuarı alırken bile birden fazla düşünmüş veya diğer alternatiflerini de kontrol etmişizdir.
					</p>
				</div>
				<div className="flex flex-col items-center gap-5">
					<Image src={grup} alt="grup" />
					<div className="flex flex-col items-center gap-5">
						<h1 className="text-4xl">İç Tasarım Tarafımızca</h1>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-10">
				<div className="flex flex-col gap-5">
					<h1 className="text-4xl font-bold">İnsanlar Hakkımızda Ne Söylüyor?</h1>
					<div className="flex gap-4">
						<Image src={bgImg} alt="bgImg" width={50} height={50} className="rounded-full" />
						<div>
							<h1 className="font-semibold">Talha Derin</h1>
							<p className="text-sm text-gray-500">Proje Yöneticisi</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p>
							“Bir şeyleri yapmak için mükemmel bir dokunuşları var <br /> birçok insan için profesyonel, ilgi çekici ve
							faydalı.”
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

			<div className="flex flex-col items-end justify-center gap-5 mt-10 bg-footer-texture bg-cover bg-center h-[600px] text-white p-20">
				<div className="flex flex-col gap-5 p-20">
					<h1 className="text-6xl">
						Daha fazla indirim alın <br /> Siparişinizin dışında
					</h1>
					<p className="text-3xl">Mailiniz ile listemize katılın</p>

					<div className="flex gap-3">
						<input type="text" placeholder="Email giriniz" className="border-2 rounded-lg p-2 outline-none" />
						<button className="bg-orange-400 text-white rounded-lg px-6 py-2 cursor-pointer">Abone Ol</button>
					</div>
				</div>
			</div>

			<footer className="bg-gray-400 text-white">
				<div className="flex justify-around p-10">
					<div className="text-3xl">Logo</div>

					<ul className="flex gap-2">
						<li>
							<a href="#">Anasayfa</a>
						</li>
						<li>
							<a href="#">Hakkımızda</a>
						</li>
						<li>
							<a href="#">Ürünler</a>
						</li>
						<li>
							<a href="#">Hizmetlerimiz</a>
						</li>
						<li>
							<a href="#">İletişim</a>
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
