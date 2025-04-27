import Validate from "../src/index.js";

import { describe, it, expect } from 'vitest';

//////////////////   Input   ///////////////

describe("Validate input", ()=>{
	it("Should validate an input", () => {
		expect(() => Validate.check("input test", "string")).not.toThrow();
	});
	it("Should return error from input", () => {
		expect(() => Validate.check()).toThrow(/Please, inform a type to be checked/);
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("hello")).toThrow(/Please, inform a type to be checked/);
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("string")).toThrow(/Please, inform a type to be checked/);
	});
	it("Should return error from input", () => {
		expect(() => Validate.check(20, "integer")).toThrow(/Invalid type value, please read README.md for usage details./);
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("",)).toThrow(/Please, inform a type to be checked/);
	});
});

////////////////////   numbers  //////////////////////

describe("Validate Number Value", ()=>{
	// number
	it("Should validate a number", ()=>{
		expect(() => Validate.check(123, "number")).not.toThrow();
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check("123", "number")).toThrow(/Invalid value: expected a "number", received "string"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(true, "number")).toThrow(/Invalid value: expected a "number", received "boolean"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check({}, "number")).toThrow(/Invalid value: expected a "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(null, "number")).toThrow(/Invalid value: expected a "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Infinity, "number")).toThrow(/Invalid value: expected a "number", received invalid number "Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(-Infinity, "number")).toThrow(/Invalid value: expected a "number", received invalid number "-Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check([], "number")).toThrow(/Invalid value: expected a "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Symbol, "number")).toThrow(/Invalid value: expected a "number", received "function"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(123n, "number")).toThrow(/Invalid value: expected a "number", received "bigint"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> {let x; Validate.check(x, "number");}).toThrow(/Invalid value: expected a "number", received "undefined"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(NaN, "number")).toThrow(/Invalid value: expected a "number", received invalid number "NaN"/);
	});
});


///////////////////   string   /////////////////////////

describe("Validate String Value", ()=>{
	// string
	it("Should validate a string", ()=>{
		expect(() => Validate.check("hello world", "string")).not.toThrow();
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123, "string")).toThrow(/Invalid value: expected a "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(true, "string")).toThrow(/Invalid value: expected a "string", received "boolean"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check({}, "string")).toThrow(/Invalid value: expected a "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(null, "string")).toThrow(/Invalid value: expected a "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Infinity, "string")).toThrow(/Invalid value: expected a "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(-Infinity, "string")).toThrow(/Invalid value: expected a "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check([], "string")).toThrow(/Invalid value: expected a "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Symbol, "string")).toThrow(/Invalid value: expected a "string", received "function"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123n, "string")).toThrow(/Invalid value: expected a "string", received "bigint"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> {let x; Validate.check(x, "string");}).toThrow(/Invalid value: expected a "string", received "undefined"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(NaN, "string")).toThrow(/Invalid value: expected a "string", received "number"/);
	});
});


////////////////   boolean   ////////////////////

describe("Validate Boolean Value", ()=>{
	// boolean
	it("Should validate a boolean", ()=>{
		expect(() => Validate.check(true, "boolean")).not.toThrow();
	});
	it("Should validate a boolean", ()=>{
		expect(() => Validate.check(false, "boolean")).not.toThrow();
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check("hello", "boolean")).toThrow(/Invalid value: expected a "boolean", received "string"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123, "boolean")).toThrow(/Invalid value: expected a "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check({}, "boolean")).toThrow(/Invalid value: expected a "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(null, "boolean")).toThrow(/Invalid value: expected a "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Infinity, "boolean")).toThrow(/Invalid value: expected a "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(-Infinity, "boolean")).toThrow(/Invalid value: expected a "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check([], "boolean")).toThrow(/Invalid value: expected a "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Symbol, "boolean")).toThrow(/Invalid value: expected a "boolean", received "function"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123n, "boolean")).toThrow(/Invalid value: expected a "boolean", received "bigint"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "boolean");}).toThrow(/Invalid value: expected a "boolean", received "undefined"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(NaN, "boolean")).toThrow(/Invalid value: expected a "boolean", received "number"/);
	});
});


///////////////////   BigInt   //////////////////////////

describe("Validate BigInt Value", ()=>{
	// BigInt
	it("Should validate a bigint", ()=>{
		expect(() => Validate.check(123n, "bigint")).not.toThrow();
	});
	it("Should validate a bigint", ()=>{
		expect(() => Validate.check(false, "bigint")).toThrow(/Invalid value: expected a "bigint", received "boolean"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check("hello", "bigint")).toThrow(/Invalid value: expected a "bigint", received "string"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(123, "bigint")).toThrow(/Invalid value: expected a "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check({}, "bigint")).toThrow(/Invalid value: expected a "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(null, "bigint")).toThrow(/Invalid value: expected a "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Infinity, "bigint")).toThrow(/Invalid value: expected a "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(-Infinity, "bigint")).toThrow(/Invalid value: expected a "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check([], "bigint")).toThrow(/Invalid value: expected a "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Symbol, "bigint")).toThrow(/Invalid value: expected a "bigint", received "function"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "bigint");}).toThrow(/Invalid value: expected a "bigint", received "undefined"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(NaN, "bigint")).toThrow(/Invalid value: expected a "bigint", received "number"/);
	});
});


//////////////////////   Undefined   /////////////////////////////

describe("Validate Undefined Value", ()=>{
	// Undefined
	it("Should validate a undefined", ()=>{
		expect(() => Validate.check(undefined, "undefined")).not.toThrow();
	});
	it("Should validate a undefined", ()=>{
		expect(() => Validate.check(false, "undefined")).toThrow(/Invalid value: expected "undefined", received "boolean"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check("hello", "undefined")).toThrow(/Invalid value: expected "undefined", received "string"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123, "undefined")).toThrow(/Invalid value: expected "undefined", received "number"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check({}, "undefined")).toThrow(/Invalid value: expected "undefined", received "object"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(null, "undefined")).toThrow(/Invalid value: expected "undefined", received "object"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Infinity, "undefined")).toThrow(/Invalid value: expected "undefined", received "number"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(-Infinity, "undefined")).toThrow(/Invalid value: expected "undefined", received "number"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check([], "undefined")).toThrow(/Invalid value: expected "undefined", received "object"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Symbol, "undefined")).toThrow(/Invalid value: expected "undefined", received "function"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123n, "undefined")).toThrow(/Invalid value: expected "undefined", received "bigint"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(NaN, "undefined")).toThrow(/Invalid value: expected "undefined", received "number"/);
	});
});


//////////////////////   Null   /////////////////////////

describe("Validate Null Value", ()=>{
	// null
	it("Should return error when validate null", () =>{
		expect(()=> Validate.check(null, "null")).not.toThrow();
	});
	it("Should validate a null", ()=>{
		expect(() => Validate.check(undefined, "null")).toThrow(/Invalid value: expected "null", received "undefined"/);
	});
	it("Should validate a null", ()=>{
		expect(() => Validate.check(false, "null")).toThrow(/Invalid value: expected "null", received "boolean"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check("hello", "null")).toThrow(/Invalid value: expected "null", received "string"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123, "null")).toThrow(/Invalid value: expected "null", received "number"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check({}, "null")).toThrow(/Invalid value: expected "null", received "object"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Infinity, "null")).toThrow(/Invalid value: expected "null", received "number"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(-Infinity, "null")).toThrow(/Invalid value: expected "null", received "number"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check([], "null")).toThrow(/Invalid value: expected "null", received "object"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Symbol, "null")).toThrow(/Invalid value: expected "null", received "function"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123n, "null")).toThrow(/Invalid value: expected "null", received "bigint"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(NaN, "null")).toThrow(/Invalid value: expected "null", received "number"/);
	});
});


///////////////////   Symbol   //////////////////////

describe("Validate Symbol Value", ()=>{
	// symbol
	it("Should validate a symbol", ()=>{
		expect(() => Validate.check(Symbol(), "symbol")).not.toThrow();
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123, "symbol")).toThrow(/Invalid value: expected a "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check("123", "symbol")).toThrow(/Invalid value: expected a "symbol", received "string"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(true, "symbol")).toThrow(/Invalid value: expected a "symbol", received "boolean"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check({}, "symbol")).toThrow(/Invalid value: expected a "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(null, "symbol")).toThrow(/Invalid value: expected a "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(Infinity, "symbol")).toThrow(/Invalid value: expected a "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(-Infinity, "symbol")).toThrow(/Invalid value: expected a "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check([], "symbol")).toThrow(/Invalid value: expected a "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123n, "symbol")).toThrow(/Invalid value: expected a "symbol", received "bigint"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> {let x; Validate.check(x, "symbol");}).toThrow(/Invalid value: expected a "symbol", received "undefined"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(NaN, "symbol")).toThrow(/Invalid value: expected a "symbol", received "number"/);
	});
});
