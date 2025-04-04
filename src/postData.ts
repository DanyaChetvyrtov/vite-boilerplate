import axios from 'axios';

const postData = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
            "username": "DADA_DANIL",
            "password": "password123"
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
};

export default postData;