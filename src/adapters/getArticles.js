// Hooks
import useFetch from '../hooks/useFetch';

// URL
const API_URL =
	'https://fakerapi.it/api/v1/custom?title=text&image=image&short_description=text&published_at=date_time&last_news=boolean&_quantity=100';

// Adapter
export const getArticles = () => {
	const { data, isLoading, error } = useFetch(API_URL);

	let articles = [];

	if (Array.isArray(data.data)) {
		articles = data.data.map(article => {
			return {
				image: article.image,
				title: article.title,
				shortDescription: article.short_description,
				date: article.published_at.date
					.split(' ')[0]
					.split('-')
					.reverse()
					.join('-'),
				lastNews: article.last_news,
			};
		});
	}

	return { articles, isLoading, error };
};
