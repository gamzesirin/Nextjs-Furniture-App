import Image from 'next/image'
import React from 'react'
import oda2 from '../../public/images/oda2.png'
import user from '../../public/images/user.jpg'

const Review = () => {
	return (
		<div className="flex items-center justify-center gap-10">
			<div className="flex flex-col gap-5">
				<h1 className="text-4xl font-bold">İnsanlar Hakkımızda Ne Söylüyor?</h1>
				<div className="flex gap-4">
					<Image src={user} alt="bgImg" width={50} height={50} className="rounded-full" />
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
	)
}

export default Review
