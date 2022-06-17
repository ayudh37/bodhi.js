export class JSONRPCError extends Error {
  public code: number;
  public message: string;
  public data?: any;
  readonly _isJSONRPCError: true;

  constructor(message: string, code: number, data?: any) {
    super();
    this.code = code;
    this.message = message;
    this.data = data;
    this._isJSONRPCError = true;
  }

  static isJSONRPCError(obj: any): obj is JSONRPCError {
    return obj._isJSONRPCError;
  }

  json() {
    return {
      code: this.code,
      data: this.data,
      message: this.message
    };
  }
}

export class InvalidRequest extends JSONRPCError {
  constructor() {
    super('invalid json request', -32600);
  }
}

export class InternalError extends JSONRPCError {
  constructor() {
    super('internal error', -32603);
  }
}

export class MethodNotFound extends JSONRPCError {
  constructor(message: string, data?: any) {
    super(message, -32601, data);
  }
}

export class InvalidParams extends JSONRPCError {
  constructor(message: string, data?: any) {
    super(message, -32602, data);
  }
}

export class BatchSizeError extends JSONRPCError {
  constructor(maximumSize: number, actualSize: number) {
    super('exceeded maximum batch size', -32600, `maximum batch size is ${maximumSize}, but received ${actualSize}`);
  }
}
