import axios from 'axios';

const axiosClient = axios.create({
	baseURL:
		'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2FData%2FBoutique_products.json?alt=media&token=5263902f-110e-4b62-ad30-9211ec0e6bb4',
});

export default axiosClient;
