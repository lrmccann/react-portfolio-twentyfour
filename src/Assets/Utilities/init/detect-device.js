export default function detectDevice (screenWidth) {
  // console.log(screenWidth, "screenwidth")
    const userAgent = navigator.userAgent;
    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || /iPad|Tablet|Silk/i.test(userAgent)) {
    return 'mobile';
    } else {
    return 'desktop';
    }
  }