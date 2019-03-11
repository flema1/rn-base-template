import App from "./App.js";

App().events().registerAppLaunchedListener(() => {
  App().setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'App.Home',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Home'
                                }
                            }
                        }
                    }
                }]
            }
        }
    });
});