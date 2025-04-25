import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TIconProps } from './type';

export type TIconMusicProps = TIconProps;
export const IconMusic = (props: TIconMusicProps) => {
    return <FontAwesome5 name="music" {...props} />;
};
