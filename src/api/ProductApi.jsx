import axiosClient from './axiosClient';

const ProductAPI = {
	getAPI: () => {
		return axiosClient.get();
	},
};

export default ProductAPI;
