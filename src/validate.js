/*
 * author: Manoel Fernandes
 * version: 1.3.0
 * license: MIT
 * */
class Validate{
	#silent = true;
	#logMessages = [];
	#maxSize = 10;
	
	silent(mode){
		if(!this.#validateBoolean(mode)){
			this.#logError("error", "Boolean", mode);
			this.#showErrorMessage("error", "Boolean", mode);
		}
		this.#silent = mode
	}
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)){
			this.#logError("error", "Number", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Number", content);
		}
		if(content === Infinity || content === -Infinity){
			this.#logError("error", "Number", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Number", content);
		}
		if(typeof content !== "number"){
			this.#logError("error", "Number", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Number", content);
		}
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string"){
			this.#logError("error", "String", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "String", content);
		}
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean"){
			this.#logError("error", "Boolean", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Boolean", content);
		}
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint"){
			this.#logError("error", "BigInt", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "BigInt", content);
		}
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined"){
			this.#logError("error", "Undefined", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Undefined", content);
		}
		return true;
	}
	
	#validateNull(content){
		if(content !== null){
			this.#logError("error", "Null", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Null", content);
		}
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol"){
			this.#logError("error", "Symbol", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Symbol", content);
		}
		return true;
	}
	
	#validateArray(content){
		if(!Array.isArray(content)){
			this.#logError("error", "Array", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Array", content);
		}
		return true;
	}
	
	#validateObject(content){
		if(typeof content !== "object" || content === null || Array.isArray(content)){
			this.#logError("error", "Object", content);
			if(this.#silent === true) return false;
			this.#showErrorMessage("error", "Object", content);
		}
		return true;
	}
	
	#identifyType(content){
		if(Array.isArray(content)) return "Array";
		if(content === null) return "Null";
		if(content === Infinity) return "Infinity";
		if(content === -Infinity) return "-Infinity";
		if(typeof content === "number" && isNaN(content)) return "NaN";
		if(typeof content === "bigint") return "BigInt";
		return false;
	}
	
	#errorMessage(code, expected, received){
		let message;
		const inputError = {
			100 : `Please, inform a type to be checked`,
			101 : `Invalid type value. Please read README.md for usage details.`,
			102 : `Value received is not a valid value in checkOptions. Please read README.md for usage details.`,
			103 : `Invalid value. Waiting an array to check the options.`,
			104 : `Value received is not a valid value in checkRange. This method accept only numbers.`,
			105 : `Invalid value on checkRange. Waiting an object with "from" and "to" to be checked.`,
			106 : `The key "from" was not found in object.`,
			107 : `The key "to" was not found in object.`
		}
		const badValidation = {
			200 : `Invalid value: expected "${expected}", received "${received}"`,
			201 : `Value "${expected}" was not found on array.`,
			202 : `The value "${expected}" is outside range values.`
		}
		code < 200 ? (message = Object.values(inputError)[code - 100]) : (message = Object.values(badValidation)[code - 200]);
		return message;
	}
	
	#logError(type, expected, received){
		let receivedType;
		let message;
		const getType = this.#identifyType(received);
		getType !== false ? (receivedType = getType) : (receivedType = (typeof received).charAt(0).toUpperCase() + (typeof received).slice(1));
		if(type === "input") message = this.#errorMessage(100, expected, receivedType);
		if(type === "invalid") message = this.#errorMessage(101, expected, receivedType);
		if(type === "error") message = this.#errorMessage(200, expected, receivedType);
		if(type === "option") message = this.#errorMessage(201, expected, receivedType);
		if(type === "invalid-option") message = this.#errorMessage(102, expected, receivedType);
		if(type === "array") message = this.#errorMessage(103, expected, receivedType);
		if(type === "range") message = this.#errorMessage(202, expected, receivedType);
		if(type === "invalid-range") message = this.#errorMessage(104, expected, receivedType);
		if(type === "invalid-object") message = this.#errorMessage(105, expected, receivedType);
		if(type === "invalid-from") message = this.#errorMessage(106, expected, receivedType);
		if(type === "invalid-to") message = this.#errorMessage(107, expected, receivedType);
		message = `Error: ${message} - ${new Date().toISOString()}`
		if(this.#logMessages.length >= this.#maxSize){
			this.#logMessages.shift();
		}
		this.#logMessages.push(message);
	}
	
	getLastError(){
		return this.#logMessages[this.#maxSize - 1];
	}
	
	maxErrorSize(size){
		this.#maxSize = size;
	}
	
	getErrors(){
		return this.#logMessages;
	}
	
	#showErrorMessage(type, expected, received){
		let receivedType
		const getType = this.#identifyType(received);
		getType !== false ? (receivedType = getType) : (receivedType = (typeof received).charAt(0).toUpperCase() + (typeof received).slice(1));
		if(type === "input") throw new Error(this.#errorMessage(100, expected, receivedType));
		if(type === "invalid") throw new Error(this.#errorMessage(101, expected, receivedType));
		if(type === "error") throw new Error(this.#errorMessage(200, expected, receivedType));
		if(type === "option") throw new Error(this.#errorMessage(201, expected, receivedType));
		if(type === "invalid-option") throw new Error(this.#errorMessage(102, expected, receivedType));
		if(type === "array") throw new Error(this.#errorMessage(103, expected, receivedType));
		if(type === "range") throw new Error(this.#errorMessage(202, expected, receivedType));
		if(type === "invalid-range") throw new Error(this.#errorMessage(104, expected, receivedType));
		if(type === "invalid-object") throw new Error(this.#errorMessage(105, expected, receivedType));
		if(type === "invalid-from") throw new Error(this.#errorMessage(106, expected, receivedType));
		if(type === "invalid-to") throw new Error(this.#errorMessage(107, expected, receivedType));
	}
	
	check(content, type){
		if(type === null || type === undefined) this.#showErrorMessage("input");
		let checked;
		const getType = type.toLowerCase();
		const validInput = ["number", "string", "boolean", "bigint", "undefined", "null", "symbol", "array", "object"];
		if(!validInput.includes(getType)) this.#showErrorMessage("invalid");
		
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
		}
		return checked;
	}
	
	checkOptions(value, content){
		const validInput = ["string", "number", "bigint", "boolean", "Infinity", "-Infinity"];
		
		if(!validInput.includes(typeof value) && !validInput.includes(value)) this.#showErrorMessage("invalid-option");
		if(typeof value === "number" && isNaN(value)) this.#showErrorMessage("invalid-option");
		if(!Array.isArray(content)) this.#showErrorMessage("array");
		if(!content.includes(value)){
			if(this.#silent === true) return false;
			this.#showErrorMessage("option", value);
		}
		return true;
	}
	
	#isInvalidNumber(content){
		if(typeof content !== "bigint" && typeof content !== "number" || typeof content === "number" && isNaN(content)) return true;
		return false;
	}
	
	checkRange(value, range){
		if(this.#isInvalidNumber(value)) this.#showErrorMessage("invalid-range");
		if(typeof range !== "object") this.#showErrorMessage("invalid-object");
		if(!Object.keys(range).includes("from")) this.#showErrorMessage("invalid-from");
		if(!Object.keys(range).includes("to")) this.#showErrorMessage("invalid-to");
		if(this.#isInvalidNumber(range.from)) this.#showErrorMessage("invalid-range");
		if(this.#isInvalidNumber(range.to)) this.#showErrorMessage("invalid-range");
		if(value < range.from || value > range.to){
			if(this.#silent === true) return false;
			this.#showErrorMessage("range", value);
		}
		return true;
	}
}

export default new Validate();
