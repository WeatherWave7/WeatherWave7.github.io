/** @format */
/**
 * Convert Kelvin to Celsius
 * @param tempInKelvin
 * @returns
 */
export function convertKelvinToCelsius(tempInKelvin: number): number {
	const tempInCelsius = tempInKelvin - 273.15;
	return Math.floor(tempInCelsius); // Removes decimal part and keeps integer part
  }