import {
	Children,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	isValidElement,
	useCallback,
	useEffect,
	useMemo,
} from 'react';
import { useRouter } from 'next/router';

type StepProps<T extends readonly string[]> = {
	name: T[number];
	children?: ReactNode;
};

type UseFunnelProps<T extends readonly string[]> = {
	initialStep: T[number];
	steps: T;
	resetStepWhenRefresh?: boolean;
};

const useFunnel = <T extends readonly string[]>({
	initialStep,
	steps,
	resetStepWhenRefresh = false,
}: UseFunnelProps<T>) => {
	const router = useRouter();
	const currentStep = (router.query.step as string | null) ?? initialStep;
	const currentIndex = steps.indexOf(currentStep);

	useEffect(() => {
		if (resetStepWhenRefresh) {
			setStep(initialStep);
		}
	}, []);

	const _updateStepUrl = useCallback((newStep: T[number]) => {
		const { pathname, query } = router;
		const url = {
			pathname,
			query: {
				...query,
				step: newStep,
			},
		};
		router.push(url, undefined, { shallow: true });
	}, []);

	const setStep = useCallback((newStep: T[number]) => {
		_updateStepUrl(newStep);
	}, []);

	const nextStep = useCallback(() => {
		const _nextStep =
			currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
		if (_nextStep) {
			_updateStepUrl(_nextStep);
		}
	}, [currentStep]);

	const prevStep = useCallback(() => {
		const _prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
		if (_prevStep) {
			_updateStepUrl(_prevStep);
		}
	}, [currentStep]);

	const _FunnelContainer = ({ children }: PropsWithChildren) => {
		const validChildren = Children.toArray(children)
			.filter(isValidElement)
			.filter((item) =>
				steps.includes((item.props as Partial<StepProps<T>>).name ?? '')
			) as Array<ReactElement<StepProps<T>>>;

		const targetStep = validChildren.find(
			(child) => child.props.name === currentStep
		);
		return targetStep ?? null;
	};

	const _FunnelStep = ({
		children,
	}: PropsWithChildren<{ name: T[number] }>) => {
		return children;
	};

	const Funnel = useMemo(() => {
		return Object.assign(_FunnelContainer, {
			Step: _FunnelStep,
		});
	}, [currentStep]);

	return {
		Funnel,
		setStep,
		prevStep,
		nextStep,
	} as const;
};

export default useFunnel;
