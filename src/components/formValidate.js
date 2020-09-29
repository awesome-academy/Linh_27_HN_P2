export const emailValidate = (email) => {
	const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return regEmail.test(email);
};

export const passwordValidate = (password) => {
	const regPass = /^(?=[\w]).{6,}$/gm;
	return regPass.test(password);
};

export const repasswordValidate = (password, repassword) => {
	return password === repassword;
};

export const checkAllTrue = (obj) => {
	for (var o in obj) if (!obj[o]) return false;
	return true;
}
