/**
 * Copyright 2025 Manoel Fernandes
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Validate{
	#silent = true;
	#logMessages = [];
	#maxSize = 10;
	
	
	// Silent Control
	silent(mode){
		if(typeof mode !== "boolean") this.#throwHandler("silent", "silent-boolean");
		this.#silent = mode
	}
	
	isSilent(){
		return this.#silent;
	}
	
	// Error messages, throw and log manager
	#errorMessage(target, code, expected, received){
		let message;
		
		let stringID = {
			"input-check" : 100,
			"invalid-check" : 101,
			"invalid-option" : 102,
			"array-option" : 103,
			"object-range" : 105,
			"from-missing" : 106,
			"to-missing" : 107,
			"number-from" : 108,
			"number-to" : 109,
			"silent-boolean" : 110,
			"min-value" : 111,
			"check-fail" : 200,
			"option-fail" : 201,
			"range-fail" : 202,
			"range-type" : 203			
		}
		
		const errorCodes = {
			100 : `Error: (${target}) Missing data type.`,
			101 : `Error: (${target}) Invalid data type. See the docs.`,
			102 : `Error: (${target}) Invalid value. See the docs.`,
			103 : `Error: (${target}) Expected an array.`,
			105 : `Error: (${target}) Expected an object with "from" and "to".`,
			106 : `Error: (${target}) Key "from" is missing.`,
			107 : `Error: (${target}) Key "to" is missing.`,
			108 : `Error: (${target}) "from" must be a number.`,
			109 : `Error: (${target}) "to" must be a number.`,
			110 : `Error: (${target}) Expected a boolean.`,
			111 : `Error: (${target}) Must be a number greater than or equal to 1.`,
			200 : `Check failed: (${target}) Type mismatch. Expected "${expected}", got "${received}".`,
			201 : `Check failed: (${target}) Value "${expected}" not found.`,
			202 : `Check failed: (${target}) Value "${expected}" is out of range.`,
			203 : `Check failed: (${target}) Only "number" or "bigint" allowed.`,
		}
		message = errorCodes[stringID[code]];
		return message;
	}
	
	#logError(target, type, expected, received){
		let receivedType;
		let message;
		const getType = this.#identifyType(received);
		getType !== false ? (receivedType = getType) : (receivedType = (typeof received).charAt(0).toUpperCase() + (typeof received).slice(1));
		message = this.#errorMessage(target, type, expected, receivedType);
		message = `${message} - ${new Date().toISOString()}`
		if(this.#logMessages.length >= this.#maxSize){
			for(let i = this.#logMessages.length; i >= this.#maxSize; i--){
				this.#logMessages.shift();
			}
		}
		this.#logMessages.push(message);
	}
	
	#errorHandler(target, code, expected, received){
		this.#logError(target, code, expected, received);
		if(this.#silent === true) return false;
		this.#showErrorMessage(target, code, expected, received);
	}
	#throwHandler(target, code, expected, received){
		this.#logError(target, code, expected, received);
		this.#showErrorMessage(target, code, expected, received);
	}
	
	#showErrorMessage(target, type, expected, received){
		let receivedType
		const getType = this.#identifyType(received);
		getType !== false ? (receivedType = getType) : (receivedType = (typeof received).charAt(0).toUpperCase() + (typeof received).slice(1));
		throw new Error(this.#errorMessage(target, type, expected, receivedType));
	}
	
	// Checking methods
	#validateNumber(content){
		if(typeof content !== "number" || !Number.isFinite(content)) return this.#errorHandler("check", "check-fail", "Number", content);
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string") return this.#errorHandler("check", "check-fail", "String", content);
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean") return this.#errorHandler("check", "check-fail", "Boolean", content);
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint") return this.#errorHandler("check", "check-fail", "BigInt", content);
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined") return this.#errorHandler("check", "check-fail", "Undefined", content);
		return true;
	}
	
	#validateNull(content){
		if(content !== null) return this.#errorHandler("check", "check-fail", "Null", content);
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol")return this.#errorHandler("check", "check-fail", "Symbol", content);
		return true;
	}
	
	#validateArray(content){
		if(!Array.isArray(content)) return this.#errorHandler("check", "check-fail", "Array", content);
		return true;
	}
	
	#validateObject(content){
		if(typeof content !== "object" || content === null || Array.isArray(content)) return this.#errorHandler("check", "check-fail", "Object", content);
		return true;
	}
	
	#validateFunction(content){
		if(typeof content === "function" && /class\s/.test(Function.prototype.toString.call(content))){
			return this.#errorHandler("check", "check-fail", "Function", content);
		}
		if(typeof content !== "function"){
			if(typeof content === "object"){
				if(!content.constructor) return this.#errorHandler("check", "check-fail", "Function", content);
				if(/function Object()/.test(content.constructor.toString())){
					return this.#errorHandler("check", "check-fail", "Function", content);
				}
				if(/class\s/.test(content.constructor.toString()) === true){
					return this.#errorHandler("check", "check-fail", "Function", content);
				}
			}
			return this.#errorHandler("check", "check-fail", "Function", content);
		}
		return true;
	}

	#validateClass(content){
		if(typeof content === "function" && /class\s/.test(Function.prototype.toString.call(content))){
			return true;
		}
		if(typeof content === "object"){
			if(!content.constructor) return this.#errorHandler("check", "check-fail", "Class", content);
			if(/class\s/.test(content.constructor.toString())){
				return true;
			}
		}
		return this.#errorHandler("check", "check-fail", "Class", content);
	}
	
	#validatePositiveInfinity(content){
		if(content !== Infinity){
			return this.#errorHandler("check", "check-fail", "Infinity", content);
		}
		return true;
	}
	
	#validateNegativeInfinity(content){
		if(content !== -Infinity) return this.#errorHandler("check", "check-fail", "-Infinity", content);
		return true;
	}
	#validateNaN(content){
		if(!isNaN(content)) return this.#errorHandler("check", "check-fail", "NaN", content);
		return true;
	}
	#validateDate(content){
		if(content instanceof Date){
			try{
				if(String(content.getTime()).slice(0,10) === String(new Date().getTime()).slice(0,10)) return true;
			}catch{}
		}
		return this.#errorHandler("check", "check-fail", "Date", content);
	}
	#validateRegExp(content){
		if(content instanceof RegExp){
			try{
				if(Array.isArray("validate".match(content))) return true;
			}catch{}
		}
		return this.#errorHandler("check", "check-fail", "RegExp", content);
	}
	#validateMap(content){
		if(content instanceof Map){
			try{
				content.set("test", 1);
				if(content.get("test") === 1) return true;
			}catch{}
		}
		return this.#errorHandler("check", "check-fail", "Map", content);
	}
	#validateSet(content){
		if(content instanceof Set){
			try{
				content.add(1);
				if(content.has(1)) return true;
			}catch{}
		}
		return this.#errorHandler("check", "check-fail", "Set", content);
	}
	
	#validateWeakMap(content){
		if(content instanceof WeakMap){
			try{
				let foo = {};
				content.set(foo, 1);
				if(content.get(foo) === 1) return true;
			}catch{}
		}
		return this.#errorHandler("check", "check-fail", "WeakMap", content);
	}
	
	#validateWeakSet(content){
		try{
			let obj = {};
			content.add(obj);
			if(content.has(obj) === true) return true;
		}catch{}
		return this.#errorHandler("check", "check-fail", "WeakSet", content);
	}
	
	#identifyType(content){
		if(Array.isArray(content)) return "Array";
		if(content === null) return "Null";
		if(content === Infinity) return "Infinity";
		if(content === -Infinity) return "-Infinity";
		if(typeof content === "number" && isNaN(content)) return "NaN";
		if(typeof content === "bigint") return "BigInt";
		
		if(content instanceof Date){
			try{
				const acceptable = 20;
				if(content.getTime() - new Date().getTime() <= acceptable) return "Date";
			}catch{}
		}
		if(content instanceof RegExp){
			try{
				if(Array.isArray("validate".match(content))) return "RegExp";
			}catch{}
		}
		
		if(content instanceof Map){
			try{
				content.set("test",1);
				if(content.get("test") === 1) return "Map";
			}catch{}
		} 
		if(content instanceof WeakMap){
			try{
				let foo = {};
				content.set(foo, 1);
				if(content.get(foo) === 1) return "WeakMap"
			}catch{}
		}
		if(content instanceof Set){
			try{
				content.add(1);
				if(content.has(1)) return "Set";
			}catch{}
		}
		if(content instanceof WeakSet){
			try{
				let obj = {};
				content.add(obj);
				if(content.has(obj) === true) return "WeakSet"
			}catch{}
		}
		
		if(content instanceof Promise) return "Promise";
		
		if(content instanceof Error && / Error\(/.test(content.constructor.toString())) return "Error";
		if(content instanceof Error && / TypeError\(/.test(content.constructor.toString())) return "TypeError";
		if(content instanceof Error && / URIError\(/.test(content.constructor.toString())) return "URIError";
		if(content instanceof Error && / SyntaxError\(/.test(content.constructor.toString())) return "SyntaxError";
		if(content instanceof Error && / ReferenceError\(/.test(content.constructor.toString())) return "ReferenceError";
		if(content instanceof Error && / RangeError\(/.test(content.constructor.toString())) return "RangeError";
		if(content instanceof Error && / EvalError\(/.test(content.constructor.toString())) return "EvalError";
		
		if(typeof content === "function"){
			if(/class\s/.test(Function.prototype.toString.call(content))) return "Class";
			if(/^\(/.test(content.toString())) return "Function [arrow]";
			if(/function Object()/.test(content.constructor.toString())) return "Function [arrow]";
			if(/function AsyncFunction()/.test(content.constructor.toString()) && /^async ?\(/.test(Function.prototype.toString.call(content))) return "Function [async arrow]";
			if(/function AsyncFunction()/.test(content.constructor.toString())) return "Function [async]";
			if(!content.prototype) return "Function [arrow]";
			return "Function";
		}
		if(typeof content === "object"){
			if(!content.constructor) return "Object [null]";
			if(/^function Object()/.test(content.constructor.toString())) return "Object";
			if(/class\s/.test(content.constructor.toString())){
				return `Class [instance of ${this.#formatInstance(content, "class")}]`;
			}
			if(/function\s/.test(Function.prototype.toString(content))){
				let isNotReal = ["Date", "RegExp", "Map", "Set", "WeakMap", "WeakSet"];
				let isThatReal = this.#formatInstance(content, "function");
				if(isNotReal.includes(isThatReal)) return `Fake [${this.#formatInstance(content, "function")}]`;
				return `Function [instance of ${this.#formatInstance(content, "function")}]`;
			}
		}
		
		return false;
	}
	
	#formatInstance(content, type){
		let funObj = content.constructor.toString();
		const start = funObj.indexOf(" ");
		let end;
		if(type === "class"){
			end = funObj.indexOf("{");
		}
		if(type === "function"){
			end = funObj.indexOf("(");
		}
		const funcName = funObj.slice(start, end).trim();
		return funcName;
	}
	
	check(content, type){
		if(arguments.length < 2) this.#throwHandler("check", "input-check");
		let checked;
		const getType = type.toLowerCase();
		const validInput = ["number", "string", "boolean", "bigint", "undefined", "null", "symbol", "array", "object",
		"infinity", "-infinity", "class", "function", "nan", "date", "regexp", "map", "set", "weakmap", "weakset"];
		if(!validInput.includes(getType)) this.#throwHandler("check", "invalid-check");
		
		switch(getType){
			case "number":
			checked = this.#validateNumber(content);
			break;
			case "string":
			checked = this.#validateString(content);
			break;
			case "boolean":
			checked = this.#validateBoolean(content);
			break;
			case "bigint":
			checked = this.#validateBigInt(content);
			break;
			case "undefined":
			checked = this.#validateUndefined(content);
			break;
			case "null":
			checked = this.#validateNull(content);
			break;
			case "symbol":
			checked = this.#validateSymbol(content);
			break;
			case "array":
			checked = this.#validateArray(content);
			break;
			case "object":
			checked = this.#validateObject(content);
			break;
			case "function":
			checked = this.#validateFunction(content);
			break;
			case "class":
			checked = this.#validateClass(content);
			break;
			case "infinity":
			checked = this.#validatePositiveInfinity(content);
			break;
			case "-infinity":
			checked = this.#validateNegativeInfinity(content);
			break;
			case "nan":
			checked = this.#validateNaN(content);
			break;
			case "date":
			checked = this.#validateDate(content);
			break;
			case "regexp":
			checked = this.#validateRegExp(content);
			break;
			case "map":
			checked = this.#validateMap(content);
			break;
			case "set":
			checked = this.#validateSet(content);
			break;
			case "weakmap":
			checked = this.#validateWeakMap(content);
			break;
			case "weakset":
			checked = this.#validateWeakSet(content);
			break;
		}
		return checked;
	}
	
	checkOptions(value, content){
		const validInput = ["string", "number", "bigint", "boolean", "Infinity", "-Infinity"];
		
		if(!validInput.includes(typeof value) && !validInput.includes(value)) this.#throwHandler("checkOptions", "invalid-option");
		if(typeof value === "number" && isNaN(value)) this.#throwHandler("checkOptions", "invalid-option");
		if(!Array.isArray(content)) this.#throwHandler("checkOptions", "array-option");
		if(!content.includes(value)) return this.#errorHandler("checkOptions", "option-fail", value);
		return true;
	}
	
	#isInvalidNumber(content){
		if(typeof content !== "bigint" && typeof content !== "number" || typeof content === "number" && isNaN(content)) return true;
		return false;
	}
	
	checkRange(value, range){
		if(typeof range !== "object") this.#throwHandler("checkRange", "object-range");
		if(!Object.keys(range).includes("from")) this.#throwHandler("checkRange", "from-missing");
		if(!Object.keys(range).includes("to")) this.#throwHandler("checkRange", "to-missing");
		if(this.#isInvalidNumber(range.from)) this.#throwHandler("checkRange", "number-from");
		if(this.#isInvalidNumber(range.to)) this.#throwHandler("checkRange", "number-to");
		if(this.#isInvalidNumber(value)) return this.#errorHandler("checkRange", "range-type");
		if(value < range.from || value > range.to) return this.#errorHandler("checkRange", "range-fail", value);
		return true;
	}
	
	// Logging errors
	getLastError(){
		return this.#logMessages[this.#logMessages.length - 1];
	}
	
	maxErrorSize(size){
		if(this.#isInvalidNumber(size)) this.#throwHandler("maxErrorSize", "min-value");
		if(size < 1) this.#throwHandler("maxErrorSize", "min-value");
		this.#maxSize = size;
	}
	
	getErrors(){
		return this.#logMessages;
	}
	
	getType(input){
		let type;
		let checkType = this.#identifyType(input);
		(checkType !== false) ? type = checkType : type = typeof input;
		type = type.toLowerCase();
		return type;
	}
}
const validate = new Validate();
export { Validate }
export default validate;
