/*
 * author: Manoel Fernandes
 * version: 1.3.0
 * license: MIT
 * */
class Validate{
	#silent = true;
	
	silent(mode){
		if(!this.#validateBoolean(mode)){
			this.#errorMessage("error", "Boolean", mode);
		}
		this.#silent = mode
	}
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Number", content);
		}
		if(content === Infinity || content === -Infinity){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Number", content);
		}
		if(typeof content !== "number"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Number", content);
		}
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "String", content);
		}
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Boolean", content);
		}
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "BigInt", content);
		}
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Undefined", content);
		}
		return true;
	}
	
	#validateNull(content){
		if(content !== null){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Null", content);
		}
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Symbol", content);
		}
		return true;
	}
	
	#validateArray(content){
		if(!Array.isArray(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Array", content);
		}
		return true;
	}
	
	#validateObject(content){
		if(typeof content !== "object" || content === null || Array.isArray(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "Object", content);
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
	
	#errorMessage(type, expected, received){
		const getType = this.#identifyType(received);
		if(type === "input"){
			throw new Error(`Please, inform a type to be checked`);
		}
		if(type === "invalid"){
			throw new Error(`Invalid type value. Please read README.md for usage details.`);
		}
		if(type === "error"){
			if(getType !== false){
				throw new Error(`Invalid value: expected "${expected}", received "${getType}"`);
			}
			throw new Error(`Invalid value: expected "${expected}", received "${(typeof received).charAt(0).toUpperCase() + (typeof received).slice(1)}"`);
		}
		if(type === "option"){
			throw new Error(`Value "${expected}" was not found on array.`);
		}
		if(type === "invalid-option"){
			throw new Error(`Value received is not a valid value in checkOptions. Please read README.md for usage details.`);
		}
		if(type === "array"){
			throw new Error(`Invalid value. Waiting an array to check the options.`);
		}
		if(type === "range"){
			throw new Error(`The value "${expected}" is outside range values.`);
		}
		if(type === "invalid-range"){
			throw new Error(`Value received is not a valid value in checkRange. This method accept only numbers.`);
		}
		if(type === "invalid-object"){
			throw new Error(`Invalid value on checkRange. Waiting an object with "from" and "to" to be checked.`);
		}
		if(type === "invalid-from"){
			throw new Error(`The key "from" was not found in object.`);
		}
		if(type === "invalid-to"){
			throw new Error(`The key "to" was not found in object.`);
		}
	}
	
	check(content, type){
		if(type === null || type === undefined){
			this.#errorMessage("input");
		}
		
		let checked;
		const getType = type.toLowerCase();
		
		const validInput = ["number", "string", "boolean", "bigint", "undefined", "null", "symbol", "array", "object"];
		
		if(!validInput.includes(getType)){
			this.#errorMessage("invalid");
		};
		
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
		
		if(!validInput.includes(typeof value) && !validInput.includes(value)){
			this.#errorMessage("invalid-option");
		}
		if(typeof value === "number" && isNaN(value)){
			this.#errorMessage("invalid-option");
		}
		if(!Array.isArray(content)){
			this.#errorMessage("array");
		}
		if(!content.includes(value)){
			if(this.#silent === true) return false;
			this.#errorMessage("option", value);
		}
		return true;
	}
	
	#isInvalidNumber(content){
		if(typeof content !== "bigint" && typeof content !== "number" || typeof content === "number" && isNaN(content)){
			return true
		}
		return false;
	}
	
	checkRange(value, range){
		if(this.#isInvalidNumber(value)){
			this.#errorMessage("invalid-range");
		}
		if(typeof range !== "object"){
			this.#errorMessage("invalid-object");
		}
		if(!Object.keys(range).includes("from")){
			this.#errorMessage("invalid-from");
		}
		if(!Object.keys(range).includes("to")){
			this.#errorMessage("invalid-to");
		}
		if(this.#isInvalidNumber(range.from)){
			this.#errorMessage("invalid-range");
		}
		if(this.#isInvalidNumber(range.to)){
			this.#errorMessage("invalid-range");
		}
		if(value < range.from || value > range.to){
			if(this.#silent === true) return false;
			this.#errorMessage("range", value);
		}
		return true;
	}
}

export default new Validate();
