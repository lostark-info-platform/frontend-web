export function capitalizeFirstLetter(input: string): string {
	if (input.length === 0) {
		return input; // Handle empty strings
	}
	return input[0].toUpperCase() + input.slice(1);
}
