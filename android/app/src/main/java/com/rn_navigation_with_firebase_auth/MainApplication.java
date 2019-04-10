package com.rn_navigation_with_firebase_auth;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Package

import com.oblador.vectoricons.VectorIconsPackage; // for Vector Icons

import com.reactnativenavigation.NavigationApplication; // for Navigation
import com.reactnativenavigation.react.NavigationReactNativeHost; // for Navigation
import com.reactnativenavigation.react.ReactGateway; // for Navigation

import java.util.Arrays;
import java.util.List;
public class MainApplication extends NavigationApplication {

            @Override
    protected ReactGateway createReactGateway() {
            ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                        return "index";
                    }
        };
            return new ReactGateway(this, isDebug(), host);
        }

            @Override
    public boolean isDebug() {
            return BuildConfig.DEBUG;
        }

            protected List<ReactPackage> getPackages() {
            // Add additional packages you require here
                    // No need to add RnnPackage and MainReactPackage
                            return Arrays.<ReactPackage>asList(
                        // eg. new VectorIconsPackage()
                                    new VectorIconsPackage(),
                                    new RNFirebasePackage(),
                                    new RNFirebaseAuthPackage()
                            );
        }

            @Override
    public List<ReactPackage> createAdditionalReactPackages() {
            return getPackages();
        }}
