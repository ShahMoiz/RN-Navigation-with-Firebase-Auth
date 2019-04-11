
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ProtectedScreen =() => {
    Promise.all([
        Icon.getImageSource('arrow-left', 25)
    ]).then(source => {
        Navigation.setRoot({
            root: {
                id: 'Protected Component',
                stack: {
                    children: [{
                        component: {
                            name: 'protected.component',
                        }
                    },
                    ],
                    options: {
                        topBar: {
                            title: {
                                text: 'Protected Screeen'
                            },
                            leftButtons: {
                                id: 'abc',
                                icon: source[0]
                            }
                        }
                    }
                }
            }
        })
    })
    
}
export default ProtectedScreen;