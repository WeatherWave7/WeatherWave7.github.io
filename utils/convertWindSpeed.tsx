/** @format */
/**
 * Convert wind speed from meters per second to kilometers per hour
 * @param speedInMetersPerSecond
 * @returns
 */

export function convertWindSpeed(speedInMetersPerSecond: number): string {
	const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
	return `${speedInKilometersPerHour.toFixed(0)}km/h`;
  }