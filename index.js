import { Navigation } from "react-native-navigation";
import SignIn from "./src/components/signIn/signIn";
import SignUp from "./src/components/signUp/signUp";
import App from './App'
// import ProtectedScreen from "./src/screens/mainTabs/protectedScreen/protectedScreen";
import ProtectedComponent from "./src/components/protectedPage/protectedComponent";


Navigation.registerComponent('protected.component', () => ProtectedComponent);
Navigation.registerComponent('signIn', () => SignIn);
Navigation.registerComponent('signUp', () => SignUp);
Navigation.registerComponent('Main.Component', () => App);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Main.Component',
                
            }
        }
    })
})
