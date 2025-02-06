export default async function detectDevice (screenWidth) {

  function getUserAgentDeviceType() {
    const userAgent = navigator.userAgent;
    const lowerCaseUserAgent = userAgent.toLowerCase(); // Convert to lowercase once
  
    if (
      lowerCaseUserAgent.includes("mobile") ||
      lowerCaseUserAgent.includes("android") ||
      lowerCaseUserAgent.includes("webos") ||
      lowerCaseUserAgent.includes("iphone") ||
      lowerCaseUserAgent.includes("ipad") || // ipad check is moved to mobile/tablet check
      lowerCaseUserAgent.includes("ipod") ||
      lowerCaseUserAgent.includes("blackberry") ||
      lowerCaseUserAgent.includes("iemobile") ||
      lowerCaseUserAgent.includes("opera mini")
    ) {
      if(lowerCaseUserAgent.includes("ipad") || lowerCaseUserAgent.includes("tablet") || (lowerCaseUserAgent.includes("android") && !lowerCaseUserAgent.includes("mobile"))){ //Added ipad check to filter out android tablets
        return 'tablet';
      }
      return 'mobile';
    } else {
      return 'desktop';
    }
  }

  if (navigator.userAgentData) {
    const userAgentData = await navigator.userAgentData.getHighEntropyValues(["platform", "mobile"]);

    if (userAgentData.mobile) {
      return 'mobile';
    }

    if (userAgentData.platform.toLowerCase().includes("ipad") || userAgentData.platform.toLowerCase().includes("tablet") || userAgentData.platform.toLowerCase().includes("android") && !userAgentData.mobile) { //Added android check to filter out android tablets
      return 'tablet';
    }

    return 'desktop';
  } else {
    // Fallback to userAgent string parsing for older browsers
    return getUserAgentDeviceType();
  }
  }