import Fontisto from '@expo/vector-icons/Fontisto';
import { TIconProps } from './type';

export type TIconSettingProps = TIconProps;
export const IconSetting = (props: TIconSettingProps) => {
    return <Fontisto name="player-settings" {...props} />;
};
