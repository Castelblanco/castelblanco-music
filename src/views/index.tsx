import { Redirect } from 'expo-router';

export default function IndexView() {
    return <Redirect href={'/tabs/local-music'} />;
}
