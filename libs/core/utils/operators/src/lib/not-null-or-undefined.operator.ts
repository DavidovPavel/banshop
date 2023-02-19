import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export const inputIsNotNullOrUndefined = <T>(input: null | undefined | T): input is T =>
  input !== null && input !== undefined;

export function isNotNullOrUndefined<T>() {
  return (source$: Observable<null | undefined | T>): Observable<T> => source$.pipe(filter(inputIsNotNullOrUndefined));
}
