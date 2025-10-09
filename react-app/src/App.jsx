import React, { useState } from 'react'

function PopupConstructor({ open, selectedService, onClose }){
	if (!open) return null
	return (
		<div className="modal-overlay" role="dialog" aria-modal="true">
			<div className="modal">
				<div className="modal__header">
					<h3>Конструктор услуги</h3>
					<button className="modal__close" onClick={onClose} aria-label="Закрыть">×</button>
				</div>
				<div className="modal__body">
					<div className="modal__row">
						<label className="modal__label">Тариф</label>
						<select className="modal__input" defaultValue={selectedService || 'Одностраничный сайт'}>
							<option>Одностраничный сайт</option>
							<option>Многостраничный сайт</option>
							<option>Брендинг</option>
							<option>Презентация решения</option>
							<option>Экспресс-аудит</option>
							<option>Оформление запуска</option>
						</select>
					</div>
					<div className="modal__row">
						<label className="modal__label">Страницы/экраны</label>
						<input className="modal__input" type="number" min="1" max="30" defaultValue="3" />
					</div>
					<div className="modal__row">
						<label className="modal__label">Сложность дизайна</label>
						<select className="modal__input" defaultValue="Стандарт">
							<option>Базовый</option>
							<option>Стандарт</option>
							<option>Продвинутый</option>
						</select>
					</div>
					<div className="modal__row">
						<label className="modal__label">Срок</label>
						<select className="modal__input" defaultValue="2-3 недели">
							<option>1 неделя</option>
							<option>2-3 недели</option>
							<option>1 месяц</option>
						</select>
					</div>
				</div>
				<div className="modal__footer">
					<button className="btn" onClick={onClose}>Отправить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default function App(){
	const [isConstructorOpen, setIsConstructorOpen] = useState(false)
	const [selectedService, setSelectedService] = useState('')
	const [flippedCards, setFlippedCards] = useState(new Set())
	
	const openConstructor = (service) => { setSelectedService(service); setIsConstructorOpen(true) }
	const closeConstructor = () => setIsConstructorOpen(false)
	
	const flipCard = (stackId) => {
		setFlippedCards(prev => {
			const newFlipped = new Set(prev)
			if (newFlipped.has(stackId)) {
				newFlipped.delete(stackId)
			} else {
				newFlipped.add(stackId)
			}
			return newFlipped
		})
	}

	return (
		<>
			<header className="site-header">
				<div className="container">
					<div className="brand">NAUMOV VADIM</div>
					<nav className="site-nav">
						<a href="#process">Этапы работы</a>
						<a href="#about">Обо мне</a>
						<a href="#contacts">Контакты</a>
					</nav>
				</div>
			</header>
			<main className="hero hero-nature">
				<div className="hero-nature__bg"></div>
				<div className="hero-nature__overlay"></div>
				<div className="marquee" aria-hidden="true">
					<div className="marquee__track">
						<div className="marquee__group">
							<span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span>
							<span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span>
						</div>
						<div className="marquee__group" aria-hidden="true">
							<span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span>
							<span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span><span>NAUMOV&nbsp;VADIM</span>
						</div>
					</div>
				</div>
			</main>
			<section id="portfolio" className="section section-portfolio">
				<div className="container">
					<h2>Портфолио</h2>
					<div className="cards-stacks">
						<div className={`card-stack stack-1 ${flippedCards.has('stack-1') ? 'flipped' : ''}`} onMouseEnter={() => flipCard('stack-1')} onMouseLeave={() => flipCard('stack-1')}>
							<div className="card-image card-front">
								<img src="/Card1.png" alt="Карта 1" onError={(e) => {console.error('Ошибка загрузки Card1.png'); e.target.style.display='none'}} onLoad={() => console.log('Card1.png загружен успешно')} />
							</div>
							<div className="card-image card-back">
								<img src="/card1-2.png" alt="Карта 1-2" onError={(e) => {console.error('Ошибка загрузки card1-2.png'); e.target.style.display='none'}} onLoad={() => console.log('card1-2.png загружен успешно')} />
							</div>
						</div>
						<div className={`card-stack stack-2 ${flippedCards.has('stack-2') ? 'flipped' : ''}`} onMouseEnter={() => flipCard('stack-2')} onMouseLeave={() => flipCard('stack-2')}>
							<div className="card-image card-front">
								<img src="/card2.png" alt="Карта 2" onError={(e) => {console.error('Ошибка загрузки card2.png'); e.target.style.display='none'}} onLoad={() => console.log('card2.png загружен успешно')} />
							</div>
							<div className="card-image card-back">
								<img src="/card2-2.png" alt="Карта 2-2" onError={(e) => {console.error('Ошибка загрузки card2-2.png'); e.target.style.display='none'}} onLoad={() => console.log('card2-2.png загружен успешно')} />
							</div>
						</div>
						<div className={`card-stack stack-3 ${flippedCards.has('stack-3') ? 'flipped' : ''}`} onMouseEnter={() => flipCard('stack-3')} onMouseLeave={() => flipCard('stack-3')}>
							<div className="card-image card-front">
								<img src="/card3.png" alt="Карта 3" onError={(e) => {console.error('Ошибка загрузки card3.png'); e.target.style.display='none'}} onLoad={() => console.log('card3.png загружен успешно')} />
							</div>
							<div className="card-image card-back">
								<img src="/card3-3.png" alt="Карта 3-3" onError={(e) => {console.error('Ошибка загрузки card3-3.png'); e.target.style.display='none'}} onLoad={() => console.log('card3-3.png загружен успешно')} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="process" className="section section-process">
				<div className="container">
					<h2>Этапы работы</h2>
					<ol className="steps">
						<li><strong>001</strong> Базовый бриф</li>
						<li><strong>002</strong> Созвон и интервью</li>
						<li><strong>003</strong> Договор и предоплата</li>
						<li><strong>004</strong> Концепция</li>
						<li><strong>005</strong> Дизайн проекта</li>
						<li><strong>006</strong> Вёрстка и запуск</li>
					</ol>
				</div>
			</section>
			<section id="about" className="section section-about">
				<div className="container">
					<h2>Обо мне</h2>
					<p>Меня зовут Вадим. Реализую современные сайты, которые помогают бизнесу расти: сочетаю эстетку и функциональность, ориентируюсь на цели и аудиторию.</p>
					<ul className="tags">
						<li>UX/UI-дизайн</li>
						<li>Аналитика</li>
						<li>Швейцарский стиль</li>
						<li>UX-копирайтинг</li>
					</ul>
				</div>
			</section>
			<section id="contacts" className="section section-contacts">
				<div className="container">
					<h2>Контакты</h2>
					<p><a href="tel:+79164090516">+7 (916) 409-05-16</a> · <a href="mailto:example03@list.ru">example03@list.ru</a></p>
					<p><a href="https://t.me/Vadyyya" target="_blank" rel="noreferrer">Telegram</a></p>
				</div>
			</section>
			<footer className="site-footer">
				<div className="container">
					<p>©2025 By Vadyyya</p>
				</div>
			</footer>

			<PopupConstructor open={isConstructorOpen} selectedService={selectedService} onClose={closeConstructor} />
		</>
	)
}
