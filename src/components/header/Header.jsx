import React from 'react'
import css from './Header.module.css'
import user_avatar from '../../assets/user_avatar.svg'
import { useState } from 'react'

const Header = () => {

	const [isFormVisible, setFormVisible] = useState(false)

	const handleClick = () => {
		setFormVisible(!isFormVisible)
	}

	return (
		<header className={isFormVisible ? css.headerSelect : css.header}>
			<div className={css.logo}>Awesome Kanban Board</div>
			<div className={css.headerList}>
				<div className={css.user}>
					<img className={css.avatar} src={user_avatar} alt="avatar"></img>
					<button className={css.button && (isFormVisible ? css.arrowUp : css.arrowDown)} onClick={handleClick} >
					</button>
				</div>
				{isFormVisible && (
					<>
					<div className={css.point}></div>
					<ul className={css.select}>
						<li className={css.option}>Profile</li>
						<li className={css.option}>Log Out</li>
					</ul>
					</>
				)}
			</div>
		</header>
	)
}

export default Header