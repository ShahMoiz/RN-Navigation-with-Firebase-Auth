// import { Navigation } from "./node_modules/react-native-navigation";
import { Navigation } from 'react-native-navigation';

const goHome =() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: "Main.Component"
                    }
                }],
                // options: {
                //     topBar: {
                //         title: {
                //             text: 'Home'
                //         }
                //     }
                // }
            }
            
        }
    })
}
export default goHome; 