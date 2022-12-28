export const formatTitleToCamelCase = (title: string) => {
    return title
        .split('_')
        .map((item: string) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(' ');
};