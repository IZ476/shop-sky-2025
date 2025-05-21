const API_BASE_URL = "http://localhost:300/api";

export async function fetchAllCategories() {
    const response = fetch(`${API_BASE_URL}/categories`)
    const data = (await response).json();
    return data;
}