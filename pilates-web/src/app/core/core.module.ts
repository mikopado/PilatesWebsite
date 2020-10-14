import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';
import { AppConfigService } from './app-config.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerService } from './spinner.service';

export function appInitializer(
  appConfigService: AppConfigService,
) {
  return async () => {
    await appConfigService.load();
  };
}

@NgModule({
  declarations: [FooterComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [SpinnerService],
  exports: [FooterComponent, SpinnerComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure CoreModule is only loaded into AppModule

  /**
   * Looks for the module in the parent injector to see if it's already been loaded
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);

  }
}
