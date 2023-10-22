import React from 'react';

type ErrorBoundaryProps = {
	onError?: () => void;
	children: React.ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: Error) {
		console.log('error: ', error);
		// TODO: 받아오는 error 정보를 정제해서 세팅해야함
		// INFO: 렌더링 fallback UI 보일 수 있도록 상태 업데이트
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		// TODO: 에러 로깅 위치
		console.error('An error occurred:', error, errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return (
				<div>
					<p>Error 발생</p>
				</div>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
