import { ApplicationConfig, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PopUpService } from './services/pop-up.service';


export function initPopUpService() {
  return () => inject(PopUpService);
}

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), importProvidersFrom(MatDialogModule), {
    provide: ENVIRONMENT_INITIALIZER,
    useFactory: initPopUpService,
    multi: true
  }]
};
