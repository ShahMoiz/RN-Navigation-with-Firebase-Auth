import { Navigation } from "react-native-navigation";
import SignIn from "./src/components/signIn/signIn";
import SignUp from "./src/components/signUp/signUp";
import App from './App'


Navigation.registerComponent('signIn', () => SignIn);
Navigation.registerComponent('signUp', () => SignUp);
Navigation.registerComponent('Main.Component', () => App);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Main.Component'
            }
        }
    })
})
