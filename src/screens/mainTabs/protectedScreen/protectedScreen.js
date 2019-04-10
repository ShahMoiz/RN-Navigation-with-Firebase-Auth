// import { Navigation } from "react-native-navigation";

// const ProtectedScreen = () => 
//     Navigation.setRoot({
//         root: {
//           stack: {
//             children: [{
//               component: {
//                 name: "protected.component"
//               }
//             }]
//           }
//         }
//       });

// //  Navigation.setRoot({
// //     root: {
// //         stack: {
// //             children: [{
// //                 component: {
// //                     name: 'protected.component'
// //                 }
// //             }]
// //         }
// //     }
// // })


// export default ProtectedScreen

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ProtectedScreen =() => {
    Promise.all([
        Icon.getImageSource('login', 25)
    ]).then(source => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        component: {
                            name: 'protected.component',
                            options: { 
                                bottomTab: {
                                    text: 'Protected Component',
                                    fontSize: 12,
                                    icon: source[0]
                                },
                            }
                        }
                    },
                    ]
                }
            }
        })
    })
    
}
export default ProtectedScreen;