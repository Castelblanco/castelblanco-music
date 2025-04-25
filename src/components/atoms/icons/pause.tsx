import Ionicons from '@expo/vector-icons/Ionicons';
import { TIconProps } from './type';

export type TIconPauseProps = TIconProps;
export const IconPause = (props: TIconPauseProps) => {
    return <Ionicons name="pause" {...props} />;
};
