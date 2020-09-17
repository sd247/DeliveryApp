import { Component, OnInit, Inject } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { APP_CONFIG, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  rtlSide = "left";
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'zmdi zmdi-home'
    },  
	 {
      title: 'wallet',
      url: '/wallet',
      icon: 'zmdi zmdi-balance-wallet'
    }, 
	 {
      title: 'my_profile',
      url: '/profile',
      icon: 'zmdi zmdi-assignment-account'
    },
 	{
      title: 'insight',
      url: '/insight',
      icon: 'zmdi zmdi-chart'
    }, 
	 
	{
      title: 'help_center',
      url: '/contact-us',
      icon: 'zmdi zmdi-comment-text'
    },
	 {
      title: 'languges',
      url: '/language',
      icon: 'zmdi zmdi-globe'
    },
    {
      title: 'logout',
      url: '/sign-in',
      icon: 'zmdi zmdi-open-in-new'
    },
	  
  ];

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  buyAppAction() {
    window.open("http://bit.ly/cc2_GroShop", '_system', 'location=no');
  }    
}
