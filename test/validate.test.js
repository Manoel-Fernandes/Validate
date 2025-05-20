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
		expect(() => Validate.check(20, "integer")).toThrow(/Invalid type value. Please read README.md for usage details./);
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
		expect(()=> Validate.check("123", "number")).toThrow(/Invalid value: expected "Number", received "String"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(true, "number")).toThrow(/Invalid value: expected "Number", received "Boolean"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check({}, "number")).toThrow(/Invalid value: expected "Number", received "Object"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(null, "number")).toThrow(/Invalid value: expected "Number", received "Null"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Infinity, "number")).toThrow(/Invalid value: expected "Number", received "Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(-Infinity, "number")).toThrow(/Invalid value: expected "Number", received "-Infinity"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check([], "number")).toThrow(/Invalid value: expected "Number", received "Array"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(Symbol(), "number")).toThrow(/Invalid value: expected "Number", received "Symbol"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(123n, "number")).toThrow(/Invalid value: expected "Number", received "BigInt"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> {let x; Validate.check(x, "number");}).toThrow(/Invalid value: expected "Number", received "Undefined"/);
	});
	it("Should return error when validate a number", () =>{
		expect(()=> Validate.check(NaN, "number")).toThrow(/Invalid value: expected "Number", received "NaN"/);
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
		expect(()=> Validate.check(123, "string")).toThrow(/Invalid value: expected "String", received "Number"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(true, "string")).toThrow(/Invalid value: expected "String", received "Boolean"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check({}, "string")).toThrow(/Invalid value: expected "String", received "Object"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(null, "string")).toThrow(/Invalid value: expected "String", received "Null"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Infinity, "string")).toThrow(/Invalid value: expected "String", received "Infinity"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(-Infinity, "string")).toThrow(/Invalid value: expected "String", received "-Infinity"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check([], "string")).toThrow(/Invalid value: expected "String", received "Array"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(Symbol(), "string")).toThrow(/Invalid value: expected "String", received "Symbol"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(123n, "string")).toThrow(/Invalid value: expected "String", received "BigInt"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> {let x; Validate.check(x, "string");}).toThrow(/Invalid value: expected "String", received "Undefined"/);
	});
	it("Should return error when validate a string", () =>{
		expect(()=> Validate.check(NaN, "string")).toThrow(/Invalid value: expected "String", received "NaN"/);
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
		expect(()=> Validate.check("hello", "boolean")).toThrow(/Invalid value: expected "Boolean", received "String"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123, "boolean")).toThrow(/Invalid value: expected "Boolean", received "Number"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check({}, "boolean")).toThrow(/Invalid value: expected "Boolean", received "Object"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(null, "boolean")).toThrow(/Invalid value: expected "Boolean", received "Null"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Infinity, "boolean")).toThrow(/Invalid value: expected "Boolean", received "Infinity"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(-Infinity, "boolean")).toThrow(/Invalid value: expected "Boolean", received "-Infinity"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check([], "boolean")).toThrow(/Invalid value: expected "Boolean", received "Array"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(Symbol(), "boolean")).toThrow(/Invalid value: expected "Boolean", received "Symbol"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(123n, "boolean")).toThrow(/Invalid value: expected "Boolean", received "BigInt"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "boolean");}).toThrow(/Invalid value: expected "Boolean", received "Undefined"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> Validate.check(NaN, "boolean")).toThrow(/Invalid value: expected "Boolean", received "NaN"/);
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
		expect(() => Validate.check(false, "bigint")).toThrow(/Invalid value: expected "BigInt", received "Boolean"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check("hello", "bigint")).toThrow(/Invalid value: expected "BigInt", received "String"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(123, "bigint")).toThrow(/Invalid value: expected "BigInt", received "Number"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check({}, "bigint")).toThrow(/Invalid value: expected "BigInt", received "Object"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(null, "bigint")).toThrow(/Invalid value: expected "BigInt", received "Null"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Infinity, "bigint")).toThrow(/Invalid value: expected "BigInt", received "Infinity"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(-Infinity, "bigint")).toThrow(/Invalid value: expected "BigInt", received "-Infinity"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check([], "bigint")).toThrow(/Invalid value: expected "BigInt", received "Array"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(Symbol(), "bigint")).toThrow(/Invalid value: expected "BigInt", received "Symbol"/);
	});
	it("Should return error when validate a boolean", () =>{
		expect(()=> {let x; Validate.check(x, "bigint");}).toThrow(/Invalid value: expected "BigInt", received "Undefined"/);
	});
	it("Should return error when validate a bigint", () =>{
		expect(()=> Validate.check(NaN, "bigint")).toThrow(/Invalid value: expected "BigInt", received "NaN"/);
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
		expect(() => Validate.check(false, "undefined")).toThrow(/Invalid value: expected "Undefined", received "Boolean"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check("hello", "undefined")).toThrow(/Invalid value: expected "Undefined", received "String"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123, "undefined")).toThrow(/Invalid value: expected "Undefined", received "Number"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check({}, "undefined")).toThrow(/Invalid value: expected "Undefined", received "Object"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(null, "undefined")).toThrow(/Invalid value: expected "Undefined", received "Null"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Infinity, "undefined")).toThrow(/Invalid value: expected "Undefined", received "Infinity"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(-Infinity, "undefined")).toThrow(/Invalid value: expected "Undefined", received "-Infinity"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check([], "undefined")).toThrow(/Invalid value: expected "Undefined", received "Array"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(Symbol(), "undefined")).toThrow(/Invalid value: expected "Undefined", received "Symbol"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(123n, "undefined")).toThrow(/Invalid value: expected "Undefined", received "BigInt"/);
	});
	it("Should return error when validate a undefined", () =>{
		expect(()=> Validate.check(NaN, "undefined")).toThrow(/Invalid value: expected "Undefined", received "NaN"/);
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
		expect(() => Validate.check(undefined, "null")).toThrow(/Invalid value: expected "Null", received "Undefined"/);
	});
	it("Should validate a null", ()=>{
		expect(() => Validate.check(false, "null")).toThrow(/Invalid value: expected "Null", received "Boolean"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check("hello", "null")).toThrow(/Invalid value: expected "Null", received "String"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123, "null")).toThrow(/Invalid value: expected "Null", received "Number"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check({}, "null")).toThrow(/Invalid value: expected "Null", received "Object"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Infinity, "null")).toThrow(/Invalid value: expected "Null", received "Infinity"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(-Infinity, "null")).toThrow(/Invalid value: expected "Null", received "-Infinity"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check([], "null")).toThrow(/Invalid value: expected "Null", received "Array"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(Symbol(), "null")).toThrow(/Invalid value: expected "Null", received "Symbol"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(123n, "null")).toThrow(/Invalid value: expected "Null", received "BigInt"/);
	});
	it("Should return error when validate a null", () =>{
		expect(()=> Validate.check(NaN, "null")).toThrow(/Invalid value: expected "Null", received "NaN"/);
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
		expect(()=> Validate.check(123, "symbol")).toThrow(/Invalid value: expected "Symbol", received "Number"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check("123", "symbol")).toThrow(/Invalid value: expected "Symbol", received "String"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(true, "symbol")).toThrow(/Invalid value: expected "Symbol", received "Boolean"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check({}, "symbol")).toThrow(/Invalid value: expected "Symbol", received "Object"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(null, "symbol")).toThrow(/Invalid value: expected "Symbol", received "Null"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(Infinity, "symbol")).toThrow(/Invalid value: expected "Symbol", received "Infinity"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(-Infinity, "symbol")).toThrow(/Invalid value: expected "Symbol", received "-Infinity"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check([], "symbol")).toThrow(/Invalid value: expected "Symbol", received "Array"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(123n, "symbol")).toThrow(/Invalid value: expected "Symbol", received "BigInt"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> {let x; Validate.check(x, "symbol");}).toThrow(/Invalid value: expected "Symbol", received "Undefined"/);
	});
	it("Should return error when validate a symbol", () =>{
		expect(()=> Validate.check(NaN, "symbol")).toThrow(/Invalid value: expected "Symbol", received "NaN"/);
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
		expect(()=> Validate.check(123, "array")).toThrow(/Invalid value: expected "Array", received "Number"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check("123", "array")).toThrow(/Invalid value: expected "Array", received "String"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(true, "array")).toThrow(/Invalid value: expected "Array", received "Boolean"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check({}, "array")).toThrow(/Invalid value: expected "Array", received "Object"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(null, "array")).toThrow(/Invalid value: expected "Array", received "Null"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(Infinity, "array")).toThrow(/Invalid value: expected "Array", received "Infinity"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(-Infinity, "array")).toThrow(/Invalid value: expected "Array", received "-Infinity"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(Symbol(), "array")).toThrow(/Invalid value: expected "Array", received "Symbol"/);
	});
	it("Should return error when validate an array", () =>{
		expect(()=> Validate.check(123n, "array")).toThrow(/Invalid value: expected "Array", received "BigInt"/);
	});
	it("Should return error when validate a array", () =>{
		expect(()=> {let x; Validate.check(x, "array");}).toThrow(/Invalid value: expected "Array", received "Undefined"/);
	});
	it("Should return error when validate a array", () =>{
		expect(()=> Validate.check(NaN, "array")).toThrow(/Invalid value: expected "Array", received "NaN"/);
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
		expect(()=> Validate.check(123, "object")).toThrow(/Invalid value: expected "Object", received "Number"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check("123", "object")).toThrow(/Invalid value: expected "Object", received "String"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(true, "object")).toThrow(/Invalid value: expected "Object", received "Boolean"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(Symbol(), "object")).toThrow(/Invalid value: expected "Object", received "Symbol"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(null, "object")).toThrow(/Invalid value: expected "Object", received "Null"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(Infinity, "object")).toThrow(/Invalid value: expected "Object", received "Infinity"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(-Infinity, "object")).toThrow(/Invalid value: expected "Object", received "-Infinity"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check([], "object")).toThrow(/Invalid value: expected "Object", received "Array"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(123n, "object")).toThrow(/Invalid value: expected "Object", received "BigInt"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> {let x; Validate.check(x, "object");}).toThrow(/Invalid value: expected "Object", received "Undefined"/);
	});
	it("Should return error when validate an object", () =>{
		expect(()=> Validate.check(NaN, "object")).toThrow(/Invalid value: expected "Object", received "NaN"/);
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
		expect(() => Validate.silent("hello")).toThrow(/Invalid value: expected "Boolean", received "String"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(75)).toThrow(/Invalid value: expected "Boolean", received "Number"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(["foo", "bar"])).toThrow(/Invalid value: expected "Boolean", received "Array"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent({})).toThrow(/Invalid value: expected "Boolean", received "Object"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(null)).toThrow(/Invalid value: expected "Boolean", received "Null"/);
	});
	it("Should return error with silent input", () => {
		expect(() => Validate.silent(123n)).toThrow(/Invalid value: expected "Boolean", received "BigInt"/);
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
		expect(() => Validate.checkOptions("other", ["single", "married", "divorced"])).toThrow(/Value "other" was not found on array./);
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions("cat", ["lion", "tiger", "bird"])).toThrow(/Value "cat" was not found on array./);
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions(45, [28, 32, 57])).toThrow(/Value "45" was not found on array./);
	});
	it("Should return not found error", () => {
		expect(() => Validate.checkOptions(18n, [22n, 35n, 40n])).toThrow(/Value "18" was not found on array./);
	});
	
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(null, ["single", "married", "divorced"])).toThrow(/Value received is not a valid value in checkOptions. Please read README.md for usage details./);
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(undefined, ["single", "married", "divorced"])).toThrow(/Value received is not a valid value in checkOptions. Please read README.md for usage details./);
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions([], ["single", "married", "divorced"])).toThrow(/Value received is not a valid value in checkOptions. Please read README.md for usage details./);
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions({}, ["single", "married", "divorced"])).toThrow(/Value received is not a valid value in checkOptions. Please read README.md for usage details./);
	});
	it("Should return invalid input error", () => {
		expect(() => Validate.checkOptions(Symbol("hello"), ["single", "married", "divorced"])).toThrow(/Value received is not a valid value in checkOptions. Please read README.md for usage details./);
	});
	
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", {})).toThrow(/Invalid value. Waiting an array to check the options./);
	});
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", 25)).toThrow(/Invalid value. Waiting an array to check the options./);
	});
	it("Should return input error", () => {
		expect(() => Validate.checkOptions("hello", "foo")).toThrow(/Invalid value. Waiting an array to check the options./);
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
		expect(() => Validate.checkRange(77, {from: 18, to: 65})).toThrow(/The value "77" is outside range values./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange("77", {from: 18, to: 65})).toThrow(/Value received is not a valid value in checkRange. This method accept only numbers./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange({}, {from: 18, to: 65})).toThrow(/Value received is not a valid value in checkRange. This method accept only numbers./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange([], {from: 18, to: 65})).toThrow(/Value received is not a valid value in checkRange. This method accept only numbers./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, "")).toThrow(/Invalid value on checkRange. Waiting an object with "from" and "to" to be checked./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, 42)).toThrow(/Invalid value on checkRange. Waiting an object with "from" and "to" to be checked./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {to: 56})).toThrow(/The key "from" was not found in object./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: 35})).toThrow(/The key "to" was not found in object./);
	});
	
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: "16", to: 56})).toThrow(/Value received is not a valid value in checkRange. This method accept only numbers./);
	});
	it("Should to throw", () => {
		expect(() => Validate.checkRange(21, {from: 18, to: "27"})).toThrow(/Value received is not a valid value in checkRange. This method accept only numbers./);
	});
})
