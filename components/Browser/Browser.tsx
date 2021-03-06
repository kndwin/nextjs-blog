import styles from './Browser.module.scss'
import * as React from 'react'

export default function Browser ({ 
  url, 
  children 
}: {
  url?: string
  children: React.ReactNode
}) {
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
					<div className={styles.urlWhitespace} />
				</div>
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}
