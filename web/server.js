// Import necessary modules
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Define an array of allowed IP addresses
    const allowedIPs = ['192.168.0.13', '192.168.56.1', '172.23.80.1'];

    // Middleware for IP-based access control
    server.use((req, res, next) => {
        const clientIP = req.ip; // Get the client's IP address

        if (allowedIPs.includes(clientIP)) {
            next(); // Allow access
        } else {
            res.status(403).send('Forbidden'); // Deny access
        }
    });

    // Serve static files from the "public" directory
    server.use(express.static('public'));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
