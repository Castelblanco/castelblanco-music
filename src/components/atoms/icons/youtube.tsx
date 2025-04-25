import { TIconProps } from './type';
import AntDesign from '@expo/vector-icons/AntDesign';

export type TIconYouTubeProps = TIconProps;
export const IconYouTube = (props: TIconYouTubeProps) => {
    return <AntDesign name="youtube" {...props} />;
};
