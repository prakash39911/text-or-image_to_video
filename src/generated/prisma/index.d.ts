
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model UserData
 * 
 */
export type UserData = $Result.DefaultSelection<Prisma.$UserDataPayload>
/**
 * Model videoGenerationData
 * 
 */
export type videoGenerationData = $Result.DefaultSelection<Prisma.$videoGenerationDataPayload>
/**
 * Model token
 * 
 */
export type token = $Result.DefaultSelection<Prisma.$tokenPayload>
/**
 * Model PackageDetails
 * 
 */
export type PackageDetails = $Result.DefaultSelection<Prisma.$PackageDetailsPayload>
/**
 * Model PurchaseDetails
 * 
 */
export type PurchaseDetails = $Result.DefaultSelection<Prisma.$PurchaseDetailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const videoGenerationStatus: {
  InProgress: 'InProgress',
  Completed: 'Completed',
  Failed: 'Failed'
};

export type videoGenerationStatus = (typeof videoGenerationStatus)[keyof typeof videoGenerationStatus]


export const tokenType: {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type tokenType = (typeof tokenType)[keyof typeof tokenType]


export const payment_status: {
  PENDING: 'PENDING',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]

}

export type videoGenerationStatus = $Enums.videoGenerationStatus

export const videoGenerationStatus: typeof $Enums.videoGenerationStatus

export type tokenType = $Enums.tokenType

export const tokenType: typeof $Enums.tokenType

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userData`: Exposes CRUD operations for the **UserData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserData
    * const userData = await prisma.userData.findMany()
    * ```
    */
  get userData(): Prisma.UserDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoGenerationData`: Exposes CRUD operations for the **videoGenerationData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoGenerationData
    * const videoGenerationData = await prisma.videoGenerationData.findMany()
    * ```
    */
  get videoGenerationData(): Prisma.videoGenerationDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageDetails`: Exposes CRUD operations for the **PackageDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageDetails
    * const packageDetails = await prisma.packageDetails.findMany()
    * ```
    */
  get packageDetails(): Prisma.PackageDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseDetails`: Exposes CRUD operations for the **PurchaseDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseDetails
    * const purchaseDetails = await prisma.purchaseDetails.findMany()
    * ```
    */
  get purchaseDetails(): Prisma.PurchaseDetailsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    UserData: 'UserData',
    videoGenerationData: 'videoGenerationData',
    token: 'token',
    PackageDetails: 'PackageDetails',
    PurchaseDetails: 'PurchaseDetails'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "userData" | "videoGenerationData" | "token" | "packageDetails" | "purchaseDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      UserData: {
        payload: Prisma.$UserDataPayload<ExtArgs>
        fields: Prisma.UserDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findFirst: {
            args: Prisma.UserDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findMany: {
            args: Prisma.UserDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          create: {
            args: Prisma.UserDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          createMany: {
            args: Prisma.UserDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          delete: {
            args: Prisma.UserDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          update: {
            args: Prisma.UserDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          deleteMany: {
            args: Prisma.UserDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          upsert: {
            args: Prisma.UserDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          aggregate: {
            args: Prisma.UserDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserData>
          }
          groupBy: {
            args: Prisma.UserDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserDataCountAggregateOutputType> | number
          }
        }
      }
      videoGenerationData: {
        payload: Prisma.$videoGenerationDataPayload<ExtArgs>
        fields: Prisma.videoGenerationDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videoGenerationDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videoGenerationDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          findFirst: {
            args: Prisma.videoGenerationDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videoGenerationDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          findMany: {
            args: Prisma.videoGenerationDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>[]
          }
          create: {
            args: Prisma.videoGenerationDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          createMany: {
            args: Prisma.videoGenerationDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videoGenerationDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>[]
          }
          delete: {
            args: Prisma.videoGenerationDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          update: {
            args: Prisma.videoGenerationDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          deleteMany: {
            args: Prisma.videoGenerationDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videoGenerationDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videoGenerationDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>[]
          }
          upsert: {
            args: Prisma.videoGenerationDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoGenerationDataPayload>
          }
          aggregate: {
            args: Prisma.VideoGenerationDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoGenerationData>
          }
          groupBy: {
            args: Prisma.videoGenerationDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGenerationDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.videoGenerationDataCountArgs<ExtArgs>
            result: $Utils.Optional<VideoGenerationDataCountAggregateOutputType> | number
          }
        }
      }
      token: {
        payload: Prisma.$tokenPayload<ExtArgs>
        fields: Prisma.tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findFirst: {
            args: Prisma.tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findMany: {
            args: Prisma.tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          create: {
            args: Prisma.tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          createMany: {
            args: Prisma.tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          delete: {
            args: Prisma.tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          update: {
            args: Prisma.tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          deleteMany: {
            args: Prisma.tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          upsert: {
            args: Prisma.tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      PackageDetails: {
        payload: Prisma.$PackageDetailsPayload<ExtArgs>
        fields: Prisma.PackageDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          findFirst: {
            args: Prisma.PackageDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          findMany: {
            args: Prisma.PackageDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>[]
          }
          create: {
            args: Prisma.PackageDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          createMany: {
            args: Prisma.PackageDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>[]
          }
          delete: {
            args: Prisma.PackageDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          update: {
            args: Prisma.PackageDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PackageDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>[]
          }
          upsert: {
            args: Prisma.PackageDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageDetailsPayload>
          }
          aggregate: {
            args: Prisma.PackageDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageDetails>
          }
          groupBy: {
            args: Prisma.PackageDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PackageDetailsCountAggregateOutputType> | number
          }
        }
      }
      PurchaseDetails: {
        payload: Prisma.$PurchaseDetailsPayload<ExtArgs>
        fields: Prisma.PurchaseDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          findFirst: {
            args: Prisma.PurchaseDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          findMany: {
            args: Prisma.PurchaseDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>[]
          }
          create: {
            args: Prisma.PurchaseDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          createMany: {
            args: Prisma.PurchaseDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>[]
          }
          delete: {
            args: Prisma.PurchaseDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          update: {
            args: Prisma.PurchaseDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDetailsPayload>
          }
          aggregate: {
            args: Prisma.PurchaseDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseDetails>
          }
          groupBy: {
            args: Prisma.PurchaseDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseDetailsCountAggregateOutputType> | number
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
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    userData?: UserDataOmit
    videoGenerationData?: videoGenerationDataOmit
    token?: tokenOmit
    packageDetails?: PackageDetailsOmit
    purchaseDetails?: PurchaseDetailsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type UserDataCountOutputType
   */

  export type UserDataCountOutputType = {
    videoGenerationData: number
    PurchaseDetails: number
  }

  export type UserDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoGenerationData?: boolean | UserDataCountOutputTypeCountVideoGenerationDataArgs
    PurchaseDetails?: boolean | UserDataCountOutputTypeCountPurchaseDetailsArgs
  }

  // Custom InputTypes
  /**
   * UserDataCountOutputType without action
   */
  export type UserDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDataCountOutputType
     */
    select?: UserDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserDataCountOutputType without action
   */
  export type UserDataCountOutputTypeCountVideoGenerationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoGenerationDataWhereInput
  }

  /**
   * UserDataCountOutputType without action
   */
  export type UserDataCountOutputTypeCountPurchaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseDetailsWhereInput
  }


  /**
   * Count Type PackageDetailsCountOutputType
   */

  export type PackageDetailsCountOutputType = {
    PurchaseDetails: number
  }

  export type PackageDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseDetails?: boolean | PackageDetailsCountOutputTypeCountPurchaseDetailsArgs
  }

  // Custom InputTypes
  /**
   * PackageDetailsCountOutputType without action
   */
  export type PackageDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetailsCountOutputType
     */
    select?: PackageDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageDetailsCountOutputType without action
   */
  export type PackageDetailsCountOutputTypeCountPurchaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model UserData
   */

  export type AggregateUserData = {
    _count: UserDataCountAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  export type UserDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDataCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserDataMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDataMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDataCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to aggregate.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserData
    **/
    _count?: true | UserDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDataMaxAggregateInputType
  }

  export type GetUserDataAggregateType<T extends UserDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserData[P]>
      : GetScalarType<T[P], AggregateUserData[P]>
  }




  export type UserDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithAggregationInput | UserDataOrderByWithAggregationInput[]
    by: UserDataScalarFieldEnum[] | UserDataScalarFieldEnum
    having?: UserDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDataCountAggregateInputType | true
    _min?: UserDataMinAggregateInputType
    _max?: UserDataMaxAggregateInputType
  }

  export type UserDataGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: Date | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserDataCountAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  type GetUserDataGroupByPayload<T extends UserDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserDataGroupByOutputType[P]>
        }
      >
    >


  export type UserDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoGenerationData?: boolean | UserData$videoGenerationDataArgs<ExtArgs>
    PurchaseDetails?: boolean | UserData$PurchaseDetailsArgs<ExtArgs>
    _count?: boolean | UserDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["userData"]>
  export type UserDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoGenerationData?: boolean | UserData$videoGenerationDataArgs<ExtArgs>
    PurchaseDetails?: boolean | UserData$PurchaseDetailsArgs<ExtArgs>
    _count?: boolean | UserDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserData"
    objects: {
      videoGenerationData: Prisma.$videoGenerationDataPayload<ExtArgs>[]
      PurchaseDetails: Prisma.$PurchaseDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: Date | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userData"]>
    composites: {}
  }

  type UserDataGetPayload<S extends boolean | null | undefined | UserDataDefaultArgs> = $Result.GetResult<Prisma.$UserDataPayload, S>

  type UserDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDataCountAggregateInputType | true
    }

  export interface UserDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserData'], meta: { name: 'UserData' } }
    /**
     * Find zero or one UserData that matches the filter.
     * @param {UserDataFindUniqueArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDataFindUniqueArgs>(args: SelectSubset<T, UserDataFindUniqueArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDataFindUniqueOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDataFindFirstArgs>(args?: SelectSubset<T, UserDataFindFirstArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserData
     * const userData = await prisma.userData.findMany()
     * 
     * // Get first 10 UserData
     * const userData = await prisma.userData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDataWithIdOnly = await prisma.userData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDataFindManyArgs>(args?: SelectSubset<T, UserDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserData.
     * @param {UserDataCreateArgs} args - Arguments to create a UserData.
     * @example
     * // Create one UserData
     * const UserData = await prisma.userData.create({
     *   data: {
     *     // ... data to create a UserData
     *   }
     * })
     * 
     */
    create<T extends UserDataCreateArgs>(args: SelectSubset<T, UserDataCreateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserData.
     * @param {UserDataCreateManyArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDataCreateManyArgs>(args?: SelectSubset<T, UserDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserData and returns the data saved in the database.
     * @param {UserDataCreateManyAndReturnArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserData.
     * @param {UserDataDeleteArgs} args - Arguments to delete one UserData.
     * @example
     * // Delete one UserData
     * const UserData = await prisma.userData.delete({
     *   where: {
     *     // ... filter to delete one UserData
     *   }
     * })
     * 
     */
    delete<T extends UserDataDeleteArgs>(args: SelectSubset<T, UserDataDeleteArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserData.
     * @param {UserDataUpdateArgs} args - Arguments to update one UserData.
     * @example
     * // Update one UserData
     * const userData = await prisma.userData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDataUpdateArgs>(args: SelectSubset<T, UserDataUpdateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserData.
     * @param {UserDataDeleteManyArgs} args - Arguments to filter UserData to delete.
     * @example
     * // Delete a few UserData
     * const { count } = await prisma.userData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDataDeleteManyArgs>(args?: SelectSubset<T, UserDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDataUpdateManyArgs>(args: SelectSubset<T, UserDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData and returns the data updated in the database.
     * @param {UserDataUpdateManyAndReturnArgs} args - Arguments to update many UserData.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserData.
     * @param {UserDataUpsertArgs} args - Arguments to update or create a UserData.
     * @example
     * // Update or create a UserData
     * const userData = await prisma.userData.upsert({
     *   create: {
     *     // ... data to create a UserData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserData we want to update
     *   }
     * })
     */
    upsert<T extends UserDataUpsertArgs>(args: SelectSubset<T, UserDataUpsertArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataCountArgs} args - Arguments to filter UserData to count.
     * @example
     * // Count the number of UserData
     * const count = await prisma.userData.count({
     *   where: {
     *     // ... the filter for the UserData we want to count
     *   }
     * })
    **/
    count<T extends UserDataCountArgs>(
      args?: Subset<T, UserDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDataAggregateArgs>(args: Subset<T, UserDataAggregateArgs>): Prisma.PrismaPromise<GetUserDataAggregateType<T>>

    /**
     * Group by UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataGroupByArgs} args - Group by arguments.
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
      T extends UserDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDataGroupByArgs['orderBy'] }
        : { orderBy?: UserDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserData model
   */
  readonly fields: UserDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videoGenerationData<T extends UserData$videoGenerationDataArgs<ExtArgs> = {}>(args?: Subset<T, UserData$videoGenerationDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PurchaseDetails<T extends UserData$PurchaseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, UserData$PurchaseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserData model
   */
  interface UserDataFieldRefs {
    readonly id: FieldRef<"UserData", 'String'>
    readonly name: FieldRef<"UserData", 'String'>
    readonly email: FieldRef<"UserData", 'String'>
    readonly emailVerified: FieldRef<"UserData", 'DateTime'>
    readonly password: FieldRef<"UserData", 'String'>
    readonly createdAt: FieldRef<"UserData", 'DateTime'>
    readonly updatedAt: FieldRef<"UserData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserData findUnique
   */
  export type UserDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findUniqueOrThrow
   */
  export type UserDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findFirst
   */
  export type UserDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findFirstOrThrow
   */
  export type UserDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findMany
   */
  export type UserDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData create
   */
  export type UserDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserData.
     */
    data: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
  }

  /**
   * UserData createMany
   */
  export type UserDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserData createManyAndReturn
   */
  export type UserDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserData update
   */
  export type UserDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserData.
     */
    data: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
    /**
     * Choose, which UserData to update.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData updateMany
   */
  export type UserDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
  }

  /**
   * UserData updateManyAndReturn
   */
  export type UserDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
  }

  /**
   * UserData upsert
   */
  export type UserDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserData to update in case it exists.
     */
    where: UserDataWhereUniqueInput
    /**
     * In case the UserData found by the `where` argument doesn't exist, create a new UserData with this data.
     */
    create: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
    /**
     * In case the UserData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
  }

  /**
   * UserData delete
   */
  export type UserDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter which UserData to delete.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData deleteMany
   */
  export type UserDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to delete
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to delete.
     */
    limit?: number
  }

  /**
   * UserData.videoGenerationData
   */
  export type UserData$videoGenerationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    where?: videoGenerationDataWhereInput
    orderBy?: videoGenerationDataOrderByWithRelationInput | videoGenerationDataOrderByWithRelationInput[]
    cursor?: videoGenerationDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoGenerationDataScalarFieldEnum | VideoGenerationDataScalarFieldEnum[]
  }

  /**
   * UserData.PurchaseDetails
   */
  export type UserData$PurchaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    where?: PurchaseDetailsWhereInput
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    cursor?: PurchaseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseDetailsScalarFieldEnum | PurchaseDetailsScalarFieldEnum[]
  }

  /**
   * UserData without action
   */
  export type UserDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
  }


  /**
   * Model videoGenerationData
   */

  export type AggregateVideoGenerationData = {
    _count: VideoGenerationDataCountAggregateOutputType | null
    _min: VideoGenerationDataMinAggregateOutputType | null
    _max: VideoGenerationDataMaxAggregateOutputType | null
  }

  export type VideoGenerationDataMinAggregateOutputType = {
    id: string | null
    userPrompt: string | null
    status: $Enums.videoGenerationStatus | null
    imageTaskId: string | null
    videoTaskId: string | null
    mergeAudioVideoTaskID: string | null
    musicPrompt: string | null
    caption: string | null
    imageUrl: string | null
    videoUrl: string | null
    videoPublicId: string | null
    musicPublicId: string | null
    musicUrl: string | null
    finalVideoUrl: string | null
    finalVideoPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userDataId: string | null
  }

  export type VideoGenerationDataMaxAggregateOutputType = {
    id: string | null
    userPrompt: string | null
    status: $Enums.videoGenerationStatus | null
    imageTaskId: string | null
    videoTaskId: string | null
    mergeAudioVideoTaskID: string | null
    musicPrompt: string | null
    caption: string | null
    imageUrl: string | null
    videoUrl: string | null
    videoPublicId: string | null
    musicPublicId: string | null
    musicUrl: string | null
    finalVideoUrl: string | null
    finalVideoPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userDataId: string | null
  }

  export type VideoGenerationDataCountAggregateOutputType = {
    id: number
    userPrompt: number
    status: number
    imageTaskId: number
    videoTaskId: number
    mergeAudioVideoTaskID: number
    musicPrompt: number
    caption: number
    imageUrl: number
    videoUrl: number
    videoPublicId: number
    musicPublicId: number
    musicUrl: number
    finalVideoUrl: number
    finalVideoPublicId: number
    createdAt: number
    updatedAt: number
    userDataId: number
    _all: number
  }


  export type VideoGenerationDataMinAggregateInputType = {
    id?: true
    userPrompt?: true
    status?: true
    imageTaskId?: true
    videoTaskId?: true
    mergeAudioVideoTaskID?: true
    musicPrompt?: true
    caption?: true
    imageUrl?: true
    videoUrl?: true
    videoPublicId?: true
    musicPublicId?: true
    musicUrl?: true
    finalVideoUrl?: true
    finalVideoPublicId?: true
    createdAt?: true
    updatedAt?: true
    userDataId?: true
  }

  export type VideoGenerationDataMaxAggregateInputType = {
    id?: true
    userPrompt?: true
    status?: true
    imageTaskId?: true
    videoTaskId?: true
    mergeAudioVideoTaskID?: true
    musicPrompt?: true
    caption?: true
    imageUrl?: true
    videoUrl?: true
    videoPublicId?: true
    musicPublicId?: true
    musicUrl?: true
    finalVideoUrl?: true
    finalVideoPublicId?: true
    createdAt?: true
    updatedAt?: true
    userDataId?: true
  }

  export type VideoGenerationDataCountAggregateInputType = {
    id?: true
    userPrompt?: true
    status?: true
    imageTaskId?: true
    videoTaskId?: true
    mergeAudioVideoTaskID?: true
    musicPrompt?: true
    caption?: true
    imageUrl?: true
    videoUrl?: true
    videoPublicId?: true
    musicPublicId?: true
    musicUrl?: true
    finalVideoUrl?: true
    finalVideoPublicId?: true
    createdAt?: true
    updatedAt?: true
    userDataId?: true
    _all?: true
  }

  export type VideoGenerationDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videoGenerationData to aggregate.
     */
    where?: videoGenerationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoGenerationData to fetch.
     */
    orderBy?: videoGenerationDataOrderByWithRelationInput | videoGenerationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videoGenerationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoGenerationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoGenerationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videoGenerationData
    **/
    _count?: true | VideoGenerationDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoGenerationDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoGenerationDataMaxAggregateInputType
  }

  export type GetVideoGenerationDataAggregateType<T extends VideoGenerationDataAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoGenerationData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoGenerationData[P]>
      : GetScalarType<T[P], AggregateVideoGenerationData[P]>
  }




  export type videoGenerationDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoGenerationDataWhereInput
    orderBy?: videoGenerationDataOrderByWithAggregationInput | videoGenerationDataOrderByWithAggregationInput[]
    by: VideoGenerationDataScalarFieldEnum[] | VideoGenerationDataScalarFieldEnum
    having?: videoGenerationDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoGenerationDataCountAggregateInputType | true
    _min?: VideoGenerationDataMinAggregateInputType
    _max?: VideoGenerationDataMaxAggregateInputType
  }

  export type VideoGenerationDataGroupByOutputType = {
    id: string
    userPrompt: string
    status: $Enums.videoGenerationStatus
    imageTaskId: string | null
    videoTaskId: string | null
    mergeAudioVideoTaskID: string | null
    musicPrompt: string | null
    caption: string | null
    imageUrl: string | null
    videoUrl: string | null
    videoPublicId: string | null
    musicPublicId: string | null
    musicUrl: string | null
    finalVideoUrl: string | null
    finalVideoPublicId: string | null
    createdAt: Date
    updatedAt: Date
    userDataId: string
    _count: VideoGenerationDataCountAggregateOutputType | null
    _min: VideoGenerationDataMinAggregateOutputType | null
    _max: VideoGenerationDataMaxAggregateOutputType | null
  }

  type GetVideoGenerationDataGroupByPayload<T extends videoGenerationDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGenerationDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGenerationDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGenerationDataGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGenerationDataGroupByOutputType[P]>
        }
      >
    >


  export type videoGenerationDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userPrompt?: boolean
    status?: boolean
    imageTaskId?: boolean
    videoTaskId?: boolean
    mergeAudioVideoTaskID?: boolean
    musicPrompt?: boolean
    caption?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    videoPublicId?: boolean
    musicPublicId?: boolean
    musicUrl?: boolean
    finalVideoUrl?: boolean
    finalVideoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDataId?: boolean
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenerationData"]>

  export type videoGenerationDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userPrompt?: boolean
    status?: boolean
    imageTaskId?: boolean
    videoTaskId?: boolean
    mergeAudioVideoTaskID?: boolean
    musicPrompt?: boolean
    caption?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    videoPublicId?: boolean
    musicPublicId?: boolean
    musicUrl?: boolean
    finalVideoUrl?: boolean
    finalVideoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDataId?: boolean
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenerationData"]>

  export type videoGenerationDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userPrompt?: boolean
    status?: boolean
    imageTaskId?: boolean
    videoTaskId?: boolean
    mergeAudioVideoTaskID?: boolean
    musicPrompt?: boolean
    caption?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    videoPublicId?: boolean
    musicPublicId?: boolean
    musicUrl?: boolean
    finalVideoUrl?: boolean
    finalVideoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDataId?: boolean
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoGenerationData"]>

  export type videoGenerationDataSelectScalar = {
    id?: boolean
    userPrompt?: boolean
    status?: boolean
    imageTaskId?: boolean
    videoTaskId?: boolean
    mergeAudioVideoTaskID?: boolean
    musicPrompt?: boolean
    caption?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    videoPublicId?: boolean
    musicPublicId?: boolean
    musicUrl?: boolean
    finalVideoUrl?: boolean
    finalVideoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDataId?: boolean
  }

  export type videoGenerationDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userPrompt" | "status" | "imageTaskId" | "videoTaskId" | "mergeAudioVideoTaskID" | "musicPrompt" | "caption" | "imageUrl" | "videoUrl" | "videoPublicId" | "musicPublicId" | "musicUrl" | "finalVideoUrl" | "finalVideoPublicId" | "createdAt" | "updatedAt" | "userDataId", ExtArgs["result"]["videoGenerationData"]>
  export type videoGenerationDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }
  export type videoGenerationDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }
  export type videoGenerationDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserData?: boolean | UserDataDefaultArgs<ExtArgs>
  }

  export type $videoGenerationDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videoGenerationData"
    objects: {
      UserData: Prisma.$UserDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userPrompt: string
      status: $Enums.videoGenerationStatus
      imageTaskId: string | null
      videoTaskId: string | null
      mergeAudioVideoTaskID: string | null
      musicPrompt: string | null
      caption: string | null
      imageUrl: string | null
      videoUrl: string | null
      videoPublicId: string | null
      musicPublicId: string | null
      musicUrl: string | null
      finalVideoUrl: string | null
      finalVideoPublicId: string | null
      createdAt: Date
      updatedAt: Date
      userDataId: string
    }, ExtArgs["result"]["videoGenerationData"]>
    composites: {}
  }

  type videoGenerationDataGetPayload<S extends boolean | null | undefined | videoGenerationDataDefaultArgs> = $Result.GetResult<Prisma.$videoGenerationDataPayload, S>

  type videoGenerationDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videoGenerationDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoGenerationDataCountAggregateInputType | true
    }

  export interface videoGenerationDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videoGenerationData'], meta: { name: 'videoGenerationData' } }
    /**
     * Find zero or one VideoGenerationData that matches the filter.
     * @param {videoGenerationDataFindUniqueArgs} args - Arguments to find a VideoGenerationData
     * @example
     * // Get one VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videoGenerationDataFindUniqueArgs>(args: SelectSubset<T, videoGenerationDataFindUniqueArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoGenerationData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videoGenerationDataFindUniqueOrThrowArgs} args - Arguments to find a VideoGenerationData
     * @example
     * // Get one VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videoGenerationDataFindUniqueOrThrowArgs>(args: SelectSubset<T, videoGenerationDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoGenerationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataFindFirstArgs} args - Arguments to find a VideoGenerationData
     * @example
     * // Get one VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videoGenerationDataFindFirstArgs>(args?: SelectSubset<T, videoGenerationDataFindFirstArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoGenerationData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataFindFirstOrThrowArgs} args - Arguments to find a VideoGenerationData
     * @example
     * // Get one VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videoGenerationDataFindFirstOrThrowArgs>(args?: SelectSubset<T, videoGenerationDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoGenerationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findMany()
     * 
     * // Get first 10 VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoGenerationDataWithIdOnly = await prisma.videoGenerationData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videoGenerationDataFindManyArgs>(args?: SelectSubset<T, videoGenerationDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoGenerationData.
     * @param {videoGenerationDataCreateArgs} args - Arguments to create a VideoGenerationData.
     * @example
     * // Create one VideoGenerationData
     * const VideoGenerationData = await prisma.videoGenerationData.create({
     *   data: {
     *     // ... data to create a VideoGenerationData
     *   }
     * })
     * 
     */
    create<T extends videoGenerationDataCreateArgs>(args: SelectSubset<T, videoGenerationDataCreateArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoGenerationData.
     * @param {videoGenerationDataCreateManyArgs} args - Arguments to create many VideoGenerationData.
     * @example
     * // Create many VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videoGenerationDataCreateManyArgs>(args?: SelectSubset<T, videoGenerationDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoGenerationData and returns the data saved in the database.
     * @param {videoGenerationDataCreateManyAndReturnArgs} args - Arguments to create many VideoGenerationData.
     * @example
     * // Create many VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoGenerationData and only return the `id`
     * const videoGenerationDataWithIdOnly = await prisma.videoGenerationData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videoGenerationDataCreateManyAndReturnArgs>(args?: SelectSubset<T, videoGenerationDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoGenerationData.
     * @param {videoGenerationDataDeleteArgs} args - Arguments to delete one VideoGenerationData.
     * @example
     * // Delete one VideoGenerationData
     * const VideoGenerationData = await prisma.videoGenerationData.delete({
     *   where: {
     *     // ... filter to delete one VideoGenerationData
     *   }
     * })
     * 
     */
    delete<T extends videoGenerationDataDeleteArgs>(args: SelectSubset<T, videoGenerationDataDeleteArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoGenerationData.
     * @param {videoGenerationDataUpdateArgs} args - Arguments to update one VideoGenerationData.
     * @example
     * // Update one VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videoGenerationDataUpdateArgs>(args: SelectSubset<T, videoGenerationDataUpdateArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoGenerationData.
     * @param {videoGenerationDataDeleteManyArgs} args - Arguments to filter VideoGenerationData to delete.
     * @example
     * // Delete a few VideoGenerationData
     * const { count } = await prisma.videoGenerationData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videoGenerationDataDeleteManyArgs>(args?: SelectSubset<T, videoGenerationDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoGenerationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videoGenerationDataUpdateManyArgs>(args: SelectSubset<T, videoGenerationDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoGenerationData and returns the data updated in the database.
     * @param {videoGenerationDataUpdateManyAndReturnArgs} args - Arguments to update many VideoGenerationData.
     * @example
     * // Update many VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoGenerationData and only return the `id`
     * const videoGenerationDataWithIdOnly = await prisma.videoGenerationData.updateManyAndReturn({
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
    updateManyAndReturn<T extends videoGenerationDataUpdateManyAndReturnArgs>(args: SelectSubset<T, videoGenerationDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoGenerationData.
     * @param {videoGenerationDataUpsertArgs} args - Arguments to update or create a VideoGenerationData.
     * @example
     * // Update or create a VideoGenerationData
     * const videoGenerationData = await prisma.videoGenerationData.upsert({
     *   create: {
     *     // ... data to create a VideoGenerationData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoGenerationData we want to update
     *   }
     * })
     */
    upsert<T extends videoGenerationDataUpsertArgs>(args: SelectSubset<T, videoGenerationDataUpsertArgs<ExtArgs>>): Prisma__videoGenerationDataClient<$Result.GetResult<Prisma.$videoGenerationDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoGenerationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataCountArgs} args - Arguments to filter VideoGenerationData to count.
     * @example
     * // Count the number of VideoGenerationData
     * const count = await prisma.videoGenerationData.count({
     *   where: {
     *     // ... the filter for the VideoGenerationData we want to count
     *   }
     * })
    **/
    count<T extends videoGenerationDataCountArgs>(
      args?: Subset<T, videoGenerationDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoGenerationDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoGenerationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGenerationDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoGenerationDataAggregateArgs>(args: Subset<T, VideoGenerationDataAggregateArgs>): Prisma.PrismaPromise<GetVideoGenerationDataAggregateType<T>>

    /**
     * Group by VideoGenerationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGenerationDataGroupByArgs} args - Group by arguments.
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
      T extends videoGenerationDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoGenerationDataGroupByArgs['orderBy'] }
        : { orderBy?: videoGenerationDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videoGenerationDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGenerationDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videoGenerationData model
   */
  readonly fields: videoGenerationDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videoGenerationData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoGenerationDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserData<T extends UserDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDataDefaultArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the videoGenerationData model
   */
  interface videoGenerationDataFieldRefs {
    readonly id: FieldRef<"videoGenerationData", 'String'>
    readonly userPrompt: FieldRef<"videoGenerationData", 'String'>
    readonly status: FieldRef<"videoGenerationData", 'videoGenerationStatus'>
    readonly imageTaskId: FieldRef<"videoGenerationData", 'String'>
    readonly videoTaskId: FieldRef<"videoGenerationData", 'String'>
    readonly mergeAudioVideoTaskID: FieldRef<"videoGenerationData", 'String'>
    readonly musicPrompt: FieldRef<"videoGenerationData", 'String'>
    readonly caption: FieldRef<"videoGenerationData", 'String'>
    readonly imageUrl: FieldRef<"videoGenerationData", 'String'>
    readonly videoUrl: FieldRef<"videoGenerationData", 'String'>
    readonly videoPublicId: FieldRef<"videoGenerationData", 'String'>
    readonly musicPublicId: FieldRef<"videoGenerationData", 'String'>
    readonly musicUrl: FieldRef<"videoGenerationData", 'String'>
    readonly finalVideoUrl: FieldRef<"videoGenerationData", 'String'>
    readonly finalVideoPublicId: FieldRef<"videoGenerationData", 'String'>
    readonly createdAt: FieldRef<"videoGenerationData", 'DateTime'>
    readonly updatedAt: FieldRef<"videoGenerationData", 'DateTime'>
    readonly userDataId: FieldRef<"videoGenerationData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * videoGenerationData findUnique
   */
  export type videoGenerationDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter, which videoGenerationData to fetch.
     */
    where: videoGenerationDataWhereUniqueInput
  }

  /**
   * videoGenerationData findUniqueOrThrow
   */
  export type videoGenerationDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter, which videoGenerationData to fetch.
     */
    where: videoGenerationDataWhereUniqueInput
  }

  /**
   * videoGenerationData findFirst
   */
  export type videoGenerationDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter, which videoGenerationData to fetch.
     */
    where?: videoGenerationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoGenerationData to fetch.
     */
    orderBy?: videoGenerationDataOrderByWithRelationInput | videoGenerationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videoGenerationData.
     */
    cursor?: videoGenerationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoGenerationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoGenerationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videoGenerationData.
     */
    distinct?: VideoGenerationDataScalarFieldEnum | VideoGenerationDataScalarFieldEnum[]
  }

  /**
   * videoGenerationData findFirstOrThrow
   */
  export type videoGenerationDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter, which videoGenerationData to fetch.
     */
    where?: videoGenerationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoGenerationData to fetch.
     */
    orderBy?: videoGenerationDataOrderByWithRelationInput | videoGenerationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videoGenerationData.
     */
    cursor?: videoGenerationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoGenerationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoGenerationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videoGenerationData.
     */
    distinct?: VideoGenerationDataScalarFieldEnum | VideoGenerationDataScalarFieldEnum[]
  }

  /**
   * videoGenerationData findMany
   */
  export type videoGenerationDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter, which videoGenerationData to fetch.
     */
    where?: videoGenerationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videoGenerationData to fetch.
     */
    orderBy?: videoGenerationDataOrderByWithRelationInput | videoGenerationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videoGenerationData.
     */
    cursor?: videoGenerationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videoGenerationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videoGenerationData.
     */
    skip?: number
    distinct?: VideoGenerationDataScalarFieldEnum | VideoGenerationDataScalarFieldEnum[]
  }

  /**
   * videoGenerationData create
   */
  export type videoGenerationDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * The data needed to create a videoGenerationData.
     */
    data: XOR<videoGenerationDataCreateInput, videoGenerationDataUncheckedCreateInput>
  }

  /**
   * videoGenerationData createMany
   */
  export type videoGenerationDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videoGenerationData.
     */
    data: videoGenerationDataCreateManyInput | videoGenerationDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videoGenerationData createManyAndReturn
   */
  export type videoGenerationDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * The data used to create many videoGenerationData.
     */
    data: videoGenerationDataCreateManyInput | videoGenerationDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * videoGenerationData update
   */
  export type videoGenerationDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * The data needed to update a videoGenerationData.
     */
    data: XOR<videoGenerationDataUpdateInput, videoGenerationDataUncheckedUpdateInput>
    /**
     * Choose, which videoGenerationData to update.
     */
    where: videoGenerationDataWhereUniqueInput
  }

  /**
   * videoGenerationData updateMany
   */
  export type videoGenerationDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videoGenerationData.
     */
    data: XOR<videoGenerationDataUpdateManyMutationInput, videoGenerationDataUncheckedUpdateManyInput>
    /**
     * Filter which videoGenerationData to update
     */
    where?: videoGenerationDataWhereInput
    /**
     * Limit how many videoGenerationData to update.
     */
    limit?: number
  }

  /**
   * videoGenerationData updateManyAndReturn
   */
  export type videoGenerationDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * The data used to update videoGenerationData.
     */
    data: XOR<videoGenerationDataUpdateManyMutationInput, videoGenerationDataUncheckedUpdateManyInput>
    /**
     * Filter which videoGenerationData to update
     */
    where?: videoGenerationDataWhereInput
    /**
     * Limit how many videoGenerationData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * videoGenerationData upsert
   */
  export type videoGenerationDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * The filter to search for the videoGenerationData to update in case it exists.
     */
    where: videoGenerationDataWhereUniqueInput
    /**
     * In case the videoGenerationData found by the `where` argument doesn't exist, create a new videoGenerationData with this data.
     */
    create: XOR<videoGenerationDataCreateInput, videoGenerationDataUncheckedCreateInput>
    /**
     * In case the videoGenerationData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoGenerationDataUpdateInput, videoGenerationDataUncheckedUpdateInput>
  }

  /**
   * videoGenerationData delete
   */
  export type videoGenerationDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
    /**
     * Filter which videoGenerationData to delete.
     */
    where: videoGenerationDataWhereUniqueInput
  }

  /**
   * videoGenerationData deleteMany
   */
  export type videoGenerationDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videoGenerationData to delete
     */
    where?: videoGenerationDataWhereInput
    /**
     * Limit how many videoGenerationData to delete.
     */
    limit?: number
  }

  /**
   * videoGenerationData without action
   */
  export type videoGenerationDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videoGenerationData
     */
    select?: videoGenerationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videoGenerationData
     */
    omit?: videoGenerationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoGenerationDataInclude<ExtArgs> | null
  }


  /**
   * Model token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    type: $Enums.tokenType | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    type: $Enums.tokenType | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    type: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    type?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    type?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    type?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token to aggregate.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithAggregationInput | tokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    type: $Enums.tokenType
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    type?: boolean
  }, ExtArgs["result"]["token"]>

  export type tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    type?: boolean
  }, ExtArgs["result"]["token"]>

  export type tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    type?: boolean
  }, ExtArgs["result"]["token"]>

  export type tokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    type?: boolean
  }

  export type tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "type", ExtArgs["result"]["token"]>

  export type $tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
      type: $Enums.tokenType
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type tokenGetPayload<S extends boolean | null | undefined | tokenDefaultArgs> = $Result.GetResult<Prisma.$tokenPayload, S>

  type tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token'], meta: { name: 'token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {tokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokenFindUniqueArgs>(args: SelectSubset<T, tokenFindUniqueArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokenFindFirstArgs>(args?: SelectSubset<T, tokenFindFirstArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokenFindManyArgs>(args?: SelectSubset<T, tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {tokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends tokenCreateArgs>(args: SelectSubset<T, tokenCreateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {tokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokenCreateManyArgs>(args?: SelectSubset<T, tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {tokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {tokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends tokenDeleteArgs>(args: SelectSubset<T, tokenDeleteArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {tokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokenUpdateArgs>(args: SelectSubset<T, tokenUpdateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokenDeleteManyArgs>(args?: SelectSubset<T, tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokenUpdateManyArgs>(args: SelectSubset<T, tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {tokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {tokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends tokenUpsertArgs>(args: SelectSubset<T, tokenUpsertArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokenCountArgs>(
      args?: Subset<T, tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenGroupByArgs} args - Group by arguments.
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
      T extends tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokenGroupByArgs['orderBy'] }
        : { orderBy?: tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token model
   */
  readonly fields: tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the token model
   */
  interface tokenFieldRefs {
    readonly id: FieldRef<"token", 'String'>
    readonly email: FieldRef<"token", 'String'>
    readonly token: FieldRef<"token", 'String'>
    readonly expires: FieldRef<"token", 'DateTime'>
    readonly type: FieldRef<"token", 'tokenType'>
  }
    

  // Custom InputTypes
  /**
   * token findUnique
   */
  export type tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findUniqueOrThrow
   */
  export type tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findFirst
   */
  export type tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findFirstOrThrow
   */
  export type tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findMany
   */
  export type tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token create
   */
  export type tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data needed to create a token.
     */
    data: XOR<tokenCreateInput, tokenUncheckedCreateInput>
  }

  /**
   * token createMany
   */
  export type tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token createManyAndReturn
   */
  export type tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token update
   */
  export type tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data needed to update a token.
     */
    data: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
    /**
     * Choose, which token to update.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token updateMany
   */
  export type tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * token updateManyAndReturn
   */
  export type tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * token upsert
   */
  export type tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The filter to search for the token to update in case it exists.
     */
    where: tokenWhereUniqueInput
    /**
     * In case the token found by the `where` argument doesn't exist, create a new token with this data.
     */
    create: XOR<tokenCreateInput, tokenUncheckedCreateInput>
    /**
     * In case the token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
  }

  /**
   * token delete
   */
  export type tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Filter which token to delete.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token deleteMany
   */
  export type tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * token without action
   */
  export type tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
  }


  /**
   * Model PackageDetails
   */

  export type AggregatePackageDetails = {
    _count: PackageDetailsCountAggregateOutputType | null
    _avg: PackageDetailsAvgAggregateOutputType | null
    _sum: PackageDetailsSumAggregateOutputType | null
    _min: PackageDetailsMinAggregateOutputType | null
    _max: PackageDetailsMaxAggregateOutputType | null
  }

  export type PackageDetailsAvgAggregateOutputType = {
    credit: number | null
    originalPrice: number | null
    sellingPrice: number | null
  }

  export type PackageDetailsSumAggregateOutputType = {
    credit: number | null
    originalPrice: number | null
    sellingPrice: number | null
  }

  export type PackageDetailsMinAggregateOutputType = {
    id: string | null
    key: string | null
    credit: number | null
    originalPrice: number | null
    sellingPrice: number | null
    createdAt: Date | null
  }

  export type PackageDetailsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    credit: number | null
    originalPrice: number | null
    sellingPrice: number | null
    createdAt: Date | null
  }

  export type PackageDetailsCountAggregateOutputType = {
    id: number
    key: number
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt: number
    _all: number
  }


  export type PackageDetailsAvgAggregateInputType = {
    credit?: true
    originalPrice?: true
    sellingPrice?: true
  }

  export type PackageDetailsSumAggregateInputType = {
    credit?: true
    originalPrice?: true
    sellingPrice?: true
  }

  export type PackageDetailsMinAggregateInputType = {
    id?: true
    key?: true
    credit?: true
    originalPrice?: true
    sellingPrice?: true
    createdAt?: true
  }

  export type PackageDetailsMaxAggregateInputType = {
    id?: true
    key?: true
    credit?: true
    originalPrice?: true
    sellingPrice?: true
    createdAt?: true
  }

  export type PackageDetailsCountAggregateInputType = {
    id?: true
    key?: true
    credit?: true
    originalPrice?: true
    sellingPrice?: true
    createdAt?: true
    _all?: true
  }

  export type PackageDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageDetails to aggregate.
     */
    where?: PackageDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageDetails to fetch.
     */
    orderBy?: PackageDetailsOrderByWithRelationInput | PackageDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageDetails
    **/
    _count?: true | PackageDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageDetailsMaxAggregateInputType
  }

  export type GetPackageDetailsAggregateType<T extends PackageDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageDetails[P]>
      : GetScalarType<T[P], AggregatePackageDetails[P]>
  }




  export type PackageDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageDetailsWhereInput
    orderBy?: PackageDetailsOrderByWithAggregationInput | PackageDetailsOrderByWithAggregationInput[]
    by: PackageDetailsScalarFieldEnum[] | PackageDetailsScalarFieldEnum
    having?: PackageDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageDetailsCountAggregateInputType | true
    _avg?: PackageDetailsAvgAggregateInputType
    _sum?: PackageDetailsSumAggregateInputType
    _min?: PackageDetailsMinAggregateInputType
    _max?: PackageDetailsMaxAggregateInputType
  }

  export type PackageDetailsGroupByOutputType = {
    id: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt: Date
    _count: PackageDetailsCountAggregateOutputType | null
    _avg: PackageDetailsAvgAggregateOutputType | null
    _sum: PackageDetailsSumAggregateOutputType | null
    _min: PackageDetailsMinAggregateOutputType | null
    _max: PackageDetailsMaxAggregateOutputType | null
  }

  type GetPackageDetailsGroupByPayload<T extends PackageDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PackageDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PackageDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    credit?: boolean
    originalPrice?: boolean
    sellingPrice?: boolean
    createdAt?: boolean
    PurchaseDetails?: boolean | PackageDetails$PurchaseDetailsArgs<ExtArgs>
    _count?: boolean | PackageDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageDetails"]>

  export type PackageDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    credit?: boolean
    originalPrice?: boolean
    sellingPrice?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["packageDetails"]>

  export type PackageDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    credit?: boolean
    originalPrice?: boolean
    sellingPrice?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["packageDetails"]>

  export type PackageDetailsSelectScalar = {
    id?: boolean
    key?: boolean
    credit?: boolean
    originalPrice?: boolean
    sellingPrice?: boolean
    createdAt?: boolean
  }

  export type PackageDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "credit" | "originalPrice" | "sellingPrice" | "createdAt", ExtArgs["result"]["packageDetails"]>
  export type PackageDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseDetails?: boolean | PackageDetails$PurchaseDetailsArgs<ExtArgs>
    _count?: boolean | PackageDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackageDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackageDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageDetails"
    objects: {
      PurchaseDetails: Prisma.$PurchaseDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      credit: number
      originalPrice: number
      sellingPrice: number
      createdAt: Date
    }, ExtArgs["result"]["packageDetails"]>
    composites: {}
  }

  type PackageDetailsGetPayload<S extends boolean | null | undefined | PackageDetailsDefaultArgs> = $Result.GetResult<Prisma.$PackageDetailsPayload, S>

  type PackageDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageDetailsCountAggregateInputType | true
    }

  export interface PackageDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageDetails'], meta: { name: 'PackageDetails' } }
    /**
     * Find zero or one PackageDetails that matches the filter.
     * @param {PackageDetailsFindUniqueArgs} args - Arguments to find a PackageDetails
     * @example
     * // Get one PackageDetails
     * const packageDetails = await prisma.packageDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageDetailsFindUniqueArgs>(args: SelectSubset<T, PackageDetailsFindUniqueArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageDetailsFindUniqueOrThrowArgs} args - Arguments to find a PackageDetails
     * @example
     * // Get one PackageDetails
     * const packageDetails = await prisma.packageDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsFindFirstArgs} args - Arguments to find a PackageDetails
     * @example
     * // Get one PackageDetails
     * const packageDetails = await prisma.packageDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageDetailsFindFirstArgs>(args?: SelectSubset<T, PackageDetailsFindFirstArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsFindFirstOrThrowArgs} args - Arguments to find a PackageDetails
     * @example
     * // Get one PackageDetails
     * const packageDetails = await prisma.packageDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageDetails
     * const packageDetails = await prisma.packageDetails.findMany()
     * 
     * // Get first 10 PackageDetails
     * const packageDetails = await prisma.packageDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageDetailsWithIdOnly = await prisma.packageDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageDetailsFindManyArgs>(args?: SelectSubset<T, PackageDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageDetails.
     * @param {PackageDetailsCreateArgs} args - Arguments to create a PackageDetails.
     * @example
     * // Create one PackageDetails
     * const PackageDetails = await prisma.packageDetails.create({
     *   data: {
     *     // ... data to create a PackageDetails
     *   }
     * })
     * 
     */
    create<T extends PackageDetailsCreateArgs>(args: SelectSubset<T, PackageDetailsCreateArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageDetails.
     * @param {PackageDetailsCreateManyArgs} args - Arguments to create many PackageDetails.
     * @example
     * // Create many PackageDetails
     * const packageDetails = await prisma.packageDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageDetailsCreateManyArgs>(args?: SelectSubset<T, PackageDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackageDetails and returns the data saved in the database.
     * @param {PackageDetailsCreateManyAndReturnArgs} args - Arguments to create many PackageDetails.
     * @example
     * // Create many PackageDetails
     * const packageDetails = await prisma.packageDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackageDetails and only return the `id`
     * const packageDetailsWithIdOnly = await prisma.packageDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackageDetails.
     * @param {PackageDetailsDeleteArgs} args - Arguments to delete one PackageDetails.
     * @example
     * // Delete one PackageDetails
     * const PackageDetails = await prisma.packageDetails.delete({
     *   where: {
     *     // ... filter to delete one PackageDetails
     *   }
     * })
     * 
     */
    delete<T extends PackageDetailsDeleteArgs>(args: SelectSubset<T, PackageDetailsDeleteArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageDetails.
     * @param {PackageDetailsUpdateArgs} args - Arguments to update one PackageDetails.
     * @example
     * // Update one PackageDetails
     * const packageDetails = await prisma.packageDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageDetailsUpdateArgs>(args: SelectSubset<T, PackageDetailsUpdateArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageDetails.
     * @param {PackageDetailsDeleteManyArgs} args - Arguments to filter PackageDetails to delete.
     * @example
     * // Delete a few PackageDetails
     * const { count } = await prisma.packageDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDetailsDeleteManyArgs>(args?: SelectSubset<T, PackageDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageDetails
     * const packageDetails = await prisma.packageDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageDetailsUpdateManyArgs>(args: SelectSubset<T, PackageDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageDetails and returns the data updated in the database.
     * @param {PackageDetailsUpdateManyAndReturnArgs} args - Arguments to update many PackageDetails.
     * @example
     * // Update many PackageDetails
     * const packageDetails = await prisma.packageDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackageDetails and only return the `id`
     * const packageDetailsWithIdOnly = await prisma.packageDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackageDetails.
     * @param {PackageDetailsUpsertArgs} args - Arguments to update or create a PackageDetails.
     * @example
     * // Update or create a PackageDetails
     * const packageDetails = await prisma.packageDetails.upsert({
     *   create: {
     *     // ... data to create a PackageDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageDetails we want to update
     *   }
     * })
     */
    upsert<T extends PackageDetailsUpsertArgs>(args: SelectSubset<T, PackageDetailsUpsertArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsCountArgs} args - Arguments to filter PackageDetails to count.
     * @example
     * // Count the number of PackageDetails
     * const count = await prisma.packageDetails.count({
     *   where: {
     *     // ... the filter for the PackageDetails we want to count
     *   }
     * })
    **/
    count<T extends PackageDetailsCountArgs>(
      args?: Subset<T, PackageDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageDetailsAggregateArgs>(args: Subset<T, PackageDetailsAggregateArgs>): Prisma.PrismaPromise<GetPackageDetailsAggregateType<T>>

    /**
     * Group by PackageDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageDetailsGroupByArgs} args - Group by arguments.
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
      T extends PackageDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PackageDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageDetails model
   */
  readonly fields: PackageDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PurchaseDetails<T extends PackageDetails$PurchaseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, PackageDetails$PurchaseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PackageDetails model
   */
  interface PackageDetailsFieldRefs {
    readonly id: FieldRef<"PackageDetails", 'String'>
    readonly key: FieldRef<"PackageDetails", 'String'>
    readonly credit: FieldRef<"PackageDetails", 'Int'>
    readonly originalPrice: FieldRef<"PackageDetails", 'Int'>
    readonly sellingPrice: FieldRef<"PackageDetails", 'Int'>
    readonly createdAt: FieldRef<"PackageDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackageDetails findUnique
   */
  export type PackageDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PackageDetails to fetch.
     */
    where: PackageDetailsWhereUniqueInput
  }

  /**
   * PackageDetails findUniqueOrThrow
   */
  export type PackageDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PackageDetails to fetch.
     */
    where: PackageDetailsWhereUniqueInput
  }

  /**
   * PackageDetails findFirst
   */
  export type PackageDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PackageDetails to fetch.
     */
    where?: PackageDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageDetails to fetch.
     */
    orderBy?: PackageDetailsOrderByWithRelationInput | PackageDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageDetails.
     */
    cursor?: PackageDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageDetails.
     */
    distinct?: PackageDetailsScalarFieldEnum | PackageDetailsScalarFieldEnum[]
  }

  /**
   * PackageDetails findFirstOrThrow
   */
  export type PackageDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PackageDetails to fetch.
     */
    where?: PackageDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageDetails to fetch.
     */
    orderBy?: PackageDetailsOrderByWithRelationInput | PackageDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageDetails.
     */
    cursor?: PackageDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageDetails.
     */
    distinct?: PackageDetailsScalarFieldEnum | PackageDetailsScalarFieldEnum[]
  }

  /**
   * PackageDetails findMany
   */
  export type PackageDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PackageDetails to fetch.
     */
    where?: PackageDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageDetails to fetch.
     */
    orderBy?: PackageDetailsOrderByWithRelationInput | PackageDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageDetails.
     */
    cursor?: PackageDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageDetails.
     */
    skip?: number
    distinct?: PackageDetailsScalarFieldEnum | PackageDetailsScalarFieldEnum[]
  }

  /**
   * PackageDetails create
   */
  export type PackageDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageDetails.
     */
    data: XOR<PackageDetailsCreateInput, PackageDetailsUncheckedCreateInput>
  }

  /**
   * PackageDetails createMany
   */
  export type PackageDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageDetails.
     */
    data: PackageDetailsCreateManyInput | PackageDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageDetails createManyAndReturn
   */
  export type PackageDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many PackageDetails.
     */
    data: PackageDetailsCreateManyInput | PackageDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageDetails update
   */
  export type PackageDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageDetails.
     */
    data: XOR<PackageDetailsUpdateInput, PackageDetailsUncheckedUpdateInput>
    /**
     * Choose, which PackageDetails to update.
     */
    where: PackageDetailsWhereUniqueInput
  }

  /**
   * PackageDetails updateMany
   */
  export type PackageDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageDetails.
     */
    data: XOR<PackageDetailsUpdateManyMutationInput, PackageDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PackageDetails to update
     */
    where?: PackageDetailsWhereInput
    /**
     * Limit how many PackageDetails to update.
     */
    limit?: number
  }

  /**
   * PackageDetails updateManyAndReturn
   */
  export type PackageDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * The data used to update PackageDetails.
     */
    data: XOR<PackageDetailsUpdateManyMutationInput, PackageDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PackageDetails to update
     */
    where?: PackageDetailsWhereInput
    /**
     * Limit how many PackageDetails to update.
     */
    limit?: number
  }

  /**
   * PackageDetails upsert
   */
  export type PackageDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageDetails to update in case it exists.
     */
    where: PackageDetailsWhereUniqueInput
    /**
     * In case the PackageDetails found by the `where` argument doesn't exist, create a new PackageDetails with this data.
     */
    create: XOR<PackageDetailsCreateInput, PackageDetailsUncheckedCreateInput>
    /**
     * In case the PackageDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageDetailsUpdateInput, PackageDetailsUncheckedUpdateInput>
  }

  /**
   * PackageDetails delete
   */
  export type PackageDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
    /**
     * Filter which PackageDetails to delete.
     */
    where: PackageDetailsWhereUniqueInput
  }

  /**
   * PackageDetails deleteMany
   */
  export type PackageDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageDetails to delete
     */
    where?: PackageDetailsWhereInput
    /**
     * Limit how many PackageDetails to delete.
     */
    limit?: number
  }

  /**
   * PackageDetails.PurchaseDetails
   */
  export type PackageDetails$PurchaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    where?: PurchaseDetailsWhereInput
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    cursor?: PurchaseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseDetailsScalarFieldEnum | PurchaseDetailsScalarFieldEnum[]
  }

  /**
   * PackageDetails without action
   */
  export type PackageDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageDetails
     */
    select?: PackageDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageDetails
     */
    omit?: PackageDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageDetailsInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseDetails
   */

  export type AggregatePurchaseDetails = {
    _count: PurchaseDetailsCountAggregateOutputType | null
    _avg: PurchaseDetailsAvgAggregateOutputType | null
    _sum: PurchaseDetailsSumAggregateOutputType | null
    _min: PurchaseDetailsMinAggregateOutputType | null
    _max: PurchaseDetailsMaxAggregateOutputType | null
  }

  export type PurchaseDetailsAvgAggregateOutputType = {
    amount: number | null
    creditPurchased: number | null
  }

  export type PurchaseDetailsSumAggregateOutputType = {
    amount: number | null
    creditPurchased: number | null
  }

  export type PurchaseDetailsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    amount: number | null
    currency: string | null
    payment_status: $Enums.payment_status | null
    email: string | null
    contact: string | null
    invoice_name: string | null
    creditPurchased: number | null
    createdAt: Date | null
    packageDetailsId: string | null
    userId: string | null
  }

  export type PurchaseDetailsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    amount: number | null
    currency: string | null
    payment_status: $Enums.payment_status | null
    email: string | null
    contact: string | null
    invoice_name: string | null
    creditPurchased: number | null
    createdAt: Date | null
    packageDetailsId: string | null
    userId: string | null
  }

  export type PurchaseDetailsCountAggregateOutputType = {
    id: number
    order_id: number
    amount: number
    currency: number
    payment_status: number
    email: number
    contact: number
    invoice_name: number
    creditPurchased: number
    createdAt: number
    packageDetailsId: number
    userId: number
    _all: number
  }


  export type PurchaseDetailsAvgAggregateInputType = {
    amount?: true
    creditPurchased?: true
  }

  export type PurchaseDetailsSumAggregateInputType = {
    amount?: true
    creditPurchased?: true
  }

  export type PurchaseDetailsMinAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    email?: true
    contact?: true
    invoice_name?: true
    creditPurchased?: true
    createdAt?: true
    packageDetailsId?: true
    userId?: true
  }

  export type PurchaseDetailsMaxAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    email?: true
    contact?: true
    invoice_name?: true
    creditPurchased?: true
    createdAt?: true
    packageDetailsId?: true
    userId?: true
  }

  export type PurchaseDetailsCountAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    email?: true
    contact?: true
    invoice_name?: true
    creditPurchased?: true
    createdAt?: true
    packageDetailsId?: true
    userId?: true
    _all?: true
  }

  export type PurchaseDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseDetails to aggregate.
     */
    where?: PurchaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDetails to fetch.
     */
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseDetails
    **/
    _count?: true | PurchaseDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseDetailsMaxAggregateInputType
  }

  export type GetPurchaseDetailsAggregateType<T extends PurchaseDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseDetails[P]>
      : GetScalarType<T[P], AggregatePurchaseDetails[P]>
  }




  export type PurchaseDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseDetailsWhereInput
    orderBy?: PurchaseDetailsOrderByWithAggregationInput | PurchaseDetailsOrderByWithAggregationInput[]
    by: PurchaseDetailsScalarFieldEnum[] | PurchaseDetailsScalarFieldEnum
    having?: PurchaseDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseDetailsCountAggregateInputType | true
    _avg?: PurchaseDetailsAvgAggregateInputType
    _sum?: PurchaseDetailsSumAggregateInputType
    _min?: PurchaseDetailsMinAggregateInputType
    _max?: PurchaseDetailsMaxAggregateInputType
  }

  export type PurchaseDetailsGroupByOutputType = {
    id: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date
    packageDetailsId: string
    userId: string
    _count: PurchaseDetailsCountAggregateOutputType | null
    _avg: PurchaseDetailsAvgAggregateOutputType | null
    _sum: PurchaseDetailsSumAggregateOutputType | null
    _min: PurchaseDetailsMinAggregateOutputType | null
    _max: PurchaseDetailsMaxAggregateOutputType | null
  }

  type GetPurchaseDetailsGroupByPayload<T extends PurchaseDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    creditPurchased?: boolean
    createdAt?: boolean
    packageDetailsId?: boolean
    userId?: boolean
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseDetails"]>

  export type PurchaseDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    creditPurchased?: boolean
    createdAt?: boolean
    packageDetailsId?: boolean
    userId?: boolean
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseDetails"]>

  export type PurchaseDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    creditPurchased?: boolean
    createdAt?: boolean
    packageDetailsId?: boolean
    userId?: boolean
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseDetails"]>

  export type PurchaseDetailsSelectScalar = {
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    creditPurchased?: boolean
    createdAt?: boolean
    packageDetailsId?: boolean
    userId?: boolean
  }

  export type PurchaseDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "amount" | "currency" | "payment_status" | "email" | "contact" | "invoice_name" | "creditPurchased" | "createdAt" | "packageDetailsId" | "userId", ExtArgs["result"]["purchaseDetails"]>
  export type PurchaseDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }
  export type PurchaseDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }
  export type PurchaseDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLinked?: boolean | UserDataDefaultArgs<ExtArgs>
    packagePurchased?: boolean | PackageDetailsDefaultArgs<ExtArgs>
  }

  export type $PurchaseDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseDetails"
    objects: {
      userLinked: Prisma.$UserDataPayload<ExtArgs>
      packagePurchased: Prisma.$PackageDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      amount: number
      currency: string
      payment_status: $Enums.payment_status
      email: string
      contact: string | null
      invoice_name: string
      creditPurchased: number
      createdAt: Date
      packageDetailsId: string
      userId: string
    }, ExtArgs["result"]["purchaseDetails"]>
    composites: {}
  }

  type PurchaseDetailsGetPayload<S extends boolean | null | undefined | PurchaseDetailsDefaultArgs> = $Result.GetResult<Prisma.$PurchaseDetailsPayload, S>

  type PurchaseDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseDetailsCountAggregateInputType | true
    }

  export interface PurchaseDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseDetails'], meta: { name: 'PurchaseDetails' } }
    /**
     * Find zero or one PurchaseDetails that matches the filter.
     * @param {PurchaseDetailsFindUniqueArgs} args - Arguments to find a PurchaseDetails
     * @example
     * // Get one PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseDetailsFindUniqueArgs>(args: SelectSubset<T, PurchaseDetailsFindUniqueArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseDetailsFindUniqueOrThrowArgs} args - Arguments to find a PurchaseDetails
     * @example
     * // Get one PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsFindFirstArgs} args - Arguments to find a PurchaseDetails
     * @example
     * // Get one PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseDetailsFindFirstArgs>(args?: SelectSubset<T, PurchaseDetailsFindFirstArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsFindFirstOrThrowArgs} args - Arguments to find a PurchaseDetails
     * @example
     * // Get one PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findMany()
     * 
     * // Get first 10 PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseDetailsWithIdOnly = await prisma.purchaseDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseDetailsFindManyArgs>(args?: SelectSubset<T, PurchaseDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseDetails.
     * @param {PurchaseDetailsCreateArgs} args - Arguments to create a PurchaseDetails.
     * @example
     * // Create one PurchaseDetails
     * const PurchaseDetails = await prisma.purchaseDetails.create({
     *   data: {
     *     // ... data to create a PurchaseDetails
     *   }
     * })
     * 
     */
    create<T extends PurchaseDetailsCreateArgs>(args: SelectSubset<T, PurchaseDetailsCreateArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseDetails.
     * @param {PurchaseDetailsCreateManyArgs} args - Arguments to create many PurchaseDetails.
     * @example
     * // Create many PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseDetailsCreateManyArgs>(args?: SelectSubset<T, PurchaseDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseDetails and returns the data saved in the database.
     * @param {PurchaseDetailsCreateManyAndReturnArgs} args - Arguments to create many PurchaseDetails.
     * @example
     * // Create many PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseDetails and only return the `id`
     * const purchaseDetailsWithIdOnly = await prisma.purchaseDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseDetails.
     * @param {PurchaseDetailsDeleteArgs} args - Arguments to delete one PurchaseDetails.
     * @example
     * // Delete one PurchaseDetails
     * const PurchaseDetails = await prisma.purchaseDetails.delete({
     *   where: {
     *     // ... filter to delete one PurchaseDetails
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDetailsDeleteArgs>(args: SelectSubset<T, PurchaseDetailsDeleteArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseDetails.
     * @param {PurchaseDetailsUpdateArgs} args - Arguments to update one PurchaseDetails.
     * @example
     * // Update one PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseDetailsUpdateArgs>(args: SelectSubset<T, PurchaseDetailsUpdateArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseDetails.
     * @param {PurchaseDetailsDeleteManyArgs} args - Arguments to filter PurchaseDetails to delete.
     * @example
     * // Delete a few PurchaseDetails
     * const { count } = await prisma.purchaseDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDetailsDeleteManyArgs>(args?: SelectSubset<T, PurchaseDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseDetailsUpdateManyArgs>(args: SelectSubset<T, PurchaseDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseDetails and returns the data updated in the database.
     * @param {PurchaseDetailsUpdateManyAndReturnArgs} args - Arguments to update many PurchaseDetails.
     * @example
     * // Update many PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseDetails and only return the `id`
     * const purchaseDetailsWithIdOnly = await prisma.purchaseDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseDetails.
     * @param {PurchaseDetailsUpsertArgs} args - Arguments to update or create a PurchaseDetails.
     * @example
     * // Update or create a PurchaseDetails
     * const purchaseDetails = await prisma.purchaseDetails.upsert({
     *   create: {
     *     // ... data to create a PurchaseDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseDetails we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseDetailsUpsertArgs>(args: SelectSubset<T, PurchaseDetailsUpsertArgs<ExtArgs>>): Prisma__PurchaseDetailsClient<$Result.GetResult<Prisma.$PurchaseDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsCountArgs} args - Arguments to filter PurchaseDetails to count.
     * @example
     * // Count the number of PurchaseDetails
     * const count = await prisma.purchaseDetails.count({
     *   where: {
     *     // ... the filter for the PurchaseDetails we want to count
     *   }
     * })
    **/
    count<T extends PurchaseDetailsCountArgs>(
      args?: Subset<T, PurchaseDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseDetailsAggregateArgs>(args: Subset<T, PurchaseDetailsAggregateArgs>): Prisma.PrismaPromise<GetPurchaseDetailsAggregateType<T>>

    /**
     * Group by PurchaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDetailsGroupByArgs} args - Group by arguments.
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
      T extends PurchaseDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseDetails model
   */
  readonly fields: PurchaseDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLinked<T extends UserDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDataDefaultArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    packagePurchased<T extends PackageDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDetailsDefaultArgs<ExtArgs>>): Prisma__PackageDetailsClient<$Result.GetResult<Prisma.$PackageDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurchaseDetails model
   */
  interface PurchaseDetailsFieldRefs {
    readonly id: FieldRef<"PurchaseDetails", 'String'>
    readonly order_id: FieldRef<"PurchaseDetails", 'String'>
    readonly amount: FieldRef<"PurchaseDetails", 'Int'>
    readonly currency: FieldRef<"PurchaseDetails", 'String'>
    readonly payment_status: FieldRef<"PurchaseDetails", 'payment_status'>
    readonly email: FieldRef<"PurchaseDetails", 'String'>
    readonly contact: FieldRef<"PurchaseDetails", 'String'>
    readonly invoice_name: FieldRef<"PurchaseDetails", 'String'>
    readonly creditPurchased: FieldRef<"PurchaseDetails", 'Int'>
    readonly createdAt: FieldRef<"PurchaseDetails", 'DateTime'>
    readonly packageDetailsId: FieldRef<"PurchaseDetails", 'String'>
    readonly userId: FieldRef<"PurchaseDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseDetails findUnique
   */
  export type PurchaseDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDetails to fetch.
     */
    where: PurchaseDetailsWhereUniqueInput
  }

  /**
   * PurchaseDetails findUniqueOrThrow
   */
  export type PurchaseDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDetails to fetch.
     */
    where: PurchaseDetailsWhereUniqueInput
  }

  /**
   * PurchaseDetails findFirst
   */
  export type PurchaseDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDetails to fetch.
     */
    where?: PurchaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDetails to fetch.
     */
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseDetails.
     */
    cursor?: PurchaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseDetails.
     */
    distinct?: PurchaseDetailsScalarFieldEnum | PurchaseDetailsScalarFieldEnum[]
  }

  /**
   * PurchaseDetails findFirstOrThrow
   */
  export type PurchaseDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDetails to fetch.
     */
    where?: PurchaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDetails to fetch.
     */
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseDetails.
     */
    cursor?: PurchaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseDetails.
     */
    distinct?: PurchaseDetailsScalarFieldEnum | PurchaseDetailsScalarFieldEnum[]
  }

  /**
   * PurchaseDetails findMany
   */
  export type PurchaseDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDetails to fetch.
     */
    where?: PurchaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDetails to fetch.
     */
    orderBy?: PurchaseDetailsOrderByWithRelationInput | PurchaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseDetails.
     */
    cursor?: PurchaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDetails.
     */
    skip?: number
    distinct?: PurchaseDetailsScalarFieldEnum | PurchaseDetailsScalarFieldEnum[]
  }

  /**
   * PurchaseDetails create
   */
  export type PurchaseDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseDetails.
     */
    data: XOR<PurchaseDetailsCreateInput, PurchaseDetailsUncheckedCreateInput>
  }

  /**
   * PurchaseDetails createMany
   */
  export type PurchaseDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseDetails.
     */
    data: PurchaseDetailsCreateManyInput | PurchaseDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseDetails createManyAndReturn
   */
  export type PurchaseDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseDetails.
     */
    data: PurchaseDetailsCreateManyInput | PurchaseDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseDetails update
   */
  export type PurchaseDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseDetails.
     */
    data: XOR<PurchaseDetailsUpdateInput, PurchaseDetailsUncheckedUpdateInput>
    /**
     * Choose, which PurchaseDetails to update.
     */
    where: PurchaseDetailsWhereUniqueInput
  }

  /**
   * PurchaseDetails updateMany
   */
  export type PurchaseDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseDetails.
     */
    data: XOR<PurchaseDetailsUpdateManyMutationInput, PurchaseDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseDetails to update
     */
    where?: PurchaseDetailsWhereInput
    /**
     * Limit how many PurchaseDetails to update.
     */
    limit?: number
  }

  /**
   * PurchaseDetails updateManyAndReturn
   */
  export type PurchaseDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseDetails.
     */
    data: XOR<PurchaseDetailsUpdateManyMutationInput, PurchaseDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseDetails to update
     */
    where?: PurchaseDetailsWhereInput
    /**
     * Limit how many PurchaseDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseDetails upsert
   */
  export type PurchaseDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseDetails to update in case it exists.
     */
    where: PurchaseDetailsWhereUniqueInput
    /**
     * In case the PurchaseDetails found by the `where` argument doesn't exist, create a new PurchaseDetails with this data.
     */
    create: XOR<PurchaseDetailsCreateInput, PurchaseDetailsUncheckedCreateInput>
    /**
     * In case the PurchaseDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseDetailsUpdateInput, PurchaseDetailsUncheckedUpdateInput>
  }

  /**
   * PurchaseDetails delete
   */
  export type PurchaseDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
    /**
     * Filter which PurchaseDetails to delete.
     */
    where: PurchaseDetailsWhereUniqueInput
  }

  /**
   * PurchaseDetails deleteMany
   */
  export type PurchaseDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseDetails to delete
     */
    where?: PurchaseDetailsWhereInput
    /**
     * Limit how many PurchaseDetails to delete.
     */
    limit?: number
  }

  /**
   * PurchaseDetails without action
   */
  export type PurchaseDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDetails
     */
    select?: PurchaseDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseDetails
     */
    omit?: PurchaseDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDetailsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserDataScalarFieldEnum = (typeof UserDataScalarFieldEnum)[keyof typeof UserDataScalarFieldEnum]


  export const VideoGenerationDataScalarFieldEnum: {
    id: 'id',
    userPrompt: 'userPrompt',
    status: 'status',
    imageTaskId: 'imageTaskId',
    videoTaskId: 'videoTaskId',
    mergeAudioVideoTaskID: 'mergeAudioVideoTaskID',
    musicPrompt: 'musicPrompt',
    caption: 'caption',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    videoPublicId: 'videoPublicId',
    musicPublicId: 'musicPublicId',
    musicUrl: 'musicUrl',
    finalVideoUrl: 'finalVideoUrl',
    finalVideoPublicId: 'finalVideoPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userDataId: 'userDataId'
  };

  export type VideoGenerationDataScalarFieldEnum = (typeof VideoGenerationDataScalarFieldEnum)[keyof typeof VideoGenerationDataScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    type: 'type'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PackageDetailsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    credit: 'credit',
    originalPrice: 'originalPrice',
    sellingPrice: 'sellingPrice',
    createdAt: 'createdAt'
  };

  export type PackageDetailsScalarFieldEnum = (typeof PackageDetailsScalarFieldEnum)[keyof typeof PackageDetailsScalarFieldEnum]


  export const PurchaseDetailsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    currency: 'currency',
    payment_status: 'payment_status',
    email: 'email',
    contact: 'contact',
    invoice_name: 'invoice_name',
    creditPurchased: 'creditPurchased',
    createdAt: 'createdAt',
    packageDetailsId: 'packageDetailsId',
    userId: 'userId'
  };

  export type PurchaseDetailsScalarFieldEnum = (typeof PurchaseDetailsScalarFieldEnum)[keyof typeof PurchaseDetailsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'videoGenerationStatus'
   */
  export type EnumvideoGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'videoGenerationStatus'>
    


  /**
   * Reference to a field of type 'videoGenerationStatus[]'
   */
  export type ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'videoGenerationStatus[]'>
    


  /**
   * Reference to a field of type 'tokenType'
   */
  export type EnumtokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tokenType'>
    


  /**
   * Reference to a field of type 'tokenType[]'
   */
  export type ListEnumtokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tokenType[]'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserDataWhereInput = {
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    id?: StringFilter<"UserData"> | string
    name?: StringFilter<"UserData"> | string
    email?: StringFilter<"UserData"> | string
    emailVerified?: DateTimeNullableFilter<"UserData"> | Date | string | null
    password?: StringFilter<"UserData"> | string
    createdAt?: DateTimeFilter<"UserData"> | Date | string
    updatedAt?: DateTimeFilter<"UserData"> | Date | string
    videoGenerationData?: VideoGenerationDataListRelationFilter
    PurchaseDetails?: PurchaseDetailsListRelationFilter
  }

  export type UserDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoGenerationData?: videoGenerationDataOrderByRelationAggregateInput
    PurchaseDetails?: PurchaseDetailsOrderByRelationAggregateInput
  }

  export type UserDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    name?: StringFilter<"UserData"> | string
    emailVerified?: DateTimeNullableFilter<"UserData"> | Date | string | null
    password?: StringFilter<"UserData"> | string
    createdAt?: DateTimeFilter<"UserData"> | Date | string
    updatedAt?: DateTimeFilter<"UserData"> | Date | string
    videoGenerationData?: VideoGenerationDataListRelationFilter
    PurchaseDetails?: PurchaseDetailsListRelationFilter
  }, "id" | "email">

  export type UserDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserDataCountOrderByAggregateInput
    _max?: UserDataMaxOrderByAggregateInput
    _min?: UserDataMinOrderByAggregateInput
  }

  export type UserDataScalarWhereWithAggregatesInput = {
    AND?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    OR?: UserDataScalarWhereWithAggregatesInput[]
    NOT?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserData"> | string
    name?: StringWithAggregatesFilter<"UserData"> | string
    email?: StringWithAggregatesFilter<"UserData"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"UserData"> | Date | string | null
    password?: StringWithAggregatesFilter<"UserData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserData"> | Date | string
  }

  export type videoGenerationDataWhereInput = {
    AND?: videoGenerationDataWhereInput | videoGenerationDataWhereInput[]
    OR?: videoGenerationDataWhereInput[]
    NOT?: videoGenerationDataWhereInput | videoGenerationDataWhereInput[]
    id?: StringFilter<"videoGenerationData"> | string
    userPrompt?: StringFilter<"videoGenerationData"> | string
    status?: EnumvideoGenerationStatusFilter<"videoGenerationData"> | $Enums.videoGenerationStatus
    imageTaskId?: StringNullableFilter<"videoGenerationData"> | string | null
    videoTaskId?: StringNullableFilter<"videoGenerationData"> | string | null
    mergeAudioVideoTaskID?: StringNullableFilter<"videoGenerationData"> | string | null
    musicPrompt?: StringNullableFilter<"videoGenerationData"> | string | null
    caption?: StringNullableFilter<"videoGenerationData"> | string | null
    imageUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    createdAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    updatedAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    userDataId?: StringFilter<"videoGenerationData"> | string
    UserData?: XOR<UserDataScalarRelationFilter, UserDataWhereInput>
  }

  export type videoGenerationDataOrderByWithRelationInput = {
    id?: SortOrder
    userPrompt?: SortOrder
    status?: SortOrder
    imageTaskId?: SortOrderInput | SortOrder
    videoTaskId?: SortOrderInput | SortOrder
    mergeAudioVideoTaskID?: SortOrderInput | SortOrder
    musicPrompt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    videoPublicId?: SortOrderInput | SortOrder
    musicPublicId?: SortOrderInput | SortOrder
    musicUrl?: SortOrderInput | SortOrder
    finalVideoUrl?: SortOrderInput | SortOrder
    finalVideoPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDataId?: SortOrder
    UserData?: UserDataOrderByWithRelationInput
  }

  export type videoGenerationDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    imageTaskId?: string
    videoTaskId?: string
    mergeAudioVideoTaskID?: string
    AND?: videoGenerationDataWhereInput | videoGenerationDataWhereInput[]
    OR?: videoGenerationDataWhereInput[]
    NOT?: videoGenerationDataWhereInput | videoGenerationDataWhereInput[]
    userPrompt?: StringFilter<"videoGenerationData"> | string
    status?: EnumvideoGenerationStatusFilter<"videoGenerationData"> | $Enums.videoGenerationStatus
    musicPrompt?: StringNullableFilter<"videoGenerationData"> | string | null
    caption?: StringNullableFilter<"videoGenerationData"> | string | null
    imageUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    createdAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    updatedAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    userDataId?: StringFilter<"videoGenerationData"> | string
    UserData?: XOR<UserDataScalarRelationFilter, UserDataWhereInput>
  }, "id" | "imageTaskId" | "videoTaskId" | "mergeAudioVideoTaskID">

  export type videoGenerationDataOrderByWithAggregationInput = {
    id?: SortOrder
    userPrompt?: SortOrder
    status?: SortOrder
    imageTaskId?: SortOrderInput | SortOrder
    videoTaskId?: SortOrderInput | SortOrder
    mergeAudioVideoTaskID?: SortOrderInput | SortOrder
    musicPrompt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    videoPublicId?: SortOrderInput | SortOrder
    musicPublicId?: SortOrderInput | SortOrder
    musicUrl?: SortOrderInput | SortOrder
    finalVideoUrl?: SortOrderInput | SortOrder
    finalVideoPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDataId?: SortOrder
    _count?: videoGenerationDataCountOrderByAggregateInput
    _max?: videoGenerationDataMaxOrderByAggregateInput
    _min?: videoGenerationDataMinOrderByAggregateInput
  }

  export type videoGenerationDataScalarWhereWithAggregatesInput = {
    AND?: videoGenerationDataScalarWhereWithAggregatesInput | videoGenerationDataScalarWhereWithAggregatesInput[]
    OR?: videoGenerationDataScalarWhereWithAggregatesInput[]
    NOT?: videoGenerationDataScalarWhereWithAggregatesInput | videoGenerationDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"videoGenerationData"> | string
    userPrompt?: StringWithAggregatesFilter<"videoGenerationData"> | string
    status?: EnumvideoGenerationStatusWithAggregatesFilter<"videoGenerationData"> | $Enums.videoGenerationStatus
    imageTaskId?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    videoTaskId?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    mergeAudioVideoTaskID?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    musicPrompt?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    caption?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    videoPublicId?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    musicPublicId?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    musicUrl?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    finalVideoUrl?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    finalVideoPublicId?: StringNullableWithAggregatesFilter<"videoGenerationData"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"videoGenerationData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"videoGenerationData"> | Date | string
    userDataId?: StringWithAggregatesFilter<"videoGenerationData"> | string
  }

  export type tokenWhereInput = {
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    id?: StringFilter<"token"> | string
    email?: StringFilter<"token"> | string
    token?: StringFilter<"token"> | string
    expires?: DateTimeFilter<"token"> | Date | string
    type?: EnumtokenTypeFilter<"token"> | $Enums.tokenType
  }

  export type tokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    type?: SortOrder
  }

  export type tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_token?: tokenEmailTokenCompoundUniqueInput
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    email?: StringFilter<"token"> | string
    token?: StringFilter<"token"> | string
    expires?: DateTimeFilter<"token"> | Date | string
    type?: EnumtokenTypeFilter<"token"> | $Enums.tokenType
  }, "id" | "email_token">

  export type tokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    type?: SortOrder
    _count?: tokenCountOrderByAggregateInput
    _max?: tokenMaxOrderByAggregateInput
    _min?: tokenMinOrderByAggregateInput
  }

  export type tokenScalarWhereWithAggregatesInput = {
    AND?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    OR?: tokenScalarWhereWithAggregatesInput[]
    NOT?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"token"> | string
    email?: StringWithAggregatesFilter<"token"> | string
    token?: StringWithAggregatesFilter<"token"> | string
    expires?: DateTimeWithAggregatesFilter<"token"> | Date | string
    type?: EnumtokenTypeWithAggregatesFilter<"token"> | $Enums.tokenType
  }

  export type PackageDetailsWhereInput = {
    AND?: PackageDetailsWhereInput | PackageDetailsWhereInput[]
    OR?: PackageDetailsWhereInput[]
    NOT?: PackageDetailsWhereInput | PackageDetailsWhereInput[]
    id?: StringFilter<"PackageDetails"> | string
    key?: StringFilter<"PackageDetails"> | string
    credit?: IntFilter<"PackageDetails"> | number
    originalPrice?: IntFilter<"PackageDetails"> | number
    sellingPrice?: IntFilter<"PackageDetails"> | number
    createdAt?: DateTimeFilter<"PackageDetails"> | Date | string
    PurchaseDetails?: PurchaseDetailsListRelationFilter
  }

  export type PackageDetailsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
    createdAt?: SortOrder
    PurchaseDetails?: PurchaseDetailsOrderByRelationAggregateInput
  }

  export type PackageDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PackageDetailsWhereInput | PackageDetailsWhereInput[]
    OR?: PackageDetailsWhereInput[]
    NOT?: PackageDetailsWhereInput | PackageDetailsWhereInput[]
    credit?: IntFilter<"PackageDetails"> | number
    originalPrice?: IntFilter<"PackageDetails"> | number
    sellingPrice?: IntFilter<"PackageDetails"> | number
    createdAt?: DateTimeFilter<"PackageDetails"> | Date | string
    PurchaseDetails?: PurchaseDetailsListRelationFilter
  }, "id" | "key">

  export type PackageDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
    createdAt?: SortOrder
    _count?: PackageDetailsCountOrderByAggregateInput
    _avg?: PackageDetailsAvgOrderByAggregateInput
    _max?: PackageDetailsMaxOrderByAggregateInput
    _min?: PackageDetailsMinOrderByAggregateInput
    _sum?: PackageDetailsSumOrderByAggregateInput
  }

  export type PackageDetailsScalarWhereWithAggregatesInput = {
    AND?: PackageDetailsScalarWhereWithAggregatesInput | PackageDetailsScalarWhereWithAggregatesInput[]
    OR?: PackageDetailsScalarWhereWithAggregatesInput[]
    NOT?: PackageDetailsScalarWhereWithAggregatesInput | PackageDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageDetails"> | string
    key?: StringWithAggregatesFilter<"PackageDetails"> | string
    credit?: IntWithAggregatesFilter<"PackageDetails"> | number
    originalPrice?: IntWithAggregatesFilter<"PackageDetails"> | number
    sellingPrice?: IntWithAggregatesFilter<"PackageDetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PackageDetails"> | Date | string
  }

  export type PurchaseDetailsWhereInput = {
    AND?: PurchaseDetailsWhereInput | PurchaseDetailsWhereInput[]
    OR?: PurchaseDetailsWhereInput[]
    NOT?: PurchaseDetailsWhereInput | PurchaseDetailsWhereInput[]
    id?: StringFilter<"PurchaseDetails"> | string
    order_id?: StringFilter<"PurchaseDetails"> | string
    amount?: IntFilter<"PurchaseDetails"> | number
    currency?: StringFilter<"PurchaseDetails"> | string
    payment_status?: Enumpayment_statusFilter<"PurchaseDetails"> | $Enums.payment_status
    email?: StringFilter<"PurchaseDetails"> | string
    contact?: StringNullableFilter<"PurchaseDetails"> | string | null
    invoice_name?: StringFilter<"PurchaseDetails"> | string
    creditPurchased?: IntFilter<"PurchaseDetails"> | number
    createdAt?: DateTimeFilter<"PurchaseDetails"> | Date | string
    packageDetailsId?: StringFilter<"PurchaseDetails"> | string
    userId?: StringFilter<"PurchaseDetails"> | string
    userLinked?: XOR<UserDataScalarRelationFilter, UserDataWhereInput>
    packagePurchased?: XOR<PackageDetailsScalarRelationFilter, PackageDetailsWhereInput>
  }

  export type PurchaseDetailsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    email?: SortOrder
    contact?: SortOrderInput | SortOrder
    invoice_name?: SortOrder
    creditPurchased?: SortOrder
    createdAt?: SortOrder
    packageDetailsId?: SortOrder
    userId?: SortOrder
    userLinked?: UserDataOrderByWithRelationInput
    packagePurchased?: PackageDetailsOrderByWithRelationInput
  }

  export type PurchaseDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseDetailsWhereInput | PurchaseDetailsWhereInput[]
    OR?: PurchaseDetailsWhereInput[]
    NOT?: PurchaseDetailsWhereInput | PurchaseDetailsWhereInput[]
    order_id?: StringFilter<"PurchaseDetails"> | string
    amount?: IntFilter<"PurchaseDetails"> | number
    currency?: StringFilter<"PurchaseDetails"> | string
    payment_status?: Enumpayment_statusFilter<"PurchaseDetails"> | $Enums.payment_status
    email?: StringFilter<"PurchaseDetails"> | string
    contact?: StringNullableFilter<"PurchaseDetails"> | string | null
    invoice_name?: StringFilter<"PurchaseDetails"> | string
    creditPurchased?: IntFilter<"PurchaseDetails"> | number
    createdAt?: DateTimeFilter<"PurchaseDetails"> | Date | string
    packageDetailsId?: StringFilter<"PurchaseDetails"> | string
    userId?: StringFilter<"PurchaseDetails"> | string
    userLinked?: XOR<UserDataScalarRelationFilter, UserDataWhereInput>
    packagePurchased?: XOR<PackageDetailsScalarRelationFilter, PackageDetailsWhereInput>
  }, "id">

  export type PurchaseDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    email?: SortOrder
    contact?: SortOrderInput | SortOrder
    invoice_name?: SortOrder
    creditPurchased?: SortOrder
    createdAt?: SortOrder
    packageDetailsId?: SortOrder
    userId?: SortOrder
    _count?: PurchaseDetailsCountOrderByAggregateInput
    _avg?: PurchaseDetailsAvgOrderByAggregateInput
    _max?: PurchaseDetailsMaxOrderByAggregateInput
    _min?: PurchaseDetailsMinOrderByAggregateInput
    _sum?: PurchaseDetailsSumOrderByAggregateInput
  }

  export type PurchaseDetailsScalarWhereWithAggregatesInput = {
    AND?: PurchaseDetailsScalarWhereWithAggregatesInput | PurchaseDetailsScalarWhereWithAggregatesInput[]
    OR?: PurchaseDetailsScalarWhereWithAggregatesInput[]
    NOT?: PurchaseDetailsScalarWhereWithAggregatesInput | PurchaseDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    order_id?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    amount?: IntWithAggregatesFilter<"PurchaseDetails"> | number
    currency?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    payment_status?: Enumpayment_statusWithAggregatesFilter<"PurchaseDetails"> | $Enums.payment_status
    email?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    contact?: StringNullableWithAggregatesFilter<"PurchaseDetails"> | string | null
    invoice_name?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    creditPurchased?: IntWithAggregatesFilter<"PurchaseDetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseDetails"> | Date | string
    packageDetailsId?: StringWithAggregatesFilter<"PurchaseDetails"> | string
    userId?: StringWithAggregatesFilter<"PurchaseDetails"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoGenerationData?: videoGenerationDataCreateNestedManyWithoutUserDataInput
    PurchaseDetails?: PurchaseDetailsCreateNestedManyWithoutUserLinkedInput
  }

  export type UserDataUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoGenerationData?: videoGenerationDataUncheckedCreateNestedManyWithoutUserDataInput
    PurchaseDetails?: PurchaseDetailsUncheckedCreateNestedManyWithoutUserLinkedInput
  }

  export type UserDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoGenerationData?: videoGenerationDataUpdateManyWithoutUserDataNestedInput
    PurchaseDetails?: PurchaseDetailsUpdateManyWithoutUserLinkedNestedInput
  }

  export type UserDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoGenerationData?: videoGenerationDataUncheckedUpdateManyWithoutUserDataNestedInput
    PurchaseDetails?: PurchaseDetailsUncheckedUpdateManyWithoutUserLinkedNestedInput
  }

  export type UserDataCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoGenerationDataCreateInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserData: UserDataCreateNestedOneWithoutVideoGenerationDataInput
  }

  export type videoGenerationDataUncheckedCreateInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userDataId: string
  }

  export type videoGenerationDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserData?: UserDataUpdateOneRequiredWithoutVideoGenerationDataNestedInput
  }

  export type videoGenerationDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDataId?: StringFieldUpdateOperationsInput | string
  }

  export type videoGenerationDataCreateManyInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userDataId: string
  }

  export type videoGenerationDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoGenerationDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDataId?: StringFieldUpdateOperationsInput | string
  }

  export type tokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    type: $Enums.tokenType
  }

  export type tokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    type: $Enums.tokenType
  }

  export type tokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumtokenTypeFieldUpdateOperationsInput | $Enums.tokenType
  }

  export type tokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumtokenTypeFieldUpdateOperationsInput | $Enums.tokenType
  }

  export type tokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    type: $Enums.tokenType
  }

  export type tokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumtokenTypeFieldUpdateOperationsInput | $Enums.tokenType
  }

  export type tokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumtokenTypeFieldUpdateOperationsInput | $Enums.tokenType
  }

  export type PackageDetailsCreateInput = {
    id?: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt?: Date | string
    PurchaseDetails?: PurchaseDetailsCreateNestedManyWithoutPackagePurchasedInput
  }

  export type PackageDetailsUncheckedCreateInput = {
    id?: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt?: Date | string
    PurchaseDetails?: PurchaseDetailsUncheckedCreateNestedManyWithoutPackagePurchasedInput
  }

  export type PackageDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseDetails?: PurchaseDetailsUpdateManyWithoutPackagePurchasedNestedInput
  }

  export type PackageDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseDetails?: PurchaseDetailsUncheckedUpdateManyWithoutPackagePurchasedNestedInput
  }

  export type PackageDetailsCreateManyInput = {
    id?: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt?: Date | string
  }

  export type PackageDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseDetailsCreateInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    userLinked: UserDataCreateNestedOneWithoutPurchaseDetailsInput
    packagePurchased: PackageDetailsCreateNestedOneWithoutPurchaseDetailsInput
  }

  export type PurchaseDetailsUncheckedCreateInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    packageDetailsId: string
    userId: string
  }

  export type PurchaseDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinked?: UserDataUpdateOneRequiredWithoutPurchaseDetailsNestedInput
    packagePurchased?: PackageDetailsUpdateOneRequiredWithoutPurchaseDetailsNestedInput
  }

  export type PurchaseDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageDetailsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseDetailsCreateManyInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    packageDetailsId: string
    userId: string
  }

  export type PurchaseDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageDetailsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VideoGenerationDataListRelationFilter = {
    every?: videoGenerationDataWhereInput
    some?: videoGenerationDataWhereInput
    none?: videoGenerationDataWhereInput
  }

  export type PurchaseDetailsListRelationFilter = {
    every?: PurchaseDetailsWhereInput
    some?: PurchaseDetailsWhereInput
    none?: PurchaseDetailsWhereInput
  }

  export type videoGenerationDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumvideoGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.videoGenerationStatus | EnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideoGenerationStatusFilter<$PrismaModel> | $Enums.videoGenerationStatus
  }

  export type UserDataScalarRelationFilter = {
    is?: UserDataWhereInput
    isNot?: UserDataWhereInput
  }

  export type videoGenerationDataCountOrderByAggregateInput = {
    id?: SortOrder
    userPrompt?: SortOrder
    status?: SortOrder
    imageTaskId?: SortOrder
    videoTaskId?: SortOrder
    mergeAudioVideoTaskID?: SortOrder
    musicPrompt?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    videoPublicId?: SortOrder
    musicPublicId?: SortOrder
    musicUrl?: SortOrder
    finalVideoUrl?: SortOrder
    finalVideoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDataId?: SortOrder
  }

  export type videoGenerationDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userPrompt?: SortOrder
    status?: SortOrder
    imageTaskId?: SortOrder
    videoTaskId?: SortOrder
    mergeAudioVideoTaskID?: SortOrder
    musicPrompt?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    videoPublicId?: SortOrder
    musicPublicId?: SortOrder
    musicUrl?: SortOrder
    finalVideoUrl?: SortOrder
    finalVideoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDataId?: SortOrder
  }

  export type videoGenerationDataMinOrderByAggregateInput = {
    id?: SortOrder
    userPrompt?: SortOrder
    status?: SortOrder
    imageTaskId?: SortOrder
    videoTaskId?: SortOrder
    mergeAudioVideoTaskID?: SortOrder
    musicPrompt?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    videoPublicId?: SortOrder
    musicPublicId?: SortOrder
    musicUrl?: SortOrder
    finalVideoUrl?: SortOrder
    finalVideoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDataId?: SortOrder
  }

  export type EnumvideoGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.videoGenerationStatus | EnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideoGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.videoGenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideoGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumvideoGenerationStatusFilter<$PrismaModel>
  }

  export type EnumtokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.tokenType | EnumtokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenTypeFilter<$PrismaModel> | $Enums.tokenType
  }

  export type tokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type tokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    type?: SortOrder
  }

  export type tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    type?: SortOrder
  }

  export type tokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    type?: SortOrder
  }

  export type EnumtokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tokenType | EnumtokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.tokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtokenTypeFilter<$PrismaModel>
    _max?: NestedEnumtokenTypeFilter<$PrismaModel>
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

  export type PackageDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageDetailsAvgOrderByAggregateInput = {
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
  }

  export type PackageDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageDetailsSumOrderByAggregateInput = {
    credit?: SortOrder
    originalPrice?: SortOrder
    sellingPrice?: SortOrder
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

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type PackageDetailsScalarRelationFilter = {
    is?: PackageDetailsWhereInput
    isNot?: PackageDetailsWhereInput
  }

  export type PurchaseDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    creditPurchased?: SortOrder
    createdAt?: SortOrder
    packageDetailsId?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseDetailsAvgOrderByAggregateInput = {
    amount?: SortOrder
    creditPurchased?: SortOrder
  }

  export type PurchaseDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    creditPurchased?: SortOrder
    createdAt?: SortOrder
    packageDetailsId?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    creditPurchased?: SortOrder
    createdAt?: SortOrder
    packageDetailsId?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseDetailsSumOrderByAggregateInput = {
    amount?: SortOrder
    creditPurchased?: SortOrder
  }

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type videoGenerationDataCreateNestedManyWithoutUserDataInput = {
    create?: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput> | videoGenerationDataCreateWithoutUserDataInput[] | videoGenerationDataUncheckedCreateWithoutUserDataInput[]
    connectOrCreate?: videoGenerationDataCreateOrConnectWithoutUserDataInput | videoGenerationDataCreateOrConnectWithoutUserDataInput[]
    createMany?: videoGenerationDataCreateManyUserDataInputEnvelope
    connect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
  }

  export type PurchaseDetailsCreateNestedManyWithoutUserLinkedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput> | PurchaseDetailsCreateWithoutUserLinkedInput[] | PurchaseDetailsUncheckedCreateWithoutUserLinkedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutUserLinkedInput | PurchaseDetailsCreateOrConnectWithoutUserLinkedInput[]
    createMany?: PurchaseDetailsCreateManyUserLinkedInputEnvelope
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
  }

  export type videoGenerationDataUncheckedCreateNestedManyWithoutUserDataInput = {
    create?: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput> | videoGenerationDataCreateWithoutUserDataInput[] | videoGenerationDataUncheckedCreateWithoutUserDataInput[]
    connectOrCreate?: videoGenerationDataCreateOrConnectWithoutUserDataInput | videoGenerationDataCreateOrConnectWithoutUserDataInput[]
    createMany?: videoGenerationDataCreateManyUserDataInputEnvelope
    connect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
  }

  export type PurchaseDetailsUncheckedCreateNestedManyWithoutUserLinkedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput> | PurchaseDetailsCreateWithoutUserLinkedInput[] | PurchaseDetailsUncheckedCreateWithoutUserLinkedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutUserLinkedInput | PurchaseDetailsCreateOrConnectWithoutUserLinkedInput[]
    createMany?: PurchaseDetailsCreateManyUserLinkedInputEnvelope
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
  }

  export type videoGenerationDataUpdateManyWithoutUserDataNestedInput = {
    create?: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput> | videoGenerationDataCreateWithoutUserDataInput[] | videoGenerationDataUncheckedCreateWithoutUserDataInput[]
    connectOrCreate?: videoGenerationDataCreateOrConnectWithoutUserDataInput | videoGenerationDataCreateOrConnectWithoutUserDataInput[]
    upsert?: videoGenerationDataUpsertWithWhereUniqueWithoutUserDataInput | videoGenerationDataUpsertWithWhereUniqueWithoutUserDataInput[]
    createMany?: videoGenerationDataCreateManyUserDataInputEnvelope
    set?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    disconnect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    delete?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    connect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    update?: videoGenerationDataUpdateWithWhereUniqueWithoutUserDataInput | videoGenerationDataUpdateWithWhereUniqueWithoutUserDataInput[]
    updateMany?: videoGenerationDataUpdateManyWithWhereWithoutUserDataInput | videoGenerationDataUpdateManyWithWhereWithoutUserDataInput[]
    deleteMany?: videoGenerationDataScalarWhereInput | videoGenerationDataScalarWhereInput[]
  }

  export type PurchaseDetailsUpdateManyWithoutUserLinkedNestedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput> | PurchaseDetailsCreateWithoutUserLinkedInput[] | PurchaseDetailsUncheckedCreateWithoutUserLinkedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutUserLinkedInput | PurchaseDetailsCreateOrConnectWithoutUserLinkedInput[]
    upsert?: PurchaseDetailsUpsertWithWhereUniqueWithoutUserLinkedInput | PurchaseDetailsUpsertWithWhereUniqueWithoutUserLinkedInput[]
    createMany?: PurchaseDetailsCreateManyUserLinkedInputEnvelope
    set?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    disconnect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    delete?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    update?: PurchaseDetailsUpdateWithWhereUniqueWithoutUserLinkedInput | PurchaseDetailsUpdateWithWhereUniqueWithoutUserLinkedInput[]
    updateMany?: PurchaseDetailsUpdateManyWithWhereWithoutUserLinkedInput | PurchaseDetailsUpdateManyWithWhereWithoutUserLinkedInput[]
    deleteMany?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
  }

  export type videoGenerationDataUncheckedUpdateManyWithoutUserDataNestedInput = {
    create?: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput> | videoGenerationDataCreateWithoutUserDataInput[] | videoGenerationDataUncheckedCreateWithoutUserDataInput[]
    connectOrCreate?: videoGenerationDataCreateOrConnectWithoutUserDataInput | videoGenerationDataCreateOrConnectWithoutUserDataInput[]
    upsert?: videoGenerationDataUpsertWithWhereUniqueWithoutUserDataInput | videoGenerationDataUpsertWithWhereUniqueWithoutUserDataInput[]
    createMany?: videoGenerationDataCreateManyUserDataInputEnvelope
    set?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    disconnect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    delete?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    connect?: videoGenerationDataWhereUniqueInput | videoGenerationDataWhereUniqueInput[]
    update?: videoGenerationDataUpdateWithWhereUniqueWithoutUserDataInput | videoGenerationDataUpdateWithWhereUniqueWithoutUserDataInput[]
    updateMany?: videoGenerationDataUpdateManyWithWhereWithoutUserDataInput | videoGenerationDataUpdateManyWithWhereWithoutUserDataInput[]
    deleteMany?: videoGenerationDataScalarWhereInput | videoGenerationDataScalarWhereInput[]
  }

  export type PurchaseDetailsUncheckedUpdateManyWithoutUserLinkedNestedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput> | PurchaseDetailsCreateWithoutUserLinkedInput[] | PurchaseDetailsUncheckedCreateWithoutUserLinkedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutUserLinkedInput | PurchaseDetailsCreateOrConnectWithoutUserLinkedInput[]
    upsert?: PurchaseDetailsUpsertWithWhereUniqueWithoutUserLinkedInput | PurchaseDetailsUpsertWithWhereUniqueWithoutUserLinkedInput[]
    createMany?: PurchaseDetailsCreateManyUserLinkedInputEnvelope
    set?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    disconnect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    delete?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    update?: PurchaseDetailsUpdateWithWhereUniqueWithoutUserLinkedInput | PurchaseDetailsUpdateWithWhereUniqueWithoutUserLinkedInput[]
    updateMany?: PurchaseDetailsUpdateManyWithWhereWithoutUserLinkedInput | PurchaseDetailsUpdateManyWithWhereWithoutUserLinkedInput[]
    deleteMany?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
  }

  export type UserDataCreateNestedOneWithoutVideoGenerationDataInput = {
    create?: XOR<UserDataCreateWithoutVideoGenerationDataInput, UserDataUncheckedCreateWithoutVideoGenerationDataInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutVideoGenerationDataInput
    connect?: UserDataWhereUniqueInput
  }

  export type EnumvideoGenerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.videoGenerationStatus
  }

  export type UserDataUpdateOneRequiredWithoutVideoGenerationDataNestedInput = {
    create?: XOR<UserDataCreateWithoutVideoGenerationDataInput, UserDataUncheckedCreateWithoutVideoGenerationDataInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutVideoGenerationDataInput
    upsert?: UserDataUpsertWithoutVideoGenerationDataInput
    connect?: UserDataWhereUniqueInput
    update?: XOR<XOR<UserDataUpdateToOneWithWhereWithoutVideoGenerationDataInput, UserDataUpdateWithoutVideoGenerationDataInput>, UserDataUncheckedUpdateWithoutVideoGenerationDataInput>
  }

  export type EnumtokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.tokenType
  }

  export type PurchaseDetailsCreateNestedManyWithoutPackagePurchasedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput> | PurchaseDetailsCreateWithoutPackagePurchasedInput[] | PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput | PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput[]
    createMany?: PurchaseDetailsCreateManyPackagePurchasedInputEnvelope
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
  }

  export type PurchaseDetailsUncheckedCreateNestedManyWithoutPackagePurchasedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput> | PurchaseDetailsCreateWithoutPackagePurchasedInput[] | PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput | PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput[]
    createMany?: PurchaseDetailsCreateManyPackagePurchasedInputEnvelope
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseDetailsUpdateManyWithoutPackagePurchasedNestedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput> | PurchaseDetailsCreateWithoutPackagePurchasedInput[] | PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput | PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput[]
    upsert?: PurchaseDetailsUpsertWithWhereUniqueWithoutPackagePurchasedInput | PurchaseDetailsUpsertWithWhereUniqueWithoutPackagePurchasedInput[]
    createMany?: PurchaseDetailsCreateManyPackagePurchasedInputEnvelope
    set?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    disconnect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    delete?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    update?: PurchaseDetailsUpdateWithWhereUniqueWithoutPackagePurchasedInput | PurchaseDetailsUpdateWithWhereUniqueWithoutPackagePurchasedInput[]
    updateMany?: PurchaseDetailsUpdateManyWithWhereWithoutPackagePurchasedInput | PurchaseDetailsUpdateManyWithWhereWithoutPackagePurchasedInput[]
    deleteMany?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
  }

  export type PurchaseDetailsUncheckedUpdateManyWithoutPackagePurchasedNestedInput = {
    create?: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput> | PurchaseDetailsCreateWithoutPackagePurchasedInput[] | PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput[]
    connectOrCreate?: PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput | PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput[]
    upsert?: PurchaseDetailsUpsertWithWhereUniqueWithoutPackagePurchasedInput | PurchaseDetailsUpsertWithWhereUniqueWithoutPackagePurchasedInput[]
    createMany?: PurchaseDetailsCreateManyPackagePurchasedInputEnvelope
    set?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    disconnect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    delete?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    connect?: PurchaseDetailsWhereUniqueInput | PurchaseDetailsWhereUniqueInput[]
    update?: PurchaseDetailsUpdateWithWhereUniqueWithoutPackagePurchasedInput | PurchaseDetailsUpdateWithWhereUniqueWithoutPackagePurchasedInput[]
    updateMany?: PurchaseDetailsUpdateManyWithWhereWithoutPackagePurchasedInput | PurchaseDetailsUpdateManyWithWhereWithoutPackagePurchasedInput[]
    deleteMany?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
  }

  export type UserDataCreateNestedOneWithoutPurchaseDetailsInput = {
    create?: XOR<UserDataCreateWithoutPurchaseDetailsInput, UserDataUncheckedCreateWithoutPurchaseDetailsInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutPurchaseDetailsInput
    connect?: UserDataWhereUniqueInput
  }

  export type PackageDetailsCreateNestedOneWithoutPurchaseDetailsInput = {
    create?: XOR<PackageDetailsCreateWithoutPurchaseDetailsInput, PackageDetailsUncheckedCreateWithoutPurchaseDetailsInput>
    connectOrCreate?: PackageDetailsCreateOrConnectWithoutPurchaseDetailsInput
    connect?: PackageDetailsWhereUniqueInput
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type UserDataUpdateOneRequiredWithoutPurchaseDetailsNestedInput = {
    create?: XOR<UserDataCreateWithoutPurchaseDetailsInput, UserDataUncheckedCreateWithoutPurchaseDetailsInput>
    connectOrCreate?: UserDataCreateOrConnectWithoutPurchaseDetailsInput
    upsert?: UserDataUpsertWithoutPurchaseDetailsInput
    connect?: UserDataWhereUniqueInput
    update?: XOR<XOR<UserDataUpdateToOneWithWhereWithoutPurchaseDetailsInput, UserDataUpdateWithoutPurchaseDetailsInput>, UserDataUncheckedUpdateWithoutPurchaseDetailsInput>
  }

  export type PackageDetailsUpdateOneRequiredWithoutPurchaseDetailsNestedInput = {
    create?: XOR<PackageDetailsCreateWithoutPurchaseDetailsInput, PackageDetailsUncheckedCreateWithoutPurchaseDetailsInput>
    connectOrCreate?: PackageDetailsCreateOrConnectWithoutPurchaseDetailsInput
    upsert?: PackageDetailsUpsertWithoutPurchaseDetailsInput
    connect?: PackageDetailsWhereUniqueInput
    update?: XOR<XOR<PackageDetailsUpdateToOneWithWhereWithoutPurchaseDetailsInput, PackageDetailsUpdateWithoutPurchaseDetailsInput>, PackageDetailsUncheckedUpdateWithoutPurchaseDetailsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumvideoGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.videoGenerationStatus | EnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideoGenerationStatusFilter<$PrismaModel> | $Enums.videoGenerationStatus
  }

  export type NestedEnumvideoGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.videoGenerationStatus | EnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.videoGenerationStatus[] | ListEnumvideoGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideoGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.videoGenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideoGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumvideoGenerationStatusFilter<$PrismaModel>
  }

  export type NestedEnumtokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.tokenType | EnumtokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenTypeFilter<$PrismaModel> | $Enums.tokenType
  }

  export type NestedEnumtokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tokenType | EnumtokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.tokenType[] | ListEnumtokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.tokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtokenTypeFilter<$PrismaModel>
    _max?: NestedEnumtokenTypeFilter<$PrismaModel>
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

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type videoGenerationDataCreateWithoutUserDataInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type videoGenerationDataUncheckedCreateWithoutUserDataInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type videoGenerationDataCreateOrConnectWithoutUserDataInput = {
    where: videoGenerationDataWhereUniqueInput
    create: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput>
  }

  export type videoGenerationDataCreateManyUserDataInputEnvelope = {
    data: videoGenerationDataCreateManyUserDataInput | videoGenerationDataCreateManyUserDataInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseDetailsCreateWithoutUserLinkedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    packagePurchased: PackageDetailsCreateNestedOneWithoutPurchaseDetailsInput
  }

  export type PurchaseDetailsUncheckedCreateWithoutUserLinkedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    packageDetailsId: string
  }

  export type PurchaseDetailsCreateOrConnectWithoutUserLinkedInput = {
    where: PurchaseDetailsWhereUniqueInput
    create: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput>
  }

  export type PurchaseDetailsCreateManyUserLinkedInputEnvelope = {
    data: PurchaseDetailsCreateManyUserLinkedInput | PurchaseDetailsCreateManyUserLinkedInput[]
    skipDuplicates?: boolean
  }

  export type videoGenerationDataUpsertWithWhereUniqueWithoutUserDataInput = {
    where: videoGenerationDataWhereUniqueInput
    update: XOR<videoGenerationDataUpdateWithoutUserDataInput, videoGenerationDataUncheckedUpdateWithoutUserDataInput>
    create: XOR<videoGenerationDataCreateWithoutUserDataInput, videoGenerationDataUncheckedCreateWithoutUserDataInput>
  }

  export type videoGenerationDataUpdateWithWhereUniqueWithoutUserDataInput = {
    where: videoGenerationDataWhereUniqueInput
    data: XOR<videoGenerationDataUpdateWithoutUserDataInput, videoGenerationDataUncheckedUpdateWithoutUserDataInput>
  }

  export type videoGenerationDataUpdateManyWithWhereWithoutUserDataInput = {
    where: videoGenerationDataScalarWhereInput
    data: XOR<videoGenerationDataUpdateManyMutationInput, videoGenerationDataUncheckedUpdateManyWithoutUserDataInput>
  }

  export type videoGenerationDataScalarWhereInput = {
    AND?: videoGenerationDataScalarWhereInput | videoGenerationDataScalarWhereInput[]
    OR?: videoGenerationDataScalarWhereInput[]
    NOT?: videoGenerationDataScalarWhereInput | videoGenerationDataScalarWhereInput[]
    id?: StringFilter<"videoGenerationData"> | string
    userPrompt?: StringFilter<"videoGenerationData"> | string
    status?: EnumvideoGenerationStatusFilter<"videoGenerationData"> | $Enums.videoGenerationStatus
    imageTaskId?: StringNullableFilter<"videoGenerationData"> | string | null
    videoTaskId?: StringNullableFilter<"videoGenerationData"> | string | null
    mergeAudioVideoTaskID?: StringNullableFilter<"videoGenerationData"> | string | null
    musicPrompt?: StringNullableFilter<"videoGenerationData"> | string | null
    caption?: StringNullableFilter<"videoGenerationData"> | string | null
    imageUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    videoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    musicUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoUrl?: StringNullableFilter<"videoGenerationData"> | string | null
    finalVideoPublicId?: StringNullableFilter<"videoGenerationData"> | string | null
    createdAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    updatedAt?: DateTimeFilter<"videoGenerationData"> | Date | string
    userDataId?: StringFilter<"videoGenerationData"> | string
  }

  export type PurchaseDetailsUpsertWithWhereUniqueWithoutUserLinkedInput = {
    where: PurchaseDetailsWhereUniqueInput
    update: XOR<PurchaseDetailsUpdateWithoutUserLinkedInput, PurchaseDetailsUncheckedUpdateWithoutUserLinkedInput>
    create: XOR<PurchaseDetailsCreateWithoutUserLinkedInput, PurchaseDetailsUncheckedCreateWithoutUserLinkedInput>
  }

  export type PurchaseDetailsUpdateWithWhereUniqueWithoutUserLinkedInput = {
    where: PurchaseDetailsWhereUniqueInput
    data: XOR<PurchaseDetailsUpdateWithoutUserLinkedInput, PurchaseDetailsUncheckedUpdateWithoutUserLinkedInput>
  }

  export type PurchaseDetailsUpdateManyWithWhereWithoutUserLinkedInput = {
    where: PurchaseDetailsScalarWhereInput
    data: XOR<PurchaseDetailsUpdateManyMutationInput, PurchaseDetailsUncheckedUpdateManyWithoutUserLinkedInput>
  }

  export type PurchaseDetailsScalarWhereInput = {
    AND?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
    OR?: PurchaseDetailsScalarWhereInput[]
    NOT?: PurchaseDetailsScalarWhereInput | PurchaseDetailsScalarWhereInput[]
    id?: StringFilter<"PurchaseDetails"> | string
    order_id?: StringFilter<"PurchaseDetails"> | string
    amount?: IntFilter<"PurchaseDetails"> | number
    currency?: StringFilter<"PurchaseDetails"> | string
    payment_status?: Enumpayment_statusFilter<"PurchaseDetails"> | $Enums.payment_status
    email?: StringFilter<"PurchaseDetails"> | string
    contact?: StringNullableFilter<"PurchaseDetails"> | string | null
    invoice_name?: StringFilter<"PurchaseDetails"> | string
    creditPurchased?: IntFilter<"PurchaseDetails"> | number
    createdAt?: DateTimeFilter<"PurchaseDetails"> | Date | string
    packageDetailsId?: StringFilter<"PurchaseDetails"> | string
    userId?: StringFilter<"PurchaseDetails"> | string
  }

  export type UserDataCreateWithoutVideoGenerationDataInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PurchaseDetails?: PurchaseDetailsCreateNestedManyWithoutUserLinkedInput
  }

  export type UserDataUncheckedCreateWithoutVideoGenerationDataInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PurchaseDetails?: PurchaseDetailsUncheckedCreateNestedManyWithoutUserLinkedInput
  }

  export type UserDataCreateOrConnectWithoutVideoGenerationDataInput = {
    where: UserDataWhereUniqueInput
    create: XOR<UserDataCreateWithoutVideoGenerationDataInput, UserDataUncheckedCreateWithoutVideoGenerationDataInput>
  }

  export type UserDataUpsertWithoutVideoGenerationDataInput = {
    update: XOR<UserDataUpdateWithoutVideoGenerationDataInput, UserDataUncheckedUpdateWithoutVideoGenerationDataInput>
    create: XOR<UserDataCreateWithoutVideoGenerationDataInput, UserDataUncheckedCreateWithoutVideoGenerationDataInput>
    where?: UserDataWhereInput
  }

  export type UserDataUpdateToOneWithWhereWithoutVideoGenerationDataInput = {
    where?: UserDataWhereInput
    data: XOR<UserDataUpdateWithoutVideoGenerationDataInput, UserDataUncheckedUpdateWithoutVideoGenerationDataInput>
  }

  export type UserDataUpdateWithoutVideoGenerationDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseDetails?: PurchaseDetailsUpdateManyWithoutUserLinkedNestedInput
  }

  export type UserDataUncheckedUpdateWithoutVideoGenerationDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseDetails?: PurchaseDetailsUncheckedUpdateManyWithoutUserLinkedNestedInput
  }

  export type PurchaseDetailsCreateWithoutPackagePurchasedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    userLinked: UserDataCreateNestedOneWithoutPurchaseDetailsInput
  }

  export type PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    userId: string
  }

  export type PurchaseDetailsCreateOrConnectWithoutPackagePurchasedInput = {
    where: PurchaseDetailsWhereUniqueInput
    create: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput>
  }

  export type PurchaseDetailsCreateManyPackagePurchasedInputEnvelope = {
    data: PurchaseDetailsCreateManyPackagePurchasedInput | PurchaseDetailsCreateManyPackagePurchasedInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseDetailsUpsertWithWhereUniqueWithoutPackagePurchasedInput = {
    where: PurchaseDetailsWhereUniqueInput
    update: XOR<PurchaseDetailsUpdateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedUpdateWithoutPackagePurchasedInput>
    create: XOR<PurchaseDetailsCreateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedCreateWithoutPackagePurchasedInput>
  }

  export type PurchaseDetailsUpdateWithWhereUniqueWithoutPackagePurchasedInput = {
    where: PurchaseDetailsWhereUniqueInput
    data: XOR<PurchaseDetailsUpdateWithoutPackagePurchasedInput, PurchaseDetailsUncheckedUpdateWithoutPackagePurchasedInput>
  }

  export type PurchaseDetailsUpdateManyWithWhereWithoutPackagePurchasedInput = {
    where: PurchaseDetailsScalarWhereInput
    data: XOR<PurchaseDetailsUpdateManyMutationInput, PurchaseDetailsUncheckedUpdateManyWithoutPackagePurchasedInput>
  }

  export type UserDataCreateWithoutPurchaseDetailsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoGenerationData?: videoGenerationDataCreateNestedManyWithoutUserDataInput
  }

  export type UserDataUncheckedCreateWithoutPurchaseDetailsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoGenerationData?: videoGenerationDataUncheckedCreateNestedManyWithoutUserDataInput
  }

  export type UserDataCreateOrConnectWithoutPurchaseDetailsInput = {
    where: UserDataWhereUniqueInput
    create: XOR<UserDataCreateWithoutPurchaseDetailsInput, UserDataUncheckedCreateWithoutPurchaseDetailsInput>
  }

  export type PackageDetailsCreateWithoutPurchaseDetailsInput = {
    id?: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt?: Date | string
  }

  export type PackageDetailsUncheckedCreateWithoutPurchaseDetailsInput = {
    id?: string
    key: string
    credit: number
    originalPrice: number
    sellingPrice: number
    createdAt?: Date | string
  }

  export type PackageDetailsCreateOrConnectWithoutPurchaseDetailsInput = {
    where: PackageDetailsWhereUniqueInput
    create: XOR<PackageDetailsCreateWithoutPurchaseDetailsInput, PackageDetailsUncheckedCreateWithoutPurchaseDetailsInput>
  }

  export type UserDataUpsertWithoutPurchaseDetailsInput = {
    update: XOR<UserDataUpdateWithoutPurchaseDetailsInput, UserDataUncheckedUpdateWithoutPurchaseDetailsInput>
    create: XOR<UserDataCreateWithoutPurchaseDetailsInput, UserDataUncheckedCreateWithoutPurchaseDetailsInput>
    where?: UserDataWhereInput
  }

  export type UserDataUpdateToOneWithWhereWithoutPurchaseDetailsInput = {
    where?: UserDataWhereInput
    data: XOR<UserDataUpdateWithoutPurchaseDetailsInput, UserDataUncheckedUpdateWithoutPurchaseDetailsInput>
  }

  export type UserDataUpdateWithoutPurchaseDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoGenerationData?: videoGenerationDataUpdateManyWithoutUserDataNestedInput
  }

  export type UserDataUncheckedUpdateWithoutPurchaseDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoGenerationData?: videoGenerationDataUncheckedUpdateManyWithoutUserDataNestedInput
  }

  export type PackageDetailsUpsertWithoutPurchaseDetailsInput = {
    update: XOR<PackageDetailsUpdateWithoutPurchaseDetailsInput, PackageDetailsUncheckedUpdateWithoutPurchaseDetailsInput>
    create: XOR<PackageDetailsCreateWithoutPurchaseDetailsInput, PackageDetailsUncheckedCreateWithoutPurchaseDetailsInput>
    where?: PackageDetailsWhereInput
  }

  export type PackageDetailsUpdateToOneWithWhereWithoutPurchaseDetailsInput = {
    where?: PackageDetailsWhereInput
    data: XOR<PackageDetailsUpdateWithoutPurchaseDetailsInput, PackageDetailsUncheckedUpdateWithoutPurchaseDetailsInput>
  }

  export type PackageDetailsUpdateWithoutPurchaseDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageDetailsUncheckedUpdateWithoutPurchaseDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    credit?: IntFieldUpdateOperationsInput | number
    originalPrice?: IntFieldUpdateOperationsInput | number
    sellingPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoGenerationDataCreateManyUserDataInput = {
    id?: string
    userPrompt: string
    status?: $Enums.videoGenerationStatus
    imageTaskId?: string | null
    videoTaskId?: string | null
    mergeAudioVideoTaskID?: string | null
    musicPrompt?: string | null
    caption?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    videoPublicId?: string | null
    musicPublicId?: string | null
    musicUrl?: string | null
    finalVideoUrl?: string | null
    finalVideoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseDetailsCreateManyUserLinkedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    packageDetailsId: string
  }

  export type videoGenerationDataUpdateWithoutUserDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoGenerationDataUncheckedUpdateWithoutUserDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videoGenerationDataUncheckedUpdateManyWithoutUserDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    status?: EnumvideoGenerationStatusFieldUpdateOperationsInput | $Enums.videoGenerationStatus
    imageTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    videoTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    mergeAudioVideoTaskID?: NullableStringFieldUpdateOperationsInput | string | null
    musicPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    musicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    finalVideoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseDetailsUpdateWithoutUserLinkedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packagePurchased?: PackageDetailsUpdateOneRequiredWithoutPurchaseDetailsNestedInput
  }

  export type PurchaseDetailsUncheckedUpdateWithoutUserLinkedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageDetailsId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseDetailsUncheckedUpdateManyWithoutUserLinkedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageDetailsId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseDetailsCreateManyPackagePurchasedInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    email: string
    contact?: string | null
    invoice_name: string
    creditPurchased: number
    createdAt: Date | string
    userId: string
  }

  export type PurchaseDetailsUpdateWithoutPackagePurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinked?: UserDataUpdateOneRequiredWithoutPurchaseDetailsNestedInput
  }

  export type PurchaseDetailsUncheckedUpdateWithoutPackagePurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseDetailsUncheckedUpdateManyWithoutPackagePurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    email?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_name?: StringFieldUpdateOperationsInput | string
    creditPurchased?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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