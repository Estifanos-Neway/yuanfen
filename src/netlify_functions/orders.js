import axios from "axios";
import escapeHtml from 'escape-html';

const BOT_TOKEN = process.env.BOT_TOKEN;
const ORDER_RECIVER_ID = process.env.ORDER_RECIVER_ID;

const baseUrl = `https://api.telegram.org/bot${BOT_TOKEN}`

function formatOrderMessage(contact, description) {
    return `New Order\n-------\n<b><i>Contact</i></b>: ${contact}\n<b><i>Description</i></b>: ${description}`;
}

async function sendMessage({ chatId = ORDER_RECIVER_ID, text }) {
    const url = `${baseUrl}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`;
    await axios.get(url, {
        validateStatus: status => status === 200
    });
}

function validateParams(params) {
    for (const param of params) {
        if (param === undefined ||
            param.trim().length < 1) {
            return false;
        }
    }
    return true;
}

function sanitize(stringArray) {
    return stringArray.map(string => {
        let sanitized = string.replace(/\n/g, "\\n");
        sanitized = escapeHtml(sanitized);
        sanitized = encodeURIComponent(sanitized)
        return sanitized;
    });
}

exports.handler = async function (event, context, callback) {
    if (event.httpMethod === "POST") {
        let { contact, description } = JSON.parse(event.body);
        const validParams = validateParams([contact, description]);
        if (!validParams) {
            callback(null, {
                statusCode: 400,
                body: JSON.stringify({ message: "INVALID_PARAMS" })
            })
        } else {
            [contact, description] = sanitize([contact, description]);
            const text = formatOrderMessage(contact, description);
            try {
                await sendMessage({ text });
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({ message: "ORDER_SENT" })
                });
            } catch (error) {
                callback(null, {
                    statusCode: 500,
                    body: JSON.stringify({ message: "INTERNAL_ERROR", description: error.toString })
                })
                console.log("!ERROR!")
                console.log("-------------------------------------------")
                console.error(error);
                console.log("-------------------------------------------")
            }
        }
    } else {
        callback(null, {
            statusCode: 405,
            body: JSON.stringify({ message: "METHOD_NOT_ALLOWED" })
        })
    }
}