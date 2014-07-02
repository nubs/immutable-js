import LazyIterable = require('./LazyIterable');
import Vector = require('./Vector');

declare class OrderedLazyIterable<V, C> extends LazyIterable<number, V, C> {

  /**
   *
   */
  public iterate(fn: (value?: V, index?: number, collection?: C) => any, thisArg?: any, reverseIndices?: boolean): boolean;
  public reverseIterate(fn: (value?: V, index?: number, collection?: C) => any, thisArg?: any, maintainIndices?: boolean): boolean;
  public toArray(): V[];
  public toVector(): Vector<V>;
  public reverse(maintainIndices?: boolean): OrderedLazyIterable<V, C>;
  public keys(): OrderedLazyIterable<number, C>;
  public values(): OrderedLazyIterable<V, C>;
  public entries(): OrderedLazyIterable<any[], C>; // : OrderedLazyIterable<Array<any/*(K, V)*/>, C>
  public first(fn?: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): V;
  public last(fn?: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): V;
  public reduceRight<R>(fn: (prevReduction?: R, value?: V, index?: number, collection?: C) => R, initialReduction?: R, thisArg?: any): R;
  public map<V2>(fn: (value?: V, index?: number, collection?: C) => V2, thisArg?: any): OrderedLazyIterable<V2, C>;
  public filter(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any, maintainIndices?: boolean): OrderedLazyIterable<V, C>;
  public indexOf(searchValue: V): number;
  public lastIndexOf(searchValue: V): number;
  public findIndex(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): number;
  public findLast(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): V;
  public findLastIndex(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): number;
  public take(amount: number): OrderedLazyIterable<V, C>;
  public takeWhile(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): OrderedLazyIterable<V, C>;
  public takeUntil(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any): OrderedLazyIterable<V, C>;
  public skip(amount: number, maintainIndices?: boolean): OrderedLazyIterable<V, C>;
  public skipWhile(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any, maintainIndices?: boolean): OrderedLazyIterable<V, C>;
  public skipUntil(fn: (value?: V, index?: number, collection?: C) => boolean, thisArg?: any, maintainIndices?: boolean): OrderedLazyIterable<V, C>;
}

export = OrderedLazyIterable;