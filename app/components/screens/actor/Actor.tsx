import { title } from 'process'
import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Catalog from '../templates/catalog-movies/Catalog'

import styles from './Actor.module.scss'
import { IActorPage } from './actor.types'

const Actor: FC<IActorPage> = ({ actor, movies }) => {
	return (
		<div className={styles.wrapper}>
			<Heading title={actor.name} className={styles.heading} />
			<img className={styles.photo} src={actor.photo}></img>
			<div className={styles.desc}>
				Британец родился в 1977 году в Лондоне. С детства посещал театральную
				школу, а после обучался актерскому мастерству в Лондонском центре драмы.
				В 2001-м после трех лет учебы бросил колледж ради съемок в сериале
				«Братья по оружию». Затем последовал полнометражный триллер Ридли Скотта
				«Черный ястреб», множество ролей в независимых фильмах и работа над
				картинами BBC. К тому же Харди активно играл в театре, за что удостоился
				награды London Evening Standard Theatre Award (лучший дебют). В
				дальнейшем он продолжит совмещать большие роли в кино с театральной
				карьерой. У Харди есть премия BAFTA за лучшую мужскую роль в фильме
				«Стюарт: Прошлая жизнь» и номинация на «Оскар» за «Выжившего». В 2018-м
				он впервые сыграл в фильме по комиксу — «Веном» производства Sony и
				Marvel.
			</div>
			<div>
				<Catalog movies={movies} />
			</div>
		</div>
	)
}

export default Actor
