// https://www.electronjs.org/docs/latest/tutorial/context-isolation#usage-with-typescript

import { type IPCRequestOptions, type IPCResponse } from "./index";

interface Window {
  readonly electronTRPC: {
    rpc: (op: IPCRequestOptions) => Promise<IPCResponse>;
  };
}
