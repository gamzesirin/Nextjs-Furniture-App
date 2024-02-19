import Image from 'next/image'
import React from 'react'

const Section = () => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}

export default Section
