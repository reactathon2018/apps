/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            name: "Reactathon",
            description: "Reactathon Event Details",
            startDate: "02-Jul-2018 12:00",
            endDate: "02-Jul-2018 21:00",
            tense: "Current Events"

        },
        {
            id: 2,
            name: "Testathon1",
            description: "Testathon Details",
            startDate: "02-Jun-2018",
            endDate: "05-Jun-2018",
            tense: "Past Events"
        },
        {
            id: 3,
            name: "GOLD",
            description: "null",
            startDate: "02-06-2018",
            endDate: "05-06-2018",
            tense: "Past Events"
        },
        {
            id: 4,
            name: "PLATINUM",
            description: "null",
            startDate: "04-09-2018",
            endDate: "09-09-2018",
            tense: "Future Events"

        },
        {
            id: 5,
            name: "SILVER",
            description: "null",
            startDate: "04-09-2018",
            endDate: "09-09-2018",
            tense: "Future Events"
        },
        {
            id: 6,
            name: "Testathon2",
            description: "Testathon Details",
            startDate: "02-Aug-2018",
            endDate: "05-Aug-2018",
            tense: "Future Events"
        }
    ]
}
