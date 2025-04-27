/*
 * author: Manoel Fernandes
 * version: 1.0
 * license: MIT
 * */
class Validate{
	
	#validateNumber(content){
		if(typeof content === "number" && isNaN(content)){
			throw new Error(`Invalid value: expected a "number", received invalid ${typeof content} "NaN"`);
		}
		if(content === Infinity || content === -Infinity){
			throw new Error(`Invalid value: expected a "number", received invalid number "${content}"`);
		}
		if(typeof content !== "number"){
			throw new Error(`Invalid value: expected a "number", received "${typeof content}"`);
		}
		return true;
	}
	
	#validateString(content){
		if(typeof content !== "string"){
			throw new Error(`Invalid value: expected a "string", received "${typeof content}"`);
		}
		return true;
	}
	
	#validateBoolean(content){
		if(typeof content !== "boolean"){
			throw new Error(`Invalid value: expected a "boolean", received "${typeof content}"`);
		}
		return true;
	}
	
	#validateBigInt(content){
		if(typeof content !== "bigint"){
			throw new Error(`Invalid value: expected a "bigint", received "${typeof content}"`)
		}
		return true;
	}
	
	#validateUndefined(content){
		if(typeof content !== "undefined"){
			throw new Error(`Invalid value: expected "undefined", received "${typeof content}"`);
		}
		return true;
	}
	
	#validateNull(content){
		if(content !== null){
			throw new Error(`Invalid value: expected "null", received "${typeof content}"`);
		}
		return true;
	}
	
	#validateSymbol(content){
		if(typeof content !== "symbol"){
			throw new Error(`Invalid value: expected a "symbol", received "${typeof content}"`);
		}
		return true;
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
		
		if(getType === "number"){
			checked = this.#validateNumber(content);
			return checked;
		}
		if(getType === "string"){
			checked = this.#validateString(content);
			return checked;
		}
		if(getType === "boolean"){
			checked = this.#validateBoolean(content);
			return checked;
		}
		if(getType === "bigint"){
			checked = this.#validateBigInt(content);
			return checked;
		}
		if(getType === "undefined"){
			checked = this.#validateUndefined(content);
			return checked;
		}
		if(getType === "null"){
			checked = this.#validateNull(content);
			return checked;
		}
		if(getType === "symbol"){
			checked = this.#validateSymbol(content);
			return checked;
		}
	}
}


export default new Validate();

