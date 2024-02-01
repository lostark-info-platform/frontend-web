import useFunnel from '@/hooks/common/useFunnel';

const FunnelPage = () => {
	const { Funnel, setStep, prevStep, nextStep } = useFunnel<
		['one', 'two', 'three']
	>({
		initialStep: 'one',
		steps: ['one', 'two', 'three'],
	});

	return (
		<div>
			<div>
				<button
					onClick={() => {
						setStep('one');
					}}
				>
					step 1
				</button>
				<button
					onClick={() => {
						setStep('two');
					}}
				>
					step 2
				</button>
				<button
					onClick={() => {
						setStep('three');
					}}
				>
					step 3
				</button>
			</div>
			<Funnel>
				<Funnel.Step name='one'>
					<div>1</div>
					<button
						onClick={() => {
							nextStep();
						}}
					>
						다음
					</button>
				</Funnel.Step>
				<Funnel.Step name='two'>
					<div>2</div>
					<button
						onClick={() => {
							prevStep();
						}}
					>
						이전
					</button>
					<button
						onClick={() => {
							nextStep();
						}}
					>
						다음
					</button>
				</Funnel.Step>
				<Funnel.Step name='three'>
					<div>3</div>
					<button
						onClick={() => {
							prevStep();
						}}
					>
						이전
					</button>
					<button
						onClick={() => {
							nextStep();
						}}
					>
						다음
					</button>
				</Funnel.Step>
			</Funnel>
		</div>
	);
};

export default FunnelPage;
