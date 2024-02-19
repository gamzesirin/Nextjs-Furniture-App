import React from 'react'

const Contact = () => {
	return (
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
	)
}

export default Contact
