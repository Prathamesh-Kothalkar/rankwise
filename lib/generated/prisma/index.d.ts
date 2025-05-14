
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CollegeCutoff
 * 
 */
export type CollegeCutoff = $Result.DefaultSelection<Prisma.$CollegeCutoffPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model BookmarkCollege
 * 
 */
export type BookmarkCollege = $Result.DefaultSelection<Prisma.$BookmarkCollegePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CollegeCutoffs
 * const collegeCutoffs = await prisma.collegeCutoff.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CollegeCutoffs
   * const collegeCutoffs = await prisma.collegeCutoff.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.collegeCutoff`: Exposes CRUD operations for the **CollegeCutoff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollegeCutoffs
    * const collegeCutoffs = await prisma.collegeCutoff.findMany()
    * ```
    */
  get collegeCutoff(): Prisma.CollegeCutoffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarkCollege`: Exposes CRUD operations for the **BookmarkCollege** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarkColleges
    * const bookmarkColleges = await prisma.bookmarkCollege.findMany()
    * ```
    */
  get bookmarkCollege(): Prisma.BookmarkCollegeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CollegeCutoff: 'CollegeCutoff',
    User: 'User',
    Profile: 'Profile',
    BookmarkCollege: 'BookmarkCollege'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "collegeCutoff" | "user" | "profile" | "bookmarkCollege"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CollegeCutoff: {
        payload: Prisma.$CollegeCutoffPayload<ExtArgs>
        fields: Prisma.CollegeCutoffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeCutoffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeCutoffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          findFirst: {
            args: Prisma.CollegeCutoffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeCutoffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          findMany: {
            args: Prisma.CollegeCutoffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>[]
          }
          create: {
            args: Prisma.CollegeCutoffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          createMany: {
            args: Prisma.CollegeCutoffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCutoffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>[]
          }
          delete: {
            args: Prisma.CollegeCutoffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          update: {
            args: Prisma.CollegeCutoffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          deleteMany: {
            args: Prisma.CollegeCutoffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeCutoffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeCutoffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>[]
          }
          upsert: {
            args: Prisma.CollegeCutoffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCutoffPayload>
          }
          aggregate: {
            args: Prisma.CollegeCutoffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollegeCutoff>
          }
          groupBy: {
            args: Prisma.CollegeCutoffGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeCutoffGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCutoffCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCutoffCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      BookmarkCollege: {
        payload: Prisma.$BookmarkCollegePayload<ExtArgs>
        fields: Prisma.BookmarkCollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkCollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkCollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          findFirst: {
            args: Prisma.BookmarkCollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkCollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          findMany: {
            args: Prisma.BookmarkCollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>[]
          }
          create: {
            args: Prisma.BookmarkCollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          createMany: {
            args: Prisma.BookmarkCollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>[]
          }
          delete: {
            args: Prisma.BookmarkCollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          update: {
            args: Prisma.BookmarkCollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          deleteMany: {
            args: Prisma.BookmarkCollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkCollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkCollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>[]
          }
          upsert: {
            args: Prisma.BookmarkCollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkCollegePayload>
          }
          aggregate: {
            args: Prisma.BookmarkCollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarkCollege>
          }
          groupBy: {
            args: Prisma.BookmarkCollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCollegeCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCollegeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    collegeCutoff?: CollegeCutoffOmit
    user?: UserOmit
    profile?: ProfileOmit
    bookmarkCollege?: BookmarkCollegeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CollegeCutoffCountOutputType
   */

  export type CollegeCutoffCountOutputType = {
    bookmarks: number
  }

  export type CollegeCutoffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | CollegeCutoffCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * CollegeCutoffCountOutputType without action
   */
  export type CollegeCutoffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoffCountOutputType
     */
    select?: CollegeCutoffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCutoffCountOutputType without action
   */
  export type CollegeCutoffCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkCollegeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookmarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkCollegeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CollegeCutoff
   */

  export type AggregateCollegeCutoff = {
    _count: CollegeCutoffCountAggregateOutputType | null
    _avg: CollegeCutoffAvgAggregateOutputType | null
    _sum: CollegeCutoffSumAggregateOutputType | null
    _min: CollegeCutoffMinAggregateOutputType | null
    _max: CollegeCutoffMaxAggregateOutputType | null
  }

  export type CollegeCutoffAvgAggregateOutputType = {
    id: number | null
    collegeCode: number | null
    cutoff: number | null
  }

  export type CollegeCutoffSumAggregateOutputType = {
    id: number | null
    collegeCode: number | null
    cutoff: number | null
  }

  export type CollegeCutoffMinAggregateOutputType = {
    id: number | null
    collegeCode: number | null
    collegeName: string | null
    status: string | null
    location: string | null
    branch: string | null
    category: string | null
    gender: string | null
    cutoff: number | null
    createdAt: Date | null
  }

  export type CollegeCutoffMaxAggregateOutputType = {
    id: number | null
    collegeCode: number | null
    collegeName: string | null
    status: string | null
    location: string | null
    branch: string | null
    category: string | null
    gender: string | null
    cutoff: number | null
    createdAt: Date | null
  }

  export type CollegeCutoffCountAggregateOutputType = {
    id: number
    collegeCode: number
    collegeName: number
    status: number
    location: number
    branch: number
    category: number
    gender: number
    cutoff: number
    createdAt: number
    _all: number
  }


  export type CollegeCutoffAvgAggregateInputType = {
    id?: true
    collegeCode?: true
    cutoff?: true
  }

  export type CollegeCutoffSumAggregateInputType = {
    id?: true
    collegeCode?: true
    cutoff?: true
  }

  export type CollegeCutoffMinAggregateInputType = {
    id?: true
    collegeCode?: true
    collegeName?: true
    status?: true
    location?: true
    branch?: true
    category?: true
    gender?: true
    cutoff?: true
    createdAt?: true
  }

  export type CollegeCutoffMaxAggregateInputType = {
    id?: true
    collegeCode?: true
    collegeName?: true
    status?: true
    location?: true
    branch?: true
    category?: true
    gender?: true
    cutoff?: true
    createdAt?: true
  }

  export type CollegeCutoffCountAggregateInputType = {
    id?: true
    collegeCode?: true
    collegeName?: true
    status?: true
    location?: true
    branch?: true
    category?: true
    gender?: true
    cutoff?: true
    createdAt?: true
    _all?: true
  }

  export type CollegeCutoffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeCutoff to aggregate.
     */
    where?: CollegeCutoffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCutoffs to fetch.
     */
    orderBy?: CollegeCutoffOrderByWithRelationInput | CollegeCutoffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeCutoffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCutoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCutoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollegeCutoffs
    **/
    _count?: true | CollegeCutoffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeCutoffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeCutoffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeCutoffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeCutoffMaxAggregateInputType
  }

  export type GetCollegeCutoffAggregateType<T extends CollegeCutoffAggregateArgs> = {
        [P in keyof T & keyof AggregateCollegeCutoff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollegeCutoff[P]>
      : GetScalarType<T[P], AggregateCollegeCutoff[P]>
  }




  export type CollegeCutoffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeCutoffWhereInput
    orderBy?: CollegeCutoffOrderByWithAggregationInput | CollegeCutoffOrderByWithAggregationInput[]
    by: CollegeCutoffScalarFieldEnum[] | CollegeCutoffScalarFieldEnum
    having?: CollegeCutoffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCutoffCountAggregateInputType | true
    _avg?: CollegeCutoffAvgAggregateInputType
    _sum?: CollegeCutoffSumAggregateInputType
    _min?: CollegeCutoffMinAggregateInputType
    _max?: CollegeCutoffMaxAggregateInputType
  }

  export type CollegeCutoffGroupByOutputType = {
    id: number
    collegeCode: number
    collegeName: string
    status: string | null
    location: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt: Date
    _count: CollegeCutoffCountAggregateOutputType | null
    _avg: CollegeCutoffAvgAggregateOutputType | null
    _sum: CollegeCutoffSumAggregateOutputType | null
    _min: CollegeCutoffMinAggregateOutputType | null
    _max: CollegeCutoffMaxAggregateOutputType | null
  }

  type GetCollegeCutoffGroupByPayload<T extends CollegeCutoffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeCutoffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeCutoffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeCutoffGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeCutoffGroupByOutputType[P]>
        }
      >
    >


  export type CollegeCutoffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeCode?: boolean
    collegeName?: boolean
    status?: boolean
    location?: boolean
    branch?: boolean
    category?: boolean
    gender?: boolean
    cutoff?: boolean
    createdAt?: boolean
    bookmarks?: boolean | CollegeCutoff$bookmarksArgs<ExtArgs>
    _count?: boolean | CollegeCutoffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeCutoff"]>

  export type CollegeCutoffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeCode?: boolean
    collegeName?: boolean
    status?: boolean
    location?: boolean
    branch?: boolean
    category?: boolean
    gender?: boolean
    cutoff?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["collegeCutoff"]>

  export type CollegeCutoffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeCode?: boolean
    collegeName?: boolean
    status?: boolean
    location?: boolean
    branch?: boolean
    category?: boolean
    gender?: boolean
    cutoff?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["collegeCutoff"]>

  export type CollegeCutoffSelectScalar = {
    id?: boolean
    collegeCode?: boolean
    collegeName?: boolean
    status?: boolean
    location?: boolean
    branch?: boolean
    category?: boolean
    gender?: boolean
    cutoff?: boolean
    createdAt?: boolean
  }

  export type CollegeCutoffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collegeCode" | "collegeName" | "status" | "location" | "branch" | "category" | "gender" | "cutoff" | "createdAt", ExtArgs["result"]["collegeCutoff"]>
  export type CollegeCutoffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | CollegeCutoff$bookmarksArgs<ExtArgs>
    _count?: boolean | CollegeCutoffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeCutoffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeCutoffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegeCutoffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollegeCutoff"
    objects: {
      bookmarks: Prisma.$BookmarkCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      collegeCode: number
      collegeName: string
      status: string | null
      location: string | null
      branch: string
      category: string
      gender: string
      cutoff: number
      createdAt: Date
    }, ExtArgs["result"]["collegeCutoff"]>
    composites: {}
  }

  type CollegeCutoffGetPayload<S extends boolean | null | undefined | CollegeCutoffDefaultArgs> = $Result.GetResult<Prisma.$CollegeCutoffPayload, S>

  type CollegeCutoffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeCutoffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCutoffCountAggregateInputType | true
    }

  export interface CollegeCutoffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollegeCutoff'], meta: { name: 'CollegeCutoff' } }
    /**
     * Find zero or one CollegeCutoff that matches the filter.
     * @param {CollegeCutoffFindUniqueArgs} args - Arguments to find a CollegeCutoff
     * @example
     * // Get one CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeCutoffFindUniqueArgs>(args: SelectSubset<T, CollegeCutoffFindUniqueArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollegeCutoff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeCutoffFindUniqueOrThrowArgs} args - Arguments to find a CollegeCutoff
     * @example
     * // Get one CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeCutoffFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeCutoffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeCutoff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffFindFirstArgs} args - Arguments to find a CollegeCutoff
     * @example
     * // Get one CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeCutoffFindFirstArgs>(args?: SelectSubset<T, CollegeCutoffFindFirstArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeCutoff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffFindFirstOrThrowArgs} args - Arguments to find a CollegeCutoff
     * @example
     * // Get one CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeCutoffFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeCutoffFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollegeCutoffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollegeCutoffs
     * const collegeCutoffs = await prisma.collegeCutoff.findMany()
     * 
     * // Get first 10 CollegeCutoffs
     * const collegeCutoffs = await prisma.collegeCutoff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeCutoffWithIdOnly = await prisma.collegeCutoff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeCutoffFindManyArgs>(args?: SelectSubset<T, CollegeCutoffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollegeCutoff.
     * @param {CollegeCutoffCreateArgs} args - Arguments to create a CollegeCutoff.
     * @example
     * // Create one CollegeCutoff
     * const CollegeCutoff = await prisma.collegeCutoff.create({
     *   data: {
     *     // ... data to create a CollegeCutoff
     *   }
     * })
     * 
     */
    create<T extends CollegeCutoffCreateArgs>(args: SelectSubset<T, CollegeCutoffCreateArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollegeCutoffs.
     * @param {CollegeCutoffCreateManyArgs} args - Arguments to create many CollegeCutoffs.
     * @example
     * // Create many CollegeCutoffs
     * const collegeCutoff = await prisma.collegeCutoff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCutoffCreateManyArgs>(args?: SelectSubset<T, CollegeCutoffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollegeCutoffs and returns the data saved in the database.
     * @param {CollegeCutoffCreateManyAndReturnArgs} args - Arguments to create many CollegeCutoffs.
     * @example
     * // Create many CollegeCutoffs
     * const collegeCutoff = await prisma.collegeCutoff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollegeCutoffs and only return the `id`
     * const collegeCutoffWithIdOnly = await prisma.collegeCutoff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCutoffCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCutoffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollegeCutoff.
     * @param {CollegeCutoffDeleteArgs} args - Arguments to delete one CollegeCutoff.
     * @example
     * // Delete one CollegeCutoff
     * const CollegeCutoff = await prisma.collegeCutoff.delete({
     *   where: {
     *     // ... filter to delete one CollegeCutoff
     *   }
     * })
     * 
     */
    delete<T extends CollegeCutoffDeleteArgs>(args: SelectSubset<T, CollegeCutoffDeleteArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollegeCutoff.
     * @param {CollegeCutoffUpdateArgs} args - Arguments to update one CollegeCutoff.
     * @example
     * // Update one CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeCutoffUpdateArgs>(args: SelectSubset<T, CollegeCutoffUpdateArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollegeCutoffs.
     * @param {CollegeCutoffDeleteManyArgs} args - Arguments to filter CollegeCutoffs to delete.
     * @example
     * // Delete a few CollegeCutoffs
     * const { count } = await prisma.collegeCutoff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeCutoffDeleteManyArgs>(args?: SelectSubset<T, CollegeCutoffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeCutoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollegeCutoffs
     * const collegeCutoff = await prisma.collegeCutoff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeCutoffUpdateManyArgs>(args: SelectSubset<T, CollegeCutoffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeCutoffs and returns the data updated in the database.
     * @param {CollegeCutoffUpdateManyAndReturnArgs} args - Arguments to update many CollegeCutoffs.
     * @example
     * // Update many CollegeCutoffs
     * const collegeCutoff = await prisma.collegeCutoff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollegeCutoffs and only return the `id`
     * const collegeCutoffWithIdOnly = await prisma.collegeCutoff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeCutoffUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeCutoffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollegeCutoff.
     * @param {CollegeCutoffUpsertArgs} args - Arguments to update or create a CollegeCutoff.
     * @example
     * // Update or create a CollegeCutoff
     * const collegeCutoff = await prisma.collegeCutoff.upsert({
     *   create: {
     *     // ... data to create a CollegeCutoff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollegeCutoff we want to update
     *   }
     * })
     */
    upsert<T extends CollegeCutoffUpsertArgs>(args: SelectSubset<T, CollegeCutoffUpsertArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollegeCutoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffCountArgs} args - Arguments to filter CollegeCutoffs to count.
     * @example
     * // Count the number of CollegeCutoffs
     * const count = await prisma.collegeCutoff.count({
     *   where: {
     *     // ... the filter for the CollegeCutoffs we want to count
     *   }
     * })
    **/
    count<T extends CollegeCutoffCountArgs>(
      args?: Subset<T, CollegeCutoffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCutoffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollegeCutoff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollegeCutoffAggregateArgs>(args: Subset<T, CollegeCutoffAggregateArgs>): Prisma.PrismaPromise<GetCollegeCutoffAggregateType<T>>

    /**
     * Group by CollegeCutoff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCutoffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollegeCutoffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeCutoffGroupByArgs['orderBy'] }
        : { orderBy?: CollegeCutoffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollegeCutoffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeCutoffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollegeCutoff model
   */
  readonly fields: CollegeCutoffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollegeCutoff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeCutoffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends CollegeCutoff$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, CollegeCutoff$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollegeCutoff model
   */
  interface CollegeCutoffFieldRefs {
    readonly id: FieldRef<"CollegeCutoff", 'Int'>
    readonly collegeCode: FieldRef<"CollegeCutoff", 'Int'>
    readonly collegeName: FieldRef<"CollegeCutoff", 'String'>
    readonly status: FieldRef<"CollegeCutoff", 'String'>
    readonly location: FieldRef<"CollegeCutoff", 'String'>
    readonly branch: FieldRef<"CollegeCutoff", 'String'>
    readonly category: FieldRef<"CollegeCutoff", 'String'>
    readonly gender: FieldRef<"CollegeCutoff", 'String'>
    readonly cutoff: FieldRef<"CollegeCutoff", 'Float'>
    readonly createdAt: FieldRef<"CollegeCutoff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollegeCutoff findUnique
   */
  export type CollegeCutoffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCutoff to fetch.
     */
    where: CollegeCutoffWhereUniqueInput
  }

  /**
   * CollegeCutoff findUniqueOrThrow
   */
  export type CollegeCutoffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCutoff to fetch.
     */
    where: CollegeCutoffWhereUniqueInput
  }

  /**
   * CollegeCutoff findFirst
   */
  export type CollegeCutoffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCutoff to fetch.
     */
    where?: CollegeCutoffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCutoffs to fetch.
     */
    orderBy?: CollegeCutoffOrderByWithRelationInput | CollegeCutoffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeCutoffs.
     */
    cursor?: CollegeCutoffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCutoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCutoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeCutoffs.
     */
    distinct?: CollegeCutoffScalarFieldEnum | CollegeCutoffScalarFieldEnum[]
  }

  /**
   * CollegeCutoff findFirstOrThrow
   */
  export type CollegeCutoffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCutoff to fetch.
     */
    where?: CollegeCutoffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCutoffs to fetch.
     */
    orderBy?: CollegeCutoffOrderByWithRelationInput | CollegeCutoffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeCutoffs.
     */
    cursor?: CollegeCutoffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCutoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCutoffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeCutoffs.
     */
    distinct?: CollegeCutoffScalarFieldEnum | CollegeCutoffScalarFieldEnum[]
  }

  /**
   * CollegeCutoff findMany
   */
  export type CollegeCutoffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCutoffs to fetch.
     */
    where?: CollegeCutoffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCutoffs to fetch.
     */
    orderBy?: CollegeCutoffOrderByWithRelationInput | CollegeCutoffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollegeCutoffs.
     */
    cursor?: CollegeCutoffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCutoffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCutoffs.
     */
    skip?: number
    distinct?: CollegeCutoffScalarFieldEnum | CollegeCutoffScalarFieldEnum[]
  }

  /**
   * CollegeCutoff create
   */
  export type CollegeCutoffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * The data needed to create a CollegeCutoff.
     */
    data: XOR<CollegeCutoffCreateInput, CollegeCutoffUncheckedCreateInput>
  }

  /**
   * CollegeCutoff createMany
   */
  export type CollegeCutoffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollegeCutoffs.
     */
    data: CollegeCutoffCreateManyInput | CollegeCutoffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollegeCutoff createManyAndReturn
   */
  export type CollegeCutoffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * The data used to create many CollegeCutoffs.
     */
    data: CollegeCutoffCreateManyInput | CollegeCutoffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollegeCutoff update
   */
  export type CollegeCutoffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * The data needed to update a CollegeCutoff.
     */
    data: XOR<CollegeCutoffUpdateInput, CollegeCutoffUncheckedUpdateInput>
    /**
     * Choose, which CollegeCutoff to update.
     */
    where: CollegeCutoffWhereUniqueInput
  }

  /**
   * CollegeCutoff updateMany
   */
  export type CollegeCutoffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollegeCutoffs.
     */
    data: XOR<CollegeCutoffUpdateManyMutationInput, CollegeCutoffUncheckedUpdateManyInput>
    /**
     * Filter which CollegeCutoffs to update
     */
    where?: CollegeCutoffWhereInput
    /**
     * Limit how many CollegeCutoffs to update.
     */
    limit?: number
  }

  /**
   * CollegeCutoff updateManyAndReturn
   */
  export type CollegeCutoffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * The data used to update CollegeCutoffs.
     */
    data: XOR<CollegeCutoffUpdateManyMutationInput, CollegeCutoffUncheckedUpdateManyInput>
    /**
     * Filter which CollegeCutoffs to update
     */
    where?: CollegeCutoffWhereInput
    /**
     * Limit how many CollegeCutoffs to update.
     */
    limit?: number
  }

  /**
   * CollegeCutoff upsert
   */
  export type CollegeCutoffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * The filter to search for the CollegeCutoff to update in case it exists.
     */
    where: CollegeCutoffWhereUniqueInput
    /**
     * In case the CollegeCutoff found by the `where` argument doesn't exist, create a new CollegeCutoff with this data.
     */
    create: XOR<CollegeCutoffCreateInput, CollegeCutoffUncheckedCreateInput>
    /**
     * In case the CollegeCutoff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeCutoffUpdateInput, CollegeCutoffUncheckedUpdateInput>
  }

  /**
   * CollegeCutoff delete
   */
  export type CollegeCutoffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
    /**
     * Filter which CollegeCutoff to delete.
     */
    where: CollegeCutoffWhereUniqueInput
  }

  /**
   * CollegeCutoff deleteMany
   */
  export type CollegeCutoffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeCutoffs to delete
     */
    where?: CollegeCutoffWhereInput
    /**
     * Limit how many CollegeCutoffs to delete.
     */
    limit?: number
  }

  /**
   * CollegeCutoff.bookmarks
   */
  export type CollegeCutoff$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    where?: BookmarkCollegeWhereInput
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    cursor?: BookmarkCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkCollegeScalarFieldEnum | BookmarkCollegeScalarFieldEnum[]
  }

  /**
   * CollegeCutoff without action
   */
  export type CollegeCutoffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCutoff
     */
    select?: CollegeCutoffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCutoff
     */
    omit?: CollegeCutoffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCutoffInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      bookmarks: Prisma.$BookmarkCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    where?: BookmarkCollegeWhereInput
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    cursor?: BookmarkCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkCollegeScalarFieldEnum | BookmarkCollegeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    mobile: number | null
    percentile: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    mobile: number | null
    percentile: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    mobile: number | null
    percentile: number | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    mobile: number | null
    percentile: number | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    mobile: number
    percentile: number
    interestedBranches: number
    interestedCities: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    mobile?: true
    percentile?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    mobile?: true
    percentile?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile?: true
    percentile?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile?: true
    percentile?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile?: true
    percentile?: true
    interestedBranches?: true
    interestedCities?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string | null
    mobile: number
    percentile: number
    interestedBranches: string[]
    interestedCities: string[]
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    percentile?: boolean
    interestedBranches?: boolean
    interestedCities?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    percentile?: boolean
    interestedBranches?: boolean
    interestedCities?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    percentile?: boolean
    interestedBranches?: boolean
    interestedCities?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    percentile?: boolean
    interestedBranches?: boolean
    interestedCities?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "mobile" | "percentile" | "interestedBranches" | "interestedCities" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string | null
      mobile: number
      percentile: number
      interestedBranches: string[]
      interestedCities: string[]
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly firstname: FieldRef<"Profile", 'String'>
    readonly lastname: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly mobile: FieldRef<"Profile", 'Int'>
    readonly percentile: FieldRef<"Profile", 'Float'>
    readonly interestedBranches: FieldRef<"Profile", 'String[]'>
    readonly interestedCities: FieldRef<"Profile", 'String[]'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model BookmarkCollege
   */

  export type AggregateBookmarkCollege = {
    _count: BookmarkCollegeCountAggregateOutputType | null
    _avg: BookmarkCollegeAvgAggregateOutputType | null
    _sum: BookmarkCollegeSumAggregateOutputType | null
    _min: BookmarkCollegeMinAggregateOutputType | null
    _max: BookmarkCollegeMaxAggregateOutputType | null
  }

  export type BookmarkCollegeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    collegeId: number | null
  }

  export type BookmarkCollegeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    collegeId: number | null
  }

  export type BookmarkCollegeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    collegeId: number | null
  }

  export type BookmarkCollegeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    collegeId: number | null
  }

  export type BookmarkCollegeCountAggregateOutputType = {
    id: number
    userId: number
    collegeId: number
    _all: number
  }


  export type BookmarkCollegeAvgAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
  }

  export type BookmarkCollegeSumAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
  }

  export type BookmarkCollegeMinAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
  }

  export type BookmarkCollegeMaxAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
  }

  export type BookmarkCollegeCountAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
    _all?: true
  }

  export type BookmarkCollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkCollege to aggregate.
     */
    where?: BookmarkCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkColleges to fetch.
     */
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarkColleges
    **/
    _count?: true | BookmarkCollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkCollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkCollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkCollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkCollegeMaxAggregateInputType
  }

  export type GetBookmarkCollegeAggregateType<T extends BookmarkCollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarkCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarkCollege[P]>
      : GetScalarType<T[P], AggregateBookmarkCollege[P]>
  }




  export type BookmarkCollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkCollegeWhereInput
    orderBy?: BookmarkCollegeOrderByWithAggregationInput | BookmarkCollegeOrderByWithAggregationInput[]
    by: BookmarkCollegeScalarFieldEnum[] | BookmarkCollegeScalarFieldEnum
    having?: BookmarkCollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCollegeCountAggregateInputType | true
    _avg?: BookmarkCollegeAvgAggregateInputType
    _sum?: BookmarkCollegeSumAggregateInputType
    _min?: BookmarkCollegeMinAggregateInputType
    _max?: BookmarkCollegeMaxAggregateInputType
  }

  export type BookmarkCollegeGroupByOutputType = {
    id: number
    userId: number
    collegeId: number
    _count: BookmarkCollegeCountAggregateOutputType | null
    _avg: BookmarkCollegeAvgAggregateOutputType | null
    _sum: BookmarkCollegeSumAggregateOutputType | null
    _min: BookmarkCollegeMinAggregateOutputType | null
    _max: BookmarkCollegeMaxAggregateOutputType | null
  }

  type GetBookmarkCollegeGroupByPayload<T extends BookmarkCollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkCollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkCollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkCollegeGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkCollegeGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkCollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkCollege"]>

  export type BookmarkCollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkCollege"]>

  export type BookmarkCollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkCollege"]>

  export type BookmarkCollegeSelectScalar = {
    id?: boolean
    userId?: boolean
    collegeId?: boolean
  }

  export type BookmarkCollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "collegeId", ExtArgs["result"]["bookmarkCollege"]>
  export type BookmarkCollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }
  export type BookmarkCollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }
  export type BookmarkCollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeCutoffDefaultArgs<ExtArgs>
  }

  export type $BookmarkCollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarkCollege"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      college: Prisma.$CollegeCutoffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      collegeId: number
    }, ExtArgs["result"]["bookmarkCollege"]>
    composites: {}
  }

  type BookmarkCollegeGetPayload<S extends boolean | null | undefined | BookmarkCollegeDefaultArgs> = $Result.GetResult<Prisma.$BookmarkCollegePayload, S>

  type BookmarkCollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkCollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCollegeCountAggregateInputType | true
    }

  export interface BookmarkCollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarkCollege'], meta: { name: 'BookmarkCollege' } }
    /**
     * Find zero or one BookmarkCollege that matches the filter.
     * @param {BookmarkCollegeFindUniqueArgs} args - Arguments to find a BookmarkCollege
     * @example
     * // Get one BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkCollegeFindUniqueArgs>(args: SelectSubset<T, BookmarkCollegeFindUniqueArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookmarkCollege that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkCollegeFindUniqueOrThrowArgs} args - Arguments to find a BookmarkCollege
     * @example
     * // Get one BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkCollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkCollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkCollege that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeFindFirstArgs} args - Arguments to find a BookmarkCollege
     * @example
     * // Get one BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkCollegeFindFirstArgs>(args?: SelectSubset<T, BookmarkCollegeFindFirstArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkCollege that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeFindFirstOrThrowArgs} args - Arguments to find a BookmarkCollege
     * @example
     * // Get one BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkCollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkCollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookmarkColleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarkColleges
     * const bookmarkColleges = await prisma.bookmarkCollege.findMany()
     * 
     * // Get first 10 BookmarkColleges
     * const bookmarkColleges = await prisma.bookmarkCollege.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkCollegeWithIdOnly = await prisma.bookmarkCollege.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkCollegeFindManyArgs>(args?: SelectSubset<T, BookmarkCollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookmarkCollege.
     * @param {BookmarkCollegeCreateArgs} args - Arguments to create a BookmarkCollege.
     * @example
     * // Create one BookmarkCollege
     * const BookmarkCollege = await prisma.bookmarkCollege.create({
     *   data: {
     *     // ... data to create a BookmarkCollege
     *   }
     * })
     * 
     */
    create<T extends BookmarkCollegeCreateArgs>(args: SelectSubset<T, BookmarkCollegeCreateArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookmarkColleges.
     * @param {BookmarkCollegeCreateManyArgs} args - Arguments to create many BookmarkColleges.
     * @example
     * // Create many BookmarkColleges
     * const bookmarkCollege = await prisma.bookmarkCollege.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCollegeCreateManyArgs>(args?: SelectSubset<T, BookmarkCollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmarkColleges and returns the data saved in the database.
     * @param {BookmarkCollegeCreateManyAndReturnArgs} args - Arguments to create many BookmarkColleges.
     * @example
     * // Create many BookmarkColleges
     * const bookmarkCollege = await prisma.bookmarkCollege.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmarkColleges and only return the `id`
     * const bookmarkCollegeWithIdOnly = await prisma.bookmarkCollege.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookmarkCollege.
     * @param {BookmarkCollegeDeleteArgs} args - Arguments to delete one BookmarkCollege.
     * @example
     * // Delete one BookmarkCollege
     * const BookmarkCollege = await prisma.bookmarkCollege.delete({
     *   where: {
     *     // ... filter to delete one BookmarkCollege
     *   }
     * })
     * 
     */
    delete<T extends BookmarkCollegeDeleteArgs>(args: SelectSubset<T, BookmarkCollegeDeleteArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookmarkCollege.
     * @param {BookmarkCollegeUpdateArgs} args - Arguments to update one BookmarkCollege.
     * @example
     * // Update one BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkCollegeUpdateArgs>(args: SelectSubset<T, BookmarkCollegeUpdateArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookmarkColleges.
     * @param {BookmarkCollegeDeleteManyArgs} args - Arguments to filter BookmarkColleges to delete.
     * @example
     * // Delete a few BookmarkColleges
     * const { count } = await prisma.bookmarkCollege.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkCollegeDeleteManyArgs>(args?: SelectSubset<T, BookmarkCollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarkColleges
     * const bookmarkCollege = await prisma.bookmarkCollege.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkCollegeUpdateManyArgs>(args: SelectSubset<T, BookmarkCollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkColleges and returns the data updated in the database.
     * @param {BookmarkCollegeUpdateManyAndReturnArgs} args - Arguments to update many BookmarkColleges.
     * @example
     * // Update many BookmarkColleges
     * const bookmarkCollege = await prisma.bookmarkCollege.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmarkColleges and only return the `id`
     * const bookmarkCollegeWithIdOnly = await prisma.bookmarkCollege.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmarkCollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkCollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookmarkCollege.
     * @param {BookmarkCollegeUpsertArgs} args - Arguments to update or create a BookmarkCollege.
     * @example
     * // Update or create a BookmarkCollege
     * const bookmarkCollege = await prisma.bookmarkCollege.upsert({
     *   create: {
     *     // ... data to create a BookmarkCollege
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarkCollege we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkCollegeUpsertArgs>(args: SelectSubset<T, BookmarkCollegeUpsertArgs<ExtArgs>>): Prisma__BookmarkCollegeClient<$Result.GetResult<Prisma.$BookmarkCollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookmarkColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeCountArgs} args - Arguments to filter BookmarkColleges to count.
     * @example
     * // Count the number of BookmarkColleges
     * const count = await prisma.bookmarkCollege.count({
     *   where: {
     *     // ... the filter for the BookmarkColleges we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCollegeCountArgs>(
      args?: Subset<T, BookmarkCollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarkCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkCollegeAggregateArgs>(args: Subset<T, BookmarkCollegeAggregateArgs>): Prisma.PrismaPromise<GetBookmarkCollegeAggregateType<T>>

    /**
     * Group by BookmarkCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkCollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkCollegeGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkCollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkCollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarkCollege model
   */
  readonly fields: BookmarkCollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarkCollege.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkCollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeCutoffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeCutoffDefaultArgs<ExtArgs>>): Prisma__CollegeCutoffClient<$Result.GetResult<Prisma.$CollegeCutoffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookmarkCollege model
   */
  interface BookmarkCollegeFieldRefs {
    readonly id: FieldRef<"BookmarkCollege", 'Int'>
    readonly userId: FieldRef<"BookmarkCollege", 'Int'>
    readonly collegeId: FieldRef<"BookmarkCollege", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookmarkCollege findUnique
   */
  export type BookmarkCollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkCollege to fetch.
     */
    where: BookmarkCollegeWhereUniqueInput
  }

  /**
   * BookmarkCollege findUniqueOrThrow
   */
  export type BookmarkCollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkCollege to fetch.
     */
    where: BookmarkCollegeWhereUniqueInput
  }

  /**
   * BookmarkCollege findFirst
   */
  export type BookmarkCollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkCollege to fetch.
     */
    where?: BookmarkCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkColleges to fetch.
     */
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkColleges.
     */
    cursor?: BookmarkCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkColleges.
     */
    distinct?: BookmarkCollegeScalarFieldEnum | BookmarkCollegeScalarFieldEnum[]
  }

  /**
   * BookmarkCollege findFirstOrThrow
   */
  export type BookmarkCollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkCollege to fetch.
     */
    where?: BookmarkCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkColleges to fetch.
     */
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkColleges.
     */
    cursor?: BookmarkCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkColleges.
     */
    distinct?: BookmarkCollegeScalarFieldEnum | BookmarkCollegeScalarFieldEnum[]
  }

  /**
   * BookmarkCollege findMany
   */
  export type BookmarkCollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkColleges to fetch.
     */
    where?: BookmarkCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkColleges to fetch.
     */
    orderBy?: BookmarkCollegeOrderByWithRelationInput | BookmarkCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarkColleges.
     */
    cursor?: BookmarkCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkColleges.
     */
    skip?: number
    distinct?: BookmarkCollegeScalarFieldEnum | BookmarkCollegeScalarFieldEnum[]
  }

  /**
   * BookmarkCollege create
   */
  export type BookmarkCollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarkCollege.
     */
    data: XOR<BookmarkCollegeCreateInput, BookmarkCollegeUncheckedCreateInput>
  }

  /**
   * BookmarkCollege createMany
   */
  export type BookmarkCollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarkColleges.
     */
    data: BookmarkCollegeCreateManyInput | BookmarkCollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarkCollege createManyAndReturn
   */
  export type BookmarkCollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * The data used to create many BookmarkColleges.
     */
    data: BookmarkCollegeCreateManyInput | BookmarkCollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkCollege update
   */
  export type BookmarkCollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarkCollege.
     */
    data: XOR<BookmarkCollegeUpdateInput, BookmarkCollegeUncheckedUpdateInput>
    /**
     * Choose, which BookmarkCollege to update.
     */
    where: BookmarkCollegeWhereUniqueInput
  }

  /**
   * BookmarkCollege updateMany
   */
  export type BookmarkCollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarkColleges.
     */
    data: XOR<BookmarkCollegeUpdateManyMutationInput, BookmarkCollegeUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkColleges to update
     */
    where?: BookmarkCollegeWhereInput
    /**
     * Limit how many BookmarkColleges to update.
     */
    limit?: number
  }

  /**
   * BookmarkCollege updateManyAndReturn
   */
  export type BookmarkCollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * The data used to update BookmarkColleges.
     */
    data: XOR<BookmarkCollegeUpdateManyMutationInput, BookmarkCollegeUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkColleges to update
     */
    where?: BookmarkCollegeWhereInput
    /**
     * Limit how many BookmarkColleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkCollege upsert
   */
  export type BookmarkCollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarkCollege to update in case it exists.
     */
    where: BookmarkCollegeWhereUniqueInput
    /**
     * In case the BookmarkCollege found by the `where` argument doesn't exist, create a new BookmarkCollege with this data.
     */
    create: XOR<BookmarkCollegeCreateInput, BookmarkCollegeUncheckedCreateInput>
    /**
     * In case the BookmarkCollege was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkCollegeUpdateInput, BookmarkCollegeUncheckedUpdateInput>
  }

  /**
   * BookmarkCollege delete
   */
  export type BookmarkCollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
    /**
     * Filter which BookmarkCollege to delete.
     */
    where: BookmarkCollegeWhereUniqueInput
  }

  /**
   * BookmarkCollege deleteMany
   */
  export type BookmarkCollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkColleges to delete
     */
    where?: BookmarkCollegeWhereInput
    /**
     * Limit how many BookmarkColleges to delete.
     */
    limit?: number
  }

  /**
   * BookmarkCollege without action
   */
  export type BookmarkCollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkCollege
     */
    select?: BookmarkCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkCollege
     */
    omit?: BookmarkCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkCollegeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollegeCutoffScalarFieldEnum: {
    id: 'id',
    collegeCode: 'collegeCode',
    collegeName: 'collegeName',
    status: 'status',
    location: 'location',
    branch: 'branch',
    category: 'category',
    gender: 'gender',
    cutoff: 'cutoff',
    createdAt: 'createdAt'
  };

  export type CollegeCutoffScalarFieldEnum = (typeof CollegeCutoffScalarFieldEnum)[keyof typeof CollegeCutoffScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    mobile: 'mobile',
    percentile: 'percentile',
    interestedBranches: 'interestedBranches',
    interestedCities: 'interestedCities',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const BookmarkCollegeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    collegeId: 'collegeId'
  };

  export type BookmarkCollegeScalarFieldEnum = (typeof BookmarkCollegeScalarFieldEnum)[keyof typeof BookmarkCollegeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type CollegeCutoffWhereInput = {
    AND?: CollegeCutoffWhereInput | CollegeCutoffWhereInput[]
    OR?: CollegeCutoffWhereInput[]
    NOT?: CollegeCutoffWhereInput | CollegeCutoffWhereInput[]
    id?: IntFilter<"CollegeCutoff"> | number
    collegeCode?: IntFilter<"CollegeCutoff"> | number
    collegeName?: StringFilter<"CollegeCutoff"> | string
    status?: StringNullableFilter<"CollegeCutoff"> | string | null
    location?: StringNullableFilter<"CollegeCutoff"> | string | null
    branch?: StringFilter<"CollegeCutoff"> | string
    category?: StringFilter<"CollegeCutoff"> | string
    gender?: StringFilter<"CollegeCutoff"> | string
    cutoff?: FloatFilter<"CollegeCutoff"> | number
    createdAt?: DateTimeFilter<"CollegeCutoff"> | Date | string
    bookmarks?: BookmarkCollegeListRelationFilter
  }

  export type CollegeCutoffOrderByWithRelationInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    collegeName?: SortOrder
    status?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    branch?: SortOrder
    category?: SortOrder
    gender?: SortOrder
    cutoff?: SortOrder
    createdAt?: SortOrder
    bookmarks?: BookmarkCollegeOrderByRelationAggregateInput
  }

  export type CollegeCutoffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollegeCutoffWhereInput | CollegeCutoffWhereInput[]
    OR?: CollegeCutoffWhereInput[]
    NOT?: CollegeCutoffWhereInput | CollegeCutoffWhereInput[]
    collegeCode?: IntFilter<"CollegeCutoff"> | number
    collegeName?: StringFilter<"CollegeCutoff"> | string
    status?: StringNullableFilter<"CollegeCutoff"> | string | null
    location?: StringNullableFilter<"CollegeCutoff"> | string | null
    branch?: StringFilter<"CollegeCutoff"> | string
    category?: StringFilter<"CollegeCutoff"> | string
    gender?: StringFilter<"CollegeCutoff"> | string
    cutoff?: FloatFilter<"CollegeCutoff"> | number
    createdAt?: DateTimeFilter<"CollegeCutoff"> | Date | string
    bookmarks?: BookmarkCollegeListRelationFilter
  }, "id">

  export type CollegeCutoffOrderByWithAggregationInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    collegeName?: SortOrder
    status?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    branch?: SortOrder
    category?: SortOrder
    gender?: SortOrder
    cutoff?: SortOrder
    createdAt?: SortOrder
    _count?: CollegeCutoffCountOrderByAggregateInput
    _avg?: CollegeCutoffAvgOrderByAggregateInput
    _max?: CollegeCutoffMaxOrderByAggregateInput
    _min?: CollegeCutoffMinOrderByAggregateInput
    _sum?: CollegeCutoffSumOrderByAggregateInput
  }

  export type CollegeCutoffScalarWhereWithAggregatesInput = {
    AND?: CollegeCutoffScalarWhereWithAggregatesInput | CollegeCutoffScalarWhereWithAggregatesInput[]
    OR?: CollegeCutoffScalarWhereWithAggregatesInput[]
    NOT?: CollegeCutoffScalarWhereWithAggregatesInput | CollegeCutoffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CollegeCutoff"> | number
    collegeCode?: IntWithAggregatesFilter<"CollegeCutoff"> | number
    collegeName?: StringWithAggregatesFilter<"CollegeCutoff"> | string
    status?: StringNullableWithAggregatesFilter<"CollegeCutoff"> | string | null
    location?: StringNullableWithAggregatesFilter<"CollegeCutoff"> | string | null
    branch?: StringWithAggregatesFilter<"CollegeCutoff"> | string
    category?: StringWithAggregatesFilter<"CollegeCutoff"> | string
    gender?: StringWithAggregatesFilter<"CollegeCutoff"> | string
    cutoff?: FloatWithAggregatesFilter<"CollegeCutoff"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CollegeCutoff"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    bookmarks?: BookmarkCollegeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    bookmarks?: BookmarkCollegeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    bookmarks?: BookmarkCollegeListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    firstname?: StringFilter<"Profile"> | string
    lastname?: StringFilter<"Profile"> | string
    email?: StringNullableFilter<"Profile"> | string | null
    mobile?: IntFilter<"Profile"> | number
    percentile?: FloatFilter<"Profile"> | number
    interestedBranches?: StringNullableListFilter<"Profile">
    interestedCities?: StringNullableListFilter<"Profile">
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    interestedBranches?: SortOrder
    interestedCities?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstname?: StringFilter<"Profile"> | string
    lastname?: StringFilter<"Profile"> | string
    email?: StringNullableFilter<"Profile"> | string | null
    mobile?: IntFilter<"Profile"> | number
    percentile?: FloatFilter<"Profile"> | number
    interestedBranches?: StringNullableListFilter<"Profile">
    interestedCities?: StringNullableListFilter<"Profile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    interestedBranches?: SortOrder
    interestedCities?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    firstname?: StringWithAggregatesFilter<"Profile"> | string
    lastname?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    mobile?: IntWithAggregatesFilter<"Profile"> | number
    percentile?: FloatWithAggregatesFilter<"Profile"> | number
    interestedBranches?: StringNullableListFilter<"Profile">
    interestedCities?: StringNullableListFilter<"Profile">
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type BookmarkCollegeWhereInput = {
    AND?: BookmarkCollegeWhereInput | BookmarkCollegeWhereInput[]
    OR?: BookmarkCollegeWhereInput[]
    NOT?: BookmarkCollegeWhereInput | BookmarkCollegeWhereInput[]
    id?: IntFilter<"BookmarkCollege"> | number
    userId?: IntFilter<"BookmarkCollege"> | number
    collegeId?: IntFilter<"BookmarkCollege"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeCutoffScalarRelationFilter, CollegeCutoffWhereInput>
  }

  export type BookmarkCollegeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    user?: UserOrderByWithRelationInput
    college?: CollegeCutoffOrderByWithRelationInput
  }

  export type BookmarkCollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookmarkCollegeWhereInput | BookmarkCollegeWhereInput[]
    OR?: BookmarkCollegeWhereInput[]
    NOT?: BookmarkCollegeWhereInput | BookmarkCollegeWhereInput[]
    userId?: IntFilter<"BookmarkCollege"> | number
    collegeId?: IntFilter<"BookmarkCollege"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeCutoffScalarRelationFilter, CollegeCutoffWhereInput>
  }, "id">

  export type BookmarkCollegeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    _count?: BookmarkCollegeCountOrderByAggregateInput
    _avg?: BookmarkCollegeAvgOrderByAggregateInput
    _max?: BookmarkCollegeMaxOrderByAggregateInput
    _min?: BookmarkCollegeMinOrderByAggregateInput
    _sum?: BookmarkCollegeSumOrderByAggregateInput
  }

  export type BookmarkCollegeScalarWhereWithAggregatesInput = {
    AND?: BookmarkCollegeScalarWhereWithAggregatesInput | BookmarkCollegeScalarWhereWithAggregatesInput[]
    OR?: BookmarkCollegeScalarWhereWithAggregatesInput[]
    NOT?: BookmarkCollegeScalarWhereWithAggregatesInput | BookmarkCollegeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookmarkCollege"> | number
    userId?: IntWithAggregatesFilter<"BookmarkCollege"> | number
    collegeId?: IntWithAggregatesFilter<"BookmarkCollege"> | number
  }

  export type CollegeCutoffCreateInput = {
    collegeCode: number
    collegeName: string
    status?: string | null
    location?: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt?: Date | string
    bookmarks?: BookmarkCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCutoffUncheckedCreateInput = {
    id?: number
    collegeCode: number
    collegeName: string
    status?: string | null
    location?: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt?: Date | string
    bookmarks?: BookmarkCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCutoffUpdateInput = {
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCutoffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCutoffCreateManyInput = {
    id?: number
    collegeCode: number
    collegeName: string
    status?: string | null
    location?: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt?: Date | string
  }

  export type CollegeCutoffUpdateManyMutationInput = {
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCutoffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    password: string
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    bookmarks?: BookmarkCollegeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    bookmarks?: BookmarkCollegeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    bookmarks?: BookmarkCollegeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    bookmarks?: BookmarkCollegeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProfileCreateInput = {
    firstname: string
    lastname: string
    email?: string | null
    mobile: number
    percentile: number
    interestedBranches?: ProfileCreateinterestedBranchesInput | string[]
    interestedCities?: ProfileCreateinterestedCitiesInput | string[]
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile: number
    percentile: number
    interestedBranches?: ProfileCreateinterestedBranchesInput | string[]
    interestedCities?: ProfileCreateinterestedCitiesInput | string[]
    userId: number
  }

  export type ProfileUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile: number
    percentile: number
    interestedBranches?: ProfileCreateinterestedBranchesInput | string[]
    interestedCities?: ProfileCreateinterestedCitiesInput | string[]
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCollegeCreateInput = {
    user: UserCreateNestedOneWithoutBookmarksInput
    college: CollegeCutoffCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkCollegeUncheckedCreateInput = {
    id?: number
    userId: number
    collegeId: number
  }

  export type BookmarkCollegeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    college?: CollegeCutoffUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkCollegeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCollegeCreateManyInput = {
    id?: number
    userId: number
    collegeId: number
  }

  export type BookmarkCollegeUpdateManyMutationInput = {

  }

  export type BookmarkCollegeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookmarkCollegeListRelationFilter = {
    every?: BookmarkCollegeWhereInput
    some?: BookmarkCollegeWhereInput
    none?: BookmarkCollegeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookmarkCollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCutoffCountOrderByAggregateInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    collegeName?: SortOrder
    status?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    category?: SortOrder
    gender?: SortOrder
    cutoff?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeCutoffAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    cutoff?: SortOrder
  }

  export type CollegeCutoffMaxOrderByAggregateInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    collegeName?: SortOrder
    status?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    category?: SortOrder
    gender?: SortOrder
    cutoff?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeCutoffMinOrderByAggregateInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    collegeName?: SortOrder
    status?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    category?: SortOrder
    gender?: SortOrder
    cutoff?: SortOrder
    createdAt?: SortOrder
  }

  export type CollegeCutoffSumOrderByAggregateInput = {
    id?: SortOrder
    collegeCode?: SortOrder
    cutoff?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    interestedBranches?: SortOrder
    interestedCities?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    percentile?: SortOrder
    userId?: SortOrder
  }

  export type CollegeCutoffScalarRelationFilter = {
    is?: CollegeCutoffWhereInput
    isNot?: CollegeCutoffWhereInput
  }

  export type BookmarkCollegeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type BookmarkCollegeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type BookmarkCollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type BookmarkCollegeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type BookmarkCollegeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
  }

  export type BookmarkCollegeCreateNestedManyWithoutCollegeInput = {
    create?: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput> | BookmarkCollegeCreateWithoutCollegeInput[] | BookmarkCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutCollegeInput | BookmarkCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: BookmarkCollegeCreateManyCollegeInputEnvelope
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
  }

  export type BookmarkCollegeUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput> | BookmarkCollegeCreateWithoutCollegeInput[] | BookmarkCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutCollegeInput | BookmarkCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: BookmarkCollegeCreateManyCollegeInputEnvelope
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookmarkCollegeUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput> | BookmarkCollegeCreateWithoutCollegeInput[] | BookmarkCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutCollegeInput | BookmarkCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: BookmarkCollegeUpsertWithWhereUniqueWithoutCollegeInput | BookmarkCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: BookmarkCollegeCreateManyCollegeInputEnvelope
    set?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    disconnect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    delete?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    update?: BookmarkCollegeUpdateWithWhereUniqueWithoutCollegeInput | BookmarkCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: BookmarkCollegeUpdateManyWithWhereWithoutCollegeInput | BookmarkCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
  }

  export type BookmarkCollegeUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput> | BookmarkCollegeCreateWithoutCollegeInput[] | BookmarkCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutCollegeInput | BookmarkCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: BookmarkCollegeUpsertWithWhereUniqueWithoutCollegeInput | BookmarkCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: BookmarkCollegeCreateManyCollegeInputEnvelope
    set?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    disconnect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    delete?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    update?: BookmarkCollegeUpdateWithWhereUniqueWithoutCollegeInput | BookmarkCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: BookmarkCollegeUpdateManyWithWhereWithoutCollegeInput | BookmarkCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type BookmarkCollegeCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput> | BookmarkCollegeCreateWithoutUserInput[] | BookmarkCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutUserInput | BookmarkCollegeCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCollegeCreateManyUserInputEnvelope
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type BookmarkCollegeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput> | BookmarkCollegeCreateWithoutUserInput[] | BookmarkCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutUserInput | BookmarkCollegeCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCollegeCreateManyUserInputEnvelope
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkCollegeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput> | BookmarkCollegeCreateWithoutUserInput[] | BookmarkCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutUserInput | BookmarkCollegeCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkCollegeUpsertWithWhereUniqueWithoutUserInput | BookmarkCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCollegeCreateManyUserInputEnvelope
    set?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    disconnect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    delete?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    update?: BookmarkCollegeUpdateWithWhereUniqueWithoutUserInput | BookmarkCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkCollegeUpdateManyWithWhereWithoutUserInput | BookmarkCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkCollegeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput> | BookmarkCollegeCreateWithoutUserInput[] | BookmarkCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCollegeCreateOrConnectWithoutUserInput | BookmarkCollegeCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkCollegeUpsertWithWhereUniqueWithoutUserInput | BookmarkCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCollegeCreateManyUserInputEnvelope
    set?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    disconnect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    delete?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    connect?: BookmarkCollegeWhereUniqueInput | BookmarkCollegeWhereUniqueInput[]
    update?: BookmarkCollegeUpdateWithWhereUniqueWithoutUserInput | BookmarkCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkCollegeUpdateManyWithWhereWithoutUserInput | BookmarkCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
  }

  export type ProfileCreateinterestedBranchesInput = {
    set: string[]
  }

  export type ProfileCreateinterestedCitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileUpdateinterestedBranchesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateinterestedCitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type CollegeCutoffCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<CollegeCutoffCreateWithoutBookmarksInput, CollegeCutoffUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: CollegeCutoffCreateOrConnectWithoutBookmarksInput
    connect?: CollegeCutoffWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type CollegeCutoffUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<CollegeCutoffCreateWithoutBookmarksInput, CollegeCutoffUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: CollegeCutoffCreateOrConnectWithoutBookmarksInput
    upsert?: CollegeCutoffUpsertWithoutBookmarksInput
    connect?: CollegeCutoffWhereUniqueInput
    update?: XOR<XOR<CollegeCutoffUpdateToOneWithWhereWithoutBookmarksInput, CollegeCutoffUpdateWithoutBookmarksInput>, CollegeCutoffUncheckedUpdateWithoutBookmarksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BookmarkCollegeCreateWithoutCollegeInput = {
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkCollegeUncheckedCreateWithoutCollegeInput = {
    id?: number
    userId: number
  }

  export type BookmarkCollegeCreateOrConnectWithoutCollegeInput = {
    where: BookmarkCollegeWhereUniqueInput
    create: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type BookmarkCollegeCreateManyCollegeInputEnvelope = {
    data: BookmarkCollegeCreateManyCollegeInput | BookmarkCollegeCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCollegeUpsertWithWhereUniqueWithoutCollegeInput = {
    where: BookmarkCollegeWhereUniqueInput
    update: XOR<BookmarkCollegeUpdateWithoutCollegeInput, BookmarkCollegeUncheckedUpdateWithoutCollegeInput>
    create: XOR<BookmarkCollegeCreateWithoutCollegeInput, BookmarkCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type BookmarkCollegeUpdateWithWhereUniqueWithoutCollegeInput = {
    where: BookmarkCollegeWhereUniqueInput
    data: XOR<BookmarkCollegeUpdateWithoutCollegeInput, BookmarkCollegeUncheckedUpdateWithoutCollegeInput>
  }

  export type BookmarkCollegeUpdateManyWithWhereWithoutCollegeInput = {
    where: BookmarkCollegeScalarWhereInput
    data: XOR<BookmarkCollegeUpdateManyMutationInput, BookmarkCollegeUncheckedUpdateManyWithoutCollegeInput>
  }

  export type BookmarkCollegeScalarWhereInput = {
    AND?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
    OR?: BookmarkCollegeScalarWhereInput[]
    NOT?: BookmarkCollegeScalarWhereInput | BookmarkCollegeScalarWhereInput[]
    id?: IntFilter<"BookmarkCollege"> | number
    userId?: IntFilter<"BookmarkCollege"> | number
    collegeId?: IntFilter<"BookmarkCollege"> | number
  }

  export type ProfileCreateWithoutUserInput = {
    firstname: string
    lastname: string
    email?: string | null
    mobile: number
    percentile: number
    interestedBranches?: ProfileCreateinterestedBranchesInput | string[]
    interestedCities?: ProfileCreateinterestedCitiesInput | string[]
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile: number
    percentile: number
    interestedBranches?: ProfileCreateinterestedBranchesInput | string[]
    interestedCities?: ProfileCreateinterestedCitiesInput | string[]
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCollegeCreateWithoutUserInput = {
    college: CollegeCutoffCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkCollegeUncheckedCreateWithoutUserInput = {
    id?: number
    collegeId: number
  }

  export type BookmarkCollegeCreateOrConnectWithoutUserInput = {
    where: BookmarkCollegeWhereUniqueInput
    create: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCollegeCreateManyUserInputEnvelope = {
    data: BookmarkCollegeCreateManyUserInput | BookmarkCollegeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: IntFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    interestedBranches?: ProfileUpdateinterestedBranchesInput | string[]
    interestedCities?: ProfileUpdateinterestedCitiesInput | string[]
  }

  export type BookmarkCollegeUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkCollegeWhereUniqueInput
    update: XOR<BookmarkCollegeUpdateWithoutUserInput, BookmarkCollegeUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCollegeCreateWithoutUserInput, BookmarkCollegeUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCollegeUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkCollegeWhereUniqueInput
    data: XOR<BookmarkCollegeUpdateWithoutUserInput, BookmarkCollegeUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkCollegeUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkCollegeScalarWhereInput
    data: XOR<BookmarkCollegeUpdateManyMutationInput, BookmarkCollegeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutProfileInput = {
    name: string
    username: string
    password: string
    role?: $Enums.Role
    bookmarks?: BookmarkCollegeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.Role
    bookmarks?: BookmarkCollegeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bookmarks?: BookmarkCollegeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bookmarks?: BookmarkCollegeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    name: string
    username: string
    password: string
    role?: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type CollegeCutoffCreateWithoutBookmarksInput = {
    collegeCode: number
    collegeName: string
    status?: string | null
    location?: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt?: Date | string
  }

  export type CollegeCutoffUncheckedCreateWithoutBookmarksInput = {
    id?: number
    collegeCode: number
    collegeName: string
    status?: string | null
    location?: string | null
    branch: string
    category: string
    gender: string
    cutoff: number
    createdAt?: Date | string
  }

  export type CollegeCutoffCreateOrConnectWithoutBookmarksInput = {
    where: CollegeCutoffWhereUniqueInput
    create: XOR<CollegeCutoffCreateWithoutBookmarksInput, CollegeCutoffUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollegeCutoffUpsertWithoutBookmarksInput = {
    update: XOR<CollegeCutoffUpdateWithoutBookmarksInput, CollegeCutoffUncheckedUpdateWithoutBookmarksInput>
    create: XOR<CollegeCutoffCreateWithoutBookmarksInput, CollegeCutoffUncheckedCreateWithoutBookmarksInput>
    where?: CollegeCutoffWhereInput
  }

  export type CollegeCutoffUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: CollegeCutoffWhereInput
    data: XOR<CollegeCutoffUpdateWithoutBookmarksInput, CollegeCutoffUncheckedUpdateWithoutBookmarksInput>
  }

  export type CollegeCutoffUpdateWithoutBookmarksInput = {
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCutoffUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeCode?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    cutoff?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCollegeCreateManyCollegeInput = {
    id?: number
    userId: number
  }

  export type BookmarkCollegeUpdateWithoutCollegeInput = {
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkCollegeUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCollegeUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCollegeCreateManyUserInput = {
    id?: number
    collegeId: number
  }

  export type BookmarkCollegeUpdateWithoutUserInput = {
    college?: CollegeCutoffUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkCollegeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCollegeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}