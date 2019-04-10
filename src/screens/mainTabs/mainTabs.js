import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const goHome =() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "Main.Component"
            }
        }
    })
}
export default goHome; 