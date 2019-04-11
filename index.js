import { Navigation } from "react-native-navigation";

import SignIn from "./src/components/signIn/signIn";
import SignUp from "./src/components/signUp/signUp";
import App from './App'
import ProtectedComponent from "./src/components/protectedPage/protectedComponent";
import InitializeComponent from "./src/components/initialize/initialize";

Navigation.registerComponent('protected.component', () => ProtectedComponent);
Navigation.registerComponent('signIn', () => SignIn);
Navigation.registerComponent('signUp', () => SignUp);
Navigation.registerComponent('Main.Component', () => App);
Navigation.registerComponent('initialize', () => InitializeComponent);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            id: 'initialize',
            component: {
                name: 'initialize',
                
            }
        }
    })
});

