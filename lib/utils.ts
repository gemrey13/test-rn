import dayjs from "dayjs";

export const formatCurrency = (value:number, currency:string = "USD") => {
    try {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    } catch (e) {
        const formattedValue = value.toFixed(2)
        return `$${formattedValue}`;
    }
};

export const formatSubscriptionDateTime = (value?: string) => {
    if (!value) return "Not provided";
    const parseDate = dayjs(value)
    return parseDate.isValid() ? parseDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string) => {
    if (!value) return "Unknown";
    return value.charAt(0).toUpperCase() + value.slice(1);
}