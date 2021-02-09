import styles from './Browser.module.scss'

export default function Browser ({ url, children }) {
	return (
		<div className={styles.browser}>
			<div className={styles.tabs}>
				<div className={styles.minMaxClose}>
					<div className={styles.circle} id={styles.min} />
					<div className={styles.circle} id={styles.max}/>
					<div className={styles.circle} id={styles.close}/>
				</div>
				<div className={styles.url}>
					<a href={url}>{url}</a>
				</div>
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}
