import { OnDestroy, OnInit } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GConstructor } from './mixin';

export function WithDestroy<T extends GConstructor>(Base: T = (class {} as any)) {
  return class extends Base implements OnDestroy {

    protected destroy$: Subject<void> = new Subject<void>();
    protected takeUntilDestroy: MonoTypeOperatorFunction<any> = takeUntil(this.destroy$);

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
  };
}
