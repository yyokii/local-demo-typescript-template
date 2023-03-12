"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const chains_1 = require("langchain/chains");
const llms_1 = require("langchain/llms");
const prompts_1 = require("langchain/prompts");
require('dotenv').config();
const run = async () => {
    // LLMの準備
    const llm = new llms_1.OpenAI({ temperature: 0.9 });
    // プロンプトテンプレートの準備
    const prompt = new prompts_1.PromptTemplate({
        inputVariables: ['product'],
        template: '{product}を作る日本語の新会社名をを1つ提案してください',
    });
    // チェーンの準備
    const chain = new chains_1.LLMChain({ llm: llm, prompt });
    // チェーンの実行
    let res = await chain.call({ product: 'モバイルアプリ' });
    console.log(res['text']);
};
exports.run = run;
(0, exports.run)();
//# sourceMappingURL=index.js.map