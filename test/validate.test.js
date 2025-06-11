import { Validate } from "../index.js";

import { describe, it, expect } from 'vitest';


//////////////////   Input   ///////////////

describe("Validate input", ()=>{
	const validInput = new Validate();
	it("Should validate an input", () => {
		expect(() => validInput.check("input test", "string")).not.toThrow();
	});
	it("Should validate an input", () => {
		const waitTrue = validInput.check("input", "string");
		expect(waitTrue).toBe(true);
	});
	/* Dont need to be setted to false, programming error will always throw an error */
	it("Should return error from input", () => {
		expect(() => validInput.check()).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => validInput.check("hello")).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => validInput.check("string")).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => validInput.check(20, "integer")).toThrow('Error: (check) Invalid data type. See the docs.');
	});
	it("Should return error from input", () => {
		expect(() => validInput.check("",)).toThrow('Error: (check) Missing data type.');
	});
});


////////////////////   numbers  //////////////////////

describe("Validate Number Value", ()=>{
	const validNumber = new Validate();
	// number
	it("Should validate a number", ()=>{
		expect(() => validNumber.check(123, "number")).not.toThrow();
	});
	it("Should validate a number", ()=>{
		const waitTrue = validNumber.check(123, "number");
		expect(waitTrue).toBe(true);
	});
	
	/* silent setted to false */
	validNumber.silent(false);
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check("123", "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "String".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(true, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Boolean".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check({}, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Object".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(null, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Null".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(Infinity, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Infinity".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(-Infinity, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "-Infinity".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check([], "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Array".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(Symbol(), "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Symbol".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(123n, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "BigInt".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> {let x; validNumber.check(x, "number");}).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Undefined".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> validNumber.check(NaN, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "NaN".');
	});
});


///////////////////   string   /////////////////////////

describe("Validate String Value", ()=>{
	const validString = new Validate();
	// string
	it("Should validate a string", ()=>{
		expect(() => validString.check("hello world", "string")).not.toThrow();
	});
	it("Should validate a string", ()=>{
		const waitTrue = validString.check("hello world", "string");
		expect(waitTrue).toBe(true);
	});
	
	/* silent setted to false */
	validString.silent(false);
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(123, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Number".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(true, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Boolean".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check({}, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Object".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(null, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Null".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(Infinity, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Infinity".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(-Infinity, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "-Infinity".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check([], "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Array".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(Symbol(), "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Symbol".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(123n, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "BigInt".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> {let x; validString.check(x, "string");}).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Undefined".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> validString.check(NaN, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "NaN".');
	});
});


////////////////   boolean   ////////////////////

describe("Validate Boolean Value", ()=>{
	const validBool = new Validate();
	// boolean
	it("Should validate a boolean", ()=>{
		expect(() => validBool.check(true, "boolean")).not.toThrow();
	});
	it("Should validate a boolean", ()=>{
		const waitTrue = validBool.check(true, "boolean");
		expect(waitTrue).toBe(true);
	});
	it("Should validate a boolean", ()=>{
		expect(() => validBool.check(false, "boolean")).not.toThrow();
	});
	
	// silent is setted as false
	validBool.silent(false);
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check("hello", "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "String".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(123, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Number".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check({}, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Object".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(null, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Null".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(Infinity, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Infinity".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(-Infinity, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "-Infinity".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check([], "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Array".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(Symbol(), "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Symbol".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(123n, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "BigInt".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; validBool.check(x, "boolean");}).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Undefined".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> validBool.check(NaN, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "NaN".');
	});
});


///////////////////   BigInt   //////////////////////////

describe("Validate BigInt Value", ()=>{
	const validBigint = new Validate();
	// BigInt
	it("Should validate a bigint", ()=>{
		expect(() => validBigint.check(123n, "bigint")).not.toThrow();
	});
	it("Should validate a bigint", ()=>{
		const waitTrue = validBigint.check(123n, "bigint");
		expect(waitTrue).toBe(true);
	});
	validBigint.silent(false);
	it("Should validate a bigint", ()=>{
		expect(() => validBigint.check(false, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Boolean".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check("hello", "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "String".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(123, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Number".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check({}, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Object".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(null, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Null".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(Infinity, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Infinity".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(-Infinity, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "-Infinity".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check([], "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Array".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(Symbol(), "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Symbol".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; validBigint.check(x, "bigint");}).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Undefined".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> validBigint.check(NaN, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "NaN".');
	});
});


//////////////////////   Undefined   /////////////////////////////

describe("Validate Undefined Value", ()=>{
	const validUndefined = new Validate();
	// Undefined
	it("Should validate a undefined", ()=>{
		expect(() => validUndefined.check(undefined, "undefined")).not.toThrow();
	});
	it("Should validate a undefined", ()=>{
		const waitTrue = validUndefined.check(undefined, "undefined");
		expect(waitTrue).toBe(true);
	});
	validUndefined.silent(false);
	it("Should validate a undefined", ()=>{
		expect(() => validUndefined.check(false, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Boolean".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check("hello", "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "String".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(123, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Number".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check({}, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Object".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(null, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Null".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(Infinity, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Infinity".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(-Infinity, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "-Infinity".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check([], "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Array".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(Symbol(), "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Symbol".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(123n, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "BigInt".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> validUndefined.check(NaN, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "NaN".');
	});
});


//////////////////////   Null   /////////////////////////

describe("Validate Null Value", ()=>{
	const validNull = new Validate();
	// null
	it("Should return error when validate null", () =>{
		expect(()=> validNull.check(null, "null")).not.toThrow();
	});
	it("Should return error when validate null", () =>{
		const waitTrue = validNull.check(null, "null");
		expect(waitTrue).toBe(true);
	});
	validNull.silent(false);
	it("Should validate a null", ()=>{
		expect(() => validNull.check(undefined, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Undefined".');
	});
	it("Should validate a null", ()=>{
		expect(() => validNull.check(false, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Boolean".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check("hello", "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "String".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(123, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Number".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check({}, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Object".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(Infinity, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Infinity".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(-Infinity, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "-Infinity".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check([], "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Array".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(Symbol(), "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Symbol".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(123n, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "BigInt".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> validNull.check(NaN, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "NaN".');
	});
});


///////////////////   Symbol   //////////////////////

describe("Validate Symbol Value", ()=>{
	const validSymbol = new Validate();
	// symbol
	it("Should validate a symbol", ()=>{
		expect(() => validSymbol.check(Symbol(), "symbol")).not.toThrow();
	});
	it("Should validate a symbol", ()=>{
		const waitTrue = validSymbol.check(Symbol(), "symbol");
		expect(waitTrue).toBe(true);
	});
	validSymbol.silent(false);
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(123, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Number".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check("123", "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "String".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(true, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Boolean".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check({}, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Object".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(null, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Null".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(Infinity, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Infinity".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(-Infinity, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "-Infinity".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check([], "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Array".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(123n, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "BigInt".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> {let x; validSymbol.check(x, "symbol");}).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Undefined".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> validSymbol.check(NaN, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "NaN".');
	});
});


/////////////////   Arrays   ////////////////////////

describe("Validate Array Value", ()=>{
	const validArray = new Validate();
	// array
	it("Should validate an array", ()=>{
		expect(() => validArray.check(["foo", "bar"], "array")).not.toThrow();
	});
	it("Should validate an array", ()=>{
		const waitTrue = validArray.check(["foo", "bar"], "array");
		expect(waitTrue).toBe(true);
	});
	validArray.silent(false);
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(123, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Number".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check("123", "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "String".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(true, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Boolean".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check({}, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Object".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(null, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Null".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(Infinity, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Infinity".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(-Infinity, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "-Infinity".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(Symbol(), "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Symbol".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> validArray.check(123n, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "BigInt".');
	});
	it("Should return error when validate a array", () =>{
		expect(()=> {let x; validArray.check(x, "array");}).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Undefined".');
	});
	it("Should return error when validate a array", () =>{
		expect(()=> validArray.check(NaN, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "NaN".');
	});
});


/////////////////   Object   //////////////////////

describe("Validate Object Value", ()=>{
	const validObj = new Validate();
	// object
	it("Should validate an object", ()=>{
		expect(() => validObj.check({}, "object")).not.toThrow();
	});
	it("Should validate an object", ()=>{
		const waitTrue = validObj.check({}, "object");
		expect(waitTrue).toBe(true);
	});
	validObj.silent(false);
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(123, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Number".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check("123", "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "String".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(true, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Boolean".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(Symbol(), "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Symbol".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(null, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Null".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(Infinity, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Infinity".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(-Infinity, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "-Infinity".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check([], "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Array".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(123n, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "BigInt".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> {let x; validObj.check(x, "object");}).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Undefined".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> validObj.check(NaN, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "NaN".');
	});
});

/////////////////   RegExp   //////////////////////

describe("Validate RegExp", ()=>{
	const validRegex = new Validate();
	// RegExp
	it("Should validate a RegExp", ()=>{
		let x = new RegExp()
		expect(() => validRegex.check(x, "RegExp")).not.toThrow();
	});
	it("Should validate a RegExp", ()=>{
		let x = new RegExp()
		const waitTrue = validRegex.check(x, "regexp");
		expect(waitTrue).toBe(true);
	});
	validRegex.silent(false);
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(123, "regexp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Number".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check("123", "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "String".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(true, "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Boolean".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(Symbol(), "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Symbol".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(null, "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Null".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(Infinity, "regexp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Infinity".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(-Infinity, "regexp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "-Infinity".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check([], "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Array".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(123n, "regexp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "BigInt".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> {let x; validRegex.check(x, "regexp");}).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "Undefined".');
	});
	it("Should return error when validate a RegExp", () =>{
		expect(()=> validRegex.check(NaN, "RegExp")).toThrow('Check failed: (check) Type mismatch. Expected "RegExp", got "NaN".');
	});
});

/////////////////   Date   //////////////////////

describe("Validate Date", ()=>{
	const validDate = new Validate();
	// object
	it("Should validate an object", ()=>{
		let thisDate = new Date()
		expect(() => validDate.check(thisDate, "date")).not.toThrow();
	});
	it("Should validate an object", ()=>{
		const waitTrue = validDate.check(new Date(), "date");
		expect(waitTrue).toBe(true);
	});
	validDate.silent(false);
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(123, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Number".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check("123", "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "String".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(true, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Boolean".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(Symbol(), "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Symbol".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(null, "date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Null".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(Infinity, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Infinity".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(-Infinity, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "-Infinity".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check([], "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Array".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(123n, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "BigInt".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> {let x; validDate.check(x, "Date");}).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "Undefined".');
	});
	it("Should return error when validate a Date", () =>{
		expect(()=> validDate.check(NaN, "Date")).toThrow('Check failed: (check) Type mismatch. Expected "Date", got "NaN".');
	});
});

/////////////////   Map   //////////////////////

describe("Validate Map", ()=>{
	const validMap = new Validate();
	// Map
	it("Should validate a Map", ()=>{
		let x = new Map()
		expect(() => validMap.check(x, "object")).not.toThrow();
	});
	it("Should validate a Map", ()=>{
		let x = new Map()
		const waitTrue = validMap.check(x, "object");
		expect(waitTrue).toBe(true);
	});
	validMap.silent(false);
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(123, "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Number".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check("123", "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "String".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(true, "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Boolean".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(Symbol(), "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Symbol".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(null, "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Null".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(Infinity, "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Infinity".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(-Infinity, "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "-Infinity".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check([], "map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Array".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(123n, "MAP")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "BigInt".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> {let x; validMap.check(x, "map");}).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "Undefined".');
	});
	it("Should return error when validate a Map", () =>{
		expect(()=> validMap.check(NaN, "Map")).toThrow('Check failed: (check) Type mismatch. Expected "Map", got "NaN".');
	});
});


/////////////////   Set   //////////////////////

describe("Validate Object Value", ()=>{
	const validSet = new Validate();
	// Set
	it("Should validate an object", ()=>{
		let x = new Set()
		expect(() => validSet.check(x, "set")).not.toThrow();
	});
	it("Should validate an object", ()=>{
		let x = new Set()
		const waitTrue = validSet.check(x, "set");
		expect(waitTrue).toBe(true);
	});
	validSet.silent(false);
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(123, "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Number".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check("123", "SET")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "String".');
	});
	it("Should return error when validate a set", () =>{
		expect(()=> validSet.check(true, "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Boolean".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(Symbol(), "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Symbol".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(null, "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Null".');
	});
	it("Should return error when validate a set", () =>{
		expect(()=> validSet.check(Infinity, "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Infinity".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(-Infinity, "Set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "-Infinity".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check([], "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Array".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(123n, "set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "BigInt".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> {let x; validSet.check(x, "set");}).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "Undefined".');
	});
	it("Should return error when validate a Set", () =>{
		expect(()=> validSet.check(NaN, "Set")).toThrow('Check failed: (check) Type mismatch. Expected "Set", got "NaN".');
	});
});



/////////////////   WeakMap   //////////////////////

describe("Validate WeakMap", ()=>{
	const validWeakMap = new Validate();
	// WeakMap
	it("Should validate a WeakMap", ()=>{
		let x = new WeakMap()
		expect(() => validWeakMap.check(x, "WeakMap")).not.toThrow();
	});
	it("Should validate a WeakMap", ()=>{
		let x = new WeakMap()
		const waitTrue = validWeakMap.check(x, "WeakMap");
		expect(waitTrue).toBe(true);
	});
	validWeakMap.silent(false);
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(123, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Number".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check("123", "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "String".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(true, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Boolean".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(Symbol(), "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Symbol".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(null, "weakmap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Null".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(Infinity, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Infinity".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(-Infinity, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "-Infinity".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check([], "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Array".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(123n, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "BigInt".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> {let x; validWeakMap.check(x, "WeakMap");}).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "Undefined".');
	});
	it("Should return error when validate a WeakMap", () =>{
		expect(()=> validWeakMap.check(NaN, "WeakMap")).toThrow('Check failed: (check) Type mismatch. Expected "WeakMap", got "NaN".');
	});
});



/////////////////   WeakSet   //////////////////////

describe("Validate WeakSet", ()=>{
	const validWeakSet = new Validate();
	// weakset
	it("Should validate a WeakSet", ()=>{
		let x = new WeakSet()
		expect(() => validWeakSet.check(x, "WeakSet")).not.toThrow();
	});
	it("Should validate a WeakSet", ()=>{
		let x = new WeakSet()
		const waitTrue = validWeakSet.check(x, "WeakSet");
		expect(waitTrue).toBe(true);
	});
	validWeakSet.silent(false);
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(123, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Number".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check("123", "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "String".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(true, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Boolean".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(Symbol(), "WeakSet")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Symbol".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(null, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Null".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(Infinity, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Infinity".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(-Infinity, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "-Infinity".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check([], "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Array".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(123n, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "BigInt".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> {let x; validWeakSet.check(x, "weakset");}).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "Undefined".');
	});
	it("Should return error when validate a WeakSet", () =>{
		expect(()=> validWeakSet.check(NaN, "weakset")).toThrow('Check failed: (check) Type mismatch. Expected "WeakSet", got "NaN".');
	});
});


////////////////   False values returned   /////////////////////

describe("Validate silent mode return with false value", () => {
	const validFalse = new Validate();
	it("Should return false value", () => {
		const waitFalse = validFalse.check("hello", "number");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(123, "string");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(123n, "null");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check("foo", "object");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check({}, "array");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(Symbol("foo"), "bigint");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(true, "undefined");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(["foo", "bar"], "boolean");
		expect(waitFalse).toBe(false);
	});
	it("Should return false value", () => {
		const waitFalse = validFalse.check(123n, "Symbol");
		expect(waitFalse).toBe(false);
	});
})


/////////////////////   Silent mode   ////////////////////////

describe("Validate value received by silent mode", () => {
	const validSilent = new Validate();
	
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent("hello")).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent(75)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent(["foo", "bar"])).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent({})).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent(null)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => validSilent.silent(123n)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should not return error with silent input", () => {
		expect(() => validSilent.silent(false)).not.toThrow();
	});
})



///////////////////   Check Options   ///////////////////////

describe("Validate checkOptions", () => {
	const validOptions = new Validate();
	it("Should not to throw", () => {
		expect(() => validOptions.checkOptions("married", ["single", "married", "divorced"])).not.toThrow();
	});
	it("Should return true", () => {
		let waitTrue = validOptions.checkOptions("married", ["single", "married", "divorced"]);
		expect(waitTrue).toBe(true);
	});
	it("Should return false", () => {
		let waitFalse = validOptions.checkOptions("cat", ["lion", "tiger", "bird"]);
		expect(waitFalse).toBe(false);
	});
	it("Should return false", () => {
		let waitTrue = validOptions.checkOptions(45, [28, 32, 57]);
		expect(waitTrue).toBe(false);
	});
	it("Should return true", () => {
		let waitTrue = validOptions.checkOptions(32, [28, 32, 57]);
		expect(waitTrue).toBe(true);
	});
	it("Should return false", () => {
		let waitTrue = validOptions.checkOptions(18n, [22n, 35n, 40n]);
		expect(waitTrue).toBe(false);
	});
	it("Should return true", () => {
		let waitTrue = validOptions.checkOptions(22n, [22n, 35n, 40n]);
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let waitTrue = validOptions.checkOptions(true, [false, true]);
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let waitTrue = validOptions.checkOptions(Infinity, [350, 400, 457, Infinity]);
		expect(waitTrue).toBe(true);
	});
	
	
	it("Should return not found error", () => {
		validOptions.silent(false);
		expect(() => validOptions.checkOptions("other", ["single", "married", "divorced"])).toThrow('Check failed: (checkOptions) Value "other" not found.');
	});
	it("Should return not found error", () => {
		expect(() => validOptions.checkOptions("cat", ["lion", "tiger", "bird"])).toThrow('Check failed: (checkOptions) Value "cat" not found.');
	});
	it("Should return not found error", () => {
		expect(() => validOptions.checkOptions(45, [28, 32, 57])).toThrow('Check failed: (checkOptions) Value "45" not found.');
	});
	it("Should return not found error", () => {
		expect(() => validOptions.checkOptions(18n, [22n, 35n, 40n])).toThrow('Check failed: (checkOptions) Value "18" not found.');
	});
	
	it("Should return invalid input error", () => {
		expect(() => validOptions.checkOptions(null, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => validOptions.checkOptions(undefined, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => validOptions.checkOptions([], ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => validOptions.checkOptions({}, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => validOptions.checkOptions(Symbol("hello"), ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	
	it("Should return input error", () => {
		expect(() => validOptions.checkOptions("hello", {})).toThrow('Error: (checkOptions) Expected an array.');
	});
	it("Should return input error", () => {
		expect(() => validOptions.checkOptions("hello", 25)).toThrow('Error: (checkOptions) Expected an array.');
	});
	it("Should return input error", () => {
		expect(() => validOptions.checkOptions("hello", "foo")).toThrow('Error: (checkOptions) Expected an array.');
	});
})


//////////////////   Check Range   ////////////////////

describe("Validating checkRange", () => {
	const validRange = new Validate();
	validRange.silent(false);
	
	it("Should not to throw", () => {
		expect(() => validRange.checkRange(28, {from: 18, to: 65})).not.toThrow();
	});
	it("Should return true", () => {
		let waitTrue = validRange.checkRange(47, {from: 25, to: 88});
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let start = new Date("2020-5-1").getTime();
		let end = new Date("2030-5-1").getTime()
		let waitTrue = validRange.checkRange(new Date().getTime(), {from: start, to: end});
		expect(waitTrue).toBe(true);
	});
	
	// This test will fail if the hour is less than 6 o'clock and greater of 22 o'clock
	it("Should return true/false", () => {
		let hour = new Date().getHours();
		let waitTrue = validRange.checkRange(hour, {from: 0, to: 22});
		expect(waitTrue).toBe(true);
	});
	/////
	
	it("Should to throw", () => {
		expect(() => validRange.checkRange(77, {from: 18, to: 65})).toThrow('Check failed: (checkRange) Value "77" is out of range.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange("77", {from: 18, to: 65})).toThrow('Check failed: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange({}, {from: 18, to: 65})).toThrow('Check failed: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange([], {from: 18, to: 65})).toThrow('Check failed: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, "")).toThrow('Error: (checkRange) Expected an object with "from" and "to".');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, 42)).toThrow('Error: (checkRange) Expected an object with "from" and "to".');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, {to: 56})).toThrow('Error: (checkRange) Key "from" is missing.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, {from: 35})).toThrow('Error: (checkRange) Key "to" is missing.');
	});
	
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, {from: "16", to: 56})).toThrow('Error: (checkRange) "from" must be a number.');
	});
	it("Should to throw", () => {
		expect(() => validRange.checkRange(21, {from: 18, to: "27"})).toThrow('Error: (checkRange) "to" must be a number.');
	});
})


///////////////////////   getType   //////////////////////////
describe("Check getType", () => {
	const validGetType = new Validate();
	
	it("Should return 'string'", () => {
		let getValue = validGetType.getType("Hello");
		expect(getValue).toBe("string");
	});
	it("Should return 'number'", () => {
		let getValue = validGetType.getType(275);
		expect(getValue).toBe("number");
	});
	it("Should return 'object'", () => {
		let getValue = validGetType.getType({foo: "bar"});
		expect(getValue).toBe("object");
	});
	it("Should return 'array'", () => {
		let getValue = validGetType.getType(["foo", "bar"]);
		expect(getValue).toBe("array");
	});
	it("Should return 'bigint'", () => {
		let getValue = validGetType.getType(275n);
		expect(getValue).toBe("bigint");
	});
	it("Should return 'null'", () => {
		let getValue = validGetType.getType(null);
		expect(getValue).toBe("null");
	});
	it("Should return 'undefined'", () => {
		let x
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("undefined");
	});
	it("Should return 'boolean'", () => {
		let x = true;
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("boolean");
	});
	it("Should return 'boolean'", () => {
		let x = false;
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("boolean");
	});
	it("Should return 'symbol'", () => {
		let x = Symbol("foo")
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("symbol");
	});
	it("Should return 'Date'", () => {
		let x = new Date()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("date");
	});
	it("Should return 'RegExp'", () => {
		let x = new RegExp()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("regexp");
	});
	it("Should return 'Map'", () => {
		let x = new Map()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("map");
	});
	it("Should return 'Set'", () => {
		let x = new Set()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("set");
	});
	it("Should return 'WeakMap'", () => {
		let x = new WeakMap()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("weakmap");
	}); 
	it("Should return 'WeakSet'", () => {
		let x = new WeakSet()
		let getValue = validGetType.getType(x);
		expect(getValue).toBe("weakset");
	});
})


///////////////////   getLastError   ///////////////////
  
describe("Check getLastError", () => {
	const validLastError = new Validate();
	
	it("Should return the last error", () => {
		let getTheError
		validLastError.silent(true);
		try{
			validLastError.checkOptions(45, );
		}catch{
			getTheError = validLastError.getLastError();
		}
		expect(getTheError).toMatch('Error: (checkOptions) Expected an array.')
	});
	it("Should return the last error", () => {
		validLastError.check("foo", "number");
		let getTheError = validLastError.getLastError();
		expect(getTheError).toMatch('Check failed: (check) Type mismatch. Expected "Number", got "String".')
	});
	it("Should return the last error", () => {
		validLastError.checkRange("foo", {from: 0, to: 100});
		let getTheError = validLastError.getLastError();
		expect(getTheError).toMatch('Check failed: (checkRange) Only "number" or "bigint" allowed.')
	});
	it("Should return the last error", () => {
		let getTheError
		try{
			validLastError.checkRange(82, {from: 0});
		}catch{
			getTheError = validLastError.getLastError();
		}
		expect(getTheError).toMatch('Error: (checkRange) Key "to" is missing.')
	});
})


/////////////////////   maxErrorSize   /////////////////////

describe("Should verify the maxErrorSize", () => {
	const validMaxError = new Validate();
	
	it("Should return 10", () => {
		validMaxError.maxErrorSize(10);
		for(let i = 0; i < 15; i++){
			validMaxError.check({foo: "bar"}, "bigint");
		}
		let x = validMaxError.getErrors();
		
		let size = x.length;
		expect(size).toBe(10);
	});
	
	it("Should return 5", () => {
		validMaxError.maxErrorSize(5);
		for(let i = 0; i < 7; i++){
			validMaxError.check({foo: "bar"}, "bigint");
		}
		let x = validMaxError.getErrors();
		
		let size = x.length;
		expect(size).toBe(5);
	});
	
	
	it("Should return 15", () => {
		validMaxError.maxErrorSize(15);
		for(let i = 0; i < 21; i++){
			validMaxError.check({foo: "bar"}, "bigint");
		}
		let x = validMaxError.getErrors();
		
		let size = x.length;
		expect(size).toBe(15);
	});
})


///////////////////   getErrors   //////////////////////

describe("Should verify the getErrors", () => {
	const validErrors = new Validate();
	it("Should be an array", () => {
		for(let i = 0; i < 10; i++){
			validErrors.check(27, "string");
		}
		validErrors.check("27", "object");
		let content = validErrors.getErrors();
		expect(Array.isArray(content)).toBe(true);
		for(let i = 0; i < content.length; i++){
			(i !== content.length - 1) ? expect(content[i]).toMatch(/^Check failed: \(check\) Type mismatch. Expected \"String\", got \"Number\"\./) :
			expect(content[i]).toMatch(/^Check failed: \(check\) Type mismatch. Expected \"Object\", got \"String\"\./)
		}
	});
})


/////////////////   isSilent   ///////////////////////

describe("Should verify the isSilent", () => {
	const validIsSilent = new Validate();
	it("Should be true", () => {
		validIsSilent.silent(true);
		let isItSilent = validIsSilent.isSilent();
		expect(isItSilent).toBe(true);
	});
	it("Should be true", () => {
		validIsSilent.silent(false);
		let isItSilent = validIsSilent.isSilent();
		expect(isItSilent).toBe(false);
	});
})


