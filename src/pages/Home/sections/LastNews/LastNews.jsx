// Dependencies
import React from 'react';

// Styles - Components
import styles from './LastNews.module.css';
import HorizontalSliderScroll from '../../../../components/common/HorizontalSliderScroll/HorizontalSliderScroll';

export default function LastNews({ articles }) {
	const qty = 4;
	const lastNews = [];

	for (let index = 0; lastNews.length < qty; index++) {
		if (articles[index].lastNews === true) {
			lastNews.push(articles[index]);
		}
	}

	return (
		<section className={`SectionGRID ${styles.lastNews}`} id='News'>
			<h4>Last News</h4>

			<HorizontalSliderScroll records={lastNews} />

			{!lastNews.length && <h6>No se encontraron noticias recientes</h6>}
		</section>
	);
}
