import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from 'aws-amplify';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


Amplify.configure({
  Auth: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_P2jJSK3QI',
    userPoolWebClientId: '2j0p9jd10h8qcn11qq2jb9sac8',
    // oauth: {
    //   domain: 'https://yogame.auth.eu-west-1.amazoncognito.com',
    //   scope: ['email', 'openid'],
    //   redirectSignIn: 'http://localhost:4200',
    //   redirectSignOut: 'http://localhost:4200',
    //   responseType: 'code'
    // }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


