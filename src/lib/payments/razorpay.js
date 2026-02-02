const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const initiatePayment = async ({ 
    amount, 
    currency = 'INR', 
    name = 'Tonk Wale', 
    description = 'Order Payment', 
    user, 
    onSuccess, 
    onFailure 
}) => {
    
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        if(onFailure) onFailure('SDK_LOAD_FAILED');
        return;
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    const secret = import.meta.env.VITE_RAZORPAY_KEY_SECRET; // NOTE: Never use this in client-side code directly for verification!
    
    if(!key) {
        console.error("VITE_RAZORPAY_KEY_ID is missing in .env");
        alert("Payment configuration missing.");
        return;
    }

    // Amount is expected in smallest currency unit (paise for INR)
    const amountInPaise = Math.round(amount * 100);

    const options = {
        key: key, 
        amount: amountInPaise, 
        currency: currency,
        name: name,
        description: description,
        image: '/vite.svg', // You might want to use a real logo URL
        handler: function (response) {
            // Success callback
            // response.razorpay_payment_id
            // response.razorpay_order_id
            // response.razorpay_signature
            if (onSuccess) onSuccess(response);
        },
        prefill: {
            name: user?.name || '',
            email: user?.email || '',
            contact: user?.phone || ''
        },
        theme: {
            color: '#3B82F6' // Primary blue color
        }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', function (response){
        console.error(response.error);
        if(onFailure) onFailure(response.error);
    });
    
    paymentObject.open();
};
