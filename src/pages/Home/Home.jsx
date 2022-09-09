// Dependencies
import React from 'react';

// Styles - Components
import styles from './Home.module.css';
import Hero from './sections/Hero/Hero';
import LastNews from './sections/LastNews/LastNews';
import MoreArticles from './sections/MoreArticles/MoreArticles';

// Adapters
import { getArticles } from '../../adapters/getArticles';

export default function Home() {
	const { articles, isLoading, error } = getArticles();

	return (
		<div className={`ViewGRID ${styles.home}`}>
			<Hero />

			{isLoading === false && (
				<>
					<LastNews articles={articles} />
					<MoreArticles articles={articles} />
				</>
			)}
		</div>
	);
}
