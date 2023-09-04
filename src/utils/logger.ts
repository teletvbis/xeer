import { green, blue, yellow, red, bold, blackBright } from "colorette";

const webhookURL = "https://discord.com/api/webhooks/1136110444092858428/DzaOSbH4D4puUczys1hKWYd60OVEuyjBbtPWRSWnjgfy96WrpLiyXpVwfeh2MzHM0ffg"

export function getTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

export function info(msg: any) {
    const time = getTime();
    console.log(` ${blue(time)} ${blackBright("|")} ${blue(bold("INFO"))} ${blackBright(">")}`, msg);
}

export function success(msg: any) {
    const time = getTime();
    console.log(` ${green(time)} ${blackBright("|")} ${green(bold("INFO"))} ${blackBright(">")}`, msg);
}

export function warn(msg: any) {
    const time = getTime();
    console.log(` ${yellow(time)} ${blackBright("|")} ${yellow(bold("WARN"))} ${blackBright(">")}`, msg);
}

export function error(msg: any) {
    const time = getTime();
    console.log(` ${red(time)} ${blackBright("|")} ${red(bold("ERROR"))} ${blackBright(">")}`, msg);
}