import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const steps = data;
	const [activeIndex, setActiveIndex] = useState(0);

	const forwardButton = () => {
		setActiveIndex(activeIndex + 1);
	};

	const backButton = () => {
		setActiveIndex(activeIndex - 1);
	};

	const startOverButton = () => {
		setActiveIndex(0);
	};

	let isFirstStep = false;
	if (activeIndex === 0) {
		isFirstStep = true;
	}

	let isLastStep = false;
	if (activeIndex === 6) {
		isLastStep = true;
	}

	const renderClassForLi = (index) => {
		if (activeIndex === index) {
			return styles['steps-item'] + ' ' + styles.done + ' ' + styles.active;
		}
		if (activeIndex > index) {
			return styles['steps-item'] + ' ' + styles.done;
		} else {
			return styles['steps-item'];
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li className={renderClassForLi(index)} key={id}>
								{' '}
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						{isFirstStep ? (
							<button className={styles.button} disabled={true}>
								Назад
							</button>
						) : (
							<button className={styles.button} onClick={backButton}>
								Назад
							</button>
						)}

						{isLastStep ? (
							<button className={styles.button} onClick={startOverButton}>
								Начать сначала
							</button>
						) : (
							<button className={styles.button} onClick={forwardButton}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};