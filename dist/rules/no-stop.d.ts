import { Rule } from 'eslint';
declare const meta: Rule.RuleMetaData;
declare const create: (context: Rule.RuleContext) => {
    StopStatement(node: any): void;
};
export { meta, create };
