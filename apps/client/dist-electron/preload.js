"use strict";const s=require("electron"),l="electron-trpc";function _(n){const e=Object.create(null);for(const o in n){const E=n[o];e[E]=o}return e}const i={PARSE_ERROR:-32700,BAD_REQUEST:-32600,INTERNAL_SERVER_ERROR:-32603,UNAUTHORIZED:-32001,FORBIDDEN:-32003,NOT_FOUND:-32004,METHOD_NOT_SUPPORTED:-32005,TIMEOUT:-32008,CONFLICT:-32009,PRECONDITION_FAILED:-32012,PAYLOAD_TOO_LARGE:-32013,UNPROCESSABLE_CONTENT:-32022,TOO_MANY_REQUESTS:-32029,CLIENT_CLOSED_REQUEST:-32099};_(i);_(i);var R,t,O,T,c,r;typeof window>"u"||"Deno"in window||((t=(R=globalThis.process)==null?void 0:R.env)==null?void 0:t.NODE_ENV)==="test"||(T=(O=globalThis.process)==null?void 0:O.env)!=null&&T.JEST_WORKER_ID||(r=(c=globalThis.process)==null?void 0:c.env)!=null&&r.VITEST_WORKER_ID;const N=()=>{const n={sendMessage:e=>s.ipcRenderer.send(l,e),onMessage:e=>s.ipcRenderer.on(l,(o,E)=>e(E))};s.contextBridge.exposeInMainWorld("electronTRPC",n)};process.once("loaded",()=>{N()});