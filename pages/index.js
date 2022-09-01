import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blog App</title>
				<meta
					name='description'
					content='A Blog App built with Next.js and GraphQL'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}></main>
		</div>
	);
}
