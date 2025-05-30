/*
 * author: Manoel Fernandes
 * version: 1.4.0
 * license: MIT
 * */
class Validate{
	#silent = true;
	#logMessages = [];
	#maxSize = 10;
	
	silent(mode){
		if(typeof mode !== "boolean") this.#throwHandler("silent", 110);
		this.#silent = mode
	}
	isSilent(){
		return this.#silent;
	}
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)) return this.#errorHandler("check", 200, "Number", content);
		if(content === Infinity || content === -Infinity) return this.#errorHandler("check", 200, "Number", content);
		if(typeof content !== "number") return this.#errorHandler("check", 200, "Number", content);
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string") return this.#errorHandler("check", 200, "String", content);
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean") return this.#errorHandler("check", 200, "Boolean", content);
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint") return this.#errorHandler("check", 200, "BigInt", content);
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined") return this.#errorHandler("check", 200, "Undefined", content);
		return true;
	}
	
	#validateNull(content){
		if(content !== null) return this.#errorHandler("check", 200, "Null", content);
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol") return this.#errorHandler("check", 200, "Symbol", content);
		return true;
	}
	
	#validateArray(content){
		if(!Array.isArray(content)) return this.#errorHandler("check", 200, "Array", content);
		return true;
	}
	
	#validateObject(content){
		if(typeof content !== "object" || content === null || Array.isArray(content)) return this.#errorHandler("check", 200, "Object", content);
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
	
	#errorMessage(target, code, expected, received){
		let message;
		const inputError = {
			100 : `Error: (${target}) Missing data type.`,
			101 : `Error: (${target}) Invalid data type. See the docs.`,
			102 : `Error: (${target}) Invalid value. See the docs.`,
			103 : `Error: (${target}) Expected an array.`,
			104 : `Error: (${target}) Only "number" or "bigint" allowed.`,
			105 : `Error: (${target}) Expected an object with "from" and "to".`,
			106 : `Error: (${target}) Key "from" is missing.`,
			107 : `Error: (${target}) Key "to" is missing.`,
			108 : `Error: (${target}) "from" must be a number.`,
			109 : `Error: (${target}) "to" must be a number.`,
			110 : `Error: (${target}) Expected a boolean.`,
			111 : `Error: (${target}) Must be a number greater than or equal to 1.`
		}
		const validationFail = {
			200 : `Check failed: (${target}) Type mismatch. Expected "${expected}", got "${received}".`,
			201 : `Check failed: (${target}) Value "${expected}" not found.`,
			202 : `Check failed: (${target}) Value "${expected}" is out of range.`
		}
		code < 200 ? message = inputError[code] : message = validationFail[code];
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
			this.#logMessages.shift();
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
	
	getLastError(){
		return this.#logMessages[this.#logMessages.length - 1];
	}
	
	maxErrorSize(size){
		if(this.#isInvalidNumber(size)) return this.#throwHandler("maxErrorSize", 111);
		if(size < 1) return this.#throwHandler("maxErrorSize", 111);
		this.#maxSize = size;
	}
	
	getErrors(){
		return this.#logMessages;
	}
	
	#showErrorMessage(target, type, expected, received){
		let receivedType
		const getType = this.#identifyType(received);
		getType !== false ? (receivedType = getType) : (receivedType = (typeof received).charAt(0).toUpperCase() + (typeof received).slice(1));
		throw new Error(this.#errorMessage(target, type, expected, receivedType));
	}
	
	check(content, type){
		if(type === null || type === undefined) this.#throwHandler("check", 100);
		let checked;
		const getType = type.toLowerCase();
		const validInput = ["number", "string", "boolean", "bigint", "undefined", "null", "symbol", "array", "object"];
		if(!validInput.includes(getType)) this.#throwHandler("check", 101);
		
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
		
		if(!validInput.includes(typeof value) && !validInput.includes(value)) this.#throwHandler("checkOptions", 102);
		if(typeof value === "number" && isNaN(value)) this.#throwHandler("checkOptions", 102);
		if(!Array.isArray(content)) this.#throwHandler("checkOptions", 103);
		if(!content.includes(value)) return this.#errorHandler("checkOptions", 201, value);
		return true;
	}
	
	#isInvalidNumber(content){
		if(typeof content !== "bigint" && typeof content !== "number" || typeof content === "number" && isNaN(content)) return true;
		return false;
	}
	
	checkRange(value, range){
		if(this.#isInvalidNumber(value)) return this.#throwHandler("checkRange", 104);
		if(typeof range !== "object") return this.#throwHandler("checkRange", 105);
		if(!Object.keys(range).includes("from")) return this.#throwHandler("checkRange", 106);
		if(!Object.keys(range).includes("to")) return this.#throwHandler("checkRange", 107);
		if(this.#isInvalidNumber(range.from)) return this.#throwHandler("checkRange", 108);
		if(this.#isInvalidNumber(range.to)) return this.#throwHandler("checkRange", 109);
		if(value < range.from || value > range.to) return this.#errorHandler("checkRange", 202, value);
		return true;
	}
	
	getType(input){
		let type;
		let checkType = this.#identifyType(input);
		if(checkType !== false){
			type = checkType;
		}else{
			type = (typeof input).charAt(0).toUpperCase() + (typeof input).slice(1);
		}
		return type;
	}
}

export default Validate;
