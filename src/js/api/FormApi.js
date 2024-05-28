import { formEndpoints } from "./Endpoints";

function extractValues(data) {
    const values = {};
    Object.keys(data).forEach(field => {
        values[field] = data[field].getValue();
    });

    return values;
}

function preparePayload(requestData) {
    const data = {}
    Object.keys(requestData).forEach(key => {
        data[key] = extractValues(requestData[key]);
    })
    return JSON.stringify(data);
}

function sendForm(formData) {
    return fetch(formEndpoints.SEND, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: preparePayload(formData),
    })
   .then(res => res.ok ? res.json() : Promise.reject("Status code error: " + res.status))
}

export {sendForm};