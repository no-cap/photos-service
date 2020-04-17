import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 200 },
    ],
};

export default function () {
    const res = http.get('http://localhost:3004/photosForRestaurant');
    check(res, {
        'status was 200': (r) => r.status === 200,
        'transaction time OK': (r) => r.timings.duration < 2000,
    });
    sleep(1);
};