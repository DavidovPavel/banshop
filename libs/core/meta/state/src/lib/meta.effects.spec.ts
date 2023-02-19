import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MetaEffects } from './meta.effects';

describe('MetaEffects', () => {
  let actions$: Observable<any>;
  let effects: MetaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MetaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MetaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
