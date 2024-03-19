import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type ModalContainerProps = {
	children?: ReactNode;
};
function ModalContainer({ children }: ModalContainerProps) {
	const [isCSR, setIsCSR] = useState(false);

	useEffect(() => {
		setIsCSR(true);
	}, []);

	if (typeof window === 'undefined') return;
	if (!isCSR) return;

	return ReactDOM.createPortal(
		children,
		document.getElementById('modal-root')!
	);
}

export default ModalContainer;
