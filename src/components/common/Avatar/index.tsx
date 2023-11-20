import Image from 'next/image';
import { AvatarWrapper } from './Avatar.styles';

type AvatarProps = {
	src?: string;
};
const Avatar = ({ src }: AvatarProps) => {
	return (
		<AvatarWrapper>
			{src ? (
				<Image
					src={src}
					alt='avatar'
					width={36}
					height={36}
					objectFit='cover'
				/>
			) : (
				<div></div>
			)}
		</AvatarWrapper>
	);
};

export default Avatar;
