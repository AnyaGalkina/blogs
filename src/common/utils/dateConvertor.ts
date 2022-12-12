// // The original date and time string
// const datetimeString = '2022-11-28T11:47:13.685Z';

export const formattedDate = (datetimeString: string) => {

    // Parse the date and time string using the Date constructor
    const datetime = new Date(datetimeString);

    // Get the DD/MM/YYYY from the date object
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1; // Month is 0-indexed, so add 1
    const day = datetime.getDate();

    // Format the date as DD/MM/YYYY
    return `${day}/${month}/${year}`;
}


export const formattedDateWithHours = (datetimeString: string) => {
    const datetime = new Date(datetimeString);

    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1; // Month is 0-indexed, so add 1
    const day = datetime.getDate();
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    const seconds = datetime.getSeconds();

    return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;

}

