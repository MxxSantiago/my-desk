export const arrayPropertiesFilter = (array, valueToSort) => {
    const arrayToFilter = [...array];

    function dynamicSort(property) {
        let sortOrder = 1;

        return function (a, b) {
            if (sortOrder === -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        };
    }

    let sortedArray = arrayToFilter.sort(dynamicSort(valueToSort));
    return sortedArray;
};
