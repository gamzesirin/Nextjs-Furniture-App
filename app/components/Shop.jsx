import Image from 'next/image'
import React from 'react'
import oda from '../../public/images/oda.png'
import oda2 from '../../public/images/oda2.png'
import oda3 from '../../public/images/oda3.png'

const Shop = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col items-center gap-10 mt-20">
				<h1 className="text-2xl font-semibold">Mobilya Türleri</h1>
				<p className="text-justify text-gray-500 w-[600px]">
					Koltuk takımı bir evdeki neredeyse bütün dekorasyon içindeki en önemli mobilya takımlarının başında geliyor.
					Aynı zamanda da en çok kullanılan mobilya olması durumu ile de bu sorunun sorulması oldukça anlamlı. Gelelim
					mobilyanın nasıl seçilmesi gerektiğine.. Koltuk takımı seçilirken dış görüntüsü elbette size uygun olmalı
					ancak dış görüntüsü kadar içi de oldukça önemli.
				</p>
			</div>

			<div className="flex flex-col items-center gap-10 mt-20 ">
				<div className="flex items-center gap-10  bg-orange-200 p-5">
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
				<div className="flex items-center gap-10 bg-green-200 p-5">
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
				<div className="flex items-center gap-10 bg-yellow-200 p-5">
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
		</React.Fragment>
	)
}

export default Shop
