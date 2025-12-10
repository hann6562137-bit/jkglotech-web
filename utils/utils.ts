
// ISO date string to 'YY. MM. DD' format
export function formatDateToYYMMDD(isoDateString: string): string {
    const date = new Date(isoDateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}. ${month}. ${day}`;
}

// ISO date string to 'YYYY. MM. DD' format
export function formatDateToYYYYMMDD(isoDateString: string): string {
    const date = new Date(isoDateString);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}. ${month}. ${day}`;
}