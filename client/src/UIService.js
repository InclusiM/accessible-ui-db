import axios from "axios";

const url = 'http://137.146.29.181:3011/api/UIscreenshots';
// 'http://localhost:3000/api/UIscreenshots'

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