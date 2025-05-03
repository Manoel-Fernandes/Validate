/*
 * author: Manoel Fernandes
 * version: 1.1.0
 * license: MIT
 * */
class Validate{
	#silent = true;
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)){
			if(this.#silent == true) return false;
			this.#errorMessage("number", "NaN");
		}
		if(content === Infinity || content === -Infinity){
			if(this.#silent == true) return false;
			this.#errorMessage("number", content);
		}
		if(typeof content !== "number"){
			if(this.#silent == true) return false;
			this.#errorMessage("number", typeof content);
		}
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string"){
			if(this.#silent == true) return false;
			this.#errorMessage("string", typeof content);
		}
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean"){
			if(this.#silent == true) return false;
			this.#errorMessage("boolean", typeof content);
		}
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint"){
			if(this.#silent == true) return false;
			this.#errorMessage("bigint", typeof content);
		}
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined"){
			if(this.#silent == true) return false;
			this.#errorMessage("undefined", typeof content);
		}
		return true;
	}
	
	#validateNull(content){
		if(content !== null){
			if(this.#silent == true) return false;
			this.#errorMessage("null", typeof content);
		}
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol"){
			if(this.#silent == true) return false;
			this.#errorMessage("symbol", typeof content);
		}
		return true;
	}
	
	#errorMessage(expected, received){
		throw new Error(`Invalid value: expected a "${expected}", received "${received}"`)
	}
	
	silent(mode){
		this.#silent = mode
	}
	
	check(content, type){
		if(type === null || type === undefined){
			throw new Error(`Please, inform a type to be checked`);
		}
		
		let checked;
		const getType = type.toLowerCase();
		
		if(getType !== "number" && getType !== "string" && getType !== "boolean" && getType !== "bigint" && getType !== "undefined" && getType !== "null" && getType !== "symbol"){
			throw new Error(`Invalid type value, please read README.md for usage details.`);
		}
		
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
		}
		return checked;
	}
}


export default new Validate();

