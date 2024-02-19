import Image from 'next/image'
import React from 'react'

const Best = () => {
	return (
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
	)
}

export default Best
