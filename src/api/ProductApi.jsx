import axiosClient from './axios';

const ProductAPI = {
	getAPI: () => {
		return axiosClient.get();
	},
};

export default ProductAPI;
