import axios from "axios";

const url = 'http://localhost:3000/api/UIscreenshots';

class UIService {
    static async getUIScreenshots() {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching UI screenshots:', error);
            throw error;
        }
    }
}

export default UIService;