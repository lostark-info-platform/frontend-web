import { AllHTMLAttributes, PropsWithChildren, useState } from 'react';
import Icon from '../Icon';
import { CheckboxWrapper } from './Checkbox.styles';

type CheckboxProps = Omit<AllHTMLAttributes<HTMLInputElement>, 'id'> & {
	id: string;
};

const Checkbox = ({
	className = 'checkbox',
	defaultChecked = false,
	onChange,
	id,
	...props
}: PropsWithChildren<CheckboxProps>) => {
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<CheckboxWrapper className={className}>
			<input
				type='checkbox'
				hidden
				checked={checked}
				onChange={(event) => {
					setChecked(event.target.checked);
					onChange?.(event);
				}}
				id={id}
				{...props}
			/>
			<label htmlFor={id}>
				{checked ? (
					<Icon variant='CheckboxActive' size={24} />
				) : (
					<Icon variant='CheckboxInActive' size={24} />
				)}
			</label>
		</CheckboxWrapper>
	);
};

export default Checkbox;
