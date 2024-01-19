// 3PA XSS test
try {
    const details = navigator.acquisitionInfoProvider.getDetails();
    console.log('API call successful:', details);
} catch (error) {
    console.error('API call failed:', error);
}
