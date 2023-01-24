import { FC } from 'react';
import styles from './header.module.scss';

interface Props {
	name: string;
	age: number;
}

const Header: FC<Props> = ({ name, age }) => {
	return (
		<header className={styles.header}>
			<p>{name}</p>
			<p>{age}</p>
		</header>
	);
};

export default Header;
