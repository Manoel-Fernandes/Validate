import Validate from "../src/index.js";

import { describe, it, expect } from 'vitest';

Validate.silent(false);

//////////////////   Input   ///////////////

describe("Validate input", ()=>{
	it("Should validate an input", () => {
		expect(() => Validate.check("input test", "string")).not.toThrow();
	});
	it("Should validate an input", () => {
		const waitTrue = Validate.check("input", "string");
		expect(waitTrue).toBe(true);
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
	it("Should validate a number", ()=>{
		const waitTrue = Validate.check(123, "number");
		expect(waitTrue).toBe(true);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check("123", "number")).toThrow(/Invalid value: expected "number", received "string"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(true, "number")).toThrow(/Invalid value: expected "number", received "boolean"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check({}, "number")).toThrow(/Invalid value: expected "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(null, "number")).toThrow(/Invalid value: expected "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Infinity, "number")).toThrow(/Invalid value: expected "number", received "Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(-Infinity, "number")).toThrow(/Invalid value: expected "number", received "-Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check([], "number")).toThrow(/Invalid value: expected "number", received "object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Symbol, "number")).toThrow(/Invalid value: expected "number", received "function"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(123n, "number")).toThrow(/Invalid value: expected "number", received "bigint"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> {let x; Validate.check(x, "number");}).toThrow(/Invalid value: expected "number", received "undefined"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(NaN, "number")).toThrow(/Invalid value: expected "number", received "NaN"/);
	});
});


///////////////////   string   /////////////////////////

describe("Validate String Value", ()=>{
	// string
	it("Should validate a string", ()=>{
		expect(() => Validate.check("hello world", "string")).not.toThrow();
	});
	it("Should validate a string", ()=>{
		const waitTrue = Validate.check("hello world", "string");
		expect(waitTrue).toBe(true);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123, "string")).toThrow(/Invalid value: expected "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(true, "string")).toThrow(/Invalid value: expected "string", received "boolean"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check({}, "string")).toThrow(/Invalid value: expected "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(null, "string")).toThrow(/Invalid value: expected "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Infinity, "string")).toThrow(/Invalid value: expected "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(-Infinity, "string")).toThrow(/Invalid value: expected "string", received "number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check([], "string")).toThrow(/Invalid value: expected "string", received "object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Symbol, "string")).toThrow(/Invalid value: expected "string", received "function"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123n, "string")).toThrow(/Invalid value: expected "string", received "bigint"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> {let x; Validate.check(x, "string");}).toThrow(/Invalid value: expected "string", received "undefined"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(NaN, "string")).toThrow(/Invalid value: expected "string", received "number"/);
	});
});


////////////////   boolean   ////////////////////

describe("Validate Boolean Value", ()=>{
	// boolean
	it("Should validate a boolean", ()=>{
		expect(() => Validate.check(true, "boolean")).not.toThrow();
	});
	it("Should validate a boolean", ()=>{
		const waitTrue = Validate.check(true, "boolean");
		expect(waitTrue).toBe(true);
	});
	it("Should validate a boolean", ()=>{
		expect(() => Validate.check(false, "boolean")).not.toThrow();
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check("hello", "boolean")).toThrow(/Invalid value: expected "boolean", received "string"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123, "boolean")).toThrow(/Invalid value: expected "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check({}, "boolean")).toThrow(/Invalid value: expected "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(null, "boolean")).toThrow(/Invalid value: expected "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Infinity, "boolean")).toThrow(/Invalid value: expected "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(-Infinity, "boolean")).toThrow(/Invalid value: expected "boolean", received "number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check([], "boolean")).toThrow(/Invalid value: expected "boolean", received "object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Symbol, "boolean")).toThrow(/Invalid value: expected "boolean", received "function"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123n, "boolean")).toThrow(/Invalid value: expected "boolean", received "bigint"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "boolean");}).toThrow(/Invalid value: expected "boolean", received "undefined"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(NaN, "boolean")).toThrow(/Invalid value: expected "boolean", received "number"/);
	});
});


///////////////////   BigInt   //////////////////////////

describe("Validate BigInt Value", ()=>{
	// BigInt
	it("Should validate a bigint", ()=>{
		expect(() => Validate.check(123n, "bigint")).not.toThrow();
	});
	it("Should validate a bigint", ()=>{
		const waitTrue = Validate.check(123n, "bigint");
		expect(waitTrue).toBe(true);
	});
	it("Should validate a bigint", ()=>{
		expect(() => Validate.check(false, "bigint")).toThrow(/Invalid value: expected "bigint", received "boolean"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check("hello", "bigint")).toThrow(/Invalid value: expected "bigint", received "string"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(123, "bigint")).toThrow(/Invalid value: expected "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check({}, "bigint")).toThrow(/Invalid value: expected "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(null, "bigint")).toThrow(/Invalid value: expected "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Infinity, "bigint")).toThrow(/Invalid value: expected "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(-Infinity, "bigint")).toThrow(/Invalid value: expected "bigint", received "number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check([], "bigint")).toThrow(/Invalid value: expected "bigint", received "object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Symbol, "bigint")).toThrow(/Invalid value: expected "bigint", received "function"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "bigint");}).toThrow(/Invalid value: expected "bigint", received "undefined"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(NaN, "bigint")).toThrow(/Invalid value: expected "bigint", received "number"/);
	});
});


//////////////////////   Undefined   /////////////////////////////

describe("Validate Undefined Value", ()=>{
	// Undefined
	it("Should validate a undefined", ()=>{
		expect(() => Validate.check(undefined, "undefined")).not.toThrow();
	});
	it("Should validate a undefined", ()=>{
		const waitTrue = Validate.check(undefined, "undefined");
		expect(waitTrue).toBe(true);
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
	it("Should return error when validate null", () =>{
		const waitTrue = Validate.check(null, "null");
		expect(waitTrue).toBe(true);
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
	it("Should validate a symbol", ()=>{
		const waitTrue = Validate.check(Symbol(), "symbol");
		expect(waitTrue).toBe(true);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123, "symbol")).toThrow(/Invalid value: expected "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check("123", "symbol")).toThrow(/Invalid value: expected "symbol", received "string"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(true, "symbol")).toThrow(/Invalid value: expected "symbol", received "boolean"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check({}, "symbol")).toThrow(/Invalid value: expected "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(null, "symbol")).toThrow(/Invalid value: expected "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(Infinity, "symbol")).toThrow(/Invalid value: expected "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(-Infinity, "symbol")).toThrow(/Invalid value: expected "symbol", received "number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check([], "symbol")).toThrow(/Invalid value: expected "symbol", received "object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123n, "symbol")).toThrow(/Invalid value: expected "symbol", received "bigint"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> {let x; Validate.check(x, "symbol");}).toThrow(/Invalid value: expected "symbol", received "undefined"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(NaN, "symbol")).toThrow(/Invalid value: expected "symbol", received "number"/);
	});
});



////////////////   False values returned   /////////////////////

describe("Validate silent mode return with false value", () => {
	it("Should return false value", () => {
		Validate.silent(true);
		const waitFalse = Validate.check("hello", "number");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		Validate.silent(true);
		const waitFalse = Validate.check(123, "string");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		Validate.silent(true);
		const waitFalse = Validate.check(123n, "null");
		expect(waitFalse).toBe(false);
	});
})


/////////////////////   Silent mode   ////////////////////////

describe("Validate value received by silent mode", () => {
	it("Should return error with silent input", () => {
		expect(() => Validate.silent("hello")).toThrow(/Invalid value: expected "boolean", received "string"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(123n)).toThrow(/Invalid value: expected "boolean", received "bigint"/);
	});
	it("Should not return error with silent input", () => {
		expect(() => Validate.silent(false)).not.toThrow();
	});
})
