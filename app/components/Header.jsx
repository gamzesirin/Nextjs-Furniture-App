import React from 'react'

const Header = () => {
	return (
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
	)
}
export default Header
