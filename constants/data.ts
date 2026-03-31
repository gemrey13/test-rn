import { icons } from "./icons"


export const tabs: AppTab[] = [
    { name: "index", title: "Home", icon: icons.home},
    { name: "subscriptions", title: "Subscriptions", icon: icons.wallet},
    { name: "insights", title: "Insights", icon: icons.activity},
    { name: "settings", title: "Settings", icon: icons.settings},
]

export const HOME_USER = {
    name: "Evelyn Parker"
}

export const HOME_BALANCE = {
    amount: 2486.43,
    nextRenewalDate: "2025-03-20T10:00:00.000Z"
}

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
    {
        id: "Figma",
        icon: icons.figma,
        name: "Figma",
        price: 15.0,
        currency: "USD",
        daysLeft: 6,
    },
    {
        id: "Spotify",
        icon: icons.spotify,
        name: "Spotify Premium",
        price: 10.99,
        currency: "USD",
        daysLeft: 2,
    },
    {
        id: "Notion",
        icon: icons.notion,
        name: "Notion Plus",
        price: 10.0,
        currency: "USD",
        daysLeft: 12,
    }
]

export const HOME_SUBSCRIPTIONS: Subscription[] = [
    {
        id: "adobe-creative-cloud",
        icon: icons.adobe,
        name: "Adobe Creative Cloud",
        plan: "Teams Plan",
        category: "Design",
        paymentMethod: "Visa ending in 8530",
        status: "active",
        startDate: "2025-03-20T10:00:00.000Z",
        price: 77.49,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-20T10:00:00.000Z",
    },
    {
        id: "canva-pro",
        icon: icons.canva,
        name: "Canva",
        plan: "Pro Plan",
        category: "Design",
        paymentMethod: "Mastercard ending in 1234",
        status: "active",
        startDate: "2025-05-10T09:00:00.000Z",
        price: 14.99,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-04-10T09:00:00.000Z",
    },
    {
        id: "github-copilot",
        icon: icons.github,
        name: "GitHub",
        plan: "Copilot Individual",
        category: "Developer Tools",
        paymentMethod: "Visa ending in 8530",
        status: "active",
        startDate: "2025-01-15T15:30:00.000Z",
        price: 10.00,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-04-15T15:30:00.000Z",
    }
]