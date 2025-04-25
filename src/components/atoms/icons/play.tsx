import Entypo from '@expo/vector-icons/Entypo';
import { TIconProps } from './type';

export type TIconPlayProps = TIconProps;
export const IconPlay = (props: TIconPlayProps) => {
    return <Entypo name="controller-play" {...props} />;
};
