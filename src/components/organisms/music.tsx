import { IconMusic } from '@atoms/icons/music';
import { COLORS } from '@constants/color';
import { TMusicDOM } from '@models/music/entities';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { secondsToTime } from 'src/helpers/seconds-to-time';

export type TPropsMusic = {
    music: TMusicDOM;
    onPress: (music: TMusicDOM) => void;
};

export const Music = ({ music, onPress }: TPropsMusic) => {
    return (
        <TouchableRipple
            style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
            }}
            rippleColor={COLORS.PRIMERY}
            onPress={() => onPress(music)}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <IconMusic size={24} color={COLORS.TEXT} />
                </View>
                <View
                    style={{
                        width: '85%',
                    }}
                >
                    <Text numberOfLines={2}>{music.name}</Text>
                    <Text
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        {secondsToTime(music.duration)}
                    </Text>
                </View>
            </View>
        </TouchableRipple>
    );
};
