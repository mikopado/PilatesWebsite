import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from 'aws-amplify';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Amplify.configure({
  Auth: {
    identityPoolId: '',
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
    oauth: {
      domain: 'cognito_domain',
      scope: ['phone', 'email'],
      redirectSignIn: 'home_page',
      redirectSignOut: 'home_page',
      responseType: 'code'
    }
  }
});
