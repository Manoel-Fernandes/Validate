import validate from "../index.js";

import { describe, it, expect } from 'vitest';

const Validate = new validate();

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
		expect(() => Validate.check()).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("hello")).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("string")).toThrow('Error: (check) Missing data type.');
	});
	it("Should return error from input", () => {
		expect(() => Validate.check(20, "integer")).toThrow('Error: (check) Invalid data type. See the docs.');
	});
	it("Should return error from input", () => {
		expect(() => Validate.check("",)).toThrow('Error: (check) Missing data type.');
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
		expect(()=> Validate.check("123", "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "String".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(true, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Boolean".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check({}, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Object".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(null, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Null".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Infinity, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Infinity".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(-Infinity, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "-Infinity".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check([], "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Array".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Symbol(), "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Symbol".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(123n, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "BigInt".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> {let x; Validate.check(x, "number");}).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "Undefined".');
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(NaN, "number")).toThrow('Check failed: (check) Type mismatch. Expected "Number", got "NaN".');
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
		expect(()=> Validate.check(123, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Number".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(true, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Boolean".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check({}, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Object".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(null, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Null".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Infinity, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Infinity".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(-Infinity, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "-Infinity".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check([], "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Array".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Symbol(), "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Symbol".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123n, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "BigInt".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> {let x; Validate.check(x, "string");}).toThrow('Check failed: (check) Type mismatch. Expected "String", got "Undefined".');
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(NaN, "string")).toThrow('Check failed: (check) Type mismatch. Expected "String", got "NaN".');
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
		expect(()=> Validate.check("hello", "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "String".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Number".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check({}, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Object".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(null, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Null".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Infinity, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Infinity".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(-Infinity, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "-Infinity".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check([], "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Array".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Symbol(), "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Symbol".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123n, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "BigInt".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "boolean");}).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "Undefined".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(NaN, "boolean")).toThrow('Check failed: (check) Type mismatch. Expected "Boolean", got "NaN".');
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
		expect(() => Validate.check(false, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Boolean".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check("hello", "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "String".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(123, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Number".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check({}, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Object".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(null, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Null".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Infinity, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Infinity".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(-Infinity, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "-Infinity".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check([], "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Array".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Symbol(), "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Symbol".');
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "bigint");}).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "Undefined".');
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(NaN, "bigint")).toThrow('Check failed: (check) Type mismatch. Expected "BigInt", got "NaN".');
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
		expect(() => Validate.check(false, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Boolean".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check("hello", "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "String".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Number".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check({}, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Object".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(null, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Null".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Infinity, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Infinity".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(-Infinity, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "-Infinity".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check([], "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Array".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Symbol(), "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "Symbol".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123n, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "BigInt".');
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(NaN, "undefined")).toThrow('Check failed: (check) Type mismatch. Expected "Undefined", got "NaN".');
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
		expect(() => Validate.check(undefined, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Undefined".');
	});
	it("Should validate a null", ()=>{
		expect(() => Validate.check(false, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Boolean".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check("hello", "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "String".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Number".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check({}, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Object".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Infinity, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Infinity".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(-Infinity, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "-Infinity".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check([], "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Array".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Symbol(), "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "Symbol".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123n, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "BigInt".');
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(NaN, "null")).toThrow('Check failed: (check) Type mismatch. Expected "Null", got "NaN".');
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
		expect(()=> Validate.check(123, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Number".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check("123", "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "String".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(true, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Boolean".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check({}, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Object".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(null, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Null".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(Infinity, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Infinity".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(-Infinity, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "-Infinity".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check([], "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Array".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123n, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "BigInt".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> {let x; Validate.check(x, "symbol");}).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "Undefined".');
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(NaN, "symbol")).toThrow('Check failed: (check) Type mismatch. Expected "Symbol", got "NaN".');
	});
});


/////////////////   Arrays   ////////////////////////

describe("Validate Array Value", ()=>{
	// array
	it("Should validate an array", ()=>{
		expect(() => Validate.check(["foo", "bar"], "array")).not.toThrow();
	});
	it("Should validate an array", ()=>{
		const waitTrue = Validate.check(["foo", "bar"], "array");
		expect(waitTrue).toBe(true);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(123, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Number".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check("123", "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "String".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(true, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Boolean".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check({}, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Object".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(null, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Null".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(Infinity, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Infinity".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(-Infinity, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "-Infinity".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(Symbol(), "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Symbol".');
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(123n, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "BigInt".');
	});
	it("Should return error when validate a array", () =>{
		expect(()=> {let x; Validate.check(x, "array");}).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "Undefined".');
	});
	it("Should return error when validate a array", () =>{
		expect(()=> Validate.check(NaN, "array")).toThrow('Check failed: (check) Type mismatch. Expected "Array", got "NaN".');
	});
});


/////////////////   Object   //////////////////////

describe("Validate Object Value", ()=>{
	// object
	it("Should validate an object", ()=>{
		expect(() => Validate.check({}, "object")).not.toThrow();
	});
	it("Should validate an object", ()=>{
		const waitTrue = Validate.check({}, "object");
		expect(waitTrue).toBe(true);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(123, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Number".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check("123", "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "String".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(true, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Boolean".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(Symbol(), "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Symbol".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(null, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Null".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(Infinity, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Infinity".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(-Infinity, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "-Infinity".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check([], "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Array".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(123n, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "BigInt".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> {let x; Validate.check(x, "object");}).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "Undefined".');
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(NaN, "object")).toThrow('Check failed: (check) Type mismatch. Expected "Object", got "NaN".');
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
		expect(() => Validate.silent("hello")).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(75)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(["foo", "bar"])).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent({})).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(null)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(123n)).toThrow('Error: (silent) Expected a boolean.');
	});
	it("Should not return error with silent input", () => {
		expect(() => Validate.silent(false)).not.toThrow();
	});
})



///////////////////   Check Options   ///////////////////////

describe("Validate checkOptions", () => {
	it("Should not to throw", () => {
		expect(() => Validate.checkOptions("married", ["single", "married", "divorced"])).not.toThrow();
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkOptions("married", ["single", "married", "divorced"]);
		expect(waitTrue).toBe(true);
	});
	it("Should return false", () => {
		Validate.silent(true);
		let waitFalse = Validate.checkOptions("cat", ["lion", "tiger", "bird"]);
		expect(waitFalse).toBe(false);
	});
	it("Should return false", () => {
		let waitTrue = Validate.checkOptions(45, [28, 32, 57]);
		expect(waitTrue).toBe(false);
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkOptions(32, [28, 32, 57]);
		expect(waitTrue).toBe(true);
	});
	it("Should return false", () => {
		let waitTrue = Validate.checkOptions(18n, [22n, 35n, 40n]);
		expect(waitTrue).toBe(false);
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkOptions(22n, [22n, 35n, 40n]);
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkOptions(true, [false, true]);
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkOptions(Infinity, [350, 400, 457, Infinity]);
		expect(waitTrue).toBe(true);
	});
	
	it("Should return not found error", () => {
		Validate.silent(false);
		expect(() => Validate.checkOptions("other", ["single", "married", "divorced"])).toThrow('Check failed: (checkOptions) Value "other" not found.');
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions("cat", ["lion", "tiger", "bird"])).toThrow('Check failed: (checkOptions) Value "cat" not found.');
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions(45, [28, 32, 57])).toThrow('Check failed: (checkOptions) Value "45" not found.');
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions(18n, [22n, 35n, 40n])).toThrow('Check failed: (checkOptions) Value "18" not found.');
	});
	
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(null, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(undefined, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions([], ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions({}, ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(Symbol("hello"), ["single", "married", "divorced"])).toThrow('Error: (checkOptions) Invalid value. See the docs.');
	});
	
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", {})).toThrow('Error: (checkOptions) Expected an array.');
	});
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", 25)).toThrow('Error: (checkOptions) Expected an array.');
	});
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", "foo")).toThrow('Error: (checkOptions) Expected an array.');
	});
})


//////////////////   Check Range   ////////////////////

describe("Validating checkRange", () => {
	it("Should not to throw", () => {
		expect(() => Validate.checkRange(28, {from: 18, to: 65})).not.toThrow();
	});
	it("Should return true", () => {
		let waitTrue = Validate.checkRange(47, {from: 25, to: 88});
		expect(waitTrue).toBe(true);
	});
	it("Should return true", () => {
		let start = new Date("2020-5-1").getTime();
		let end = new Date("2030-5-1").getTime()
		let waitTrue = Validate.checkRange(new Date().getTime(), {from: start, to: end});
		expect(waitTrue).toBe(true);
	});
	
	// This test will fail if the hour is less than 6 o'clock and greater of 22 o'clock
	it("Should return true/false", () => {
		let hour = new Date().getHours();
		let waitTrue = Validate.checkRange(hour, {from: 6, to: 22});
		expect(waitTrue).toBe(true);
	});
	//////
	
	it("Should to throw", () => {
		expect(() => Validate.checkRange(77, {from: 18, to: 65})).toThrow('Check failed: (checkRange) Value "77" is out of range.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange("77", {from: 18, to: 65})).toThrow('Error: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange({}, {from: 18, to: 65})).toThrow('Error: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange([], {from: 18, to: 65})).toThrow('Error: (checkRange) Only "number" or "bigint" allowed.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, "")).toThrow('Error: (checkRange) Expected an object with "from" and "to".');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, 42)).toThrow('Error: (checkRange) Expected an object with "from" and "to".');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {to: 56})).toThrow('Error: (checkRange) Key "from" is missing.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: 35})).toThrow('Error: (checkRange) Key "to" is missing.');
	});
	
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: "16", to: 56})).toThrow('Error: (checkRange) "from" must be a number.');
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: 18, to: "27"})).toThrow('Error: (checkRange) "to" must be a number.');
	});
})

