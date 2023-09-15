import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), importProvidersFrom(MatDialogModule)]
};
