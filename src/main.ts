import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VFhhQlJBfVtdVXxLflF1VWBTflx6d1xWESFaRnZdQV1gS3lTfkZlXXpWdndT");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
