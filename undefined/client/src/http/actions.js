export const HTTP_REQUEST = "http_request";

export function sendingRequest(id) {
    return {
        type: HTTP_REQUEST,
        id,
        data: { loading: true }
    }
}

export function receivedResponse(id, error) {
    return {
        type: HTTP_REQUEST,
        id,
        data: { loading: false, error }
    }
}