import { Directive, ChangeDetectorRef, ElementRef } from '@angular/core';
import { RootTranslateService } from './root-translate-service';
import { TranslateDirective } from '@ngx-translate/core';

@Directive({
  selector: '[translateCommon]'
})
export class TranslateCommonDirective extends TranslateDirective {

  constructor(private readonly rootTranslateService: RootTranslateService, element: ElementRef, _ref: ChangeDetectorRef) { 
    super(rootTranslateService.TranslateService, element, _ref);
  }

}
