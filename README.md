# Translate each component using lazy loaded module, redux store & ngx-translate
In Angular 7 using redux store, translate your pages with ngx-Translate for each lazy loaded module

## Prerequisite
```
npm i rxjs --save

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save

npm i @ngrx/store --save
```

## Architecture

*1. Modules*

AppModule --> HomeComponent

Lazy Load Modules: AboutMeModule --> AboutMeComponent

                     MySkillsModule --> MySkillsComponent



*2. Translation files*

  - home - en, fr, nl       --> Contains home page description and common words used across other pages (like About me/My Skills for menu & page header text)
  - about.me - en, fr, nl  --> Contains about me description excluding page header text (About me)
  - my.skills - en, fr, nl   --> Contains my skills description excluding page header text (My Skills)


*3. reduxStore folder*: Implementation for language change dropdown using store, so that this information can be passed to other components.


*4. shared folder*: Contains classes that retrieve common words (like About me/My Skills for respective page header text) for the selected language from home.xx.json files

## Reference Links
Thanks to [Fabien](https://medium.com/@TuiZ/how-to-split-your-i18n-file-per-lazy-loaded-module-with-ngx-translate-3caef57a738f) and [Lukas Marx](https://malcoded.com/posts/angular-ngrx-guide) for their articles.

## Screenshot
![translatepermodule](https://raw.githubusercontent.com/bibinphilip/angular-redux-ngxTranslate-per-module/master/src/assets/translatepermodule.gif)



