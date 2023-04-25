import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export class NativeElementInjectorDirective {
    constructor(controlDir, host) {
        this.controlDir = controlDir;
        this.host = host;
    }
    ngOnInit() {
        if (this.controlDir.control) {
            // @ts-ignore
            this.controlDir.control['nativeElement'] = this.host.nativeElement;
        }
    }
}
NativeElementInjectorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NativeElementInjectorDirective, deps: [{ token: i1.NgControl }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NativeElementInjectorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NativeElementInjectorDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngModel], [formControl], [formControlName]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvZGlyZWN0aXZlcy9uYXRpdmUtZWxlbWVudC1pbmplY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7OztBQUc5RDs7Ozs7OztFQU9FO0FBS0YsTUFBTSxPQUFPLDhCQUE4QjtJQUMxQyxZQUNTLFVBQXFCLEVBQ3JCLElBQWlDO1FBRGpDLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBNkI7SUFDdkMsQ0FBQztJQUNKLFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzVCLGFBQWE7WUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN0RTtJQUNGLENBQUM7OzJIQVZXLDhCQUE4QjsrR0FBOUIsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBSjFDLFNBQVM7bUJBQUM7b0JBQ1YsK0NBQStDO29CQUMvQyxRQUFRLEVBQUUsNkNBQTZDO2lCQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8qXHJcblwiUHJvcGVydHkgJ25hdGl2ZUVsZW1lbnQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0Zvcm1Db250cm9sJ1wiLlxyXG4nTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlJyBpbmplY3RzIG5hdGl2ZUVsZW1lbnQgdG8gZWFjaCBjb250cm9sLFxyXG5zbyB3ZSBjYW4gYWNjZXNzIGl0IGZyb20gaW5zaWRlIHZhbGlkYXRvciBmb3IgZXhhbXBsZS5cclxuTW9yZSBhYm91dCB0aGlzIGFwcHJvYWNoIGFuZCByZWFzb25zIGZvciB0aGlzOlxyXG5odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODAyNVxyXG5odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQwNzUxMTkvMTYxNzU5MFxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdLCBbZm9ybUNvbnRyb2xdLCBbZm9ybUNvbnRyb2xOYW1lXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXHJcblx0XHRwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEZvcm1FbGVtZW50PlxyXG5cdCkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xEaXIuY29udHJvbCkge1xyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sWyduYXRpdmVFbGVtZW50J10gPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19