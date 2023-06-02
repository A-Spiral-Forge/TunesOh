/**
 * Format title to camel case
 * @param title String to format
 * @returns Formatted string
 */
export const formatTitleToCamelCase = (title: string) : string => {
    return title
        .split('_')
        .map((item: string) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(' ');
};