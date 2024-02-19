import Image from 'next/image'
import Paggination from '../../public/images/Paggination.png'
import React from 'react'
import urun from '../../public/images/urun.png'
import urun1 from '../../public/images/urun1.png'
import urun2 from '../../public/images/urun2.png'
import urun3 from '../../public/images/urun3.png'
import urun4 from '../../public/images/urun4.png'
import urun5 from '../../public/images/urun5.png'
import urun6 from '../../public/images/urun6.png'
import urun7 from '../../public/images/urun7.png'

const BestSales = () => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}

export default BestSales
