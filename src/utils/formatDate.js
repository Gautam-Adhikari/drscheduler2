export const formatDate = (date, config) => {
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const options = config ? config : defaultOptions;

    // Split the input date string assuming it's in the format DD-MM-YYYY
    const [day, month, year] = date.split('-');

    // Create a new Date object using the parsed components
    const formattedDate = new Date(`${year}-${month}-${day}`);

    return formattedDate.toLocaleDateString('en-US', options);
};
