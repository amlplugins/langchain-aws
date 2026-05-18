/**
 * @amlplugins/langchain-aws
 *
 * Thin namespaced re-export of the native @langchain/aws SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * LangChain AWS provider — ChatBedrockConverse, BedrockEmbeddings, ChatBedrock for Anthropic/Llama/Mistral on Bedrock.
 */

import * as _sdk from "@langchain/aws";
export * from "@langchain/aws";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@langchain/core";
export * as secondary from "@langchain/core";
export { _secondary };
