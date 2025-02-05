export default function detectDevice (screenWidth) {
  // console.log(screenWidth, "screenwidth")
    const userAgent = navigator.userAgent;
    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'mobile';
    } else if(/iPad|Tablet|Silk/i.test(userAgent)){
      console.log(userAgent, "the agent")
      return 'tablet';
    }else {
    return 'desktop';
    }
  }