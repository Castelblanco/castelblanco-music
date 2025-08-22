import { useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, IconButton, Surface, Divider } from 'react-native-paper';
import { Audio } from 'expo-av';
import { useMusicStore } from '@storages/zustand/music';
import { MusicDOM, TMusicDOM } from '@models/music/entities';
import { COLORS } from '@constants/color';
import { IconStepBackward } from '@atoms/icons/step-backward';
import { IconPlay } from '@atoms/icons/play';
import { IconStepForward } from '@atoms/icons/step-forward';
import { useGetAudioAssets } from '@hooks/use-get-audio-assets';
import * as MediaLibrary from 'expo-media-library';
import { IconPause } from '@atoms/icons/pause';
import { Music } from '@organisms/music';
import { IconSetting } from '@atoms/icons/setting';
import { stylesLocalMusic as styles } from '@styles/views/tabs/loca-music';

export default function LocalMusicView() {
    const { music, setMusic } = useMusicStore();
    const [hasNext, setHasNext] = useState(true);
    const [isPlay, setIsPlay] = useState(false);
    const [cursor, setCursor] = useState<undefined | string>();
    const [musicSelect, setMusicSelect] = useState<TMusicDOM | undefined>();

    const currentMusic = useRef(new Audio.Sound()).current;

    const { mediaAccess } = useGetAudioAssets();

    useEffect(() => {
        if (!musicSelect) return;
        createAudio(musicSelect);
    }, [musicSelect]);

    const readDir = async () => {
        if (!mediaAccess || !hasNext) return;

        const musicList = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: 100,
            after: cursor,
        });

        setCursor(musicList.endCursor);
        setHasNext(musicList.hasNextPage);

        const newMusic: TMusicDOM[] = musicList.assets
            .filter(
                ({ duration, filename }) =>
                    duration > 90 && filename.includes('.mp3')
            )
            .map((music) => {
                return new MusicDOM({
                    id: music.id,
                    name: music.filename
                        .replace('.mp3', '')
                        .replace('y2mate.com - ', ''),
                    duration: music.duration,
                    url: music.uri,
                });
            });

        setMusic([...music, ...newMusic]);
    };

    const handlePlayMusic = (music: TMusicDOM) => setMusicSelect(music);

    const createAudio = async (music: TMusicDOM) => {
        await unloadMusic();
        await currentMusic.loadAsync({
            uri: music.url,
        });
        const result = await currentMusic.playAsync();
        setIsPlay(result.isLoaded);
    };

    const handlePlayOrPauseMusic = async () => {
        if (isPlay) await currentMusic.pauseAsync();
        else await currentMusic.playAsync();
        setIsPlay(!isPlay);
    };

    const unloadMusic = async () => {
        if (isPlay) await currentMusic.pauseAsync();
        await currentMusic.unloadAsync();
    };

    const handleBack = async () => {
        const index = music.findIndex(({ id }) => id === musicSelect?.id);
        if (index === -1) return;
        setMusicSelect(music[index - 1]);
    };

    const handleNext = async () => {
        const index = music.findIndex(({ id }) => id === musicSelect?.id);
        if (index === -1) return;
        setMusicSelect(music[index + 1]);
    };

    return (
        <View style={styles.container}>
            <Card style={styles.box}>
                <View style={styles.headerBox}>
                    <Text style={styles.headerTxt}>Local Music</Text>
                    <IconButton
                        icon={() => (
                            <IconSetting size={24} color={COLORS.TEXT} />
                        )}
                    />
                </View>

                <FlatList
                    data={music}
                    keyExtractor={(music) => music.id}
                    renderItem={({ item }) => (
                        <Surface elevation={0}>
                            <Music music={item} onPress={handlePlayMusic} />
                            <Divider />
                        </Surface>
                    )}
                />

                {musicSelect && (
                    <Surface
                        elevation={5}
                        mode="elevated"
                        style={styles.boxMusicSelect}
                    >
                        <View style={styles.boxMusicSelectName}>
                            <Text numberOfLines={2}>{musicSelect.name}</Text>
                        </View>
                        <View style={styles.boxMusicSelectControl}>
                            <IconButton
                                icon={() => (
                                    <IconStepBackward
                                        size={24}
                                        color={COLORS.TEXT}
                                    />
                                )}
                                onPress={handleBack}
                            />
                            <IconButton
                                icon={() => (
                                    <>
                                        {isPlay ? (
                                            <IconPause
                                                size={40}
                                                color={COLORS.TEXT}
                                            />
                                        ) : (
                                            <IconPlay
                                                size={40}
                                                color={COLORS.TEXT}
                                            />
                                        )}
                                    </>
                                )}
                                onPress={handlePlayOrPauseMusic}
                            />
                            <IconButton
                                icon={() => (
                                    <IconStepForward
                                        size={24}
                                        color={COLORS.TEXT}
                                    />
                                )}
                                onPress={handleNext}
                            />
                        </View>
                    </Surface>
                )}
            </Card>
        </View>
    );
}
