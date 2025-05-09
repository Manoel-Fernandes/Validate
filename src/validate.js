/*
 * author: Manoel Fernandes
 * version: 1.2.0
 * license: MIT
 * */
class Validate{
	#silent = true;
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "number", "NaN");
		}
		if(content === Infinity || content === -Infinity){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "number", content);
		}
		if(typeof content !== "number"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "number", typeof content);
		}
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "string", typeof content);
		}
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "boolean", typeof content);
		}
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "bigint", typeof content);
		}
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "undefined", typeof content);
		}
		return true;
	}
	
	#validateNull(content){
		if(content !== null){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "null", typeof content);
		}
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol"){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "symbol", typeof content);
		}
		return true;
	}
	
	#validateArray(content){
		if(!Array.isArray(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "array", typeof content);
		}
		return true;
	}
	
	#validateObject(content){
		if(typeof content !== "object" || content === null || Array.isArray(content)){
			if(this.#silent === true) return false;
			this.#errorMessage("error", "object", typeof content);
		}
		return true;
	}
	
	#errorMessage(type, expected, received){
		if(type === "input"){
			throw new Error(`Please, inform a type to be checked`);
		}
		if(type === "invalid"){
			throw new Error(`Invalid type value, please read README.md for usage details.`);
		}
		if(type === "error"){
			throw new Error(`Invalid value: expected "${expected}", received "${received}"`);
		}
	}
	
	silent(mode){
		if(this.#validateBoolean(mode)){
			this.#silent = mode
		}else{
			this.#errorMessage("error", "boolean", typeof mode);
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
}

export default new Validate();
