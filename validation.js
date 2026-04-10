noimport express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { body, validationResult } from 'express-validator';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'validation.html'));
});

app.post(
    '/sumbit',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password')
            .isLength({ min: 6, max: 10 })
            .withMessage('Password must be at least 6 characters long'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => `<li>${err.msg}</li>`).join('');
            return res.send(`
                <h2>Validation Errors</h2>
                <ul>${errorMessages}</ul>
            `);
        }
        res.send(`
            <h3>Details submitted successfully</h3>
            <h5>Username: ${req.body.username}, Email: ${req.body.email}</h5>
        `);
    }
);
app.listen(1077);