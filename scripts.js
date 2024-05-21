const form = document.querySelector('.form');
const errorToast = document.getElementById('errorToast');
const successToast = document.getElementById('successToast');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitBtn');

const verifyEmailAddress = async (email) => {
	const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;

	const result = regex.test(email);

	return result;
};

const handleNewsletterSignUpSubmit = async (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);

	if (!data.email) {
		errorToast.className = 'error';
		emailInput.className = 'errorEmail';
		return;
	}

	const verifiedEmail = await verifyEmailAddress(data.email);

	if (!verifiedEmail) {
		errorToast.className = 'error';
		emailInput.className = 'errorEmail';
		return;
	} else {
		errorToast.className = 'hidden';
		emailInput.className = '';
		successToast.className = 'success';
	}
};

form.addEventListener('submit', handleNewsletterSignUpSubmit);
