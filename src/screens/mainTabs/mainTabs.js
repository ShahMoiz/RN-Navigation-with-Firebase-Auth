import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const authScreen =(mainCompoName, secondryCompoName) => {
    Promise.all([
        Icon.getImageSource('login', 25),
        Icon.getImageSource('logout', 25)
    ]).then(source => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        component: {
                            name: mainCompoName || 'signIn',
                            options: { 
                                bottomTab: {
                                    text: mainCompoName || 'Sign In',
                                    fontSize: 12,
                                    icon: source[0]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: secondryCompoName || 'signUp',
                            options: {
                                bottomTab: {
                                    text: secondryCompoName || 'Sign Up',
                                    fontSize: 12,
                                    icon: source[1]
                                }
                            }
                        }
                    }]
                }
            }
        })
    })
    
}
export default authScreen;