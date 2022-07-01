// Ejemplo con any
let anyVar: any;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
anyVar.doSomething();
anyVar.touppercase();

// Ejemplo con unknow
let unknowVar: unknown;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// unknowVar.doSomething();
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
    let isNewV2: boolean = anyVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
