export class Validate{
	check(content: any, type: string): boolean;
	checkOptions(value: any, content: any[]): boolean;
	checkRange(value: number | bigint, range: { from: number | bigint, to: number | bigint }): boolean;
	silent(value: boolean): void;
	isSilent(): boolean;
	getType(input: any): string;
	getErrors(): string[];
	getLastError(): string;
}

export default new Validate();
