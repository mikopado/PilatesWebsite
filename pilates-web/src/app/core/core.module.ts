import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';


@NgModule({
  declarations: [FooterComponent ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure CoreModule is only loaded into AppModule

  /**
   * Looks for the module in the parent injector to see if it's already been loaded
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule)  {
    super(parentModule);
    
  }
 }
