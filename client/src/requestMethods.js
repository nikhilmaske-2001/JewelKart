import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzc0NGFmYWFhMGNlNGVmNjVhMTE3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjgyNzA5OCwiZXhwIjoxNjU3MDg2Mjk4fQ.nI0IJS77w-naznt0JmfdZQ8rhDj-jQwJdiKQEaI_2Tw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});