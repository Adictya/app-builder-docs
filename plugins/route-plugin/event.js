import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  let event = new Event('onRouteUpdated');
  return {
    onRouteUpdate({ location }) {
      document.dispatchEvent(event);
      const id = location.hash;
      const ele = document.querySelector(`${id}-btn`);
      if (ele) {
        ele.classList.contains('collapsed') && ele.click();
      }
    }
  }
})();
