import { Redirect } from 'expo-router';

export default function OAuthredirectView() {
    return <Redirect href={'/tabs/youtube'} />;
}
